import React from 'react'
import {ReactComponent as FlexLogo} from '../../../Asset/LOGO FLEX.svg';
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa"; 
import {Link} from 'react-router-dom'
import DashFrame from '../../../Components/DashFrame/DashFrame';
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { headercolor } from '../../../redux/flex/flex.actions';
import './Payments.css'

const Payments = ({presentcolor,headercolor}) => {
    const user = localStorage.getItem('user');
    const userStr = JSON.parse(user)

    useEffect(()=>{
        headercolor({ dashheadercolor:"#6200f0"}) 
    },[])

    return (
        <>
            <DashFrame dashSettingsStyle={{backgroundColor:presentcolor.dashheadercolor}}>
                <div className="inner-settings-section">
                    <div className="header">
                        <h3>Settings</h3>
                        <hr className="welcome-divider"/>
                    </div>
                    <div className="sub-header">
                        <Link to={`/settings/profile/${userStr.id}`}><p>Profile</p></Link>
                        <Link to="/settings/notifications"><p>Notifications</p></Link>
                        <Link to="/settings/application"><p>Application</p></Link>
                        <Link to="/settings/payments" style={{borderBottom: "3px solid #6200f0", color: "#030640"}}><p>Payments</p></Link>
                    </div>
                    <div className="inner-section">
                        <form className="payments-form">
                            <div className="payments-settings">
                                <div className="payment-options">
                                    <h4>Payment options</h4>
                                    <div className="card-payment">
                                        <input type="checkbox"/>
                                        <label for="payment">Pay with card always</label>
                                    </div>
                                    <div className="e-wallet">
                                        <input type="checkbox"/>
                                        <label for="payment">Pay with my E-wallet always</label>
                                    </div>
                                    <div className="options">
                                        <input type="checkbox"/>
                                        <label for="payment">Always ask for my payment option</label>
                                    </div>
                                </div>
                                <div className="change-pin">
                                    <h4>Change PIN</h4>
                                    <p>Please type in a 4-digit number as your pin and confirm new pin</p>
                                    <div className="old-pin">
                                        <label for="old-pin">Old PIN</label>
                                        <input type="text"  />
                                    </div>
                                    <div className="new-pin">
                                        <label for="new-pin">New PIN</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="confirm-pin">
                                        <label for="confirm-pin">Confirm PIN</label>
                                        <input type="text"/>
                                    </div>
                                </div>
                            </div>
                            <div className="app-button-field">
                                <button type="submit" className="submit-btn">APPLY</button>
                                <button type="button" className="discard-btn" >DISCARD</button>
                            </div>
                        </form>
                    </div>    
                </div>    
            </DashFrame> 
        </>
    )
}

const MapDispatchToProps=(dispatch)=>({

    //const userinput= {[items]:value}
     //signin:(item)=> dispatch(signin(item)),
    
     headercolor:(item)=>dispatch(headercolor(item))
 
 })
const mapstatetoprops=({flex:{presentcolor}})=>({
 
    presentcolor
   
   

})

export default connect(mapstatetoprops,MapDispatchToProps) (Payments)