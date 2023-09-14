import React from 'react';


const Image = (props) => {
  return (
    <div className='ima'>
      <img src={props.images} alt='a flower' className='girl'></img>
    </div>
  )
}

export default Image;