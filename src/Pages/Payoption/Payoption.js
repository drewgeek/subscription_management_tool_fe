import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import Dashopen from '../../Components/Dashopen/Dashopen'
import { connect } from 'react-redux'
import MobileDash from '../../Components/MobileDash/MobileDash'
import {useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom'
import { headercolor } from '../../redux/flex/flex.actions';
import {ReactComponent as Rectangle} from '../../Asset/Rectangle-option.svg'
import {ReactComponent as Paycard} from '../../Asset/PayCard.svg'
import {ReactComponent as Paywallet} from '../../Asset/Paywallet.svg'
import Rect from '../../Asset/Group rect.png'
import '../Payoption/Payoption.css'

function Payoption({presentcolor,headercolor}){
    const history=useHistory()
    const[click,setClick]=useState(false)
    const[butnborder,setButnborder]=useState({})
    const[chosen,setChosen]=useState("")
    const[butnbordersecond,setButnbordersecond]=useState({})
    useEffect(()=>{
        headercolor({ dashheadercolor:"#6200f0"})
                    
       
     },[])
return(
    <div className="total-pay-option">
    <div className="web-pay-option">
    <DashFrame dashheaderstyle={{backgroundColor:presentcolor.dashheadercolor}} className="pay-option-dash-web">
        <div className="paymentoption">
            <div>
                <div className="header-payment">
                <h3>PAYMENT METHOD </h3>
                </div>
                <div className="payment-inner-content">
                    <p>Please select your preffered payment option</p>
                    <div className="image-and-option-payment">
                        <div><Rectangle/></div>
                     
                        <div className="payment-option-buttons">
                            <button style={butnborder} onClick={(()=>{
                        if(click==false){setClick(true)
                        ;setButnborder({border:"1px solid #6200f0"})
                        setChosen("card")
                        }})}><Paycard className="payment-option-icon"/>PAY WITH CARD</button>
                            <button style={butnbordersecond} onClick={(()=>{
                        if(click==false){
                            setButnbordersecond({border:"1px solid #6200f0"})
                            setClick(true) 
                            setChosen("wallet")
                            
                            }})}><Paywallet className="payment-option-icon"/>PAY WITH E-WALLET</button>
                        </div>
                        
                    </div>
                    <div className="payment-select-buttons">
                            <button onClick={history.goBack} className="cancel-payment">CANCEL</button>
                            <button onClick={(()=>{if(chosen=="card"){history.push("/paymentcard")} else{history.push("/walletpayment")}                             })} className="proceed-payment">PROCEED</button>
                        </div>
               </div>
                </div>
        </div>
         
    </DashFrame>
    </div>
    <div className="pay-mobile-views">
    <MobileDash>
        <div className="mobile-option-payMent">
                            <div className="heading-payment"> <h3>PAYMENT METHOD </h3></div>
                            <div >
                            <p className="parag-option"> Please select your preffered payment option</p>
                            <div >
                        <div className="recTangle-div"><img src={Rect}/></div>
                            </div>
                            <div className="payment-option-cad-mobile">
                            <button style={butnborder} onClick={(()=>{
                        if(click==false){setClick(true)
                        ;setButnborder({border:"1px solid #6200f0"})
                        setChosen("card")
                        }})}><Paycard className="payment-option-icon"/>PAY WITH CARD</button>
                            <button style={butnbordersecond} onClick={(()=>{
                        if(click==false){
                            setButnbordersecond({border:"1px solid #6200f0"})
                            setClick(true) 
                            setChosen("wallet")
                            
                            }})}><Paywallet className="payment-option-icon"/>PAY WITH E-WALLET</button>
                            </div>
                            <div className="cance-proceed-mobile">
                            <button onClick={history.goBack} className="cancel-payment  second-cancel-button">CANCEL</button>
                            <button onClick={(()=>{if(chosen=="card"){history.push("/paymentcard")} else{history.push("/walletpayment")}})} className="proceed-payment">PROCEED</button>
                            </div>
                            </div>


        </div>
    
                {/* <div className="header-payment">
                <h3>PAYMENT METHOD </h3>
                </div>
                <div className="payment-inner-content">
                    <p>Please select your preffered payment option</p>
                    <div className="image-and-option-payment">
                        <div className="rect-div"><Rectangle className="rect-option"/></div>
                     
                        <div className="payment-option-buttons">
                            <button style={butnborder} onClick={(()=>{
                        if(click==false){setClick(true)
                        ;setButnborder({border:"1px solid #6200f0"})
                        setChosen("card")
                        }})}><Paycard className="payment-option-icon"/>PAY WITH CARD</button>
                            <button style={butnbordersecond} onClick={(()=>{
                        if(click==false){
                            setButnbordersecond({border:"1px solid #6200f0x"})
                            setClick(true) 
                            setChosen("wallet")
                            
                            }})}><Paywallet className="payment-option-icon"/>PAY WITH E-WALLET</button>
                        </div>
                        
                    </div>
                    <div className="payment-select-buttons">
                            <button onClick={history.goBack} className="cancel-payment  second-cancel-button">CANCEL</button>
                            <button onClick={(()=>{if(chosen=="card"){history.push("/paymentcard")}})} className="proceed-payment">PROCEED</button>
                        </div>
               </div> */}
              

    </MobileDash>
    </div>
   </div>
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

export default connect(mapstatetoprops,MapDispatchToProps) (Payoption)