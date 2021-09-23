import React from 'react'

function CheckoutProduct({id,title,image,price,rating}) {
    return (
        <div>
            <div className="checkoutProduct">
                <img src={image} alt="" />

                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">{title}</p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{price }</strong>
                    </p>
                    <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_,i)=>(
                    <p>🎇</p>
                    ))
                }
            </div>
            <button>Remove from the basket </button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
