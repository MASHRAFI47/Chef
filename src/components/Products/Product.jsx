import React from 'react'

const Product = (props) => {
    const {titleText, img} = props;
  return (
    <div key={props.id}>
        {/* <img src={require('../images/' +
        img +
        '.png')} alt="" /> */}
        <img src={img} alt="" />
        <p>{titleText}</p>
    </div>
  )
}

export default Product