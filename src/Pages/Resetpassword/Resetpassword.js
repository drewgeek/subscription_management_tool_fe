import React from 'react'
import Resetpassframe from '../../Components/Resetpassframe/Resetpassframe'
import { Link } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom';
import {signindetails,signin} from '../../redux/flex/flex.actions'
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa"; 
import flexpng from '../../Asset/flexpng.png'
import { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import Loader from "react-loader-spinner";
import {ReactComponent as Info} from '../../Asset/info.svg'
import {passwordreset} from '../../redux/flex/flex.actions'
import '../Resetpassword/Resetpassword.css'

function Resetpassword({forgotpassword,passwordreset,match}){
    const[passwordCharacter,setPasswordCharacter]=useState({display:"none"})
    const[passwordshow, setPasswordshow]=useState(false)
    const[password,setPassword]=useState("")
    const[passwordsecond,setPasswordsecond]=useState("")
    const[email,setEmail]=useState("")
    const[loggedins, setLoggedins]=useState(false)
    const[loading, setLoading]=useState(true)
    const[logtext,setLogtext]=useState({})
    const[passval ,setPassval]=useState("")
    const[butnstyle,setButnstyle]=useState({})
    const[PasswordWrap,setPasswordWrap]=useState({marginBottom:"24px"})
    const history=useHistory()
    console.log(forgotpassword)
    let newToken;
    let toks=match.params.token
    // const {token} = useParams();
    // let toks = token;

   
   
    const handletoggle=()=>{

        setPasswordshow(!passwordshow)

    }
    const submit=(e)=>{
        e.preventDefault()
        
       // else {alert('verify')}
        //history.push("/Dashboard")
       
   
    // const params={
    //     password:forgotpassword.password,
 
    // }
    const params={
             newPassword:password,  
             resetLink:toks
      
   }
   console.log(params)
   setButnstyle({backgroundColor:"grey"})
    // setLogtext({color:"rgba(3,64,6,20%)"})
    setLogtext({color:"black"})
    setLoading(false)
    if((passval.length <8) ){
        setPasswordCharacter({display:"flex"});
        setPasswordWrap({marginBottom:"5px"})
    }
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(passval.match(decimal))
{


    if(password===passwordsecond){

axios.put("https://subscription-management-tool.herokuapp.com/resetpassword",params)
.then(res=>{
  
  console.log(res.data)
  //if(((details.email)&&(details.password))!==""){
//       if(remember===true){
  
//       if(((JSON.parse(localStorage.getItem('useremails')))&&
//        (JSON.parse(localStorage.getItem('userPassword'))))!==null){
//       localStorage.setItem('userEmail', JSON.stringify(details.email));
//       localStorage.setItem('userPassword', JSON.stringify(details.password));
//        }
//        else{localStorage.setItem('userEmail', JSON.stringify(details.email));
//        localStorage.setItem('userPassword', JSON.stringify(details.password));
      
      
//       }
//   }
  
  //}

  if(res.data.status==='success'){
      //let keeplogs=JSON.parse(localStorage.getItem('keeplog'))
      
   
      history.push("/signincontinue")
  }





})
.catch((err)=>{
    console.log(err)
   })
} 
else{
    setPasswordCharacter({display:"flex"});
    setPasswordWrap({marginBottom:"5px"})
    }



  //history.push("/signincontinue")

    // axios.post("https://subscription-management-tool.herokuapp.com/login",params)
    // .then(res=>{
    //   console.log(res)
    //   console.log(res.data.data.token)
    //   let token=res.data.data.token
    //    newToken=token.split(" ")[1]
    //   console.log(newToken)
    //   if(res.data.status==='success'){
    //       //let keeplogs=JSON.parse(localStorage.getItem('keeplog'))
    //       if(loggedins===true){
    //           if((JSON.parse(localStorage.getItem('userToken')))!=null){
    //         localStorage.setItem('usertoken', JSON.stringify(newToken));
    //     }
    //     else{localStorage.setItem('usertoken', JSON.stringify(newToken));}
    //       }
       
        //   history.push("/Dashboard")
    //   }
    //   else{
    //       alert('invalid input')
    //   }

    
    
    // })
   
    
//     .catch((err)=>{
//      console.log(err)
//   })
}
}
    return(
      <div className="reset-pass-all">
          <div className="web-reset-pass">
            <Resetpassframe>
                  <div className="passwordreset">
           <h1>RESET PASSWORD</h1>
          
         
           <div className="input-and-label-forgot">
           <label>New Password</label>
           {/* <div className="forgotpass-input-div">
           <input type="email" placeholder="Password"/>
           </div> */}
            <div className="password-wrapper-reset" style={PasswordWrap}>
            <input type={passwordshow ? "text": "password"} name="password" placeholder="Password" value={password}
            onChange={(e)=>{passwordreset({[e.target.name]:e.target.value});
            ;setPassval(e.target.value);setPassword(e.target.value);setPasswordCharacter({display:"none"}); ;setPasswordWrap({marginBottom:"24px"})}}
            onFocus={(()=>{setPasswordCharacter({display:"flex"});setPasswordWrap({marginBottom:"5px"})})}
            />
            
            <i onClick={handletoggle}><FaEye style={passwordshow ? {display:"none"}:{display:"inline"}}/><FaEyeSlash style={passwordshow ? {display:"inline"}: {display:"none"}}/></i>
          
            </div>
            <div style={passwordCharacter} className="password-charac">
            <div className="infoDivs"><Info/></div><p className="passwordcond">Password should not be less than 8 characters and must include caps,numbers and 
            special characters</p>
            </div>
               </div>
               <div className="input-and-label-forgot">
                   <label>Confirm Password</label>
                   {/* <div className="forgotpass-input-div">
           <input type="email" placeholder="Password"/>
           </div> */}
            <div className="password-wrapper-reset" id="secondpass-reset">
            <input type={passwordshow ? "text": "password"} name="password" placeholder="Password" value={passwordsecond}
            onChange={(e)=>{setPasswordsecond(e.target.value)}}/>
            <i onClick={handletoggle}><FaEye style={passwordshow ? {display:"none"}:{display:"inline"}}/><FaEyeSlash style={passwordshow ? {display:"inline"}: {display:"none"}}/></i>
          
            </div>
               </div>
               <button onClick={submit}>{loading ? (<p style={logtext}>SUBMIT</p>) : (<div className="spinner-signin"> <Loader
            type="Oval" width={20} color="#000000"/></div>)}</button>
           
            </div>
            <p className="remember-passreset-pass">Remember your password <Link to="/signin" className="link-rem-passreset">Sign in</Link></p>
            </Resetpassframe>
            </div>
<div className="mobilesignin">
<div className="mobilesigninHeader">
<img src={flexpng} style= {{width: "78px",
height: "32px"}}/>

<h3>Stay connected always</h3>
</div>
<div className="signinmobile-inner">
<div className="passwordreset">
           <h1>RESET PASSWORD</h1>
          
         
           <div className="input-and-label-forgot">
           <label>New Password</label>
           {/* <div className="forgotpass-input-div">
           <input type="email" placeholder="Password"/>
           </div> */}
            <div className="password-wrapper-reset" style={PasswordWrap}>
            <input type={passwordshow ? "text": "password"} name="password" placeholder="Password" value={password}
            onChange={(e)=>{passwordreset({[e.target.name]:e.target.value});
            ;setPassval(e.target.value);setPassword(e.target.value);setPasswordCharacter({display:"none"}); ;setPasswordWrap({marginBottom:"24px"})}}
            onFocus={(()=>{setPasswordCharacter({display:"flex"});setPasswordWrap({marginBottom:"5px"})})}
            />
            
            <i onClick={handletoggle}><FaEye style={passwordshow ? {display:"none"}:{display:"inline"}}/><FaEyeSlash style={passwordshow ? {display:"inline"}: {display:"none"}}/></i>
          
            </div>
            <div style={passwordCharacter} className="password-charac">
            <div className="infoDivs"><Info/></div><p className="passwordcond">Password should not be less than 8 characters and must include caps,numbers and 
            special characters</p>
            </div>
               </div>
               <div className="input-and-label-forgot">
                   <label>Confirm Password</label>
                   {/* <div className="forgotpass-input-div">
           <input type="email" placeholder="Password"/>
           </div> */}
            <div className="password-wrapper-reset" id="secondpass-reset">
            <input type={passwordshow ? "text": "password"} name="password" placeholder="Password" value={passwordsecond}
            onChange={(e)=>{setPasswordsecond(e.target.value)}}/>
            <i onClick={handletoggle}><FaEye style={passwordshow ? {display:"none"}:{display:"inline"}}/><FaEyeSlash style={passwordshow ? {display:"inline"}: {display:"none"}}/></i>
          
            </div>
               </div>
               <button onClick={submit}>{loading ? (<p style={logtext}>SUBMIT</p>) : (<div className="spinner-signin"> <Loader
            type="Oval" width={20} color="#000000"/></div>)}</button>
           
            </div>
            <p className="remember-passreset-pass">Remember your password <Link to="/signin" className="link-rem-passreset">Sign in</Link></p>
          
</div>
</div>
</div>
       
    )


}
const MapDispatchToProps=(dispatch)=>({

    //const userinput= {[items]:value}
     signin:(item)=> dispatch(signin(item)),
    
     passwordreset:(item)=>dispatch(passwordreset(item))
 
 })
 const mapstatetoprops=({flex:{signininput,detailssignin,forgotpassword}})=>({
 
    signininput,
     detailssignin,
     forgotpassword
    
    
 
 })

export default connect(mapstatetoprops,MapDispatchToProps) (Resetpassword)