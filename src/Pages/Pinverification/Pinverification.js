import React from 'react'
import Authenticate from '../../Asset/Authenticate.png'
import DashFrame from '../../Components/DashFrame/DashFrame';
import {useState} from 'react'
import { useHistory } from 'react-router-dom';
import {ReactComponent as Cancel} from '../../Asset/Closesvg.svg'
import axios from 'axios';
import '../Pinverification/Pinverification.css'

function Pinverification(){
    const history=useHistory()
    const[firstpin, setFirstpin]=useState()
    const[secondpin, setSecondpin]=useState()
    const[thirdpin, setThirdpin]=useState()
    const[fourthpin, setFourthpin]=useState()
    const[combinedpin,setCombinedpin]=useState()
    const[popupInfo,setPopupInfo]=useState({display:"none"})
    const[popupbal,setPopupbal]=useState({display:"none"})

    const handleconfirm=( )=>{
      if((secondpin==="2") && (firstpin==="1") && (thirdpin==="3") && (fourthpin==="4")){
        let totalVal=+firstpin.concat(+secondpin).concat(+thirdpin).concat(+fourthpin)
        setCombinedpin(totalVal)
        console.log(typeof combinedpin)
     
      
      // if(combinedpin!==""){
        

        axios.get("https://subscription-management-tool.herokuapp.com/users/wallet")
    .then(res=>{
      
    //   console.log(res.data.data.data.balance)
      console.log(res.data.data.balance)
      let amtBalance=res.data.data.balance
      let userObject=JSON.parse(localStorage.getItem('userObject'))
    //   console.log(amtBalance)
      if(amtBalance>=userObject.amount){
        {history.push("/processing")}
      }
      else{setPopupbal({display:"flex"})}
      
     
    })
    .catch((err)=>{
        console.log(err)
    })
       
       }
      // }
       else{setPopupInfo({display:"flex"})}
    
    }
  return(
      <DashFrame>
           <div  style={popupInfo} className="check-issue">
                    <div className="cancel-confirm-signup" onClick={(()=>{setPopupInfo({display:"none"}) }) } ><Cancel/></div>
                        <p>Incorrect pin.</p>
                    </div>
                    <div  style={popupbal} className="check-issue">
                    <div className="cancel-confirm-signup" onClick={(()=>{setPopupbal({display:"none"}) }) } ><Cancel/></div>
                        <p>Insufficient fund.</p>
                    </div>
    <div className="Pinverification">
        <h3>Authenticate</h3>
        <div className="image-pin-input">
            <div className="authenticate-image-div"><img src={Authenticate} alt="authenticate"/></div>
            <div className="pin-confirm-and-pin">
                <h3>PIN CONFIRMATION</h3>
                <p>Please provide your 4-digit PIN to confirm payment</p>
                <div className="pin-input-div">
                <input type="password" className="pin-input" onChange={((e)=>{setFirstpin(e.target.value)})}/>
                <input type="password" className="pin-input"onChange={((e)=>{setSecondpin(e.target.value)})}/>
                <input type="password" className="pin-input"onChange={((e)=>{setThirdpin(e.target.value)})}/>
                <input type="password" className="pin-input"onChange={((e)=>{setFourthpin(e.target.value)})}/>
                </div>
            </div>
        </div>
        <div className="pinverification-button">
            <button className="cancel-action" onClick={history.goBack}>CANCEL</button>
            <button className="confirm-action" onClick={handleconfirm}>CONFIRM</button>
        </div>
    </div>
    </DashFrame>
  )


}
export default Pinverification