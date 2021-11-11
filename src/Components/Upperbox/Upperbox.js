import React from 'react'
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa"; 
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import call from '../../Asset/Call Icon.png'
import Mail from '../../Asset/Mail icon.png'
import '../Upperbox/Upperbox.css'

function Upperbox({icon,name}){
    return(
        <div className="upperboX">
            <div className="Upperleft">
               <div className="upperleftCOntent">
                   <h2>CUSTOMER INFORMATION</h2>
                   <hr className="customer-info-line"/>
                   <p className="accountId-upperbox">Account ID:20210801</p>
                   <h3>Customer Name:Judith Newman</h3>
                   <div className="upperleft-and-icon"><img src={call}/><p>08032321123</p></div>
                   <div className="upperleft-and-icon"><img src={Mail}/><p>Judithnewman@gmail.com</p></div>
               </div>
            </div>
            <div className="Upperright">
                <div className="cardImage">
                   
                  <div className="cardImage-acc">
                      <p>Account Id</p>
                      <p className="medium-weight-dashboard-upp">20210801</p>
                  </div>
                    <div className="cardImage-balance">
                        <p className="medium-weight-dashboard">E-wallet Balance</p>
                        <p className="money-dashboard-upp">NGN 134,457.56</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Upperbox