import { connect } from 'react-redux';
// import {fetchItems} from '../../actions/item_actions';

import Featured from './featured';

const mapStateToProps = (state) => {
    // let items = Object.values(state.items);

    return{
        // items: items
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        // fetchItems: () => dispatch(fetchItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Featured);