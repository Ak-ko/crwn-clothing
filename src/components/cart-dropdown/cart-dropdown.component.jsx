import { useContext } from 'react';
import { CartContext } from '../context/cart.context';

import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    return(
        <div className="cart-dropdown-container">
            <div className="card-items">
                {
                    cartItems.length === 0 ? 
                    <h2 className="empty-message">There is empty.</h2>
                    :
                    cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
                }
            </div>
            <Button buttonType="default">GO TO CHECKOUT</Button>
        </div>
    )
}
    

export default CartDropdown;