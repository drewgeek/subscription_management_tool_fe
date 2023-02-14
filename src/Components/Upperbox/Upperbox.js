import React, { useState } from 'react'
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa"; 
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import call from '../../Asset/Call Icon.png'
import Mail from '../../Asset/Mail icon.png'
import axios from 'axios';
import '../Upperbox/Upperbox.css'

function Upperbox({customer,presentcolor}){
    console.log(presentcolor)
    const[cardbalance,setCardbalance]=useState(0.00)
    let customerDetail=JSON.parse(localStorage.getItem('customerDetail'))
    axios.get("https://subscription-management-tool.herokuapp.com/users/wallet")
    .then(res=>{
      
    //   console.log(res.data.data.data.balance)
    setCardbalance(res.data.data.balance)
      console.log(res.data.data.balance)
    })
    return(
        <div className="upperboX">
            <div className="Upperleft">
               <div className="upperleftCOntent">
                   <h2>CUSTOMER INFORMATION</h2>
                   <hr className="customer-info-line"/>
                   <p className="accountId-upperbox">Account ID: {customerDetail.userId}</p>
                   <h3>Customer Name: {customerDetail.firstName} {customerDetail.lastName}</h3>
                   <div className="upperleft-and-icon" 
                   style={typeof (customerDetail.phone)!=="number" ? {display:"none"}:{display:"flex"}}><img src={call}/><p>{customerDetail.phone}</p></div>
                   <div className="upperleft-and-icon"><img src={Mail}/><p>{customerDetail.email}</p></div>
               </div>
            </div>
            <div className="Upperright">
                <div className="cardImage">
                   
                  <div className="cardImage-acc">
                      <p>Account Id</p>
                      <p className="medium-weight-dashboard-upp">{customerDetail.userId}</p>
                  </div>
                    <div className="cardImage-balance">
                        <p className="medium-weight-dashboard">E-wallet Balance</p>
                        <p className="money-dashboard-upp">NGN {cardbalance}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
const MapDispatchToProps=(dispatch)=>({

    //const userinput= {[items]:value}
     //signin:(item)=> dispatch(signin(item)),
    
    //  headercolor:(item)=>dispatch(headercolor(item))
 
 })
const mapstatetoprops=({flex:{presentcolor,customer}})=>({
 
    presentcolor,
    customer
   
   

})


export default connect(mapstatetoprops,MapDispatchToProps) (Upperbox)