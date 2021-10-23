import React from 'react'
import {FaEye} from "react-icons/fa"; 
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { signup } from '../../redux/flex/flex.actions';
import { signupdetails } from '../../redux/flex/flex.actions';
import { useHistory } from 'react-router-dom';
import {ReactComponent as FacebookLogo} from '../../Asset/facebook.svg';
import {ReactComponent as GoogleLogo} from '../../Asset/google logo.svg';
import axios from 'axios'
import '../Signup/Signup.css'

function Signup({details,signupdetails,signup}){
    
    const[countries,setCountries]=useState([])
    const[sorty,setSorty]=useState('asc')
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
    const handlesubmit=(e)=>{
        e.preventDefault()
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
        
       //fetch("https://subscription-management-tool.herokuapp.com/register",
      //{method: 'POST',
  //body:JSON.stringify(params)})
  
       //.then((resp) => {console.log(resp)})
      
      // .catch((err)=>{
          // console.log(err)
       //})


       axios.post("https://subscription-management-tool.herokuapp.com/register",params)
  .then(res=>{
    console.log(res)})
 
  
  .catch((err)=>{
   console.log(err)
})

        history.push("/signin")
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
   
    
    return(
        <div className="signup" >
            <div className="inner-signup">
            <div className="signup-textandimage">
                <div className="signup-textandimage-logo">LOGO</div>
                <div>
                <h2>Stay connected always</h2>
                <p>All-in-one subscription management platform. Keep track of your expenses, set auto-renewal

                on subscription and pay easily with Flex

                </p>
                </div>
                <div className="signup-copyright">&copy;2021 Flexdesignteam</div>
            </div>
            <div className="signup-input-section">
                <div className="signup-pols">
            <h3>CREATE AN ACCOUNT</h3>

            <div className="signup-firstname">
            <input type="text" name="firstName" onChange={(e)=>{signupdetails({[e.target.name]:e.target.value})}} placeholder="First name"/>
          
          
            </div>
            <div className="signup-lastname">
           
            <input type="text" name="lastName" onChange={(e)=>{signupdetails({[e.target.name]:e.target.value})}} placeholder="Last name"/>
          
          
            </div>
          
                <select name="country" id="selectlist" onChange={(e)=>{signupdetails({[e.target.name]:e.target.value})}}>
                <option value="country" className="select-placeholder">Country</option>
                    {answer.map((val,index)=>{
                        return(
                            <option key={index} value={val}>{val}</option>
                        )
                    })}
                    

                </select>
           
            
            
            <div className="signup-email-wrapper">
            <input type="email" name="email" onChange={(e)=>{signupdetails({[e.target.name]:e.target.value})}} placeholder="Email"/>
          
          
            </div>
           <div className="signup-password-wrapper">
            <input type={passwordshow ? "text": "password"} name="password" onChange={(e)=>{signupdetails({[e.target.name]:e.target.value})}} placeholder="Password"/>
            <i onClick={handletoggle}><FaEye/></i>
          
            </div>
            
          
           <span className="signup-remember-me"> <input type="checkbox" />
                <p>Remember me</p>
           </span>
           <span className="terms"> 
           <p >By clicking the create account button below, you agree to the 
           <Link className="Terms-and-condition">Terms and Conditions</Link> of Flex.</p>
            </span>
            <button className="signup-create" onClick={handlesubmit}>Create account</button>
          <div className="signup-orandline">  <hr className="signup-line"/>OR <hr className="signup-line"/></div>
            <button className="signup-google"><GoogleLogo/> Sign up with Google</button>
            <button className="signup-facebook"> <FacebookLogo/> Sign up with Facebook</button>
            <p>Already have an account? <Link>Sign in</Link></p>
           
            </div>
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