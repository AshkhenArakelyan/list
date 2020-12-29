import React from "react";
import "./ListItem.css";
import productImage from "../../assets/product.png"

const ListItem = () => {
    return (
        <div className="list-item">
            <img className="product-image" src={productImage} alt="product-image"/>
            <div className="product-info">
                <h3 className="product-title">Product name</h3>
                <p className="product-description">Lorem ipsum dolor sit amet, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                <button>Buy now</button>
            </div>
        </div>
    );
}

export default ListItem;