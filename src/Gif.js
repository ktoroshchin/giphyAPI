import React from 'react';


const SingleGif = (props) => {
return props.images.map(img => (<img src={img}/>))
}

export default SingleGif;