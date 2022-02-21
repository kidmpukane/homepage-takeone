import React from 'react'

function ProductCard(props) {
  return (
    <div className="product-cards">
      
      <img
      src={`../assets/${props.productImage}`}
      className="product-card-image"
      alt="product_picture"
           />
    <div className="card-container">
      
    <img 
            className="profile-picture"
            src={`../assets/${props.profilePicture}`} 
            alt="profile_picture"
            />
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

export default ProductCard