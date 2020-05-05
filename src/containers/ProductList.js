import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProducts, setEdit } from "../actions/products";
import ProductList from "../components/ProductList";

const mapStateToProps = (state) => ({
    products: state.products.data,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getProducts: getProducts,
            setEdit: setEdit,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
