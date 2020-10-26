import React, {useContext} from "react";
import {AlertContext} from "../../contexts/alertContext";
import cn from './ALert.module.sass';

function Alert() {

    const {info, hideAlert} = useContext(AlertContext);

    if (!info) return null;

    return (
        <div className={`${cn.alert} ${cn[info.type]}`}
             onClick={hideAlert}>
            {info.message}
        </div>
    );
}

export default Alert;
