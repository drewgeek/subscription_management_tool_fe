import React from 'react'
import {ReactComponent as FlexLogo} from '../../../Asset/LOGO FLEX.svg';
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa"; 
import {Link} from 'react-router-dom'
import DashFrame from '../../../Components/DashFrame/DashFrame';
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { headercolor } from '../../../redux/flex/flex.actions';
import './Application.css'
import MobileDash from '../../../Components/MobileDash/MobileDash';

const Application = ({presentcolor,headercolor}) => {
    const user = localStorage.getItem('user');
    const userStr = JSON.parse(user)

    useEffect(()=>{
        headercolor({ dashheadercolor:"#6200f0"}) 

    },[])

    return (
        <>
        <div className="mobileweb-App-Setting">
            <div className="web-App-Setting">
            <DashFrame dashSettingsStyle={{backgroundColor:presentcolor.dashheadercolor}}>
                <div className="inner-settings-section">
                    <div className="header">
                        <h3>Settings</h3>
                        <hr className="welcome-divider"/>
                    </div>
                    <div className="sub-header">
                        <Link to={`/settings/profile/${userStr.id}`}><p>Profile</p></Link>
                        <Link to="/settings/notifications"><p>Notifications</p></Link>
                        <Link to="/settings/application" style={{borderBottom: "3px solid #6200f0", color: "#030640"}}><p>Application</p></Link>
                        <Link to="/settings/payments"><p>Payments</p></Link>
                    </div>
                    <div className="inner-section">
                        <form className="App-form">
                            <div className="Application-settings">
                            <div className="display-flex-app">
                                <div className="display">
                                    <h4>Display</h4>
                                    <div className="dark-mode">
                                        <span>Dark mode</span>
                                        <label className="switch">
                                            <input type="checkbox" className="input-check"/>
                                            <span className="slider rounded"/>
                                        </label> 
                                    </div>
                                    <div className="font-size">
                                        <span>Font size</span>
                                        <select name="font-size">
                                            <option value="small">Small</option>
                                            <option value="normal">Normal</option>
                                            <option value="large">large</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="language">
                                    <h4>Language</h4>
                                    <div className="prefered-language">
                                        <span>Select your prefered language</span>
                                        <select name="language">
                                            <option value="English">ENG</option>
                                            <option value="French">FRA</option>
                                            <option value="Spanish">ESP</option>
                                        </select>
                                    </div>
                                </div>
                                </div>
                                <div className="currency">
                                    <h4>Currency</h4>
                                    <div className="prefered-language">
                                        <span>Select your prefered currency</span>
                                        <select name="currency">
                                            <option value="Naira">NGN</option>
                                            <option value="Dollar">USD</option>
                                            <option value="Pound">GBP</option>
                                        </select>
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
            </div>
            <div className="mobile-App-Setting">
                <MobileDash  dashSettingsStyle={{backgroundColor:presentcolor.dashheadercolor}}>
                <div className="inner-settings-sectiong">
                    <div className="header">
                        <h3>Settings</h3>
                        {/* <hr className="welcome-divider"/> */}
                    </div>
                    <div className="sub-headers">
                        <Link to={`/settings/profile/${userStr.id}`}><p>Profile</p></Link>
                        <Link to="/settings/notifications"><p>Notifications</p></Link>
                        <Link to="/settings/application" style={{borderBottom: "3px solid #6200f0", color: "#030640",marginRight:"16px"}}><p style={{marginRight:"0"}}>Application</p></Link>
                        <Link to="/settings/payments"><p>Payments</p></Link>
                    </div>
                    <div className="inner-sectiong">
                        <form className="App-form">
                            <div className="Application-settings">
                                <div className="display">
                                    
                                    <h4>Display</h4>
                                    <div className="dark-mode">
                                        <span>Dark mode</span>
                                        <label className="switch">
                                            <input type="checkbox" className="input-check"/>
                                            <span className="slider rounded"/>
                                        </label> 
                                    </div>
                                    <div className="font-size">
                                        <span>Font size</span>
                                        <select name="font-size">
                                            <option value="small">Small</option>
                                            <option value="normal">Normal</option>
                                            <option value="large">large</option>
                                        </select>
                                    </div>
                                    </div>
                                <div className="language">
                                    <h4>Language</h4>
                                    <div className="prefered-language">
                                        <span>Select your prefered language</span>
                                        <select name="language">
                                            <option value="English">ENG</option>
                                            <option value="French">FRA</option>
                                            <option value="Spanish">ESP</option>
                                        </select>
                                    </div>
                                </div>
                              
                               
                                <div className="currency">
                                    <h4>Currency</h4>
                                    <div className="prefered-language">
                                        <span>Select your prefered currency</span>
                                        <select name="currency">
                                            <option value="Naira">NGN</option>
                                            <option value="Dollar">USD</option>
                                            <option value="Pound">GBP</option>
                                        </select>
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

export default connect(mapstatetoprops,MapDispatchToProps) (Application)