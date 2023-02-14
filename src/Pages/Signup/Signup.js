import React from 'react'
import {FaEye,FaEyeSlash,FaFacebookF,FaInfo} from "react-icons/fa"; 
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { signup } from '../../redux/flex/flex.actions';
import { signupdetails } from '../../redux/flex/flex.actions';
import { useHistory } from 'react-router-dom';
import Loader from "react-loader-spinner";
import {ReactComponent as FacebookLogo} from '../../Asset/FACEBOOK ICON.svg';
import {ReactComponent as GoogleLogo} from '../../Asset/google logo.svg';
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {ReactComponent as SignflexLogo} from '../../Asset/LOGO FLEX.svg';
import {ReactComponent as Cancel} from '../../Asset/Closesvg.svg'
import axios from 'axios'
import Recaptcha from 'react-recaptcha'
import {ReactComponent as Info} from '../../Asset/info.svg'
import flexpng from '../../Asset/flexpng.png'
import '../Signup/Signup.css'

function Signup({details,signupdetails,signup}){
    const[message,setMessage]=useState("")
    const[issuePop,setIssuePop]=useState({display:"none"})
    const[logtext,setLogtext]=useState({})
    const[butnstyle,setButnstyle]=useState({})
    const[countrystyle,setCountrystyle]=useState({color:'#c4c4c4'})
    const[first,setFirst]=useState("")
    const[second,setSecond]=useState("")
    const[countries,setCountries]=useState([])
    const[sorty,setSorty]=useState('asc')
    const[remember,setRemember]=useState(false)
    const[verified, setVerified]=useState(false)
    const[passwordCharacter,setPasswordCharacter]=useState({display:"none"})
    const[PasswordWrap,setPasswordWrap]=useState({marginBottom:"24px"})
    const[passval ,setPassval]=useState("")
    const[emailval,setEmailval]=useState("")
    const[countryval,setCountryval]=useState("")
    const[loading, setLoading]=useState(true)
    const[popup,setPopup]=useState({display:"none"})
    const[popupInfo,setPopupInfo]=useState({display:"none"})
    const[terms,setTerms]=useState(false)
    const history=useHistory()

    
    
   
    
    

        const fetchdata= async()=>{
            //const fetchdata= ()=>{

            //const response= await fetch("https://restcountries.com/v3.1/all")
            //const countries= await response.json()
           fetch("https://restcountries.com/v3.1/all")
            //fetch("https://subscription-management-tool.herokuapp.com/")
    .then(res=>res.json())
    .then(json=>{console.log(json)
       setCountries(json)})
           //setCountries(countries)
          
            .catch((err)=>{
                console.log(err)
            })

           
            
        }


        useEffect(()=>{
            fetchdata()
            //fetchsign()
    },[])
    let country=countries.map((item,index)=>{

        return(
            item.name.common
        )
    })
   
    let answer=country.sort((a,b)=>{

        const  arrange=(sorty==='asc') ? 1 : -1
        return arrange* a.toString().localeCompare(b)
    })
    
    
                   
                   

    const[passwordshow, setPasswordshow]=useState(false)

    const handletoggle=()=>{

        setPasswordshow(!passwordshow)
        

    }
    const  handlesubmit=  (e)=>{
        e.preventDefault()
      
        if((passval.length <8) ){
            setPasswordCharacter({display:"flex"});
            setPasswordWrap({marginBottom:"5px"})
        }
        var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        
// if(passval.match(decimal))
// {
  

//         console.log(details)
//         //console.log(signup)
        
//         const params={
//              firstName:details.firstName,
//             lastName:details.lastName,
//        email:details.email,
//         password:details.password,
//             country:details.country
           
//         }
//         console.log(params)
        
       //fetch("https://subscription-management-tool.herokuapp.com/register",
      //{method: 'POST',
  //body:JSON.stringify(params)})
  
       //.then((resp) => {console.log(resp)})
      
      // .catch((err)=>{
          // console.log(err)
       //})

        if((emailval!="")&&(passval!="")&&(countryval!="")&&(first!="")&&(second!="")&&(terms===true)){
            if(passval.match(decimal))
{
  

        console.log(details)
        //console.log(signup)
        
        const params={
             firstName:details.firstName,
            lastName:details.lastName,
       email:details.email,
        password:details.password,
            country:details.country
           
        }
        console.log(params)

            setButnstyle({backgroundColor:"grey"})
            // setLogtext({color:"rgba(3,64,6,20%)"})
            setLogtext({color:"black"})
            setLoading(false)

       axios.post("https://subscription-management-tool.herokuapp.com/register",params)
  .then(res=>{
    
    console.log(res)
    console.log(res.data.data.id)
    if(((details.email)&&(details.password))!==""){
        if(remember===true){
    
        if(((JSON.parse(localStorage.getItem('useremails')))&&
         (JSON.parse(localStorage.getItem('userPassword'))))!==null){
        localStorage.setItem('userEmail', JSON.stringify(details.email));
        localStorage.setItem('userPassword', JSON.stringify(details.password));
         }
         else{localStorage.setItem('userEmail', JSON.stringify(details.email));
         localStorage.setItem('userPassword', JSON.stringify(details.password));
        
        
        }
    }
    
    }

    if(res.data.status==='success'){
        let walletparams={
            balance: 0,
            userId:res.data.data.id
           
        }
        console.log(walletparams)
        // fetch("https://subscription-management-tool.herokuapp.com/users/wallet",
        // {method:'POST', body: walletparams})
        // .then(res =>{
        //     res.json()
           
        //     .then(file =>{console.log(file)})
        //     // .catch(err=>console.log(err))
        // })
        // .catch(err=>console.log(err))
        
        axios.post("https://subscription-management-tool.herokuapp.com/users/wallet",walletparams)
        .then(res=>{
          
          console.log(res)
        })

        //let keeplogs=JSON.parse(localStorage.getItem('keeplog'))
        //setTimeout(()=>{
            setPopup({display:"flex"})
            setButnstyle({backgroundColor:"#6200f0"})
   setLogtext({color:"white"})
   setLoading(true)
       //console.log(res.data.message)
       // setTimeout(function(){history.push("/signin")},3000);
       //history.push("/signin")
    }
    else{
        console.log(res.data.message)
    }





})
 
  
  .catch((err)=>{
   console.log(err.response.data.message)
   setIssuePop({display:"flex"})
   setMessage(err.response.data.message)
   setButnstyle({backgroundColor:"#6200f0"})
   setLogtext({color:"white"})
   setLoading(true)
})
        }
    
    else{
        setPasswordCharacter({display:"flex"});
        setPasswordWrap({marginBottom:"5px"})
    }

    }
    else{
        setPopupInfo({display:"flex"})
    }
    


       
        //alert(details)
       
       //database.push({firstname,email,password})
       // database.push(state.details,details)
        //console.log(database)
        //console.log(details.text)
       
        //setNewvalue("")
        //setNewvaluemail("")
        //setNewvaluepassword("")
        

        //database.map((val)=>{

            //console.log(val.firstname)
        //})
    }
    const rememberCheck=(()=>{
        if(((details.email)&&(details.password))!==""){
            if(remember===true){

            if(((JSON.parse(localStorage.getItem('userEmail')))&&
             (JSON.parse(localStorage.getItem('userPassword'))))!==null){
            localStorage.setItem(('userEmail', JSON.stringify(details.email)),
            )
        }
        else{ localStorage.setItem(('userEmail', JSON.stringify(details.email)),
          )  }
        //   ('userPassword',JSON.stringify(details.password)));
        }

    }
    })

    const Recaptchaloaded=(()=>{
        console.log('loaded')
    })

    const verifystate=((res)=>{

        if(res){
            setVerified(true)
        }
    })
    const expire= (()=>{
        alert('expire')
    })
    const onchange=(()=>{
       
    })
   // render="explicit"
          //  expiredCallback={expire}
           // onloadCallback={Recaptchaloaded}
           // verifyCallback={verifystate}
           //?onload=onloadCallback&render=explicit"
   
    
    return(
        <div className="signup-total" >
            
            <div className="signup" >
            {/* <div className="cover-check" style={popup}> */}
            <div  style={popupInfo} className="check-issue">
                    <div className="cancel-confirm-signup" onClick={(()=>{setPopupInfo({display:"none"}) }) } ><Cancel/></div>
                        <p>Incomplete information.</p>
                    </div>
            
                    <div  style={popup} className="check-issue">
                    <div className="cancel-confirm-signup" onClick={(()=>{history.push("/signin") }) } ><Cancel/></div>
                        <p>Account created successfully.</p>
                    </div>
                {/* </div> */}

                <div style={issuePop} className="check-issue">
                    <div className="cancel-confirm-signup" onClick={(()=>{setIssuePop({display:"none"}) }) } ><Cancel/></div>
                        <p>{message}</p>
                    </div>
            <div className="inner-signup">
            <div className="signup-textandimage">
                <div className="signup-textandimage-logo"><FlexLogo style={{width:"108px",height:"42px"}}  onClick={(()=>{history.push("/")})}/></div>
                <div>
                <h2>Stay connected always</h2>
                <p>All-in-one subscription management platform. Keep track of your expenses, set auto-renewal

                on subscription and pay easily with Flex

                </p>
                </div>
              
            </div>
            <div className="signup-input-section">
                <div className="signup-pols">
            <h3>CREATE AN ACCOUNT</h3>

            <div className="signup-firstname">
            <input type="text"  name="firstName" value={first} onChange={(e)=>{signupdetails({[e.target.name]:e.target.value});setFirst(e.target.value)}} placeholder="First name" required/>
          
          
            </div>
            
            <div className="signup-lastname">
           
            <input type="text"  name="lastName" value={second} onChange={(e)=>{signupdetails({[e.target.name]:e.target.value});setSecond(e.target.value)}} placeholder="Last name" required/>
          
          
            </div>
            
            <div className="select-div">
          
                <select name="country" id="selectlist" style={countrystyle} onChange={(e)=>{signupdetails({[e.target.name]:e.target.value});setCountrystyle({color:"black"});setCountryval(e.target.value)}}>
                <option value="countryval" className="select-placeholder">Country</option>
                    {answer.map((val,index)=>{
                        return(
                            <option key={index} value={val}>{val}</option>
                        )
                    })}
                    

                </select>
           
                </div>
            
            <div className="signup-email-wrapper">
            <input type="email" name="email" value={emailval} onChange={(e)=>{signupdetails({[e.target.name]:e.target.value});setEmailval(e.target.value)}} placeholder="Email" required/>
          
          
            </div>
           <div style={PasswordWrap} className="signup-password-wrapper">
            <input type={passwordshow ? "text": "password"} name="password" onChange={(e)=>{signupdetails({[e.target.name]:e.target.value})
            ;setPasswordCharacter({display:"none"})
            ;setPasswordWrap({marginBottom:"24px"})
            // ;setPassval(e.target.value)
        ;setPassval(e.target.value)}}
             onFocus={(()=>{setPasswordCharacter({display:"flex"});setPasswordWrap({marginBottom:"5px"})})} placeholder="Password" required/>
            <i onClick={handletoggle}><FaEye style={passwordshow ? {display:"none"}:{display:"inline"}}/><FaEyeSlash style={passwordshow ? {display:"inline"}: {display:"none"}}/></i>
          
            </div>
            <div style={passwordCharacter} className="password-charac">
            <div className="infoDivs"><Info/></div><p className="passwordcond">Password should not be less than 8 characters and must include caps,numbers and 
            special characters</p>
            </div>
           
          
           <div className="signup-remember-me">
            
                <input type="checkbox" id="test-box" className="remember-checkbox" onChange={(()=>{setRemember(!remember)})}  />
                <label for="test-box">Remember me</label>
               
                {/* <p>Remember me</p> */}
           </div>
           {/* <Recaptcha
           className="recaptcha"
            sitekey="6Lf85dwcAAAAAGRU-xn3R_77p-3DkqkSyeq9WX__"
         render="explicit"
            expiredCallback={expire}
            onloadCallback={Recaptchaloaded}
           verifyCallback={verifystate}
            
            /> */}
             <button className="signup-create" style={butnstyle} onClick={handlesubmit}>{loading ? (<p style={logtext}>CREATE ACCOUNT</p>) : (<div className="spinner-signin"> <Loader
            type="Oval" width={20} color="#000000"/></div>)}</button>
           <div className="terms"> 
           <div className="signup-remember-me">
           <input id="termscheck" onChange={(()=>{setTerms(true)})} className="terms-checkbox" type="checkbox" required />
           <label for="termscheck"> </label>
           <div  className="terms-and-policy">
           <p >By clicking you agree to our 
            <Link to="" className="Terms-and-condition"> Terms and Conditions</Link>. See <Link className="privacy">Privacy Policy</Link></p>
            </div>
           
            </div>
            </div>
           
          <div className="signup-orandline">  <hr className="signup-line"/><p className="signupWith">Sign up with</p> <hr className="signup-line"/></div>
          <div className="google-AND-facebook">
            <button className="signup-google"><GoogleLogo className="logoGoogle"/><p> GOOGLE</p></button>
            <button className="signup-facebook"> <FacebookLogo className="logoFace"/><p> FACEBOOK</p></button>
            </div>
            
            <p className="already-have-account">Already have an account? <Link to="/signin" className="already-have-account-log">Log in</Link></p>
           
            </div>
            </div>
            </div>
            </div>


            <div className="signup-mobile">

            <div  style={popupInfo} className="check-issue">
                    <div className="cancel-confirm-signup" onClick={(()=>{setPopupInfo({display:"none"}) }) } ><Cancel/></div>
                        <p>Incomplete information.</p>
                    </div>
            
                    <div  style={popup} className="check-issue">
                    <div className="cancel-confirm-signup" onClick={(()=>{history.push("/signin") }) } ><Cancel/></div>
                        <p>Account created successfully.</p>
                    </div>

        <div style={issuePop} className="check-issue">
            <div className="cancel-confirm-signup" onClick={(()=>{setIssuePop({display:"none"}) }) } ><Cancel/></div>
                <p>{message}</p>
            </div>
                <div className="mobile-signup-header"> 
                <img src={flexpng} style= {{width: "78px",
        height: "32px"}}/>

        <h3>Stay connected always</h3>
        </div>
               
               
                    
                
                <div className="mobile-signup-inner">
                <h3>CREATE AN ACCOUNT</h3>
                <div className="input-wrapper">
                    <input type="text" placeholder="First name" name="firstName" value={first} onChange={(e)=>{signupdetails({[e.target.name]:e.target.value});setFirst(e.target.value);console.log(first)}} />
                </div>
                <div className="input-wrapper">
                    <input type="text" value={second} name="lastName" onChange={(e)=>{signupdetails({[e.target.name]:e.target.value});setSecond(e.target.value)}} placeholder="Last name"/>
                </div>
               
                <div className="input-wrapper">
                    
                <select name="country"  style={countrystyle} id="selectlist" onChange={(e)=>{signupdetails({[e.target.name]:e.target.value});setCountrystyle({color:"black"});setCountryval(e.target.value)}}>
                <option value="countryval" className="select-placeholder">Country</option>
                    {answer.map((val,index)=>{
                        return(
                            <option key={index} value={val}>{val}</option>
                        )
                    })}
                    

                </select>
                </div>

                


                <div className="input-wrapper">
                    <input type="text" placeholder="Email" name="email" value={emailval} onChange={(e)=>{signupdetails({[e.target.name]:e.target.value});setEmailval(e.target.value)}}/>
                </div>
                <div style={PasswordWrap} className="input-wrapper" id="passwordmobilewrapper">
            <input type={passwordshow ? "text": "password"} name="password" onChange={(e)=>{signupdetails({[e.target.name]:e.target.value})
            ;setPasswordCharacter({display:"none"})
            ;setPasswordWrap({marginBottom:"24px"})
            // ;setPassval(e.target.value)
        ;setPassval(e.target.value)}}
             onFocus={(()=>{setPasswordCharacter({display:"flex"});setPasswordWrap({marginBottom:"5px"})})} placeholder="Password" required/>
            <i onClick={handletoggle}><FaEye style={passwordshow ? {display:"none"}:{display:"inline"}}/><FaEyeSlash style={passwordshow ? {display:"inline"}: {display:"none"}}/></i>
          
            </div>
            <div style={passwordCharacter} className="password-charac">
            <div className="infoDivs"><Info/></div><p className="passwordcond">Password should not be less than 8 characters and must include caps,numbers and 
            special characters</p>
            </div>


                {/* <div className="input-wrapper" id="passwordmobilewrapper">
                   
                    <input type={passwordshow ? "text": "password"} name="password" onChange={(e)=>{signupdetails({[e.target.name]:e.target.value})
            ;setPasswordCharacter({display:"none"})
            ;setPasswordWrap({marginBottom:"24px"})
        ;setPassval(e.target.value)}}
             onFocus={(()=>{setPasswordCharacter({display:"flex"});setPasswordWrap({marginBottom:"5px"})})} placeholder="Password" required/>
            <i onClick={handletoggle}><FaEye style={passwordshow ? {display:"none"}:{display:"inline"}}/><FaEyeSlash style={passwordshow ? {display:"inline"}: {display:"none"}}/></i>
          
                </div>
                <div style={passwordCharacter} className="password-charac">
            <div className="infoDiv"><i><FaInfo/></i></div><p>Password should not be less than 8 characters and must include caps,numbers and 
            special characters</p>
            </div> */}

            <div className="signup-remember-me">
            
            <input type="checkbox" id="test-box" className="remember-checkbox" onChange={(()=>{setRemember(!remember)})}  />
            <label for="test-box">Remember me</label>
           
            {/* <p>Remember me</p> */}
       </div>

       <button className="signup-create" style={butnstyle} onClick={handlesubmit}>{loading ? (<p style={logtext}>CREATE ACCOUNT</p>) : (<div className="spinner-signin"> <Loader
            type="Oval" width={20} color="#000000"/></div>)}</button>

                {/* <button className="signup-create" onClick={handlesubmit}>CREATE ACCOUNT</button> */}

                <div className="terms"> 
           <div className="signup-remember-me">
           <input id="termscheck" className="terms-checkbox" onChange={(()=>{setTerms(true)})} type="checkbox" required />
           <label for="termscheck"> </label>
           <div  className="terms-and-policy">
           <p >By clicking you agree to our 
            <Link to="" className="Terms-and-condition"> Terms and Conditions</Link>. See <Link className="privacy">Privacy Policy</Link></p>
            </div>
           
            </div>
            </div>


                <div className="signup-orandline">  <hr className="signup-line"/><p className="signupWith">Sign up with</p> <hr className="signup-line"/></div>
                   
                <div className="google-AND-facebook-mobile">
            <button className="signup-google-mobile"><GoogleLogo className="logoGoogle"/><p> GOOGLE</p></button>
            <button className="signup-facebook-mobile"> <FacebookLogo className="logoFace"/><p> FACEBOOK</p></button>
            </div>

            <p className="already-have-account">Already have an account? <Link to="/signin" className="already-have-account-log">Log in</Link></p>
           
                  
                    </div>
              

            </div>
        </div>



        
    )


   
}


const MapDispatchToProps=(dispatch)=>({

    //const userinput= {[items]:value}
     signup:(item)=> dispatch(signup(item)),
    
     signupdetails:(item)=>dispatch(signupdetails(item))
 
 })
 const mapstatetoprops=({flex:{signupInput,details}})=>({
 
     signupInput,
     details,
    
    
 
 })
export default connect (mapstatetoprops,MapDispatchToProps) (Signup)