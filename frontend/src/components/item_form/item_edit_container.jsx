import React from 'react'
import { connect } from 'react-redux';
import { editItem, fetchItem, createItem } from '../../actions/item_actions';
import ItemForm from './item_form';

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.entities.items[ownProps.match.params.id],
    formType: "edit",
    currentUser: state.session.user
  }
}

const mapDispatchToProps = dispatch => ({
  fetchItem: id => dispatch(fetchItem(id)),
  editItem: (item, id) => dispatch(editItem(item, id))
})

class EditItemForm extends React.Component {
  componentDidMount() {
    this.props.fetchItem(this.props.itemId)
  }

  render() {
    if(!this.props.item){
      return (
        <div></div>
      )
    }
    return (
      <ItemForm
        item={this.props.item}
        editItem={this.props.editItem}
        currentUser={this.props.currentUser}
        formType={this.props.formType}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditItemForm)