import React, {useContext, useEffect, useState} from 'react';
import Select from "../common/Select/Select";
import {AlertContext, ERROR_TYPE} from "../../contexts/alertContext";
import {API} from "../../DAL/api";

function LicensesSelect({selectLicenseType, handlerChange}) {

    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    const {showAlert} = useContext(AlertContext);

    useEffect(async () => {

        setIsLoading(true);
        try {
            const result = await API.getLicenses();
            setOptions(result.map(({key, name}) => ({value: key, label: name})))
        } catch (err) {
            showAlert(err, ERROR_TYPE)
        } finally {
            setIsLoading(false);
        }

    },
        [])

    return (
        <Select placeholder={"Все лицензии"}
                value={selectLicenseType}
                options={options}
                handlerChange={handlerChange}
                disbled={isLoading} />
    );
}

export default LicensesSelect;
