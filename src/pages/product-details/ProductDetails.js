import React from 'react';

//style
import styles from './product-details.module.css';

import img from "C:/Users/lemon/Documents/Downloads/headphones.png";

//icons 
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';

const productDetails = () => {
    return (
        <main className={styles.product}>
             {/* product start */}
                          
                          {/* cover start */}
                          <div className={styles.productCover}>
                              <img className={styles.productImage} src={img} />
                          </div>
                          {/* cover end */}
                          
                          {/* left col start */}
                         <div className={styles.DetailsConlumn}>
  
                             <div className={styles.productDetails}>
                                  <h4 className={styles.productName}>دگوشی موبایل اپل مدل iPhone 11 تک سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - هند</h4>
                                  <div className={styles.productInfo}>
                                      <h3>ویژگی ها</h3>
                                      <ul>
                                         <li>بلندگو: <span>دارد</span></li>
                                         <li>گارانتی: <span>پیش پرداخت دارد</span></li>
                                         <li> مموری کارت: <span>دو بخش سیم مموری دارد</span></li>
                                      </ul>
                                  </div>
                             </div>
  
                              <div className={styles.DetailsColumnBottom}>
                                  <h3 className={styles.productPrice}>۲,۲۰۰,۰۰۰ تومان</h3>
                                  <div className={styles.btns}>
                                        <button className={styles.productCountBtn}><FiPlus /></button>
                                        <span className={styles.productCountText}>۲</span>
                                        <button className={styles.productCountBtn}><FiMinus /></button>
                                      {/* <button className={styles.addToCartBtn}>افزودن به سبد</button> */}
                                  </div>
                              </div>
  
                          </div>
                        {/* left col end */}
  
                   {/* product end */}
        </main>
    );
};

export default productDetails;