import {connect} from 'react-redux';

import {logout, login} from '../../actions/session_actions';
import AccountDropdown from './account_dropdown';

const mapDispatchToProps = (dispatch) => {
    return({
        logout: () => dispatch(logout()),
        login: user => dispatch(login(user))
    })
}

export default connect(null, mapDispatchToProps)(AccountDropdown);