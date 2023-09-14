import React, { Component } from 'react';


class Description extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='des'>
        <p>{this.props.descriptions}</p>
      </div>
    )
  }
};


export default Description;
