import React from 'react';

const LikeButton = () => {
    const [liked, setLiked] = React.useState(false);
  
    const handleClick = () => {
      setLiked(!liked);
    };
    const buttonStyle = {
        backgroundColor: liked ? 'blue' : 'gray',
        color: liked ? 'white' : 'black',
        padding: '10px 20px',
    }
    
    return (
      <button style={buttonStyle} onClick={handleClick}>
        {liked ? 'Unlike' : 'Like'}
      </button>
    );
  };
  
  export default LikeButton;