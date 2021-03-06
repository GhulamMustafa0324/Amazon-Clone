import React from 'react'
import '../css/payment.css'
import { useStateValue } from '../config/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>
    Checkout {<Link to='/checkout'>{basket?.length} items</Link>}
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p> {user?.email} </p>
                        <p>123 React Lane</p>
                        <p>Karachi, Pakistan</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review item and delivery </h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image} />
                        ))}
                    </div>

                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Payment
