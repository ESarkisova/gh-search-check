import {DAY_COUNT_FOR_GET_REPO} from "../constants/constants";

export function getDateForQuery() {
    const mounthLater = new Date(Date.now() - DAY_COUNT_FOR_GET_REPO * 24 * 60 * 60);
    return `${mounthLater.getFullYear()}-${_at2symdol(mounthLater.getMonth())}-${_at2symdol(mounthLater.getDate())}`;
}

function _at2symdol(number) {
    return number < 10 ? `0${number}` : `${number}`;
}
