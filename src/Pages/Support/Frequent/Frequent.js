import React from 'react'
import {Link} from 'react-router-dom'
import DashFrame from '../../../Components/DashFrame/DashFrame';
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { headercolor } from '../../../redux/flex/flex.actions';
import {ReactComponent as GeneralFAQsvg} from  '../../../Asset/GeneralFAQsvg.svg';
import './Frequent.css';
import MobileDash from '../../../Components/MobileDash/MobileDash';

const Frequent = ({presentcolor,headercolor}) => {

    useEffect(()=>{
        headercolor({ dashheadercolor:"#6200f0"}) 

    },[])


    return (
        <>
        <div className="webmobile-frequent-view">
        <div className="web-frequent-view">
            <DashFrame dashSupportStyle={{backgroundColor:presentcolor.dashheadercolor}}>
                <div className="inner-settings-section">
                    <div className="header">
                        <h3>Support</h3>
                        <hr className="welcome-divider"/>
                    </div>
                    <div className="sub-header">
                        <Link to="/support/faq" style={{borderBottom: "3px solid #6200f0", color: "#030640"}}><p>FAQs</p></Link>
                        <Link to="#"><p>Contact us</p></Link>
                        <Link to="#"><p>Reviews</p></Link>
                    </div>
                    <div className="inner-section-faq" style={{padding: "0", flexDirection: "column"}}>   
                        <div className="faq-general">
                            <GeneralFAQsvg/>
                        </div>
                        <select className="questions">
                            <option>Q1. How do I set up my E-Wallet?</option>
                        </select>
                        <select className="questions">
                            <option>Q2. How secure is my E-Wallet account on Flex?</option>
                        </select>
                        <select className="questions">
                            <option>Q3. Can I check my subscription history on Flex?</option>
                        </select>
                        <select className="questions">
                            <option>Q4. Can I pay with my card on Flex?</option>
                        </select>
                        <select className="questions">
                            <option>Q5. How can I Activate Auto-Renewal on Flex?</option>
                        </select>
                        <select className="questions">
                            <option>Q6. Can I subscribe to more than one product on Flex?</option>
                        </select>
                        <select className="questions">
                            <option>Q7. Can I set a reminder on Flex?</option>
                        </select>
                        <select className="questions">
                            <option>Q8. Can I pay in any currency on Flex?</option>
                        </select>
                        <select className="questions">
                            <option>Q9. How can I learn more about products and services?</option>
                        </select>
                        <select className="questions">
                            <option>Q10. Do I get to enjoy discounts on Flex?</option>
                        </select>
                    </div>
                    
                </div>    
            </DashFrame> 
            </div>
            <div className="mobile-frequent-view">
                <MobileDash dashSupportStyle={{backgroundColor:presentcolor.dashheadercolor}}>
                <div className="inner-settings-section0">
                    <div className="header">
                        <h3>Support</h3>
                        {/* <hr className="welcome-divider"/> */}
                    </div>
                    <div className="sub-headers">
                        <Link to="/support/faq" style={{borderBottom: "3px solid #6200f0", color: "#030640"}}><p>FAQs</p></Link>
                        <Link to="#"><p>Contact us</p></Link>
                        <Link to="#"><p>Reviews</p></Link>
                    </div>
                    <div className="inner-section-faq" style={{padding: "0", flexDirection: "column"}}>   
                        <div className="faq-general">
                            <GeneralFAQsvg style={{width:"140px"}}/>
                        </div>
                        <select className="questions">
                            <option>Q1. How do I set up my E-Wallet?</option>
                        </select>
                        <select className="questions">
                            <option>Q2. How secure is my E-Wallet account on Flex?</option>
                        </select>
                        <select className="questions">
                            <option>Q3. Can I check my subscription history on Flex?</option>
                        </select>
                        <select className="questions">
                            <option>Q4. Can I pay with my card on Flex?</option>
                        </select>
                        <select className="questions">
                            <option>Q5. How can I Activate Auto-Renewal on Flex?</option>
                        </select>
                        <select className="questions">
                            <option>Q6. Can I subscribe to more than one product on Flex?</option>
                        </select>
                        <select className="questions">
                            <option>Q7. Can I set a reminder on Flex?</option>
                        </select>
                        <select className="questions">
                            <option>Q8. Can I pay in any currency on Flex?</option>
                        </select>
                        <select className="questions">
                            <option>Q9. How can I learn more about products and services?</option>
                        </select>
                        <select className="questions">
                            <option>Q10. Do I get to enjoy discounts on Flex?</option>
                        </select>
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

export default connect(mapstatetoprops,MapDispatchToProps) (Frequent)