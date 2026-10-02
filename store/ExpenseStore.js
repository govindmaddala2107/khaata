import { createContext, useEffect, useState } from "react";
import { readDataFromFile, saveDataToFile } from "../data/handleData";

export const ExpenseStore = createContext();

const ExpenseProvider = ({ children }) => {

    const [profile, setProfile] = useState({
        name: ""
    });



    useEffect(() => {
        const loadProfile = async () => {
            const data = await readDataFromFile("profile.json");
            if (data) {
                setProfile(data);
            }
        };

        loadProfile();
    }, []);

    return (
        <ExpenseStore.Provider value={{ profile }}>{children}</ExpenseStore.Provider>
    )
}

export default ExpenseProvider;