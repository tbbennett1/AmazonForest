import React from 'react'
import { withRouter, Link } from 'react-router-dom'

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
    const formData = new FormData();

    Object.keys(this.state).forEach(key => {
      formData.append(key, this.state[key])
    })

    if (this.props.formType === 'edit') {
      this.props.action(formData, this.state._id)
        .then(res => {
          this.props.fetchItem(this.state._id)
        })
    } else {
      this.props.action(formData)
        .then((res) => {
          if (res.type === "RECEIVE_ITEM" && this.props.formType === 'new') {
            this.props.history.push(`/items/${res.item._id}`);
          }
        })

    }

  }

  render() {
    debugger
    return (
      <div className="create-item-top">
        <div className="form-container">
          <div className="side-bar-info-container">
            <div className="create-a-listing-header">
              <h3>Title</h3>
              <p>
                Please give your item a title
              </p>
            </div>
            <div className="create-a-listing-header">
              <h1>Item Description</h1>
              <p>
                Describe your product
              </p>
            </div>
            <div className="create-a-listing-header">
              <h3>Price</h3>
              <p>Item price</p>
            </div>
            <div className="create-a-listing-header">
              <h3>Description</h3>
              <p>Tell your buyers what to expect</p>
            </div>
            <div className="create-a-listing-header">
              <h3>Category</h3>
              <p>
                Please select the closest category related to your product.
              </p>
            </div>
            <div className="create-a-listing-header">
              <h1>Image</h1>
              <p>
                Add an image url
              </p>
            </div>
          </div>
          <form
            className="create-or-destroy"
            onSubmit={this.handleSubmit}
          >
            <label id="top-label">title</label>
            <input
              type="text"
              value={this.state.title}
              update={this.update("title")}
              className="form-input"
            />
            <label>price</label>
            <input
              type="number"
              value={this.state.price}
              update={this.update("price")}
              className="form-input"
            />
            <label>description</label>
            <textarea
              value={this.state.description}
              update={this.update("description")}
              className="form-input-text-area"
            />
            <label>image_url</label>
            <textarea
              value={this.state.image_url}
              update={this.update("image_url")}
              className="form-input-text-area"
            />
            <label>category</label>
            <select className="select-create"
              name="category"
              value={this.state.category}
              update={this.update("category")}
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
export default withRouter(ItemForm)