import React from 'react';

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
        <div><h1>props not set yet</h1></div>
      )
    }
    return (
      <div className="item-show-top">
        <div className="item-left-col">
          <h1>testy mc testers</h1>
        </div>
        <div className="item-center-col">

        </div>
        <div className="item-right-col">

        </div>
      </div>
    )
  }
}

export default ItemShow;