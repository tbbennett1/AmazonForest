import React from 'react';
import { withRouter } from 'react-router-dom';

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
      image_url: this.state.image_url,
      user: this.props.currentUser.name
    }

    if (this.props.formType === 'edit') {
      this.props.editItem(new_item, this.state._id)
        .then(res => {
          this.props.history.push(`/items/${res.item.item._id}`);
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
    if(this.props.formType === 'edit' && !this.state){
      return(
        <div></div>
      )
    }
    return (
      <div className="create-item-top">
        <h1>Hello {this.props.currentUser.name}, create your new product</h1>
        <div className="form-container">
          <form
            className="create-item-form"
            onSubmit={this.handleSubmit}
          >
            <div className="form-label">
              <label>Product Title </label>
              <input
                type="text"
                value={this.state.title}
                onChange={this.update('title')}
                className="form-input"
              />
            </div>
            <div className="form-label">
              <label>Price</label>
              <div className="dollar">$</div>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={this.state.price}
                onChange={this.update('price')}
                className="form-input-price"
              />
            </div>
            <div className="form-label">
              <label>Description</label>
              <textarea
                value={this.state.description}
                onChange={this.update('description')}
                className="form-input"
              />
            </div>
            <div className="form-label">
              <label>Image URL </label>
              <input
                type="text"
                value={this.state.image_url}
                onChange={this.update("image_url")}
                className="form-input"
              />
            </div>
            <div className="form-label">
              <label>Category </label>
              <select className="form-input"
                name="Category"
                value={this.state.category}
                onChange={this.update("category")}
              >
                <option value="pets">
                  Pets
                  </option>
                <option value="food">
                  Food
                  </option>
                <option value="toys">
                  Toys
                  </option>
                <option value="accessories">
                  Accessories
                  </option>
              </select>
            </div>
            <div className="form-label form-label-submit">
              <input
                id="item-submit"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(ItemForm);