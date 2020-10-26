import React from 'react';
import cn from './Table.module.sass';
import Input from "../common/Input/Input";
import LicensesSelect from "../LicensesSelect/LicensesSelect";
import Pagination from "../common/Pagination/Pagination";

function TableItem({name, description, license, html_url, stargazers_count}) {

    return (
        <div className={cn.table__row}>
            <div>
                <span>Имя</span>
                <span className={cn.table__content}>{name}</span>
            </div>
            <div>
                <span>Описание</span>
                <span className={cn.table__content}>{description}</span>
            </div>
            <div>
                <span>Лицензия</span>
                <span className={cn.table__content}>{license?.name}</span>
            </div>
            <div className={'text-center'}>
                <span>Сылка</span>
                <a className={cn.table__content} href={html_url} rel={'noopener noreferrer'} target={'_blank'}>ссылка</a>
            </div>
            <div className={'text-center'}>
                <span>Популярность</span>
                <span className={cn.table__content}>{stargazers_count}</span>
            </div>
    </div>)

}

function Table({ isLoading,
                pageCurrent,
                tableData,
                searchQuery,
                selectLicenseType,
                setPage,
                handlerSelectLicenseType,
                handlerSearchQueryInput }) {

    const ifDataTableExist = !isLoading && tableData;

    return (
        <div className={`${isLoading ? 'loading' : ''} ${cn.table__wrapper}`}>

            <div className={cn.table__block}>
                <div className={'flex-left'}>
                    <Input
                        value={searchQuery}
                        onChange={handlerSearchQueryInput}
                        placeholder={'Поиск...'}
                    />
                </div>
                <div className={'flex-right'}>
                    <LicensesSelect
                        value={selectLicenseType}
                        handlerChange={handlerSelectLicenseType}
                    />
                </div>
            </div>

            <div className={cn.table__block}>
                <div className={`${cn.table__row} ${cn.table__row_header}`}>
                    <div>Имя</div>
                    <div>Описание</div>
                    <div>Лицензия</div>
                    <div>Ссылка</div>
                    <div>Популярность</div>
                </div>
                {ifDataTableExist && (tableData?.total_count > 0 ?
                    tableData.items.map(repo => <TableItem key={repo.id} {...repo} />)
                    : <span className={'mt-20'}>Записи не найдены</span>)}
            </div>

            {ifDataTableExist && <Pagination
                pageCurrent={pageCurrent}
                setPage={setPage}
                totalCount={tableData?.total_count} />}

        </div>
    );
}

export default Table;
