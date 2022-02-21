import React from 'react'

function ProductsOfTheWeek(props) {
  return (
    <div>

        <img
      src={`../assets/${props.productImage}`}
      className="product-card-image"
      alt="product_picture"
           />
    <div className="card-container">
    <div className="product-card-text ">
    <h1 className="product-title">
            {props.productTitle}
      </h1>
           <span className="price">
              {props.price}
           </span>
           </div>

      </div>         

    </div>
  )
}

export default ProductsOfTheWeek