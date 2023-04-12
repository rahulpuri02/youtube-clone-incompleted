import { createContext, useState, useEffect} from "react";
import { fetchDataFromAPI } from "../utils/api";


export const Context = createContext();

export const AppContext = (props) => {
 
    const[loading, setLoading] = useState(false);
    const[selectedCategories, setSelectedCategories] = useState("new");
    const[mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
       fetchSelectedCategories(selectedCategories) 
    }, []);

    const fetchSelectedCategories = (query) => {
        setLoading(true)
        fetchDataFromAPI(`search/?q=${query}`).then(({contents}) => {
            console.log(contents)
            setSelectedCategories(contents)
            setLoading(false);
        })
    }

    return (
        <Context.Provider value={{
            loading,
            setLoading,
            selectedCategories,
            setSelectedCategories,
            mobileMenu,
            setMobileMenu,
        }}>
            {props.children}
        </Context.Provider>
    )
}