import React from 'react'
import { connect } from 'react-redux';
import { editItem, fetchItem } from '../../actions/item_actions';
import ItemForm from './item_form';

class EditItemForm extends React.Component {
  componentDidMount() {
    this.props.fetchItem(this.props.item.id)
  }

  render() {
    return (
      <ItemForm
        item={this.props.item}
        editItem={this.props.editItem}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    item: ownProps.item,
    formType: "edit"
  }
}

const mapDispatchToProps = dispatch => ({
  fetchItem: id => dispatch(fetchItem(id)),
  action: (item, id) => dispatch(editItem(item, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm)