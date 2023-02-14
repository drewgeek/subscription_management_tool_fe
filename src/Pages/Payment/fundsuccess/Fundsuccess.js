import React from 'react'
import DashFrame from '../../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {ReactComponent as Success} from '../../../Asset/Success-icon.svg'
import { headercolor } from '../../../redux/flex/flex.actions';
import { editarray } from '../../../redux/flex/flex.actions'
import axios from 'axios'
// import '../ Paymentsuccess/ Paymentsuccess.css'
// import '../Fundsuccess/Fundsuccess.css'
import '../fundsuccess/Fundsuccess.css'
import { FaSellsy } from 'react-icons/fa'
import { baseURL } from '../../../domain'

function Fundsuccess({subscription,editarray}){
    const[realBalance,setRealBalance]=useState()

    useEffect(()=>{
   
  
   let token = JSON.parse(localStorage.getItem('bearertoken'));
          axios.defaults.headers.common['Authorization'] = token; 
         

    axios.get(`${baseURL}/users/wallet`)
    .then(res=>{
      
    //   console.log(res.data.data.data.balance)
      console.log(res.data.data.balance)
      let amtBalance=res.data.data.balance
    //   console.log(amtBalance)
      let fundRes=JSON.parse(localStorage.getItem('fundRes'))
      console.log(fundRes.amount)
      let newBalance=(+amtBalance)+(+fundRes.amount)
      setRealBalance((+amtBalance)+(+fundRes.amount))
      console.log(newBalance)
      let paramval={
          balance:newBalance
      }
      axios.patch(`${baseURL}/users/wallet`,paramval)
    .then(res=>{
        console.log(res)
    })
    })
    .catch((err)=>{
        console.log(err)
    })
},[])
   
return(
    
        <div className="paymentsuccess">

            <div className="payment-inner">

              <Success/>
               <h3>FUNDING SUCCESSFUL</h3>
               <Link to="/Dashboard" className="return-home">BACK TO HOME</Link>
               
            </div>
        </div>
         
 

)


}
const MapDispatchToProps=(dispatch)=>({

    //const userinput= {[items]:value}
     //signin:(item)=> dispatch(signin(item)),
    
    //  headercolor:(item)=>dispatch(headercolor(item)),
     editarray:(item)=>dispatch(editarray(item))
 
 })
const mapstatetoprops=({flex:{presentcolor,editarray,subscription}})=>({
 
    
    editarray,
    subscription
   
   

}) 

export default connect(mapstatetoprops,MapDispatchToProps)  (Fundsuccess)