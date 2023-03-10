import { useEffect } from 'react';

//context


//style
import styles from './product-details.module.css';

//router
import { useParams } from 'react-router-dom';

//icons 
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';
import { FiTrash } from 'react-icons/fi';


//redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchEachProduct } from '../../redux/reducers/singleProductSlice';
import { add_item, remove_item, increase, decrease } from '../../redux/reducers/productsSlice';

//router
import { Link } from 'react-router-dom';

//converter
import PN from 'persian-number';

//images
import notFoundImage from '../../images/404-page.png';

const ProductDetails = () => {
    const url_parameters = useParams();
    const url_parametersID = url_parameters.id;
    const dispatch = useDispatch();
    const { loading, product, error } = useSelector(state => state.singleProductReducer);
    const { cart } = useSelector(state => state.productsReducer)
    

    const load_attributes = (attributes) => {
        return attributes.map((attribute, index) => {
            return <li style={{ marginTop: "5px" }} key={index}><span className={styles.atribTitle}>{attribute.title}:</span> <span>{attribute.values[0]}</span></li>
        })
    }

    useEffect(() => {
        dispatch(fetchEachProduct(url_parametersID))
    }, [dispatch])

     
    //components
    const NotFoundComponent = <div className={styles.notFoundCotainer}>
                                <img className={styles.notFoundImage} src={notFoundImage} alt='404' />
                                <h3>متاسفانه صفحه ای که دنبالش بودید یافت نشد!</h3>
                                <Link className={styles.addToCartBtn} to="/">برو به خانه</Link>
                             </div>;
    const LoadingComponent = <div className='loader'></div>;
    //components

    if (loading) return LoadingComponent;
    if(error) return NotFoundComponent;
    if(product === undefined) return NotFoundComponent;
    if(!product.id) return NotFoundComponent;

    //dispatch functions start

    let PRODUCT_DATA = { id: url_parametersID ,name: product.title_fa, image: product.images.main , price: product.price.selling_price };
    const ADD_ITEM_FUNCTION = () => dispatch(add_item(PRODUCT_DATA));
    const REMOVE_FUNCTION = () => dispatch(remove_item(PRODUCT_DATA));
    const INCREASE_FUNCTION = () => dispatch(increase(PRODUCT_DATA));
    const DECREASE_FUNCTION = () => dispatch(decrease(PRODUCT_DATA));

    //dispatch functions end


    let productID = cart.items.findIndex(item => item.id === url_parametersID);
    //load buttons functions end

    
    return <main className={styles.product}>
                    {/* product start */}

                                {/* cover start */}
                                <div className={styles.productCover}>
                                    <img className={styles.productImage} src={product.images.main} />
                                </div>
                                {/* cover end */}
                                
                                {/* left col start */}
                                <div className={styles.DetailsConlumn}>

                                    <div className={styles.productDetails}>
                                        <h4 className={styles.productName}>{product.title_fa}</h4>    
                                        <div className={styles.productInfo}>
                                            <h3 style={{ color: "var(--green)" }}>ویژگی ها</h3>
                                            <ul>{ load_attributes(product.review.attributes) }</ul>
                                        </div>
                                    </div>

                                    <div className={styles.DetailsColumnBottom}>
                                        <h3 className={styles.productPrice}>{PN.convertEnToPe(PN.sliceNumber(product.price.selling_price / 10))} تومان</h3>
                                        <div className={styles.btns}>
                                           {
                                              (productID != -1) ? <>
                                                    <button onClick={INCREASE_FUNCTION} className={styles.productCountBtn}><FiPlus /></button>
                                                    <span className={styles.productCountText}>{PN.convertEnToPe(cart.items[productID].quantity)}</span>
                                                    { (cart.items[productID].quantity === 1) ?  <button onClick={REMOVE_FUNCTION} className={styles.productCountBtn}><FiTrash /></button> : <button  onClick={DECREASE_FUNCTION} className={styles.productCountBtn}><FiMinus /></button> }
                                                   </> :
                                              <button onClick={ADD_ITEM_FUNCTION} className={styles.addToCartBtn}>افزودن به سبد</button>
                                                   
                                            }
                                        </div>
                                    </div>

                                </div>
                                {/* left col end */}

                        {/* product end */}
                </main>
};



export default ProductDetails;