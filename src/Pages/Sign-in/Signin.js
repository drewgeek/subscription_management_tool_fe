import React from 'react'
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook, FaRegIdBadge} from "react-icons/fa"; 
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import Loader from "react-loader-spinner";
import { connect } from 'react-redux';
import {ReactComponent as FacebookLogo} from '../../Asset/FACEBOOK ICON.svg';
import {ReactComponent as GoogleLogo} from '../../Asset/google logo.svg';
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {ReactComponent as Cancel} from '../../Asset/Closesvg.svg'
import Recaptcha from 'react-recaptcha';
import flexpng from '../../Asset/flexpng.png'
import setAuthHeader from '../../Components/Utility/Utility'
import {signindetails,signin,customerdetails} from '../../redux/flex/flex.actions'
import axios from 'axios'
import '../Sign-in/Signin.css'


    
     function Signin({detailssignin,signindetails,customerdetails,customer}){
         const[errMess,setErrMess]=useState("")
         const[errPop,setErrPop]=useState({display:"none"})
    const[passwordshow, setPasswordshow]=useState(false)
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
    const[verified, setVerified]=useState(false)
    const[loggedins, setLoggedins]=useState(false)
    const[loading, setLoading]=useState(true)
    const[logtext,setLogtext]=useState({})
    const[butnstyle,setButnstyle]=useState({})
    const[photoval,setPhotoval]=useState("")
    const history=useHistory()



    useEffect(()=>{
        let remeberEmail=JSON.parse(localStorage.getItem('userEmail'))
        // let rememberPassword=JSON.parse(localStorage.getItem('userPassword'))
    if((remeberEmail )!==null){
        setEmail(remeberEmail)
    //   setPassword(rememberPassword)
      signindetails({email:email})
    //   signindetails({password:password})

    }


    },[])

    let newToken;
    

   
   
    const handletoggle=()=>{

        setPasswordshow(!passwordshow)

    }
    const handlesignin=(e)=>{
        e.preventDefault()
        
        // setLoading(false)
        if(verified===true){
           // alert("true")
           
            //console.log(detailssignin)
        }
       // else {alert('verify')}
        //history.push("/Dashboard")
   
    const params={
//         password:detailssignin.password,
//   email:detailssignin.email,
        password:password,
        email:email
   
      
      
   }
   console.log(params)
   if((email!="")&&(password!="")){
    setButnstyle({backgroundColor:"grey"})
    // setLogtext({color:"rgba(3,64,6,20%)"})
    setLogtext({color:"black"})
    setLoading(false)

    axios.post("https://subscription-management-tool.herokuapp.com/login",params)
    .then(res=>{
      
      console.log(res)
      localStorage.setItem('user', JSON.stringify(res.data.data));
      console.log(res.data.data.token)
      console.log(res.data.data.firstName)
      let token=res.data.data.token
       newToken=token.split(" ")[1]
      console.log(newToken)
      if(res.data.status==='success'){
          //let keeplogs=JSON.parse(localStorage.getItem('keeplog'))
          if(loggedins===true){
              if((JSON.parse(localStorage.getItem('userToken')))!=null){
            localStorage.setItem('userToken', JSON.stringify(newToken));
        }
        else{localStorage.setItem('userToken', JSON.stringify(newToken));}
    }
          //token
          localStorage.setItem('bearertoken', JSON.stringify(token));
        //   if((JSON.parse(localStorage.getItem('bearertoken')))!=null){
        //     localStorage.setItem('bearertoken', JSON.stringify(token));
        // }
        // else{localStorage.setItem('bearertoken', JSON.stringify(token));}
  

        //customer-details
        
       
      
        if((JSON.parse(localStorage.getItem('customerDetail')))!=null){
            localStorage.setItem('customerDetail', JSON.stringify({firstName:res.data.data.firstName,email:res.data.data.email,lastName:res.data.data.lastName,photo:res.data.data.photo,phone:res.data.data.phone,userId:res.data.data.userId}));
        }
        else{localStorage.setItem('customerDetail', JSON.stringify({firstName:res.data.data.firstName,email:res.data.data.email,lastName:res.data.data.lastName,photo:res.data.data.photo,phone:res.data.data.phone,userId:res.data.data.userId}));}
        
        setAuthHeader()
          customerdetails({firstName:res.data.data.firstName,email:res.data.data.email,lastName:res.data.data.lastName,photo:res.data.data.photo,phone:res.data.data.phone,userId:res.data.data.userId})
          console.log(customer)
          history.push("/Dashboard")
      }
      else{
        //   alert('invalid input')
      }

    
    
    })
   
    
    .catch((err)=>{
     console.log(err.response.data.message)
     
   setErrPop({display:"flex"})
   setErrMess(err.response.data.message)
   setButnstyle({backgroundColor:"#6200f0"})
   setLogtext({color:"white"})
   setLoading(true)
  })
}}
    //const keeploggedin=(e)=>{

        //console.log(e.target.checked)
       
        //JSON.parse(localStorage.getItem('auth'));
        //let usertokens=e.target.checked
       // if(e.target.checked===true){
       // localStorage.setItem('keeplog', JSON.stringify(e.target.checked));
       // }
    //}
    

    
    return(
        <div className="signintotal">
        <div className="signin" >
        <div style={errPop} className="check-issue">
            <div className="cancel-confirm-signup" onClick={(()=>{setErrPop({display:"none"}) }) } ><Cancel/></div>
                <p>{errMess}</p>
            </div>
            <div className="inner-signin">
            <div className="textandimage">
                <div className="textandimage-logo">
                    <FlexLogo style={{width:"108px",height:"42px"}} onClick={(()=>{history.push("/")})}/>
                   
                    </div>
                <div className="">
                <h2>Stay connected always</h2>
                <p>All-in-one subscription management platform. Keep track of your expenses, set auto-renewal

                on subscription and pay easily with Flex

                </p>
                </div>
               
            </div>
            <div className="input-section">
                <div className="inner-input-section">
                <div className="pols">
                    <div>
            <h2>WELCOME BACK!</h2>
            <p className="header-parag">Enter your details to continue..</p>
            
            <div className="email-wrapper">
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>{signindetails({[e.target.name]:e.target.value});setEmail(e.target.value)}}/>
          
          
            </div>
           <div className="password-wrapper">
            <input type={passwordshow ? "text": "password"} name="password" placeholder="Password" value={password}
            onChange={(e)=>{signindetails({[e.target.name]:e.target.value});setPassword(e.target.value)}}/>
            <i onClick={handletoggle}><FaEye style={passwordshow ? {display:"none"}:{display:"inline"}}/><FaEyeSlash style={passwordshow ? {display:"inline"}: {display:"none"}}/></i>
          
            </div>
            <div className="forgot-and-remember">
            
           <span  className="keep-logged-in"> 
           <input id="logedIn" type="checkbox" value="loggedin"
           onChange={(()=>{setLoggedins(!loggedins )})   }/>
                <label for="logedIn" className="remem-p">Remember me</label>
           </span>
           <Link className="forgot" to="/passwordReset"><p className="forgot">Forgot password?</p></Link>
           </div>

          





            <button className="create" style={butnstyle} onClick={handlesignin}>{loading ? (<p style={logtext}>LOG IN</p>) : (<div className="spinner-signin"> <Loader
            type="Oval" width={20} color="#000000"/></div>)}</button>
          <div className="orandline">  <hr className="line-left"/><p className="loginWith">Log in with</p> <hr className="line-right"/></div>
          <div className="alternateSignin">
            <button className="google"><GoogleLogo className="googleLogo" />GOOGLE</button>
            <button className="facebook"><FacebookLogo className="faceLogo"/>FACEBOOK</button>
            </div>
            </div>
            <p className="noAccount">Don't have an account? <Link to="/signup" className="noAccount-signup">Sign up</Link></p>
           
            </div>
            </div>
            </div>
            </div>
        </div>
        <div className="mobilesignin">
        <div style={errPop} className="check-issue">
            <div className="cancel-confirm-signup" onClick={(()=>{setErrPop({display:"none"}) }) } ><Cancel/></div>
                <p>{errMess}</p>
            </div>
            <div className="mobilesigninHeader">
            <img src={flexpng} style= {{width: "78px",
        height: "32px"}}/>

        <h3>Stay connected always</h3>
        </div>
        <div className="signinmobile-inner">
            <h2>WELCOME BACK!</h2>
            <h3>Enter your details to continue...</h3>
            <div className="signininputWrapper">
            <input type="email" placeholder="Email address" value={email} onChange={(e)=>{signindetails({[e.target.name]:e.target.value});setEmail(e.target.value)}}/>
            </div>
            <div className="signininputWrapper" id="password-mobile-signin">
            <input type={passwordshow ? "text": "password"} name="password" placeholder="Password" value={password}
            onChange={(e)=>{signindetails({[e.target.name]:e.target.value});setPassword(e.target.value)}}/>
            <i onClick={handletoggle}><FaEye style={passwordshow ? {display:"none"}:{display:"inline"}}/><FaEyeSlash style={passwordshow ? {display:"inline"}: {display:"none"}}/></i>
          
            </div>
            <div className="forgot-and-remember">
            
            <span  className="keep-logged-in"> 
            <input id="logedIn" type="checkbox" value="loggedin"
            onChange={(()=>{setLoggedins(!loggedins )})   }/>
                 <label for="logedIn">Remember me</label>
            </span>
            <Link className="forgot"><p className="forgot">Forgot password?</p></Link>
            </div>
          
            <button className="create" style={butnstyle} onClick={handlesignin}>{loading ? (<p style={logtext}>LOG IN</p>) : (<div className="spinner-signin"> <Loader
            type="Oval" width={20} color="#000000"/></div>)}</button>
          <div className="orandline">  <hr className="line-left"/><p className="loginWith">Log in with</p> <hr className="line-right"/></div>
          <div className="alternateSignin">
            <button className="google"><GoogleLogo className="googleLogo" />GOOGLE</button>
            <button className="facebook"><FacebookLogo className="faceLogo"/>FACEBOOK</button>
            </div>
 
            <p className="noAccount">Don't have an account? <Link to="/signup" className="noAccount-signup">Sign up</Link></p>
           
             
        </div>
        
         </div>
      
       </div>
    )
}

const MapDispatchToProps=(dispatch)=>({

    //const userinput= {[items]:value}
     signin:(item)=> dispatch(signin(item)),
    
     signindetails:(item)=>dispatch(signindetails(item)),
     customerdetails:(item)=>dispatch(customerdetails(item))
 
 })
 const mapstatetoprops=({flex:{signininput,detailssignin,customer}})=>({
 
    signininput,
     detailssignin,
     customer
    
    
 
 })
export default connect(mapstatetoprops,MapDispatchToProps) (Signin)