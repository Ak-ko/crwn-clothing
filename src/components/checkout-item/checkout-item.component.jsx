import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../context/cart.context';

const CheckoutItem = ({cartItem}) => { 
    const {name, imageUrl, quantity, price} = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemFromcart } = useContext(CartContext);

    const clearCart = () => clearItemFromCart(cartItem)
    const addingToCart = () => addItemToCart(cartItem);
    const removingFromCart = () => removeItemFromcart(cartItem);
    return(
        <div className='checkout-item-container'>
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className="arrow" onClick={removingFromCart}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addingToCart}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className="remove-button" onClick={clearCart}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;