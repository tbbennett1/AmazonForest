import { connect } from 'react-redux';
import { createItem, fetchItem } from '../../actions/item_actions';
import ItemForm from './item_form.jsx';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    item: {
      title: "",
      description: "",
      price: 0,
      image_url: "",
      sellerId: "",
      category: "category1",
      user: ""
    },
    formType: "new"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createItem: data => dispatch(createItem(data)),
    fetchItem: (id) => dispatch(fetchItem(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);