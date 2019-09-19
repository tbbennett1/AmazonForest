import { connect } from 'react-redux';

import Header from './header';

const mapStateToProps = ({ session, items }) => {
    return{
        currentUser: session.user,
        items: Object.keys((items)).map(id => items[id])
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);