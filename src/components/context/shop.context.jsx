import { createContext,useState, useEfect } from "react"
import PRODUCTS from '../../shop-data.json';

export const ShopContext = createContext({
    products : [], // to signify what we want
})

export const ShopContextProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS)
    const value = {products}
    return(
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    )
}  
