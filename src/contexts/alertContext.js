import React, {useState} from 'react';

export const AlertContext = React.createContext({
    info: null,
    showAlert: () => {},
    hideAlert: () => {}
});

export const ERROR_TYPE = 'error';
export const INFO_TYPE = 'info';
const DEFAULT_TYPE = INFO_TYPE;

export default function AlertContextProvider({children}) {

    const [info, setInfo] = useState(null);

    const showAlert = (message, type = DEFAULT_TYPE) => setInfo({message, type});
    const hideAlert = () => setInfo(null);

    const contextValue = {
        info,
        showAlert,
        hideAlert,
    };

    return (
        <AlertContext.Provider value={contextValue}>
            {children}
        </AlertContext.Provider>
    );
}
