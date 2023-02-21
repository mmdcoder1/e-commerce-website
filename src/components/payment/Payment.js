import React from 'react';
import styles from './payment.module.css';
import payIcon from '../../images/payment.png';

const Payment = ({ show, click }) => {
    return (
       <>
           {
            show && <>
                    <div className={styles.overlay}></div>
                    <div className={styles.container}>
                    <img className={styles.paymentImage} src={payIcon} alt='پرداخت'/>
                        <div>
                            <h2 className={styles.paymentText}>پرداخت شما با موفقیت انجام شد!</h2>
                            <button onClick={click} className={styles.btn}>باشه</button>
                        </div>  
                    </div>
                </>
           }
       </>
    );
};

export default Payment;