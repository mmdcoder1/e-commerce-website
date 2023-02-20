import { useEffect } from 'react';

//styles
import styles from './products.module.css';

//icons
import { Link } from 'react-router-dom';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, search_product } from '../../../redux/reducers/productsSlice';

//converter
import PN from 'persian-number';

//images
import NoResultImage from '../../../images/no-result.png';

const Products = () => {
    const { loading, products, filterd_products, search_mode, error } = useSelector(state => state.productsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(fetchProducts())
    }, [])

    
    const noResultComponent = <div className={styles.noResult}>
                                  <img className={styles.noResultImg} src={NoResultImage} />
                                  <h3 className={styles.noResultTitle}>متاسفانه کالایی که دنبالش بودید یافت نشد!</h3>
                              </div>

    const loadData = () => {
        if (loading) return <span className="loader"></span>
        else if (error.message)  return <div>Error</div>
        else if(products.result) {
            let products_data;
            if(search_mode) products_data = filterd_products.result;
            else products_data = products.result;

            if(products_data.length === 0) return noResultComponent;
            if(products_data){
               return <main className={styles.products}>
                    { products_data.map(product => {
                        return <div key={product.id} className={styles.productContainer}>
                                    <Link to={product.id.toString()}>
                                        <div className={styles.product}>
                    
                                            <div className={styles.productCover}>
                                                <img className={styles.productImage} src={product.images.main} alt={product.brand.title_fa} />
                                            </div>
                    
                                            <div className={styles.productDetails}>
                                                <h5 className={styles.productName}>{string_cutter(product.title_fa)}</h5>
                                                <h4 className={styles.productPrice}>{PN.convertEnToPe(PN.sliceNumber(product.price.selling_price / 10))} تومان</h4>
                                            </div>
                    
                                        </div>
                                    </Link>
                                </div>
                    })}
                </main>
            }
        }
    }


    const string_cutter = (value) => {
        let returnValue = value;
        if(value.length > 70) returnValue = value.substring(0, 70) + "...";
        return returnValue;
    }
    
    return loadData();
};

export default Products;