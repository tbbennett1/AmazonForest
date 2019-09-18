import React from 'react';
import Header from '../main_page/header_container';
import Footer from '../main_page/footer_one';

class ItemShow extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchItem(this.props.match.params.id)
  }

  render() {
    if(!this.props.item){
      return(
        <div><span>props not set yet</span></div>
      )
    }
    const item = this.props.item;

    return (
      <div>
        <Header />
        <div className="item-show-top">
          <div className="item-left-col">
            <img src={this.props.item.image_url}/>
          </div>
          <div className="item-center-col">
            <h1 className="item-title">{item.title}</h1>
            <h4>Price: 
              <span className="item-price"> ${item.price}.00</span>
            </h4>
            <p>{item.description}</p>
          </div>
          <div className="item-right-col">
  
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ItemShow;