import { useState } from "react";

export default function useSessionStorage (key, initialValue) {
  
    const [state, setState] = useState(() => {
        const persistedStateSerialized = sessionStorage.getItem(key);
        if(persistedStateSerialized) {
            const persistedState = JSON.parse(persistedStateSerialized);
            return persistedState;
        }
        return initialValue;
    });
    const setSessionStorageState = (value) => {
        setState(value);

        sessionStorage.setItem(key, JSON.stringify(value));
    };

    return [
        state,
        setSessionStorageState,
    ];
};
