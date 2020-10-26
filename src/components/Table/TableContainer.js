import React, {useContext, useEffect, useState} from 'react';
import Table from "./Table";
import {API} from "../../DAL/api";
import {AlertContext, ERROR_TYPE} from "../../contexts/alertContext";
import useDebounce from "../../hooks/useDebounce";

const SEARCH_PARAM = 'SEARCH_PARAM';
const LICENSE_PARAM = 'LICENSE_PARAM';

function TableContainer() {

    const [isLoading, setIsLoading] = useState(false);
    const [pageNum, setPageNum] = useState(1);
    const [dataFromGithub, setDataFromGithub] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectLicenseType, setSelectLicenseType] = useState('');

    const debouncedSearchQuery = useDebounce(searchQuery, 700);

    const {showAlert} = useContext(AlertContext);

    const getRepo = async (pageNum = 1) => {

        setIsLoading(true);
        try {
            const result = await API.getRepo(debouncedSearchQuery, selectLicenseType, pageNum);
            setDataFromGithub(result);
            setPageNum(pageNum);
        } catch (err) {
            showAlert(err, ERROR_TYPE)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(getRepo, [debouncedSearchQuery, selectLicenseType]);

    const setNewParamForQuery = (typeParam, value) => {

        switch (typeParam) {
            case SEARCH_PARAM:
                setSearchQuery(value);
                break;
            case LICENSE_PARAM:
                setSelectLicenseType(value);
                break;
            default:
                return;
        }
    }

    return (
        <Table
            isLoading={isLoading}
            pageCurrent={pageNum}
            tableData={dataFromGithub}
            searchQuery={searchQuery}
            selectLicenseType={selectLicenseType}
            setPage={getRepo}
            handlerSelectLicenseType={(type) => setNewParamForQuery(LICENSE_PARAM, type)}
            handlerSearchQueryInput={(query) => setNewParamForQuery(SEARCH_PARAM, query)}
        />
    );
}

export default TableContainer;
