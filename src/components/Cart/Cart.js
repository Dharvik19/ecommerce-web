import React,{useContext} from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartCntx from '../../Store/cart-context';

const Cart = (props) => {
  const cartcntx = useContext(CartCntx);
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartcntx.items.map((item) => (
        <li><h3>Name: {item.name}</h3> <div className={classes.price}>Price:{item.price}</div> <h4>Quantity:{item.quantity}</h4></li>
      ))}
    </ul>
  );
  let amount =0;
  let totalAmount =0;
  cartcntx.items.forEach(item=>{
    amount = Number(item.quantity) * Number(item.price);
    totalAmount = totalAmount + amount;
})
  
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;