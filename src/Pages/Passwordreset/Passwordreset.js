import React from 'react'
import Resetpassframe from '../../Components/Resetpassframe/Resetpassframe'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { setnewemail } from '../../redux/flex/flex.actions'
import { connect } from 'react-redux'
import flexpng from '../../Asset/flexpng.png'
import axios from 'axios'
import '../Passwordreset/Passwordreset.css'
import { baseURL } from '../../domain'

function Passwordreset({setnewemail,newemail}){
    const history=useHistory()
    console.log(newemail.email)
    function handleSubmit(){
      const params={
     email:newemail.email,
    
       
      }
      console.log(params)
      if(newemail.email!=""){
        axios.put(`${baseURL}/forgotpassword`,params)
    .then(res=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
   })
        history.push("/Requestconfirm")}

    }
    return(
      <div className="reuest-pass-all">
        <div>
            <Resetpassframe>
                <div>
                  <div className="Resetpassword">
           <h1>REQUEST PASSWORD RESET</h1>
           <p className="Resetpassword-parag">Please provide your registered email address.</p>
          
           <div className="reset-email-div">
           <input type="email" placeholder="Email address" name="email"  onChange={((e)=>{setnewemail({[e.target.name]:e.target.value})})}/>
               </div>
               {/* <div className="email-wrapper">
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>{signindetails({[e.target.name]:e.target.value});setEmail(e.target.value)}}/>
          
          
            </div> */}
             <button onClick={handleSubmit}>SUBMIT</button>
             </div>
           <p className="remember-reset-pass">Remember your password <Link to="/signin" className="link-rem">Sign in</Link></p>
           </div>
           </Resetpassframe>
           </div>
            <div className="mobilesignin">
             
<div className="mobilesigninHeader">
<img src={flexpng} style= {{width: "78px",
height: "32px"}}/>

<h3>Stay connected always</h3>
</div>
<div className="signinmobile-inner-confirm">
<div>
                  <div className="Resetpassword">
           <h1>REQUEST PASSWORD RESET</h1>
           <p className="Resetpassword-parag">Please provide your registered email address.</p>
          
           <div className="reset-email-div">
           <input type="email" placeholder="Email address" name="email"  onChange={((e)=>{setnewemail({[e.target.name]:e.target.value})})}/>
               </div>
               {/* <div className="email-wrapper">
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>{signindetails({[e.target.name]:e.target.value});setEmail(e.target.value)}}/>
          
          
            </div> */}
             <button onClick={handleSubmit}>SUBMIT</button>
             </div>
           <p className="remember-reset-pass">Remember your password <Link to="/signin" className="link-rem">Sign in</Link></p>
           </div>

</div>
</div>
            </div>
       
    )


}
const MapDispatchToProps=(dispatch)=>({

  //const userinput= {[items]:value}
   //signin:(item)=> dispatch(signin(item)),
  
   setnewemail:(item)=>dispatch(setnewemail(item))

})
const mapstatetoprops=({flex:{newemail}})=>({

  newemail
 
 

})

export default connect(mapstatetoprops,MapDispatchToProps) (Passwordreset)