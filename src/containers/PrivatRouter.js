import { connect } from "react-redux";
import PrivateRoute from "../components/PrivatRoute";

const mapStateToProps = (state) => ({
    isLoged: state.user.isLoged,
});

export default connect(mapStateToProps, null)(PrivateRoute);
