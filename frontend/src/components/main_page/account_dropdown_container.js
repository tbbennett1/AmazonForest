import {connect} from 'react-redux';

import {logout} from '../../actions/session_actions';
import AccountDropdown from './account_dropdown';

const mapDispatchToProps = (dispatch) => {
    return({
        logout: () => dispatch(logout())
    })
}

export default connect(null, mapDispatchToProps)(AccountDropdown);