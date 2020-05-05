import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EditComponent from "../components/EditComponent";
import { updateProduct } from "../actions/products";

const mapStateToProps = (state) => ({
    product: state.products.edit,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            updateProduct: updateProduct,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(EditComponent);
