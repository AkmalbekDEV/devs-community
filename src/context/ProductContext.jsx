import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
    const [state, setState] = useState([])

    const getData = async () => {
        try {
            const response = await axios.get('https://cdfd127da4bfbbd6.mokky.dev/products')
            setState(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <ProductContext.Provider value={{state}}>{children}</ProductContext.Provider>
    )
}

export default ProductProvider