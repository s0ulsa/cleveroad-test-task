import { bindActionCreators } from "redux";
import { createProduct } from "../actions/products";
import { connect } from "react-redux";
import ProductCreator from "../components/ProductCreator";

const mapStateToProps = (state) => ({
    isCreating: state.products.isCreating,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            createProduct: createProduct,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(ProductCreator);
