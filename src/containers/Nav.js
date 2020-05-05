import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Nav from "../components/Nav";
import { logOut } from "../actions/users";

const mapStateToProps = (state) => ({
    isLoged: state.user.isLoged,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            logOut: logOut,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
