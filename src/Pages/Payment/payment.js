import React from 'react'
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa"; 
import LineChart from '../../Components/Linegraph/Linegraph';
import { Line } from 'react-chartjs-2';
import {ReactComponent as PlusLogo} from '../../Asset/Plus.svg'
import Loader from "react-loader-spinner";
import DashFrame from '../../Components/DashFrame/DashFrame';
import { connect } from 'react-redux'
import {useEffect,useState} from 'react'
import Bin from '../../Asset/dustbin.png'
import { useHistory } from 'react-router-dom';
import { headercolor } from '../../redux/flex/flex.actions';
import Smallestbox from '../../Components/Smallestbox/Smallestbox'
import Dstiv from '../../Asset/Dstv.png'
import Gotiv from '../../Asset/GOTV.png'
import MobileDash from '../../Components/MobileDash/MobileDash';
import plusCircle from '../../Asset/plus-circle.png'
import call from '../../Asset/Call Icon.png'
import Mail from '../../Asset/Mail icon.png'
import Mobilecard from '../../Components/Mobilecard/Mobilecard';
import axios from 'axios';
import download from '../../Asset/feather_download.png'
import '../Payment/payment.css'

function Payment({presentcolor,headercolor,subarray}){
    const[image,setImage]=useState({val:""})
    const[arr,setArr]=useState([])
    const history=useHistory()

    const[valname,setValname]=useState("")
    const[contentReal,setContentReal]=useState("")
    const[idSub,setIdSub]=useState([])
    const[itemId,setItemId]=useState("")
    const[namearr,setNamearr]=useState([])
    const[idReal,setIdReal]=useState("")
    const[loading, setLoading]=useState(false)
    const[itemColor,setItemColor]=useState({color:""})
    const[checkarr,setCheckarr]=useState([])
    const[searchDatar,setSearchDatar]=useState("")
    const[oct,setOct]=useState("")
    const[nov,setNov]=useState("")
    const[dec,setDec]=useState("")
    const[lastDate,setLastDate]=useState("-")
    const[cardbalance,setCardbalance]=useState(0)
    let janAmt=0
let febAmt=0
let marAmt=0
let aprAmt=0
let mayAmt=0
let junAmt=0
let julAmt=0
let augAmt=0
let sepAmt=0
let octAmt=0
let novAmt=0
let decAmt=0
let grapharr=[]

let news=0
let newsoct=0
let newoct=0

    let itemArray=[]
    let userDisplay=[]
    let pname=""
     let cat=""
     let cats=""
     let stat
     let expire=""
     let itemAmt=""
     let itemStatus=""
     let catg=""
     //let contens=""
     let itemExp=""
     let itemImg=""
     let product=""
     let descr=""
     let innercont=""
    let content=""
    let catId=""
    let arry=[]
    let arrs=[]
    let conty;
    //window.location.reload()
    let contentd=""
    let customerDetail=JSON.parse(localStorage.getItem('customerDetail'))
    useEffect(()=>{
       
        headercolor({ paymentcolor:"#6200F0"})
          let token = JSON.parse(localStorage.getItem('bearertoken'));
          axios.defaults.headers.common['Authorization'] = token; 
       //location.reload()
    //    

        //   let token = JSON.parse(localStorage.getItem('bearertoken'));
        //   axios.defaults.headers.common['Authorization'] = token;
 
          axios.get("https://subscription-management-tool.herokuapp.com/users/walletfund")
      .then(res=>{
          
        console.log(res.data.data)
         //cardbalance
         axios.get("https://subscription-management-tool.herokuapp.com/users/wallet")
         .then(res=>{
           
         //   console.log(res.data.data.data.balance)
         setCardbalance(res.data.data.balance)
           console.log(res.data.data.balance)
         })
        itemArray=res.data.data
        // localStorage.setItem('userDisplay', JSON.stringify(itemArray))
        // userDisplay = JSON.parse(localStorage.getItem('userDisplay'));
     setArr(itemArray)
        console.log(itemArray)
        

       
         itemArray.map((val)=>{
            catId=val._id
            // cats=val.subCategory
            // catg=val.category
            itemAmt=val.amount
            // itemImg=val.productImg
            // itemExp=val.dateExpired
            itemStatus=val.status
            // console.log(cats +"" + catg+""+itemImg)
            setItemId(catId)
            console.log(itemStatus)

            //linegraph
            // if(val.dateSubscribed.split("-")[1]==10){
            //     octAmt+=val.amount}
            //     setOct(octAmt)
            //     if(val.dateSubscribed.split("-")[1]==11){
            //         novAmt+=val.amount}
            //         if(val.dateSubscribed.split("-")[1]==12){
            //             decAmt+=val.amount}
            //         setNov(novAmt)
            //         setDec(decAmt)

                   
       
       
      
        })
        //setArr(arrs)
      })
      //console.log(itemArray)
      //console.log(content)
     
          
     
    // userDisplay = JSON.parse(localStorage.getItem('userDisplay'));
    // setNamearr(userDisplay)
},[]) 

 
    // userDisplay = JSON.parse(localStorage.getItem('userDisplay'));  
    // console.log(userDisplay)
    // console.log(oct)
    // console.log(nov)

   

     let clientItem=""
     console.log(contentReal)
     console.log(namearr)
     console.log(arry)
     console.log(itemArray)
     //setIdReal(clientItem)
     console.log(clientItem)

     

     function Inactive(val,index){
      
         console.log(val)
         console.log(index)
        //  if(val.subCategory=="Gotv")
        //  { setProductId("")}
        // namearr.map((item,indx)=>{
           arr.map((item,indx)=>{
            console.log(indx)
        if(indx==index){
            console.log(item._id)
            clientItem=item._id
            localStorage.setItem('clientIds', JSON.stringify(item._id))
            history.push(`/Addsub/${val.subCategory}`)
           
        }
        
    })
        
     }
     function Active(val,index){
       
        //console.log(indx)
        // namearr.map((item,indx)=>{
            arr.map((item,indx)=>{
        if(indx==index){
            console.log(item._id)
            clientItem=item._id
            localStorage.setItem('clientIds', JSON.stringify(item._id))
            localStorage.setItem('detailedInfos', JSON.stringify({amount:val.amount,name:val.product,image:val.productImg,renew:val.autoRenew,billincycle:val.billingCycle}))
            history.push("/Autochange")
           
        }
     })
        //setItemColor({color:"#17A3D7"})
        //console.log(val.productImg)
        //localStorage.setItem('clientIds', JSON.stringify(item._id))
        //localStorage.setItem('detailedInfos', JSON.stringify({amount:val.amount,name:val.product,image:productImg,renew:val.autoRenew,billincycle:val.billingCycle}))
    }
    function Expired(val,index){
    
        // namearr.map((item,indx)=>{
            arr.map((item,indx)=>{
        if(indx==index){
            console.log(item._id)
            clientItem=item._id
            localStorage.setItem('clientIds', JSON.stringify(item._id))
            localStorage.setItem('detailedInfos', JSON.stringify({amount:val.amount,name:val.product,image:val.productImg,renew:val.autoRenew,billincycle:val.billingCycle}))
            history.push(`/Renew/${val.subCategory}`)
           
        }
     })
        //setItemColor({color:"#17A3D7"})
        //console.log(val.productImg)
        //localStorage.setItem('clientIds', JSON.stringify(item._id))
        //localStorage.setItem('detailedInfos', JSON.stringify({amount:val.amount,name:val.product,image:productImg,renew:val.autoRenew,billincycle:val.billingCycle}))
    }
    function handledeleted(){

    }
    function handledelete(val){
      
        console.log(val)
        // namearr.map((item,indx)=>{
            arr.map((item,indx)=>{
            console.log(item.subscriptionStatus)
            if(item.subscriptionStatus!=="Active"){
             
            if(indx==val){
            console.log(item._id)
            clientItem=item._id

            let stat=item.subscriptionStatus
           console.log(item.subscriptionStatus)
           clientItem=item._id
           history.push(`/delete/${clientItem+" "+stat}`)
            // history.push(`/delete/${clientItem}`)
        }
    }
         })

    }
    
//     console.log(cats +"" + catg+""+itemImg)
//     

console.log(contentd)

      

    

    return(
            <div className="paymentdashtotal">
                
                <div className="webDashboard">
                        <DashFrame dashPaymentStyle={{backgroundColor:presentcolor.paymentcolor}}>
                           
                        <div className="inner-body-dashboard">
                        <div className="second-line-dashboard">
                            <h2 className="mobile-hash">Payments</h2>
                            <input type="search" placeholder="Search for products"
                            onChange={((e)=>{setSearchDatar(e.target.value)})}/>
                        </div>
                        {/* <hr className="welcome-dividers"/> */}
                        <div className="third-line-dashboard">
                          
                            {/* <div className="third-line-dashboard-upper"><h3>Overview</h3></div> */}
                            <div className="third-line-dashboard-inner">
                                <div className="third-line-dashboard-content">
                                    <div className="account-and-line">
                            <div className="acc-summ"><p>Funding history</p></div>
                            <div className="account-line"></div>
                            </div>
                            {/* <p onClick={(()=>{history.push("/product")})} className="dashproduct">Products</p> */}
                            </div>
                            <div className="selected-placeholder-below-div">
                            <select name="choice"  className="selected-placeholder-below" id="select-payment-below" >
                <option value="filter" >Filter transaction</option>
                   
                     

                </select>
                           </div>
                            </div>
                            {/* <hr className="welcome-divider"/> */}
                            <div className="fourth-line-dashboard-inner">
                                <div className="fourth-line-left">
                                    <div className="fourth-line-left-content">
                                    {/* <div><p className="subOverview">Subscription overview</p></div> */}
                                    <div >
                                        <div className="upperleftCOntent">
                   <h2>PERSONAL INFORMATION</h2>
                   <hr className="customer-info-line"/>
                   <p className="accountId-upperbox" style={{color:"red"}}>Account ID: {customerDetail.userId}</p>
                   <h3>Customer Name: {customerDetail.firstName} {customerDetail.lastName}</h3>
                   <div className="upperleft-and-icon" 
                   style={typeof (customerDetail.phone)!=="number" ? {display:"none"}:{display:"flex"}}><img src={call}/><p>{customerDetail.phone}</p></div>
                   <div className="upperleft-and-icon"><img src={Mail}/><p>{customerDetail.email}</p></div>
               </div> 
                                    </div>
                                  
                                    </div>
                                </div>
                                <div className="fourth-line-right">
                                   
                                    <div className="WALLET-div" >
                                        <div className="wallet">
                                            <div className="wallet-upper">
                                                <p className="regular-weight-dash">Account Id</p>
                                                <p className="medium-weight-dashboard"></p>{customerDetail.userId}
                                            </div>
                                            <div className="wallets-lower">
                                                <div><p className="medium-weight-dashboard">E-wallet Balance</p></div>
                                                <div><p className="money-dashboard">NGN {cardbalance}</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="inner-half-dashboard">

                        <p className="recent-sub-dashboard">Funding History</p>
                        <div className="inner-half-header" id="payment-half-header-div">
                          
                           
                           
                                <span>E-wallet</span>
                                {/* <span>Product category</span>
                                <span>Expiry Date</span>
                                <span>Status</span>
                                <span></span> */}
                               
                            </div>
                           
                            {/* {product=subarray.map((val,index)=>{
                 pname=val.product.split(" ")[0]
                
                 console.log(pname)
                 console.log(arr)
                cat=val.category
                descr=val.product
                stat=val.subscriptionStatus
                expire=val.dateExpired
               return <div  className="catresult">
                <tr className="Product-and-Pname" style={pname=="" ? {display:"none"}:{display:"flex"}}><Smallestbox
                //   icon={ switch(val.product.split(" ")[0]){ 
                //       case 'GOTv':
                //           return{

                //           }


                //       }}/><p>{pname}</p></tr>
                 icon={val.product.split(" ")[0]=="GOTv"? `${Gotiv }`: `${Dstiv}`}/><p>{pname}</p></tr> 
            <tr><p style={{color:"rgba(51,51,51,50%"}}>{cat}</p></tr>
            <tr>{expire}</tr>
           <tr style={stat=="Inactive"? {color:"rgba(3,64,6,30%)"} :null} >{stat}</tr>
            <tr className="editprof" 
            ><p onClick={()=>{stat=="Inactive"? Inactive(val) : Active()} } style={pname=="" ? {display:"none"}:{display:"flex"}}>Edit</p>
            <div className="binDiv" style={pname=="" ? {display:"none"}:{display:"flex"}}><img src={Bin}/></div>
            </tr>
            
           </div>
       
            })} */}
           
           {/* {arr===null?
               (<Loader
            type="Oval" width={20} color="#000000"/>):(contentid)
        } */}
           

           
{/* 
           {content=arr.map((val,index)=>{
                console.log(userDisplay)
            cats=val.subCategory
            catg=val.category
            itemAmt=val.amount
            itemImg=val.productImg
            itemExp=val.dateExpired
            itemStatus=val.subscriptionStatus
            console.log(cats +"" + catg+""+itemImg)
            let colours={} 
            if(itemStatus=="Active"){
                colours={coloritem:"#17AD37"}
            }
            if(itemStatus=="Inactive"){
                colours={coloritem:"rgba(3,6,64,30%"}
            }
            if(itemStatus=="Expired"){
                setItemColor({color:"#E40C0C"})
            }

           return <div  className="catresult" key={index}>
            <tr className="Product-and-Pname" style={itemStatus=="" ? {display:"none"}:{display:"flex"}}><Smallestbox
            //   icon={ switch(val.product.split(" ")[0]){ 
            //       case 'GOTv':
            //           return{

            //           }


            //       }}/><p>{pname}</p></tr>
             icon={itemImg}/><p>{cats}</p></tr> 
        <tr><p style={{color:"rgba(51,51,51,50%"}}>{catg}</p></tr>
        <tr>{val.dateExpired}</tr>
       <tr style={{color:colours.coloritem}} >{itemStatus}</tr>
        <tr className="editprof" 
        // ><p onClick={()=>{stat=="Inactive"? Inactive(val) : Active()}}style={itemStatus=="" ? {display:"none"}:{display:"flex"}}>Edit</p>
        ><p onClick={()=>{if(itemStatus=="Inactive"){Inactive(val,index)}
        if(itemStatus=="Active") { Active(val,index) }} }style={itemStatus=="" ? {display:"none"}:{display:"flex"}}>Edit</p>
        
        <div className="binDiv" onClick={(()=>{handledelete(index)})} style={itemStatus=="" ? {display:"none"}:{display:"flex"}}><img src={Bin}/></div>
        </tr>
        
       </div>

        })
    
   }         */}

   <div  className="inner-half-header" id="payment-new-header">
   
                                <span>DATE&TIME</span>
                                <span>AMOUNT</span> 
                                <span>PAYMENT GATEWAY</span>
                                <span>STATUS</span> 
                                <span></span> 
   </div>
  

   {arr.filter((val,index)=>
    {   
        console.log(val)
       if(searchDatar===""){
        console.log(val)
            return val}
        else if((((val.subCategory).toUpperCase())).includes((searchDatar).toUpperCase())){
            
            return val
        }
       
    }
)
   
   
   .map((val,index)=>{
            cats=val.subCategory
            catg=val.category
            itemAmt=val.amount
            itemImg=val.productImg
            itemExp=val.dateExpired
            itemStatus=val.subscriptionStatus
            // let time= (val.time).toLocaleTimeString()
            let timed=val.time.split("GMT")[0]
            let timeA=timed.split(" ")[1]
            let timeB=timed.split(" ")[2]
            let timeC=timed.split(" ")[3]
            let timeD=timed.split(" ")[4]
            let time=timeA+ " " +timeB + " " + timeC + " "+ timeD
            
            let colours={}
             console.log(cats +"" + catg+""+itemImg)
            if(itemStatus=="Active"){
                colours={coloritem:"#17AD37"}
            }
            if(itemStatus=="Inactive"){
                colours={coloritem:"rgba(3,6,64,30%"}
            }
            if(itemStatus=="Expired"){
                colours={coloritem:"#E40C0C"}
            }

           return <div  className="catresult" key={index}>
               <span className="Product-and-Pname" style={itemStatus=="" ? {display:"none"}:{display:"flex"}}><p>{time}</p></span> 
             
            
       
        <span>{val.amount}</span>
       {/* <tr style={itemStatus=="Inactive"? {color:"rgba(3,64,6,30%)"} :null} >{itemStatus}</tr> */}
      <span>{val.paymentGateway}</span>
       <span style={{color:"green"}}  >{val.status}</span>
       {/* <tr>{val.billingCycle}</tr> */}
       
       <span className="editprof" 
        // ><p onClick={()=>{stat=="Inactive"? Inactive(val) : Active()}}style={itemStatus=="" ? {display:"none"}:{display:"flex"}}>Edit</p>
        ><p className="download-div" style={itemStatus=="" ? {display:"none"}:{display:"flex"}}><img src={download} alt="download"/></p>
        
        <div className="binDiv" onClick={(()=>{handledeleted(index)})} style={itemStatus=="" ? {display:"none"}:{display:"flex"}}><img src={Bin}/></div>
        </span>
        
       </div>

        })
    }

   {/* //content */}
                            
                            
                            {/* <div  className="catresult">
                                <tr className="Product-and-Pname" style={pname=="" ? {display:"none"}:{display:"flex"}}><Smallestbox icon={image.val}/><p>{pname}</p></tr>
                            <tr><p style={{color:"rgba(51,51,51,50%"}}>{cat}</p></tr>
                            <tr>{expire}</tr>
                            <tr style={stat=="Inactive"? {color:"rgba(3,64,6,30%)"} :null} >{stat}</tr>
                            <tr className="editprof" 
                            ><p onClick={(()=>{stat=="Inactive"?Inactive():Active()}) } style={pname=="" ? {display:"none"}:{display:"flex"}}>Edit</p>
                            <div className="binDiv" style={pname=="" ? {display:"none"}:{display:"flex"}}><img src={Bin}/></div>
                            </tr>
                            
                           </div> */}
                        </div>
                        </DashFrame>
                        </div>
                       
                        <div className="mobile-dashboard-All">
                        <MobileDash dashheaderstyle={{backgroundColor:presentcolor.dashheadercolor}}>
                           
                <div className="mobile-dashboard">
                      
                            <h2>Payments</h2>
                            <input type="search" placeholder="Search for products"/>
                            <div>
                            <div  className="inner-mobile-dashboard">
                                <div className="view-and-button">
                                <select name="choice"  className="selected-placeholder-below" id="selectlists-below" >
                <option value="filter" >Filter transaction</option>
                   
                     

                </select>
                            
                                   
                                </div>
                                <div className="mobile-categ">
                                    <span className="mobile-acc-line">
                                    <p>Funding history</p>
                                    <hr/>
                                    </span>
                                   
                                    {/* <p onClick={(()=>{history.push("/product")})} className="p-Mobiles" >Products</p> */}
                                </div>
                                <div className="mobilecard-in-Dashboard"><Mobilecard/></div>
                               
                            </div>
                            <div className="mobile-graph-dashboard">
                            <div className="fourth-line-left-content">
                            <div className="upperleftCOntent">
                   <h2>PERSONAL INFORMATION</h2>
                   <hr className="customer-info-line"/>
                   <p className="accountId-upperbox" style={{color:"red"}}>Account ID: {customerDetail.userId}</p>
                   <h3>Customer Name: {customerDetail.firstName} {customerDetail.lastName}</h3>
                   <div className="upperleft-and-icon" 
                   style={typeof (customerDetail.phone)!=="number" ? {display:"none"}:{display:"flex"}}><img src={call}/><p>{customerDetail.phone}</p></div>
                   <div className="upperleft-and-icon"><img src={Mail}/><p>{customerDetail.email}</p></div>
               </div> 
                                    <div><p className="subOverview"></p></div>
                                    
                                    <div className="linechart"></div>
                                    </div>
                            </div>
                            </div>
                            <div className="inner-half-dashboard" >

<p className="recent-sub-dashboard">Funding History</p>
<div className="inner-half-header" id="payment-half-header-div">
  
   
   
        <span>E-wallet</span>
        {/* <span>Product category</span>
        <span>Expiry Date</span>
        <span>Status</span>
        <span></span> */}
       
    </div>
   
    {/* {product=subarray.map((val,index)=>{
pname=val.product.split(" ")[0]

console.log(pname)
console.log(arr)
cat=val.category
descr=val.product
stat=val.subscriptionStatus
expire=val.dateExpired
return <div  className="catresult">
<tr className="Product-and-Pname" style={pname=="" ? {display:"none"}:{display:"flex"}}><Smallestbox
//   icon={ switch(val.product.split(" ")[0]){ 
//       case 'GOTv':
//           return{

//           }


//       }}/><p>{pname}</p></tr>
icon={val.product.split(" ")[0]=="GOTv"? `${Gotiv }`: `${Dstiv}`}/><p>{pname}</p></tr> 
<tr><p style={{color:"rgba(51,51,51,50%"}}>{cat}</p></tr>
<tr>{expire}</tr>
<tr style={stat=="Inactive"? {color:"rgba(3,64,6,30%)"} :null} >{stat}</tr>
<tr className="editprof" 
><p onClick={()=>{stat=="Inactive"? Inactive(val) : Active()} } style={pname=="" ? {display:"none"}:{display:"flex"}}>Edit</p>
<div className="binDiv" style={pname=="" ? {display:"none"}:{display:"flex"}}><img src={Bin}/></div>
</tr>

</div>

})} */}

{/* {arr===null?
(<Loader
type="Oval" width={20} color="#000000"/>):(contentid)
} */}



{/* 
{content=arr.map((val,index)=>{
console.log(userDisplay)
cats=val.subCategory
catg=val.category
itemAmt=val.amount
itemImg=val.productImg
itemExp=val.dateExpired
itemStatus=val.subscriptionStatus
console.log(cats +"" + catg+""+itemImg)
let colours={} 
if(itemStatus=="Active"){
colours={coloritem:"#17AD37"}
}
if(itemStatus=="Inactive"){
colours={coloritem:"rgba(3,6,64,30%"}
}
if(itemStatus=="Expired"){
setItemColor({color:"#E40C0C"})
}

return <div  className="catresult" key={index}>
<tr className="Product-and-Pname" style={itemStatus=="" ? {display:"none"}:{display:"flex"}}><Smallestbox
//   icon={ switch(val.product.split(" ")[0]){ 
//       case 'GOTv':
//           return{

//           }


//       }}/><p>{pname}</p></tr>
icon={itemImg}/><p>{cats}</p></tr> 
<tr><p style={{color:"rgba(51,51,51,50%"}}>{catg}</p></tr>
<tr>{val.dateExpired}</tr>
<tr style={{color:colours.coloritem}} >{itemStatus}</tr>
<tr className="editprof" 
// ><p onClick={()=>{stat=="Inactive"? Inactive(val) : Active()}}style={itemStatus=="" ? {display:"none"}:{display:"flex"}}>Edit</p>
><p onClick={()=>{if(itemStatus=="Inactive"){Inactive(val,index)}
if(itemStatus=="Active") { Active(val,index) }} }style={itemStatus=="" ? {display:"none"}:{display:"flex"}}>Edit</p>

<div className="binDiv" onClick={(()=>{handledelete(index)})} style={itemStatus=="" ? {display:"none"}:{display:"flex"}}><img src={Bin}/></div>
</tr>

</div>

})

}         */}

<div  className="inner-half-header" id="payment-new-header">
   
                                <span>DATE&TIME</span>
                                <span>AMOUNT</span> 
                                <span>PAYMENT GATEWAY</span>
                                <span>STATUS</span> 
                                <span></span> 
   </div>


{arr.filter((val,index)=>
{   
console.log(val)
if(searchDatar===""){
console.log(val)
return val}
else if((((val.subCategory).toUpperCase())).includes((searchDatar).toUpperCase())){

return val
}

}
)


.map((val,index)=>{
cats=val.subCategory
catg=val.category
itemAmt=val.amount
itemImg=val.productImg
itemExp=val.dateExpired
itemStatus=val.subscriptionStatus
let timed=val.time.split("GMT")[0]
let timeA=timed.split(" ")[1]
let timeB=timed.split(" ")[2]
let timeC=timed.split(" ")[3]
let timeD=timed.split(" ")[4]
let time=timeA+ " " +timeB + " " + timeC + " "+ timeD

let colours={}
console.log(cats +"" + catg+""+itemImg)
if(itemStatus=="Active"){
colours={coloritem:"#17AD37"}
}
if(itemStatus=="Inactive"){
colours={coloritem:"rgba(3,6,64,30%"}
}
if(itemStatus=="Expired"){
colours={coloritem:"#E40C0C"}
}

return <div  className="catresult" key={index}>
<span className="Product-and-Pname" style={itemStatus=="" ? {display:"none"}:{display:"flex"}}><p>{time}</p></span> 



<span>{val.amount}</span>
{/* <tr style={itemStatus=="Inactive"? {color:"rgba(3,64,6,30%)"} :null} >{itemStatus}</tr> */}
<span>{val.paymentGateway}</span>
<span style={{color:"green"}}  >{val.status}</span>
{/* <tr>{val.billingCycle}</tr> */}

<span className="editprof" 
// ><p onClick={()=>{stat=="Inactive"? Inactive(val) : Active()}}style={itemStatus=="" ? {display:"none"}:{display:"flex"}}>Edit</p>
><p className="download-div" style={itemStatus=="" ? {display:"none"}:{display:"flex"}}><img src={download} alt="download"/></p>

<div className="binDiv" onClick={(()=>{handledeleted(index)})} style={itemStatus=="" ? {display:"none"}:{display:"flex"}}><img src={Bin}/></div>
</span>

</div>


})
}

{/* //content */}
    
    
    {/* <div  className="catresult">
        <tr className="Product-and-Pname" style={pname=="" ? {display:"none"}:{display:"flex"}}><Smallestbox icon={image.val}/><p>{pname}</p></tr>
    <tr><p style={{color:"rgba(51,51,51,50%"}}>{cat}</p></tr>
    <tr>{expire}</tr>
    <tr style={stat=="Inactive"? {color:"rgba(3,64,6,30%)"} :null} >{stat}</tr>
    <tr className="editprof" 
    ><p onClick={(()=>{stat=="Inactive"?Inactive():Active()}) } style={pname=="" ? {display:"none"}:{display:"flex"}}>Edit</p>
    <div className="binDiv" style={pname=="" ? {display:"none"}:{display:"flex"}}><img src={Bin}/></div>
    </tr>
    
   </div> */}
</div>






                            {/* <div className="mobile-second-inner">
                                <h3>Recent subscriptions</h3>
                                <div className="tableData">
                                    <span className="mobile-list-table">Products</span>
                                    <span className="mobile-list-table">Products category</span>
                                    <span className="mobile-list-table">Expiry Date</span>
                                    <span className="mobile-list-table">Status</span>
                                    <span></span>
                                    
                                </div>
                            </div> */}
                            
                           
                            </div>
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
const mapstatetoprops=({flex:{presentcolor,subarray}})=>({
 
    presentcolor,
    subarray
   
   

})

export default connect(mapstatetoprops,MapDispatchToProps) (Payment)