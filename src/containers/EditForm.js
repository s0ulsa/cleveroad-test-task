import { connect } from "react-redux";
import ProductForm from "../components/ProductForm";

const mapStateToProps = (state) => ({
    initialValues: state.products.edit.item,
});

export default connect(mapStateToProps, null)(ProductForm);
