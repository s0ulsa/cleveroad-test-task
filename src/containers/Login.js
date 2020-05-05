import { connect } from "react-redux";
import Login from "../components/Login";
import { bindActionCreators } from "redux";
import { logIn, setLogin } from "../actions/users";

const mapStateToProps = (state) => ({
    isLoged: state.user.isLoged,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            logIn: logIn,
            setLogin: setLogin,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// mapDispatc => {
//     logIn,
// }
