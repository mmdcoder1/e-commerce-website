import React from 'react';

//styles
import styles from './cart.module.css';

//icons 
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';
import { FiTrash } from 'react-icons/fi';

//redux
import { useSelector, useDispatch } from 'react-redux';
import {  checkout, remove_item, increase, decrease } from '../../redux/reducers/productsSlice';
 
//convertor
import PN from 'persian-number';

//images
import EMPTY_CART from '../../images/empty-cart.svg';

//router
import { Link } from 'react-router-dom';

const Cart = () => {
    //redux functions start
      const { error, cart } = useSelector(state => state.productsReducer);
      const dispatch = useDispatch();
    //redux functions end

    const paymentFunc = () => {
        alert("پرداخت شما با موفقیت انجام شد!");
        dispatch(checkout())
    }
    
    const load_data = () => {
        if (error.message)  return <div>Error</div>;
        
        else {
         return cart.items.map(item => {
                {/* product start */}
             return <div key={item.id} className={styles.product}>
                                   
                       {/* cover start */}
                       <div className={styles.productCover}>
                           <img className={styles.productImage} src={item.image} />
                       </div>
                       {/* cover end */}
                       
                       {/* left col start */}
                       <div className={styles.productLeftColumnCotainer}>
   
                           <div className={styles.productDetails}>
                               <h4 className={styles.productName}>{item.name}</h4>
                               <div className={styles.productInfo}></div>
                           </div>
   
                           <div className={styles.productLeftColumnBottom}>
                               <h3 className={styles.productPrice}>{PN.convertEnToPe(PN.sliceNumber(item.price / 10))} تومان</h3>
                               <div className={styles.btns}>
                                   <button onClick={() => dispatch(increase(item))} className={styles.productCountBtn}><FiPlus /></button>
                                   <span className={styles.productCountText}>{PN.convertEnToPe(PN.sliceNumber(item.quantity))}</span>
                                   { (item.quantity === 1) ? <button onClick={() => dispatch(remove_item(item))} className={styles.productCountBtn}><FiTrash /></button> : <button onClick={() => dispatch(decrease(item))} className={styles.productCountBtn}><FiMinus /></button> }
                               </div>
                           </div>
   
                       </div>
                   {/* left col end */}
   
               </div>
               {/* product end */}
           })
        }
    }

    return (
        <main className={styles.container}>
            { cart.items.length ?
              <>
                 <div className={styles.productsContainer}> 
                    { load_data() }
                </div>

                <div className={styles.paymentContainer}> 
                    <div>
                        <p className={styles.paymentText}><span>تعداد محصولات:</span><span className={styles.paymentValue}>{PN.convertEnToPe(cart.sums.itemsCounter)}</span></p>
                        <p className={styles.paymentText}><span>جمع سبد خرید:</span><span className={styles.paymentValue}>{PN.convertEnToPe(PN.sliceNumber(cart.sums.total / 10))} تومان</span></p>
                    </div>
                    <button onClick={paymentFunc} className={styles.payBtn}>پرداخت</button>
                </div>
              </> :
              <div className={styles.emptyCart}>  
                  <div className={styles.emptyCartInside}>
                     <img className={styles.emptyCartImage} src={EMPTY_CART} alt="empty cart" />
                     <h3>سبد خرید شما خالی است!</h3>
                     <Link className={styles.goToHomeButton} to="/">برو به خانه</Link>
                  </div>
              </div>
            }
        </main>
    );
};

export default Cart;