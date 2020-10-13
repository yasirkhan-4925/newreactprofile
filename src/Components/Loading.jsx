import React from 'react'

import Loader from 'react-loader-spinner'
 export default class Loading extends React.Component {
  //other logic
    render() {
     return(
      <Loader
         type="TailSpin"
         color="#ee5253"
         height={100}
         width={100}
         timeout={10000} //3 secs
         className="loader"
 
      />
     );
    }
 }


