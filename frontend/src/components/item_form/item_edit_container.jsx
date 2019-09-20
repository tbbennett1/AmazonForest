import React from 'react'
import { connect } from 'react-redux';
import { editItem, fetchItem } from '../../actions/item_actions';
import ItemForm from './item_form';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    currentUser: state.session.user,
    itemId: ownProps.match.params.id,
    formType: "edit"
  }
}

const mapDispatchToProps = dispatch => ({
  fetchItem: id => dispatch(fetchItem(id)),
  action: (item, id) => dispatch(editItem(item, id))
})

class EditItemForm extends React.Component {
  componentDidMount() {
    debugger
    this.props.fetchItem(this.props.itemId)
  }

  render() {
    debugger
    if(!this.props.item){
      debugger
      return (
        <div></div>
      )
    }
    return (
      <ItemForm
        item={this.props.item}
        editItem={this.props.editItem}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditItemForm)