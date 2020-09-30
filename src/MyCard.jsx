import React from 'react'
import MyProjects from './MyProjects.jsx'
import PeriodicTable from './images/periodic table.png'
import FormImage from './images/form.png'
import saylanihome from './images/saylani home.png'
import staticweb from './images/phonestore.png'
import calculator from './images/calculator.png'
import stopwatch from './images/stopwatch.png'
import todoapp from './images/todoapp.png'
import quizapp from './images/quizapp.png'
import insertdata from './images/insertData.png'
import dynamicgreetings from './images/firstreactapp.png'
import chatapp from './images/chatapp.png'


function MyCard(){
     return(
         <div className="container text-center my-5 ">

             <div className="row centeritem">


             <div className="col-lg-4 col-md-6 col-sm-6 col-12 my-2">
                     
                     < MyProjects 
                    
                     title="GroupChat App" 
                     details="Simple Group chat app using vanilla js and css with out any framework"
                     buttonlink="https://projects-wm8601.web.app/jschatapp/index.html" 
                     imagelink={chatapp}
                     /> 
                </div>    


             <div className="col-lg-4 col-md-6 col-sm-6 col-12 my-2">
                     
                     < MyProjects 
                    
                     title="Dynamic Greetings" 
                     details="This is my first react app named Dynamic Greeting made with reactJS and css"
                     buttonlink="https://webwm8601test.web.app/" 
                     imagelink={dynamicgreetings}
                     /> 
                </div>

             <div className="col-lg-4 col-md-6 col-sm-6 col-12 my-2">
                     
                     < MyProjects 
                    
                     title="Insert Data" 
                     details="insertion of data into table using java script and firebase and bootstrap"
                     buttonlink="https://projects-wm8601.web.app/insert%20data/index.html" 
                     imagelink={insertdata}
                     /> 
                </div>


             <div className="col-lg-4 col-md-6 col-sm-6 col-12 my-2">
                     
                     < MyProjects 
                    
                     title="Quiz App" 
                     details="This is assignment related to simple quiz app made with javascript html and css"
                     buttonlink="https://projects-wm8601.web.app/quiz%20app/index.html" 
                     imagelink={quizapp}
                     /> 
                </div>

             <div className="col-lg-4 col-md-6 col-sm-6 col-12 my-2">
                     
                     < MyProjects 
                    
                     title="Todo App" 
                     details="This is assignment related to Todo App made with javascript html and css"
                     buttonlink="https://projects-wm8601.web.app/todo%20app/index.html" 
                     imagelink={todoapp}
                     /> 
                </div>

             <div className="col-lg-4 col-md-6 col-sm-6 col-12 my-2">
                     
                     < MyProjects 
                    
                     title="Stop Watch" 
                     details="This is assignment related to stop watch made with javascript html and css"
                     buttonlink="https://projects-wm8601.web.app/stopwatch/index.html" 
                     imagelink={stopwatch}
                     /> 
                </div>

             <div className="col-lg-4 col-md-6 col-sm-6 col-12 my-2">
                     
                     < MyProjects 
                    
                     title="Js Calculator App" 
                     details="This is assignment related to calculator made with javascript html and css"
                     buttonlink="https://projects-wm8601.web.app/calculator/index.html" 
                     imagelink={calculator}
                     /> 
                </div>
                 


             <div className="col-lg-4 col-md-6 col-sm-6 col-12 my-2">
                     
                     < MyProjects 
                    
                     title="Static Website" 
                     details="This is assignment related to Static Website made with html css and bootstrap"
                     buttonlink="https://projects-wm8601.web.app/phonestore/public/index.html" 
                     imagelink={staticweb}
                     /> 
                </div>
                 
                


                <div className="col-lg-4 col-md-6 col-sm-6 col-12 my-2">
                     
                     < MyProjects 
                  
                     title="Saylani Home Page" 
                     details="This is assignment no3 A saylani home page design with html css and bootstrap"
                     buttonlink="https://projects-wm8601.web.app/saylanihome/index.html" 
                     imagelink={saylanihome}
                     /> 
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12 my-2">
                     
                     < MyProjects 
                  
                     title="Registration Form" 
                     details="This is assignment no 2 a simple registration form design with html and css"
                     buttonlink="https://projects-wm8601.web.app/registration%20form%20using%20table/index.html"
                     imagelink={FormImage}
                     /> 
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12 my-2">
                     
                     < MyProjects 
                     imagelink="" 
                     title="Periodic Table" 
                     details="This is assignment no 1 a pure html periodic table" 
                     buttonlink="https://projects-wm8601.web.app/periodic%20table/index.html"
                     imagelink={PeriodicTable}
                     /> 
                </div>

                 
                 
                 
                 </div> 
             
         </div>
     )
}

export default MyCard