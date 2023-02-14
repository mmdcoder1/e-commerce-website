import React from 'react';

//styles
import styles from './products.module.css';

//img
import img from "C:/Users/lemon/Documents/Downloads/headphones.png";

//icons
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
         <main className={styles.products}>
            <div className={styles.productContainer}>
                <div className={styles.product}>
                    <div className={styles.productCover}>
                        <img className={styles.productImage} src={img} />
                    </div>
                    <div className={styles.productDetails}>
                        <h5 className={styles.productName}>دگوشی موبایل اپل مدل iPhone 11 تک سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - هند</h5>
                        <div className={styles.productInfo}>
                            <p>لورم اپسوم در اینجاست</p>
                            <p>
                                <AiFillStar className={styles.star} />
                                <AiFillStar className={styles.star} />
                                <AiFillStar className={styles.star} />
                                <AiFillStar className={styles.star} />
                            </p>
                        </div>
                        <div className={styles.btns}>
                            <Link to="1" className={styles.viewProduct}>مشاهده</Link>
                        </div>
                    </div>
                </div>
            </div>



            <div className={styles.productContainer}>
                <div className={styles.product}>
                    <div className={styles.productCover}>
                        <img className={styles.productImage} src={img} />
                    </div>
                    <div className={styles.productDetails}>
                        <h5 className={styles.productName}>دگوشی موبایل اپل مدل iPhone 11 تک سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - هند</h5>
                        <div className={styles.productInfo}>
                            <p>لورم اپسوم در اینجاست</p>
                            <p>
                                <AiFillStar className={styles.star} />
                                <AiFillStar className={styles.star} />
                                <AiFillStar className={styles.star} />
                                <AiFillStar className={styles.star} />
                            </p>
                        </div>
                        <div className={styles.btns}>
                            <Link to="1" className={styles.viewProduct}>مشاهده</Link>
                        </div>
                    </div>
                </div>
            </div>



            <div className={styles.productContainer}>
                <div className={styles.product}>
                    <div className={styles.productCover}>
                        <img className={styles.productImage} src={img} />
                    </div>
                    <div className={styles.productDetails}>
                        <h5 className={styles.productName}>دگوشی موبایل اپل مدل iPhone 11 تک سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - هند</h5>
                        <div className={styles.productInfo}>
                            <p>لورم اپسوم در اینجاست</p>
                            <p>
                                <AiFillStar className={styles.star} />
                                <AiFillStar className={styles.star} />
                                <AiFillStar className={styles.star} />
                                <AiFillStar className={styles.star} />
                            </p>
                        </div>
                        <div className={styles.btns}>
                            <Link to="1" className={styles.viewProduct}>مشاهده</Link>
                        </div>
                    </div>
                </div>
            </div>




            <div className={styles.productContainer}>
                <div className={styles.product}>
                    <div className={styles.productCover}>
                        <img className={styles.productImage} src={img} />
                    </div>
                    <div className={styles.productDetails}>
                        <h5 className={styles.productName}>دگوشی موبایل اپل مدل iPhone 11 تک سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - هند</h5>
                        <div className={styles.productInfo}>
                            <p>لورم اپسوم در اینجاست</p>
                            <p>
                                <AiFillStar className={styles.star} />
                                <AiFillStar className={styles.star} />
                                <AiFillStar className={styles.star} />
                                <AiFillStar className={styles.star} />
                            </p>
                        </div>
                        <div className={styles.btns}>
                            <Link to="1" className={styles.viewProduct}>مشاهده</Link>
                        </div>
                    </div>
                </div>
            </div>





            <div className={styles.productContainer}>
                <div className={styles.product}>
                    <div className={styles.productCover}>
                        <img className={styles.productImage} src={img} />
                    </div>
                    <div className={styles.productDetails}>
                        <h5 className={styles.productName}>دگوشی موبایل اپل مدل iPhone 11 تک سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - هند</h5>
                        <div className={styles.productInfo}>
                            <p>لورم اپسوم در اینجاست</p>
                            <p>
                                <AiFillStar className={styles.star} />
                                <AiFillStar className={styles.star} />
                                <AiFillStar className={styles.star} />
                                <AiFillStar className={styles.star} />
                            </p>
                        </div>
                        <div className={styles.btns}>
                            <Link to="1" className={styles.viewProduct}>مشاهده</Link>
                        </div>
                    </div>
                </div>
            </div>





            <div className={styles.productContainer}>
                <div className={styles.product}>
                    <div className={styles.productCover}>
                        <img className={styles.productImage} src={img} />
                    </div>
                    <div className={styles.productDetails}>
                        <h5 className={styles.productName}>دگوشی موبایل اپل مدل iPhone 11 تک سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - هند</h5>
                        <div className={styles.productInfo}>
                            <p>لورم اپسوم در اینجاست</p>
                            <p>
                                <AiFillStar className={styles.star} />
                                <AiFillStar className={styles.star} />
                                <AiFillStar className={styles.star} />
                                <AiFillStar className={styles.star} />
                            </p>
                        </div>
                        <div className={styles.btns}>
                            <Link to="1" className={styles.viewProduct}>مشاهده</Link>
                        </div>
                    </div>
                </div>
            </div>



         </main>
    );
};

export default Products;