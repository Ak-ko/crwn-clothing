import { createContext, useState, useEffect } from "react";

// helper function
const addCartItem = (cartItems, productToAdd) => {
    // first find the product
    const existingProduct = cartItems.find((cartItem) => cartItem.id === productToAdd.id);// give a new array

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

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingProduct = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    if(existingProduct.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id )
    }

    return cartItems.map((item) => item.id === cartItemToRemove.id ? 
        {...item, quantity : item.quantity - 1}
        :
        item
        )
};

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id )


export const CartContext = createContext({
    isDropdownOpen  : false,
    setDropdownOpen : () => {},
    cartItems : [],
    addItemToCart : () => {},    
    removeItemFromcart: () => {},
    clearItemFromCart : () => {},
    cartCount : 0,
    totalPrice : 0,
})

export const CartContextProvider = ({children}) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])    
    const [cartCount, setCartCount] = useState(0)
    const [totalPrice, settotalPrice] = useState(0)

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromcart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity , 0);
        setCartCount(newCartCount);
    }, [cartItems])

    useEffect(() => {
        const newTotalPrice = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price) , 0);
        settotalPrice(newTotalPrice);
    }, [cartItems])

    const value = {
        isDropdownOpen,
        setDropdownOpen,

        cartItems,

        addItemToCart,
        removeItemFromcart,
        clearItemFromCart,

        cartCount,        

        totalPrice,
    }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}