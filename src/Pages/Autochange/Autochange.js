import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import Dashopen from '../../Components/Dashopen/Dashopen'
import { connect } from 'react-redux'
import {useEffect,useState} from 'react'
import { baseURL } from '../../domain'
import { useHistory } from 'react-router-dom'
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa";
import { headercolor } from '../../redux/flex/flex.actions';
import { addarray } from '../../redux/flex/flex.actions'
import Belowbox from '../../Components/Belowbox/Belowbox';
import Gotv from '../../Asset/GOTV.png';
import Dstv from '../../Asset/Dstv.png';
import Startimes from '../../Asset/Startimes.png';
import Boxoffice from '../../Asset/BoxOffice.png';
import Netflix from '../../Asset/Netflix.png';
import Showmax from '../../Asset/Showmax.png';
import Playstation from '../../Asset/Playstation.png'
import Upperbox from '../../Components/Upperbox/Upperbox'
import Smallbox from '../../Components/Smallbox/Smallbox'
import axios from 'axios'
import MobileDashopen from '../../Components/MobileDashopen/MobileDashopen'
import '../Autochange/Autochange.css'

function Autochange(){
    const[autorenewal,setAutorenewal]=useState("Disabled")
    const[checkers,setCheckers]=useState(false)
    const history=useHistory()
    let Info = JSON.parse(localStorage.getItem('detailedInfos'));
    useEffect(()=>{
        let token = JSON.parse(localStorage.getItem('bearertoken'));
        axios.defaults.headers.common['Authorization'] = token; 
        setAutorenewal(Info.renew)
        if(Info.renew==="Enabled"){
            setCheckers(true)
        }

    },[])

    console.log(Info)
    return (
        <div>
            <div className="web-Autochange">
    <Dashopen>
    <div className="Autochange">
    <Upperbox/>

    <div className="belowbox">
            <div>
                <div className="belowbox-Header">
                    <h3>Product Category</h3>
                    <h3>ENTERTAINMENT</h3>
                </div>
                <div className="belowbox-inner-all">
                <div className="belowbox-inner">
                    <Smallbox icon={Info.image}/>
                    <div className="below-categ-div">
                        
                        <div className="below-category-options">
                            <p>Packages</p>
                            <div className="selected-div-below">
          
                <select name="choice"  className="select-placeholder-below" id="selectlists-below" >
                <option value="country" >{Info.name}</option>
                   
                     

                </select>
           
                </div>
                        </div>
                        <div className="below-category-options">
                        <p>Amount</p>
                        <p>NGN{Info.amount}</p>
                        {/* {  result=product.filter((vals,index)=>{
                      
                       selectindex==index
                        return(
                            <option key={index} value={vals}>{vals.productName}</option>
                        )
                    })}  */}
                        {/* <input type="number" onChange={((e)=>{addsubs({Amount:e.target.value});console.log(e.target.value)})}/>
                        <p>package</p>
                        <input type="text" onChange={((e)=>{addsubs({Package:e.target.value})})}/> */}
                        {/* <p>N2500.00</p> */}
                        </div>
                        <div className="below-category-options">
                        <p>Billing Cycle</p>
                        <div className="selected-div-below">
          
                <select name="cycle"   className="select-placeholder-below" id="selectlist-below" >
                <option value="country" >{Info.billincycle}</option>
                {/* {product.map((vals,index)=>{
                      
                      console.log(product) */}
                       {/* return( */}
                           <option  value="Monthly">Monthly</option>
                       {/* )
                   })}  */}

                </select>
           
                </div>
                        </div>
                        <div className="below-category-options">
                        <p>Auto Renewal</p>
                        <div className="below-enable">
                            <p>{autorenewal}</p>
                            <label className="switch">
  <input type="checkbox" onClick={(()=>{if(autorenewal=="Disabled"){setAutorenewal("Enabled")
  setCheckers(true)}
  else{setAutorenewal("Disabled") 
  setCheckers(false)}
//   let option=autorenewal
//   console.log(option)
    //   setAutorenewal("Enabled");
    // addsubs({Renewal:autorenewal});console.log(autorenewal)
})
  
  } checked={checkers}/>
  <span class="slider round"></span>
</label>
                        </div>
                        </div>
                    </div>
                    </div>
                   
                <div className="below-butn">
                    <button className="first-belowbutton" onClick={
                        history.goBack
                        }
                    >DISCARD</button>
                    {/* <button className="second-belowbutton" onClick={(()=>{choice=="" ? noclick(): secondclick()})} >{secondbutn}</button> */}
                    <button className="second-belowbutton" onClick={(()=>{
                       
                         let clientIds = JSON.parse(localStorage.getItem('clientIds'));
                         let params={
                             autoRenew:autorenewal
                            }
                        axios.patch(`${baseURL}/users/subscription/${clientIds}`,params)
                        .then(res=>{
                        console.log(res)
                        history.goBack()
                        //localStorage.removeItem(clientIds)
                        //localStorage.removeItem(clientRes)
                        // //history.push("/dashboard")
                        
                        })
                        
                        })} >SAVE</button>
                </div>
                </div>
               
            </div>

        </div>
         
  

)



  
</div>
</Dashopen>
</div>
<div className="mobile-Autochange">

<MobileDashopen>
    <div className="Autochange">
    <Upperbox/>

    <div className="belowbox">
            <div>
                <div className="belowbox-Header">
                    <h3>Product Category</h3>
                    <h3>ENTERTAINMENT</h3>
                </div>
                <div className="belowbox-inner-all">
                <div className="belowbox-inner">
                    <Smallbox icon={Info.image}/>
                    <div className="below-categ-div">
                        
                        <div className="below-category-options">
                            <p>Packages</p>
                            <div className="selected-div-below">
          
                <select name="choice"  className="select-placeholder-below" id="selectlists-below" >
                <option value="country" >{Info.name}</option>
                   
                     

                </select>
           
                </div>
                        </div>
                        <div className="below-category-options">
                        <p>Amount</p>
                        <p>NGN{Info.amount}</p>
                        {/* {  result=product.filter((vals,index)=>{
                      
                       selectindex==index
                        return(
                            <option key={index} value={vals}>{vals.productName}</option>
                        )
                    })}  */}
                        {/* <input type="number" onChange={((e)=>{addsubs({Amount:e.target.value});console.log(e.target.value)})}/>
                        <p>package</p>
                        <input type="text" onChange={((e)=>{addsubs({Package:e.target.value})})}/> */}
                        {/* <p>N2500.00</p> */}
                        </div>
                        <div className="below-category-options">
                        <p>Billing Cycle</p>
                        <div className="selected-div-below">
          
                <select name="cycle"   className="select-placeholder-below" id="selectlist-below" >
                <option value="country" >{Info.billincycle}</option>
                {/* {product.map((vals,index)=>{
                      
                      console.log(product) */}
                       {/* return( */}
                           <option  value="Monthly">Monthly</option>
                       {/* )
                   })}  */}

                </select>
           
                </div>
                        </div>
                        <div className="below-category-options">
                        <p>Auto Renewal</p>
                        <div className="below-enable">
                            <p>{autorenewal}</p>
                            <label className="switch">
  <input type="checkbox" onClick={(()=>{if(autorenewal=="Disabled"){setAutorenewal("Enabled")
  setCheckers(true)}
  else{setAutorenewal("Disabled") 
  setCheckers(false)}
//   let option=autorenewal
//   console.log(option)
    //   setAutorenewal("Enabled");
    // addsubs({Renewal:autorenewal});console.log(autorenewal)
})
  
  } checked={checkers}/>
  <span class="slider round"></span>
</label>
                        </div>
                        </div>
                    </div>
                    </div>
                   
                <div className="below-butn">
                    <button className="first-belowbutton" onClick={
                        history.goBack
                        }
                    >DISCARD</button>
                    {/* <button className="second-belowbutton" onClick={(()=>{choice=="" ? noclick(): secondclick()})} >{secondbutn}</button> */}
                    <button className="second-belowbutton" onClick={(()=>{
                       
                         let clientIds = JSON.parse(localStorage.getItem('clientIds'));
                         let params={
                             autoRenew:autorenewal
                            }
                        axios.patch(`${baseURL}/users/subscription/${clientIds}`,params)
                        .then(res=>{
                        console.log(res)
                        history.goBack()
                        //localStorage.removeItem(clientIds)
                        //localStorage.removeItem(clientRes)
                        // //history.push("/dashboard")
                        
                        })
                        
                        })} >SAVE</button>
                </div>
                </div>
               
            </div>

        </div>
         
  

)



  
</div>
</MobileDashopen>

</div>
</div>
)

}

export default Autochange