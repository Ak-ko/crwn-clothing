import './cart-dropdown.styles.scss';
import Button from '../button/button.component';

const CartDropdown = () => (
    <div className="cart-dropdown-container">
        <div className="card-items" />
        <Button buttonType="default">GO TO CHECKOUT</Button>
    </div>
)

export default CartDropdown;