import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { CartContext } from '../context/cart.context';
import { useContext } from 'react';


const CartIcon = () => {
    const {isDropdownOpen, setDropdownOpen } = useContext(CartContext);
    const toggleIsDropdownOpen = () => setDropdownOpen(!isDropdownOpen); 
    return(
        <div className='cart-icon-container' onClick={toggleIsDropdownOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;