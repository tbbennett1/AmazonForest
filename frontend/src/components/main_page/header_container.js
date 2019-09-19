import { connect } from 'react-redux';

import Header from './header';

const mapStateToProps = (state) => {
    let itemList
    if (state.entities.items) {
        itemList = Object.keys((state.entities.items)).map(id => state.entities.items[id])
    }
    return{
        currentUser: state.session.user,
        items: itemList
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);