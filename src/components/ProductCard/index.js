import React, { useState, useEffect } from "react";
import "./style.scss";
import { storage } from "../../firebase";
import { calculatePrice, isDiscountActive } from "../../actions/products";

const ProductCard = (props) => {
    const [image, setImage] = useState();

    const { setEdit, item } = props;
    const { title, description, price, discount, date, id } = item;

    useEffect(() => {
        storage
            .ref()
            .child(`images/${id}`)
            .getDownloadURL()
            .then((url) => {
                setImage(url);
            });
    }, []);

    return (
        <div className="product">
            <div className="image-box">
                {image ? <img src={image} alt="Product Image" /> : "Loading..."}
            </div>
            <div className="product__information">
                <div className="description">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="price-info">
                    <p className="price">{`Цена ${price} $`}</p>
                    {discount && isDiscountActive && (
                        <p className="discount">{`Цена со скидкой: ${calculatePrice(
                            price,
                            discount
                        )} $`}</p>
                    )}
                </div>
            </div>
            <button className="edit-btn" onClick={setEdit}>
                Edit
            </button>
        </div>
    );
};

export default ProductCard;
