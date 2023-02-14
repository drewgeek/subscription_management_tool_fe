import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import Dashopen from '../../Components/Dashopen/Dashopen'
import { connect } from 'react-redux'
import {useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom'

import { headercolor } from '../../redux/flex/flex.actions'
import {ReactComponent as Rectangle} from '../../Asset/Rectangle-option.svg'
import {ReactComponent as Paycard} from '../../Asset/PayCard.svg'
import {ReactComponent as Paywallet} from '../../Asset/Paywallet.svg'
import {ReactComponent as Flutterwave} from '../../Asset/Flutterwave.svg'
import {ReactComponent as Flutterwaves} from '../../Asset/Flutterwavess.svg'
import Rect from '../../Asset/Group rect.png'
import MobileDash from '../../Components/MobileDash/MobileDash'
import Icon from '../../Components/Image/Image'

import Flutterwavepng from '../../Asset/Flutterwave.png'
import paystack from '../../Asset/paystack.png'
import {ReactComponent as Paystack} from '../../Asset/paystack.svg'
import Flutter from '../../Components/Flutter/Flutter'
import axios from 'axios'
import '../Walletpayment/Walletpayment.css'


function Walletpayment({presentcolor,headercolor}){
    const history=useHistory()
    const[cardbalance,setCardbalance]=useState(0.00)
    const[click,setClick]=useState(false)
    const[butnborder,setButnborder]=useState({})
    const[chosen,setChosen]=useState("")
    const[butnbordersecond,setButnbordersecond]=useState({})
    const[fundvalue,setFundvalue]=useState("0.00")
    let customerDetail=JSON.parse(localStorage.getItem('customerDetail'))
    useEffect(()=>{
        headercolor({ dashheadercolor:"#6200f0"})
       
        let userObject = JSON.parse(localStorage.getItem('userObject')); 
        setFundvalue(userObject.amount)

        axios.get("https://subscription-management-tool.herokuapp.com/users/wallet")
    .then(res=>{
        setCardbalance(res.data.data.balance)
      console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
       
     },[])
     function Continue(){
         history.push("/pinverification")
     }
return(
    <div className="total-payMENT-CARD">
        <div className="fund-view-paycard-div">
    <DashFrame dashheaderstyle={{backgroundColor:presentcolor.dashheadercolor}}>
        <div className="paymentoption">
            <div>
                <div className="header-payment">
                <h3 className="fund">PAY WITH E-WALLET </h3>
                </div>
                <div className="fundwallet-inner">
                <div className="image-and-option-fund">
                    <div className="image-left-fund">
                    <div className="card-in-fundwallet">
                            <div className="cardImage-subscribe">
                   
                   <div className="cardImage-acc-subscribe">
                       <p>Account Id</p>
                       <p className="medium-weight-dashboard">{customerDetail.userId}</p>
                   </div>
                     <div className="cardImage-balance-subscribe">
                         <p className="medium-weight-dashboard">E-wallet Balance</p>
                         <p className="money-dashboard">NGN {cardbalance}</p>
                     </div>
                 </div>
                    </div>
                    </div>
                    <div className="option-right-fund">
                  
                          
                          <p>Debit E-Wallet with</p>
                         <div className="fund-value-div">N{fundvalue}</div>
                         
                    </div>
                </div>

                <div className="payment-select-cards-buttons">
                            <button onClick={history.goBack} className="cancel-payment">CANCEL</button>
                            <button className="proceed-payment"  onClick={Continue}>PROCEED</button>
                           
                        </div>
                </div>


               
                </div>
        </div>
         
    </DashFrame>
    </div>
<div className="fund-mobile-views">
<MobileDash>
    <div className="mobile-option-payMent">
    <div className="header-payment">
                <h3 className="fund">PAY WITH E-WALLET</h3>
                </div>
                <div className="fundwallet-inner">
                <div className="image-and-option-fund">
                    <div className="image-left-fund">
                    <div className="card-in-fundwallet">
                            <div className="cardImage-subscribe">
                   
                   <div className="cardImage-acc-subscribe">
                       <p>Account Id</p>
                       <p className="medium-weight-dashboard">20210801</p>
                   </div>
                     <div className="cardImage-balance-subscribe">
                         <p className="medium-weight-dashboard">E-wallet Balance</p>
                         <p className="money-dashboard">NGN {cardbalance}</p>
                     </div>
                 </div>
                    </div>
                    </div>
                    <div className="option-right-fund">
                  
                          
                          <p>Debit E-Wallet with</p>
                          <div className="fund-value-div">N{fundvalue}</div>
                         
                         
                    </div>
                </div>

                <div className="payment-select-cards-buttons">
                            <button onClick={history.goBack} className="cancel-payment">CANCEL</button>
                            <button className="proceed-payment" style={chosen==="flutter" ? {display:"none"}:{display:"inline-block"}} onClick={Continue}>PROCEED</button>
                            <div className="flutterbutn" style={chosen!=="flutter" ? {display:"none"}:{display:"inline-block"}}><Flutter id="flutterbutn"  className="flutterbutn" /></div>
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

export default connect(mapstatetoprops,MapDispatchToProps) (Walletpayment)