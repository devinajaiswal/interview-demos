import React, {useState} from 'react'
import { CircularProgress} from '@material-ui/core';
import PropTypes from "prop-types";
function Button(props){
   const[size] = useState(props.size);
   const[color] = useState(props.color);
   const[content] = useState(props.content);
   const [loading, setLoading]=useState(false);

   const clickHandeler = () => {
    setLoading(true)
    setTimeout(() => {
    setLoading(false)
    }, 2000)

  };


   return(
       <button onClick={clickHandeler} 
        
        
        style={{backgroundColor: color, fontSize: size}} disabled={loading}>
           
           {loading && <CircularProgress size={60} />}
         {loading && <span>Loading Data</span>}
          {!loading && <span>{content}</span>}
       </button>
   )





}

Button.propTypes={
  size: PropTypes.string,
  color: PropTypes.string,
  content:PropTypes.string.isRequired,
  loading:PropTypes.bool
};

export default Button;