import { connect } from 'react-redux';
import { fetchItems } from "../../actions/item_actions"
import MainBody from '../main_page/main_body'

const mapStateToProps = (state) => {
    return {
        items: Object.keys((state.items)).map(id => state.items[id])
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchItems: () => dispatch(fetchItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBody);