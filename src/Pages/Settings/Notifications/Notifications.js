import React from 'react'
import {ReactComponent as FlexLogo} from '../../../Asset/LOGO FLEX.svg';
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa"; 
import {Link} from 'react-router-dom'
import DashFrame from '../../../Components/DashFrame/DashFrame';
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { headercolor } from '../../../redux/flex/flex.actions';
import './Notifications.css'
import MobileDash from '../../../Components/MobileDash/MobileDash';

const Notifications = ({presentcolor,headercolor}) => {

    const user = localStorage.getItem('user');
    const userStr = JSON.parse(user)

    useEffect(()=>{
        headercolor({ dashheadercolor:"#6200f0"});

    },[])

    return (
        <>
        <div className="webmobile-view-notification">
        <div className="web-view-notification">
            <DashFrame dashSettingsStyle={{backgroundColor:presentcolor.dashheadercolor}}>
                <div className="inner-settings-section">
                    <div className="header">
                        <h3>Settings</h3>
                        <hr className="welcome-divider"/>
                    </div>
                    <div className="sub-header">
                        <Link to={`/settings/profile/${userStr.id}`}><p>Profile</p></Link>
                        <Link to="/settings/notifications" style={{borderBottom: "3px solid #6200f0", color: "#030640"}}><p>Notifications</p></Link>
                        <Link to="/settings/application"><p>Application</p></Link>
                        <Link to="/settings/payments"><p>Payments</p></Link>
                    </div>
                    <div className="inner-section">
                        <form className="notifications">
                            <div className="notification">
                                <div className="notification-text">
                                    <h3>Notification sound</h3>
                                    <p>Turn on/off your notifications</p>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" className="input-check"/>
                                    <span className="slider rounded"/>
                                </label>    
                            </div>
                            <div className="notification">
                                <div className="notification-text">
                                    <h3>Activate reminders</h3>
                                    <p>Get notifications on your subscription status</p>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" className="input-check"/>
                                    <span className="slider rounded"/>
                                </label>    
                            </div>
                            <div className="notification">
                                <div className="notification-text">
                                    <h3>Blog updates</h3>
                                    <p>Get news on subscribed services and much more</p>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" className="input-check"/>
                                    <span className="slider rounded"/>
                                </label>    
                            </div>
                            <div className="notification">
                                <div className="notification-text">
                                    <h3>Email alert</h3>
                                    <p>Get email notification</p>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" className="input-check"/>
                                    <span className="slider rounded"/>
                                </label>    
                            </div>
                            <div className="notification">
                                <div className="notification-text">
                                    <h3>Application update</h3>
                                    <p>See notification on app update for more features</p>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" className="input-check"/>
                                    <span className="slider rounded"/>
                                </label>    
                            </div>
                            <div className="notification">
                                <div className="notification-text">
                                    <h3>Subscription alert</h3>
                                    <p>Get notification on services subscribed to</p>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" className="input-check"/>
                                    <span className="slider rounded"/>
                                </label>    
                            </div>
                            <div className="button-field">
                                <button type="submit" className="submit-btn">APPLY</button>
                                <button type="button" className="discard-btn" >DISCARD</button>
                            </div>  
                        </form>
                    </div>    
                </div>    
            </DashFrame> 
            </div>
            <div className="mobile-view-notification">
                <MobileDash  dashSettingsStyle={{backgroundColor:presentcolor.dashheadercolor}}>
                <div className="inner-settings-sectionsd">
                    <div className="header">
                        <h3>Settings</h3>
                        {/* <hr className="welcome-divider"/> */}
                    </div>
                    <div className="sub-headers">
                        <Link to={`/settings/profile/${userStr.id}`}><p>Profile</p></Link>
                        <Link to="/settings/notifications" style={{borderBottom: "3px solid #6200f0", color: "#030640",marginRight:"16px"}}><p style={{marginRight:"0"}}>Notifications</p></Link>
                        <Link to="/settings/application"><p>Application</p></Link>
                        <Link to="/settings/payments"><p>Payments</p></Link>
                    </div>
                    <div className="inner-section">
                        <form className="notifications">
                            <div className="notification">
                                <div className="notification-text">
                                    <h3>Notification sound</h3>
                                    <p>Turn on/off your notifications</p>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" className="input-check"/>
                                    <span className="slider rounded"/>
                                </label>    
                            </div>
                            <div className="notification">
                                <div className="notification-text">
                                    <h3>Activate reminders</h3>
                                    <p>Get notifications on your subscription status</p>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" className="input-check"/>
                                    <span className="slider rounded"/>
                                </label>    
                            </div>
                            <div className="notification">
                                <div className="notification-text">
                                    <h3>Blog updates</h3>
                                    <p>Get news on subscribed services and much more</p>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" className="input-check"/>
                                    <span className="slider rounded"/>
                                </label>    
                            </div>
                            <div className="notification">
                                <div className="notification-text">
                                    <h3>Email alert</h3>
                                    <p>Get email notification</p>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" className="input-check"/>
                                    <span className="slider rounded"/>
                                </label>    
                            </div>
                            <div className="notification">
                                <div className="notification-text">
                                    <h3>Application update</h3>
                                    <p>See notification on app update for more features</p>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" className="input-check"/>
                                    <span className="slider rounded"/>
                                </label>    
                            </div>
                            <div className="notification">
                                <div className="notification-text">
                                    <h3>Subscription alert</h3>
                                    <p>Get notification on services subscribed to</p>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" className="input-check"/>
                                    <span className="slider rounded"/>
                                </label>    
                            </div>
                            <div className="button-field">
                                <button type="submit" className="submit-btn">APPLY</button>
                                <button type="button" className="discard-btn" >DISCARD</button>
                            </div>  
                        </form>
                    </div>    
                </div>    

                </MobileDash>
            </div>
            </div>
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

export default connect(mapstatetoprops,MapDispatchToProps) (Notifications)
