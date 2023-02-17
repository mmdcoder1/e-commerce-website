import { useState } from 'react';

//Router
import { 
    Outlet,
    Link,
    useNavigate
} from 'react-router-dom';

//react-hook-form
import { useForm } from "react-hook-form";

//icons
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosSearch } from 'react-icons/io';

//Style
import styles from './search.module.css';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { search_product } from '../../../redux/reducers/productsSlice';

//convertor
import PN from 'persian-number';

//components
import Navigation from '../../../components/navigation/Navigation';

const Search = () => {
    const { itemsCounter } = useSelector(state => state.productsReducer.cart.sums);
    const dispatch = useDispatch();
    // const navigate = useNavigate();
     
    const { register, watch, handleSubmit } = useForm();
    const onSubmit = data => null;
    let searched_value = watch('searched_value');
    
    if(searched_value != undefined){
        dispatch(search_product( { value: searched_value } ))
    }
    

    return (
        <div className={styles.container}>

           <header className={styles.header}>
               <div className={styles.searchContainer}>
                   <IoIosSearch className={styles.searchIcon} />
                   <form onSubmit={handleSubmit(onSubmit)}>
                        <input { ...register('searched_value') } className={styles.searchInput} placeholder='جستجوی محصول...' type='text' />
                   </form>
               </div>
               <Link to="cart">
                    <div className={styles.cartContainer}>
                        <p className={styles.cartTitle}>سبد خرید</p>
                        
                                <div className={styles.cartIconContainer}>
                                    <span className={styles.productsAmount}>{PN.convertEnToPe(itemsCounter)}</span>
                                    <AiOutlineShoppingCart className={styles.cartIcon}/>
                                </div>
                        
                    </div>
               </Link>
           </header>
           <Navigation />
            {/* Outlet */}
            <Outlet />
        </div>
    );
};

export default Search;
