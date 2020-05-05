import React, { useState } from "react";
import "./style.scss";
import ProductForm from "../ProductForm";
import { useHistory } from "react-router-dom";
import FileInput from "../FileInput";

//не получилось подружить <input type="file"/> вместе с redux-form
//поэтому пришлось добавить отдельный компонент для выбора картинки
//получилось просто ужасно, но по другому сделать так и не смог

const ProductCreator = ({ createProduct, isCreating }) => {
    const [image, setImage] = useState(null);
    const [fileError, setFileError] = useState(null);
    let history = useHistory();

    const handleSubmit = (values) => {
        if (image === null) {
            setFileError("Required");
        }
        if (!fileError) {
            createProduct(values, image, history);
        }
    };

    const sizeChecker = (img) => {
        let reader = new FileReader();
        reader.onload = (file) => {
            var image = new Image();
            image.src = file.target.result;

            image.onload = function () {
                if (
                    this.width < 200 ||
                    this.width > 4000 ||
                    this.height < 200 ||
                    this.height > 4000
                ) {
                    setFileError(
                        "Widh and height sholud be > 200px and < 4000px"
                    );
                } else {
                    setFileError(null);
                }
            };
        };
        reader.readAsDataURL(img);
    };

    // не перекидывать при ошибке

    const handleChange = (img) => {
        sizeChecker(img);
        if (!fileError) {
            setImage(img);
        }
    };

    return (
        <div className="new-product">
            {isCreating ? (
                <span>Creating...</span>
            ) : (
                <div className="new-product__form">
                    <FileInput error={fileError} handleChange={handleChange} />
                    <ProductForm action={"Create"} onSubmit={handleSubmit} />
                </div>
            )}
        </div>
    );
};

export default ProductCreator;
