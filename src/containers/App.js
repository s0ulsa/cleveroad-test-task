import { connect } from "react-redux";
import App from "../components/App/App";
import { bindActionCreators } from "redux";
import { setLogin } from "../actions/users";

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            setLogin: setLogin,
        },
        dispatch
    );

export default connect(null, mapDispatchToProps)(App);
