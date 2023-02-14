import React, { useState } from 'react'
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {FaUserAlt} from "react-icons/fa"; 
import { useHistory, } from 'react-router-dom';
import { connect } from 'react-redux';
import {useEffect} from 'react'
import notification from '../../Asset/Notification.png'
import newsfeed from '../../Asset/Newsfeed.png'
import invite from '../../Asset/Invite.png'
import subscription from '../../Asset/Subscription.png'
import home from '../../Asset/Home.png'
import logout from '../../Asset/Logout.png'
import support from '../../Asset/Support.png'
import payment from '../../Asset/Payment.png'
import {ReactComponent as Home} from  '../../Asset/homesvg.svg'
import {ReactComponent as Sub} from  '../../Asset/Subsvg.svg'
import {ReactComponent as Paymentsvg} from  '../../Asset/Paymentsvg.svg'
import {ReactComponent as Settingssvg} from  '../../Asset/Settingssvg.svg'
import {ReactComponent as Invitesvg} from  '../../Asset/Invitesvg.svg'
import {ReactComponent as Supportsvg} from  '../../Asset/Supportsvg.svg'
import {ReactComponent as Logoutsvg} from  '../../Asset/Logoutsvg.svg'
import settings from '../../Asset/Settings.png'
import '../DashFrame/DashFrame.css';

function DashFrame({dashPaymentStyle, children,dashheaderstyle,dashinvitestyle,dashsubscribestyle,dashSettingsStyle,dashSupportStyle, paymentstyle, customer}){
    const history = useHistory()
    const user = localStorage.getItem('user');
    const userStr = JSON.parse(user)
  
    const[customerDetail,setCustomerDetail]=useState("")
    useEffect(()=>{
      let customerDetails=JSON.parse(localStorage.getItem('customerDetail'))
     setCustomerDetail(customerDetails)
        let customers=customer
        console.log(customerDetail.firstname)
    },[])

    return(
        <div className="dashboard">
            <div className="dashboard-inner">
                <div className="dashboard-left">
                    <div>
                    <FlexLogo className="dashboard-logo" />
                    </div>
                    <div className="list">
                       
                        <div onClick={(()=>{history.push("/dashboard")})} style={dashheaderstyle} className="inner-list">
                            <div className="dash-icon"><Home/></div>
                            <p>Home</p>
                            </div>
                            <div onClick={(()=>{history.push("/subscription")})} style={dashsubscribestyle} className="inner-list">
                            <div className="dash-icon"><Sub/></div>
                            <div >Subscription</div>
                            </div>
                            <div onClick={() => {history.push('/payment/funding-history')}} className="inner-list"  style={dashPaymentStyle}>
                            <div className="dash-icon"><Paymentsvg/></div>
                            <div>Payments</div>
                            </div>

                            <div onClick={(() => {history.push(`/settings/profile/${userStr.id}`)})} style={dashSettingsStyle} className="inner-list">
                            <div className="dash-icon"><Settingssvg/></div>
                            <div>Settings</div>
                            </div>

                            <div onClick={() => {history.push('/support/faq')}} style={dashSupportStyle} className="inner-list">
                            <div className="dash-icon"><Supportsvg/></div>
                            <div>Support</div>
                            </div>
                            <div onClick={(()=>{history.push("/invite")})} style={dashinvitestyle}  className="inner-list">
                            <div className="dash-icon"><Invitesvg/></div>
                            <div>Invite a friend</div>
                            </div>
                            <div className="inner-list">
                            <div className="dash-icon"><Logoutsvg/></div>
                            <div onClick={(()=>{history.push("/logout")})}>Logout</div>
                            </div>
                           
                        
                    </div>
                </div>
                <div className="dashboard-right">
                    <div className="dash-upper">
                        <div className="dash-upper-left">

                            <div className="first">{typeof (customerDetail.photo)==="string" ? (<div className="profile-image-dash"><img src={customerDetail.photo}/></div>): (<div className="profile-image-dash"><FaUserAlt className="userpix-dash"/></div>)}</div>

                            <div>Hi, {customerDetail.firstName}</div>

                            

                        </div>
                        <div className="dash-upper-right">
                            <div className="firsts"><img src={newsfeed}/></div>
                            <div className="divider"></div>
                            <div className="second"><img src={notification}/></div>
                        </div>
                    </div>
                        <div>{children}</div>
                        
                </div>
            </div>
        </div>

    )

}
const mapstatetoprops=({flex:{presentcolor,customer}})=>({
 
    presentcolor,
    customer
   
   

})

export default connect (mapstatetoprops) (DashFrame)
