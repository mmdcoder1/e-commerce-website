import React from 'react';

//Router
import { 
    Outlet,
    Link
} from 'react-router-dom';

//icons
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosSearch } from 'react-icons/io';

//Style
import styles from './search.module.css';

const Search = () => {
    return (
        <div className={styles.container}>

           <header className={styles.header}>
               <div className={styles.searchContainer}>
                   <IoIosSearch className={styles.searchIcon} />
                   <form>
                        <input className={styles.searchInput} placeholder='جستجوی محصول...' type='text' />
                   </form>
               </div>
               <Link to="cart">
                    <div className={styles.cartContainer}>
                        <p className={styles.cartTitle}>سبد خرید</p>
                        
                                <div className={styles.cartIconContainer}>
                                    <span className={styles.productsAmount}>۰</span>
                                    <AiOutlineShoppingCart className={styles.cartIcon}/>
                                </div>
                        
                    </div>
               </Link>
           </header>

            {/* Outlet */}
            <Outlet />
        </div>
    );
};

export default Search;