import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect,useState} from 'react'
import { headercolor } from '../../redux/flex/flex.actions';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Smallbox from '../../Components/Smallbox/Smallbox';
import '../Renew/Renew.css'
import { addsubs } from '../../redux/flex/flex.actions';
import { subarray } from '../../redux/flex/flex.actions';
import { addarray } from '../../redux/flex/flex.actions';
import { FaEye } from 'react-icons/fa';
import Dashopen from '../../Components/Dashopen/Dashopen';
import MobileDashopen from '../../Components/MobileDashopen/MobileDashopen'
import Upperbox from '../../Components/Upperbox/Upperbox';

function Belowbox({match,presentcolor,headercolor,firstbutn,secondbutn,choice,cycle,noclick,
firstclick,secondclick,icon,addsubs,subarray,addarray,subscription,product}){
    // const{subval,setSubval}=useState({})
    // const[subscriptionval,setSubscriptionval]=useState({})
    let packageFile=[]
    const[image,setImage]=useState({val:""})
    const[packageFiles,setPackageFiles]=useState([])
    const[named,setNamed]=useState("")
    const[autorenewal,setAutorenewal]=useState("Disabled")
    const[amount,setAmount]=useState("0.00")
    const[valChosen,setValChosen]=useState("")
    const[billingCycle,setBillingCycle]=useState("")
    const[selectpack,setSelectpack]=useState("")
    const[checkers,setCheckers]=useState(false)
    const[deleteamt,setDeleteamt]=useState()
    const history=useHistory()
    
    let selectindex;
    let result=packageFiles.filter((val,index)=>{
        if(selectindex==index){
            return(val)
        }
    })
    console.log(result)
    //let Info={}
    let  Info = JSON.parse(localStorage.getItem('detailedInfos'));
    useEffect(()=>{
        
        headercolor({ dashinvitecolor:"purple"})
            console.log(product) 
            console.log(firstclick)
            const  names=match.params.name
        setNamed(match.params.name)
            
            let token = JSON.parse(localStorage.getItem('bearertoken'));
            axios.defaults.headers.common['Authorization'] = token;
         
            setAutorenewal(Info.renew)
            setDeleteamt(Info.amount)
            setBillingCycle(Info.billingcycle)
            setSelectpack(Info.name) 
            addsubs({amount:Info.amount})
            console.log(selectpack)
            //addsubs({Renew:autorenewal})
      addsubs({productName:Info.name}) 
        addsubs({billingCycle:Info.billincycle})
        if(Info.renew==="Enabled"){
            setCheckers(true)
        }
    
            axios.get("https://subscription-management-tool.herokuapp.com/users/category")
        .then(res=>{
          console.log(res)
          console.log(res.data.data[0])
        //   if((JSON.parse(localStorage.getItem('packages')))==null){
            localStorage.setItem('packages', JSON.stringify(res.data.data));
          
        // }
    
        // else{localStorage.setItem('bearertoken', JSON.stringify(token));}
        
        // })
            // https://subscription-management-tool.herokuapp.com/users/subscription
         
       
        let packagestore=JSON.parse(localStorage.getItem('packages'))
            headercolor({ dashheadercolor:"#6200F0"})
            console.log(packagestore)
                        
            console.log(match.params.name)
            const names=match.params.name
            setNamed(match.params.name)
         if(names=="Gotv"){
            //setImage({val:Gotv})
    
           let packageFileorigin=res.data.data[1].products
           
              console.log(packageFile)
             packageFileorigin.map((val,index)=>{
                localStorage.setItem('userId', JSON.stringify(val._id));
                //setIdSub(val)
                console.log(val)
                //news=idSub._id
                 //console.log(news)
                 //console.log(idSub._id)
    
                 packageFile.push(val)
                 
                packageFile.map((val)=>{
                    
                })
             })
             setPackageFiles(packageFile)
                console.log(packageFile)
    
        }
         if(names=="Netflix"){
            //setImage({val:Netflix})
            let packageFileorigin=res.data.data[3].products
           
            console.log(packageFile)
           packageFileorigin.map((val,index)=>{
              localStorage.setItem('userId', JSON.stringify(val._id));
            //   setIdSub(val)
            //   console.log(val)
            //   news=idSub._id
            //    console.log(news)
            //    console.log(idSub._id)
    
               packageFile.push(val)
            //    setPackageFiles(packageFile)
            //   console.log(packageFile)
              packageFile.map((val)=>{
                  
              })
           })
           setPackageFiles(packageFile)
              console.log(packageFile)
         }
        if(names=="Showmax"){
             //setImage({val:Showmax})
             let packageFileorigin=res.data.data[2].products
           
            console.log(packageFile)
           packageFileorigin.map((val,index)=>{
              localStorage.setItem('userId', JSON.stringify(val._id));
            //   setIdSub(val)
            //   console.log(val)
            //   news=idSub._id
            //    console.log(news)
            //    console.log(idSub._id)
    
               packageFile.push(val)
              
              packageFile.map((val)=>{
                  
              })
           })
           setPackageFiles(packageFile)
           console.log(packageFile)
         }
        if(names=="Playstation"){
             //setImage({val:Playstation})
             let packageFileorigin=res.data.data[4].products
           
            console.log(packageFile)
           packageFileorigin.map((val,index)=>{
              localStorage.setItem('userId', JSON.stringify(val._id));
            //   setIdSub(val)
            //   console.log(val)
            //   news=idSub._id
            //    console.log(news)
            //    console.log(idSub._id)
    
               packageFile.push(val)
               
              packageFile.map((val)=>{
                  
              })
           })
           setPackageFiles(packageFile)
              console.log(packageFile)
        }
        if(names=="Dstv"){
            //setImage({val:Dstv})
            let packageFileorigin=res.data.data[0].products
            
              console.log(packageFile)
             packageFileorigin.map((val,index)=>{
                // setIdSub(val)
                // news=idSub._id
                // console.log(news)
                 packageFile.push(val)
                 
             })
             setPackageFiles(packageFile)
                console.log(packageFile)
        }
        // if(names=="Startimes"){
        //     setImage({val:Startimes})
        // }  
         
       
           
        //  },[])
    })       
       
     },[])
     let cont=""
     let amt;
     let chosen=""
     addsubs({Renewal:autorenewal})
     function Changevalue(e){
        chosen=e.target.value
        console.log(chosen)
        let chosenindex;
        setValChosen(chosen)
        setSelectpack(e.target.value)
        console.log(selectpack)
      let chosenResult=  packageFiles.filter((value,indx)=>{
        if(value.productName==chosen){
         
            return chosen
            
        }
            
        })
       let itemAmount= chosenResult.map((val,ind)=>{
           //setDeleteamt(val.amount)
           amt=val.amount
            return amt
        })
        console.log(amt)
        setDeleteamt(amt)
        setAmount(amt)
        addsubs({amount:deleteamt})
        addsubs({productName:e.target.value})
     }
     function Changecycle(e){
        
        addsubs({billingCycle:e.target.value})
        setBillingCycle(e.target.value)
        console.log(billingCycle)
        console.log(e.target.value)
     }
     function sub(){
         
       // editarray({amount:subscription.amount,product:subscription.productName,subCategory:named,autoRenew:subscription.Renewal,
         //   billinCycle:subscription.billingCycle,category:"Entertainment",})
            let Hidyval = JSON.parse(localStorage.getItem('clientIds'));
            localStorage.setItem('checkObject', JSON.stringify({Hidy:Hidyval}))
            localStorage.setItem('userObject', JSON.stringify({amount:subscription.amount,product:subscription.productName,subCategory:named,autoRenew:subscription.Renewal,
                billingCycle:subscription.billingCycle,category:"Entertainment"}));
                localStorage.setItem('testObject', JSON.stringify({amount:subscription.amount,product:subscription.productName,subCategory:named,autoRenew:subscription.Renewal,
                    billingCycle:subscription.billingCycle,category:"Entertainment"}));
            console.log(subscription)
            console.log(Hidyval)
         history.push("/payoption")

     }
return(
    <div className="renew-totaL">
    <div className="renew-web-view">
   <Dashopen>
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
          
                <select name="choice" onChange={Changevalue} className="select-placeholder-below" id="selectlists-below" >
                <option value="country" >{Info.name}</option>
                   {packageFiles.map((vals,index)=>{
                      selectindex=index
                       console.log(product)
                       console.log(vals.productName)
                    //    cont= 
                        return(
                            <option key={index} value={vals.productName}>{vals.productName}</option>
                        )
                    })} 
                     

                </select>
           
                </div>
                        </div>
                        <div className="below-category-options">
                        <p>Amount</p>
                        <p>NGN{deleteamt}</p>
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
          
                <select name="cycle"  onChange={Changecycle} className="select-placeholder-below" id="selectlist-below" >
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
   //addsubs({Renew:autorenewal});console.log(autorenewal)
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
                     
                   } >DISCARD</button>
                    {/* <button className="second-belowbutton" onClick={(()=>{choice=="" ? noclick(): secondclick()})} >{secondbutn}</button> */}
                    <button className="second-belowbutton" onClick={(()=>{
                        
                        if((billingCycle!="")&&(selectpack!="")){
                           
                           sub()
                        }
                        
                        })} >RENEW</button>
                </div>
                </div>
               
            </div>

        </div>
         
        </Dashopen>
        </div>

        <div className="renew-mobile-view">
        <MobileDashopen>
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
          
                <select name="choice" onChange={Changevalue} className="select-placeholder-below" id="selectlists-below" >
                <option value="country" >{Info.name}</option>
                   {packageFiles.map((vals,index)=>{
                      selectindex=index
                       console.log(product)
                       console.log(vals.productName)
                    //    cont= 
                        return(
                            <option key={index} value={vals.productName}>{vals.productName}</option>
                        )
                    })} 
                     

                </select>
           
                </div>
                        </div>
                        <div className="below-category-options">
                        <p>Amount</p>
                        <p>NGN{deleteamt}</p>
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
          
                <select name="cycle"  onChange={Changecycle} className="select-placeholder-below" id="selectlist-below" >
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
   //addsubs({Renew:autorenewal});console.log(autorenewal)
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
                     
                   } >DISCARD</button>
                    {/* <button className="second-belowbutton" onClick={(()=>{choice=="" ? noclick(): secondclick()})} >{secondbutn}</button> */}
                    <button className="second-belowbutton" onClick={(()=>{
                        alert('ki')
                        if((billingCycle!="")&&(selectpack!="")){
                            alert("jj")
                           sub()
                        }
                        
                        })} >RENEW</button>
                </div>
                </div>
               
            </div>

        </div>
         
        </MobileDashopen>

        </div>
        </div>

)


} 
const MapDispatchToProps=(dispatch)=>({

    //const userinput= {[items]:value}
     //signin:(item)=> dispatch(signin(item)),
    
     headercolor:(item)=>dispatch(headercolor(item)),
     addsubs:(item)=>dispatch(addsubs(item)),
    //  subarray:(item)=>dispatch(addsubs(item)),
     addarray:(item)=>dispatch(addarray(item)),
 
 })
const mapstatetoprops=({flex:{presentcolor,subscription,subarray}})=>({
 
    presentcolor,
    subscription,
    subarray
   
   

})

export default connect(mapstatetoprops,MapDispatchToProps) (Belowbox)