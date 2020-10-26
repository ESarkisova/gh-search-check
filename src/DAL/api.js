import axios from 'axios';
import {getDateForQuery} from "../utils/date";
import {PAGE_SIZE} from "../constants/constants";

const client = axios.create({
    method: 'get',
    baseURL: 'https://api.github.com/',
});

const CREATED_DATE = getDateForQuery();

export const API = {

    getRepo(search, licenseType, pageNum = 1) {
        const searchParams = search ? `${search}+` : '';
        const licenseTypeParams = licenseType ? `+license:${licenseType}` : '';
        return client(`search/repositories?q=${searchParams}created:>${CREATED_DATE}+stars:>0${licenseTypeParams}&sort=stars&order=desc&page=${pageNum}&per_page=${PAGE_SIZE}`)
            .then(res => res.data)
            .catch(err => Promise.reject(err.message));
    },

    getLicenses() {
        return client('licenses')
            .then(res => res.data)
            .catch(err => Promise.reject(err.message));
    }

};
