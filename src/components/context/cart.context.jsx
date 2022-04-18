import { createContext, useState } from "react";

// helper function
const addCartItem = (cartItems, productToAdd) => {
    // first find the product
    const existingProduct = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    // if so, increase the quantity
    if(existingProduct){
        return cartItems.map((item) => item.id === productToAdd.id ? 
        {...item, quantity : item.quantity + 1}
        :
        item
        )
    }
    // if not found, just add new object into the array/ neww array
    return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
    isDropdownOpen  : false,
    setDropdownOpen : () => {},
    cartItems : [],
    addItemToCart : () => {}
})

export const CartContextProvider = ({children}) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {
        isDropdownOpen,
        setDropdownOpen,
        cartItems,
        addItemToCart,
    }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}