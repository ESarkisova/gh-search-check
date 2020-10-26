import React from 'react';
import cn from './Pagination.module.sass'
import {PAGE_SIZE} from "../../../constants/constants";
import Select from "../Select/Select";

function Pagination({ pageCurrent = 1,
                    setPage,
                    totalCount = 0 }) {

    if (!totalCount) return null;

    const totalPageCount = Math.ceil(totalCount / PAGE_SIZE);
    const optionsForSelect = Array(totalPageCount)
        .fill(1)
        .map((_, index) => ({value: index + 1, label: index + 1}));

    return (
        <div className={cn.pagination__wrapper}>
            <div>Общее количество записей: <b>{totalCount}</b></div>
            <div>Количество страниц: <b>{totalPageCount}</b></div>
            <div className={cn.pagination}>Перейти на страницу: <Select
                size={'small'}
                value={pageCurrent}
                handlerChange={setPage}
                options={optionsForSelect}
                disabled={totalPageCount < 2} />
            </div>
        </div>
    );
}

export default Pagination;
