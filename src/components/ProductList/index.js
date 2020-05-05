import React, { useEffect } from "react";
import ProductCard from "../ProductCard";
import { useHistory } from "react-router-dom";
import "./style.scss";

const ProductList = ({ products, getProducts, setUrl, setEdit }) => {
    let history = useHistory();
    useEffect(() => {
        getProducts();
    }, []);

    const handleEdit = (item) => {
        setEdit(item);
        history.push("/edit");
    };

    const showCards = (data) =>
        data.map((item, index) => (
            <ProductCard
                setUrl={setUrl}
                setEdit={() => handleEdit.call(null, item)}
                item={item}
                key={index}
            />
        ));

    return (
        <div className="product-list">{products && showCards(products)}</div>
    );
};

export default ProductList;

//products.length, products.map() => line 15
