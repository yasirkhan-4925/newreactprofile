
import Card from './Card'
import MyData from './MyData'
import Loading from './Loading'
import React from 'react'


class ShownData extends React.Component{

  

    constructor(props) {
        super(props)
    
        this.state = {
             data:[],
             isloading:false
        }
    }

    componentDidMount(){

         this.setState({
             isloading:true
         })

        this.setState({
            data:MyData,
            isloading:false
            
        })
    }
    

  


  



  render() {

   
      return (
          <>
                <div className="container">
                    <div className="row">


                       {this.state.data.map((val)=>{

                                return <div className="col-lg-4 col-md-6 col-12 col-sm-6 my-4">

                                    <Card 
                                    imagelink={val.imagelink}
                                    details={val.details}
                                    buttonlink={val.buttonlink}
                                    title={val.title}
                                    
                                    
                                    
                                    />

                                </div>

                          
                       })}


                    </div>
                </div>
          </>
      )
                    }

                }

                export default ShownData
        

                    
                    
                 


