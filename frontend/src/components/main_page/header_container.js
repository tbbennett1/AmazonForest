import { connect } from 'react-redux';

import Header from './header';

const mapStateToProps = ({ session }) => {
    return{
        currentUser: session.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);