import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { headercolor } from '../../redux/flex/flex.actions';
import '../Invite/Invite.css'

function Invite({presentcolor,headercolor}){
    useEffect(()=>{
        headercolor({ dashinvitecolor:"#6200f0"})
                    
       
     },[])
return(
    <>
        <DashFrame dashinvitestyle={{backgroundColor:presentcolor.dashinvitecolor}}>
            <div className="inner-settings-section">
                <div className="header">
                    <h3>Invite a friend</h3>
                    <hr className="welcome-divider"/>
                </div>
                <form>
                    <div className="inner-section" style={{flexDirection: "column"}}>   
                        <h4 className="tell">Tell your friends about us...</h4>
                        <label className="phone-label">Enter email or phone number of contact</label>
                        <input type="text" placeholder="Email or Phone number" className="input-fld"/>
                        <label className="message-label">Message</label>
                        <div className="textarea-div">
                            <textarea className="textarea">Flex is a subscription management platform that allows you to mange multiple subscription plans.it gives you the freedom to control and keep track of your expenses.</textarea>
                        </div>
                        <button type="submit" className="invite-button">SEND INVITE</button>
                        <label className="copy-label">Or Copy Link</label>
                        <input type="text" placeholder="https://bit.ly?exgO9fdjhjgh" className="input-fld"/>
                    </div>
                </form>
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

export default connect(mapstatetoprops,MapDispatchToProps) (Invite)