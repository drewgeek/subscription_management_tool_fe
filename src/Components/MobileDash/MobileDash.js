import React from 'react'
// import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {FaUserAlt,FaBars} from "react-icons/fa";
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import notification from '../../Asset/Notification.png'
import newsfeed from '../../Asset/Newsfeed.png'
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import flexpng from '../../Asset/flexpng.png'
import {ReactComponent as Home} from  '../../Asset/homesvg.svg'
import {ReactComponent as Sub} from  '../../Asset/Subsvg.svg'
import {ReactComponent as Paymentsvg} from  '../../Asset/Paymentsvg.svg'
import {ReactComponent as Settingssvg} from  '../../Asset/Settingssvg.svg'
import {ReactComponent as Invitesvg} from  '../../Asset/Invitesvg.svg'
import {ReactComponent as Supportsvg} from  '../../Asset/Supportsvg.svg'
import {ReactComponent as Logoutsvg} from  '../../Asset/Logoutsvg.svg'
import {ReactComponent as Close} from '../../Asset/Closesvg.svg'

import {useEffect,useState} from 'react'


import '../MobileDash/MobileDash.css'


function MobileDash({children,dashheaderstyle,dashinvitestyle,dashsubscribestyle,dashSettingsStyle, paymentstyle,dashSupportStyle, customer}){
    const[customerDetail,setCustomerDetail]=useState("")
    const[leftNav,setLeftNav]=useState({display:"none"})
    const[rightNav,setRightNav]=useState({})
    const[rightNavbar,setRightNavbar]=useState({})
    const user = localStorage.getItem('user');
    const userStr = JSON.parse(user)
    const history=useHistory()
    useEffect(()=>{
      let customerDetails=JSON.parse(localStorage.getItem('customerDetail'))
     setCustomerDetail(customerDetails)
        //let customers=customer
        console.log(customerDetail.firstName)
    },[])
return(
    <div className="top-mobile-dash-nav">
    <div className="left-nav" style={leftNav}>
        <div className="logo-and-p">
        <div className="mobile-dash-logo" id="left-bar-logo">
            <img src={flexpng} alt="logo"/>
            </div>
            <div className="list">
                       
                       <div onClick={(()=>{history.push("/dashboard")})} style={dashheaderstyle} className="inner-list">
                           <div className="dash-icon"><Home/></div>
                           <p>Home</p>
                           </div>
                           <div onClick={(()=>{history.push("/subscription");setLeftNav({display:"none"})})} style={dashsubscribestyle} className="inner-list">
                           <div className="dash-icon"><Sub/></div>
                           <div >Subscription</div>
                           </div>
                           <div className="inner-list" style={paymentstyle}>
                           <div className="dash-icon"><Paymentsvg/></div>
                           <div>Payments</div>
                           </div>

                           <div onClick={(() => {setLeftNav({display:"none"});history.push(`/settings/profile/${userStr.id}`)})} style={dashSettingsStyle} className="inner-list">
                           <div className="dash-icon"><Settingssvg/></div>
                           <div>Settings</div>
                           </div>

                           <div className="inner-list" style={dashSupportStyle} onClick={(()=>{setLeftNav({display:"none"});history.push("/support/faq")})}>
                           <div className="dash-icon"><Supportsvg/></div>
                           <div>Support</div>
                           </div>
                           <div onClick={(()=>{setLeftNav({display:"none"});history.push("/invite")})} style={dashinvitestyle}  className="inner-list">
                           <div className="dash-icon"><Invitesvg/></div>
                           <div>Invite a friend</div>
                           </div>
                           <div className="inner-list">
                           <div className="dash-icon"><Logoutsvg/></div>
                           <div onClick={(()=>{history.push("/logout")})}>Logout</div>
                           </div>
                          
                       
                   </div>
                   </div>
      
    </div>
   <div className="mobileDashtotal" style={rightNav}>
   <div style={rightNavbar} className="rightnavbar">
        <div onClick={(()=>{ setLeftNav({display:"none"});setRightNavbar({display:"none"}) })    } className="closeIcon-mobile"><Close/></div>
        </div>
       <div className="mobile-dash-header">
         
       <div className="mobile-dash-header-left" onClick={(()=>{ setLeftNav({display:"flex"});setRightNavbar({backgroundColor:"rgba(0,0,0,0.3",display:"flex"}) })    }>
       <FaBars/>
       <div className="mobile-dash-logo" ><img src={flexpng} /></div>
       </div>
       <div className="mobile-dash-header-right">
           <div><img src={newsfeed} alt="newsfeed"/></div>
           <div><img src={notification} alt="notification"/></div>
       </div>
       </div>
       <div className="mobile-dash-lower">
       {/* <div className="profile-avatar">{customerDetail.photo!=""? ( */}
       
       <div className="profile-avatar">{typeof (customerDetail.photo)==="string"? (<img src={customerDetail.photo}/>):(<FaUserAlt />)}</div>
       {/* )}</div> */}
       {/* <div className="profile-avatar"><FaUserAlt/></div> */}
       <p>Hi,{ customerDetail.firstName}</p>
       </div>
       <div className="children" style={rightNav}>
           {children}
       </div>
      
   </div>
   </div>
)



}
const mapstatetoprops=({flex:{presentcolor,customer}})=>({
 
    presentcolor,
    customer
   
   

})
export default connect (mapstatetoprops) (MobileDash)