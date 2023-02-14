import React, { useState } from 'react'
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook,FaBars} from "react-icons/fa"; 
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import flexpng from '../../Asset/flexpng.png'
import axios from 'axios';
import '../Mobilecard/Mobilecard.css'
import { customerdetails } from '../../redux/flex/flex.actions';


function Mobilecard(){
    const[Cardbalance,setCardbalance]=useState(0.00)
    let history=useHistory()
    let customerDetail=JSON.parse(localStorage.getItem('customerDetail'))
    axios.get("https://subscription-management-tool.herokuapp.com/users/wallet")
    .then(res=>{
      
    //   console.log(res.data.data.data.balance)
    setCardbalance(res.data.data.balance)
    //   console.log(res.data.data.balance)
    })

    return(
        <div className="mobilecard-container">
                <div className="second-inner-mobilecard">
                <div className="inner-second-cardmobile">
                    <p className="smallfont">Account ID</p>
                    <p className="bigfont">{customerDetail.userId} </p>
                </div>
                <button onClick={(()=>{history.push("/fundwallet")})}>FUND WALLET</button>
                </div>
                <div className="third-inner-mobilecard">
                    <p className="smallfont">E-wallet Balance</p>
                    <p className="bigfont">NGN {Cardbalance}    </p>
                    </div>
                </div>
               
        
    )
}

export default Mobilecard