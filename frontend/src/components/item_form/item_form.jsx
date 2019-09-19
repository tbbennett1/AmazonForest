import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class ItemForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.item;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let new_item = {
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      category: this.state.category,
      image_url: this.state.image_url
    }

    if (this.props.formType === 'edit') {
      this.props.createItem(new_item, this.state._id)
        .then(res => {
          this.props.fetchItem(this.state._id)
        })
    } else {
      this.props.createItem(new_item)
        .then((res) => {
          if (res.type === "RECEIVE_ITEM" && this.props.formType === 'new') {
            this.props.history.push(`/items/${res.item._id}`);
          }
        })

    }

  }

  render() {
    // debugger
    return (
      <div className="create-item-top">
        <div className="form-container">
          <form
            className="create-or-destroy"
            onSubmit={this.handleSubmit}
          >
            <label id="top-label">title</label>
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
              className="form-input"
            />
            <label>price</label>
            <input
              type="number"
              value={this.state.price}
              onChange={this.update('price')}
              className="form-input"
            />
            <label>description</label>
            <textarea
              value={this.state.description}
              onChange={this.update('description')}
              className="form-input-text-area"
            />
            <label>image_url</label>
            <input
              type="text"
              value={this.state.image_url}
              onChange={this.update("image_url")}
              className="form-input-text-area"
            />
            <label>category</label>
            <select className="select-create"
              name="category"
              value={this.state.category}
              onChange={this.update("category")}
            >
              <option value="category1">
                Category1
                </option>
              <option value="category2">
                Category2
                </option>
              <option value="category3">
                Category3
                </option>
              <option value="category4">
                Category4
                </option>
              <option value="category5">
                Category5
              </option>
            </select>
            <input
              id="item-submit"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(ItemForm);