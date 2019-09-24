import { connect } from 'react-redux';
import { fetchItems } from "../../actions/item_actions";
import MainBody from '../main_page/main_body';


const mapStateToProps = (state) => {
    let itemList 
    if (state.entities.items){
        itemList = Object.keys((state.entities.items)).map(id => state.entities.items[id])
	}
	
    return {
        currentUser: state.session.user,
        items: itemList
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
		fetchItems: () => dispatch(fetchItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBody);