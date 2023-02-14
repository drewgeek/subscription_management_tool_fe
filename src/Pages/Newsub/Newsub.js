import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import Dashopen from '../../Components/Dashopen/Dashopen'
import { connect } from 'react-redux'
import {useEffect,useState} from 'react'
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
// import MobileDash from '../../Components/MobileDash/MobileDash'
import axios from 'axios'
import '../Newsub/Newsub.css'
import MobileDashopen from '../../Components/MobileDashopen/MobileDashopen';
import { baseURL } from '../../domain'

function Newsub({presentcolor,headercolor,date,match,subarray,subscription,addarray}){
    let packageFile=[]
    const history=useHistory()
    const[subscriptionval,setSubscriptionval]=useState({})
    const[image,setImage]=useState({val:""})
    const[packageFiles,setPackageFiles]=useState([])
    const[packagestore,setPackagestore]=useState([])
    const [named,setNamed]=useState("")
    const[imgLink,setImgLink]=useState("")
    let imgLinks=""
    useEffect(()=>{
        // setSubscriptionval(subscription)
        // let packagestorage=[]
        const  names=match.params.name
        setNamed(match.params.name)
        let token = JSON.parse(localStorage.getItem('bearertoken'));
        axios.defaults.headers.common['Authorization'] = token;
        

        axios.get(`${baseURL}/users/category`)
    .then(res=>{
      console.log(res)
      console.log(res.data.data[0])
      localStorage.setItem('packages', JSON.stringify(res.data.data));
    //   let pack=res.data.data;
    //   console.log(pack)
      //const names=match.params.name
    //   if(names=="Gotv"){
    //      setImage({val:Gotv})
    //     let packageFileorigin=pack[1].products
    //        console.log(packageFile)
    //       packageFileorigin.map((val,index)=>{
    //           packageFile.push(val)
    //           setPackageFiles(packageFile)
    //          console.log(packageFile)
    //       })
 
    //  }
    //   if((JSON.parse(localStorage.getItem('packages')))==null){
                    //localStorage.setItem('packages', JSON.stringify(res.data.data));
    //   let  packagestore=res.data.data
        // setPackagestore(packagestorage)
                   // let packagestorage=JSON.parse(localStorage.getItem('packages'))
                   // setPackagestore(packagestorage)
                   // console.log(packagestorage) 
               
       
    // }
//})
    // else{localStorage.setItem('bearertoken', JSON.stringify(token));}
    
    // })
        // https://subscription-management-tool.herokuapp.com/users/subscription
   
    // let packagestore=JSON.parse(localStorage.getItem('packages'))
    
        headercolor({ dashheadercolor:"#6200F0"})
        //console.log(packagestore)          
        console.log(match.params.name)
        // const names=match.params.name
        let packagestore=JSON.parse(localStorage.getItem('packages'))
        headercolor({ dashheadercolor:"#6200F0"})
        console.log(packagestore)
                    
        console.log(match.params.name)
        
     if(names=="Gotv"){
        setImage({val:Gotv})
       let packageFileorigin=res.data.data[1].products
          console.log(packageFile)
         packageFileorigin.map((val,index)=>{
             packageFile.push(val)
            //  setPackageFiles(packageFile)
             imgLinks=("https://profnike.github.io/gotvLink/GOTV.png")
             setImgLink(imgLinks)
         console.log(imgLink)
            console.log(packageFile)
         })
         setPackageFiles(packageFile)
       
         console.log(packageFiles)
         console.log(imgLinks)
         
    }
     if(names=="Netflix"){
        setImage({val:Netflix})
        let packageFileorigin=res.data.data[3].products
        console.log(packageFile)
       packageFileorigin.map((val,index)=>{
           packageFile.push(val)
          //  setPackageFiles(packageFile)
           imgLinks=("https://profnike.github.io/NetflixImg/Netflix.png")
           setImgLink(imgLinks)
       console.log(imgLink)
          console.log(packageFile)
       })
       setPackageFiles(packageFile)
     
       console.log(packageFiles)
       console.log(imgLinks)
     }
     if(names=="Showmax"){
        setImage({val:Showmax})
    let packageFileorigin=res.data.data[2].products
    console.log(packageFile)
   packageFileorigin.map((val,index)=>{
       packageFile.push(val)
      //  setPackageFiles(packageFile)
       imgLinks=("https://profnike.github.io/showmaxImg/Showmax.png")
       setImgLink(imgLinks)
   console.log(imgLink)
      console.log(packageFile)
   })
   setPackageFiles(packageFile)
 
   console.log(packageFiles)
   console.log(imgLinks)
     }
     if(names=="Playstation"){
       setImage({val:Playstation})
       let packageFileorigin=res.data.data[4].products
    console.log(packageFile)
   packageFileorigin.map((val,index)=>{
       packageFile.push(val)
      //  setPackageFiles(packageFile)
       imgLinks=("https://profnike.github.io/playstationImg/Playstation.png")
       setImgLink(imgLinks)
   console.log(imgLink)
      console.log(packageFile)
   })
   setPackageFiles(packageFile)
 
   console.log(packageFiles)
   console.log(imgLinks)
   }
    if(names=="Dstv"){
        setImage({val:Dstv})
        let packageFileorigin=packagestore[0].products
          console.log(packageFile)
         packageFileorigin.map((val,index)=>{
             packageFile.push(val)
             imgLinks=("https://profnike.github.io/dstvImg/Dstv.png")
             setImgLink(imgLinks)
             console.log(imgLink)
            
            console.log(packageFile)
         })
         setPackageFiles(packageFile)
    }
     
})
        
       
     },[])
     let token=JSON.parse(localStorage.getItem('bearertoken'))
     console.log(token)
     function subscribe(){
        localStorage.setItem('userObject', JSON.stringify({amount:subscription.amount,product:subscription.productName,subCategory:named,autoRenew:subscription.Renewal,
            billingCycle:subscription.billingCycle,subscriptionStatus:"Inactive",category:"Entertainment",dateSubscribed:"-",dateExpired:"-",productImg:imgLink}));
            let Hidyval = JSON.parse(localStorage.getItem('clientIds'));
            localStorage.setItem('checkObject', JSON.stringify({Hidy:""}))
            localStorage.setItem('testObject', JSON.stringify({amount:subscription.amount,product:subscription.productName,subCategory:named,autoRenew:subscription.Renewal,
                billingCycle:subscription.billingCycle,category:"Entertainment",productImg:imgLink}));
        history.push("/Payoption")
     }
     function Addlist(){

        addarray({amount:subscription.amount,product:subscription.productName,subCategory:named,autoRenew:subscription.Renewal,
        billingCycle:subscription.billingCycle,subscriptionStatus:"Inactive",category:"Entertainment",dateSubscribed:"-",dateExpired:"-",
    productImg:imgLink})
    var today = new Date();
    localStorage.setItem('date', JSON.stringify(today))
        localStorage.setItem('userObject', JSON.stringify({amount:subscription.amount,product:subscription.productName,subCategory:named,autoRenew:subscription.Renewal,
            billingCycle:subscription.billingCycle,subscriptionStatus:"Inactive",category:"Entertainment",dateSubscribed:"-",dateExpired:"-",productImg:imgLink}));
        
            // let userObject = JSON.parse(localStorage.getItem('userObject'));  
            let userObject={amount:subscription.amount,product:subscription.productName,subCategory:named,autoRenew:subscription.Renewal,
                billingCycle:subscription.billingCycle,subscriptionStatus:"Inactive",category:"Entertainment",dateSubscribed:"-",dateExpired:"-",productImg:imgLink};
            
       
    console.log(userObject)
        console.log(subscription)
        console.log(subarray)
        axios.post(`${baseURL}/users/subscription`,userObject)
    .then(res=>{
      
      console.log(res)
    })
    .catch((err)=>{
        console.log(err)
     })
            history.push("/subscription")
       
     }
     
     
   
    
return(
    <div>
    <div className="newsub-web">
    <Dashopen dashheaderstyle={{backgroundColor:presentcolor.dashheadercolor}}>
        <div className="newsubContainer">
        {/* <div className="upperboX">
            <div className="Upperleft">
                
               <div className="upperleftCOntent">
                   <h2>CUSTOMER INFORMATION</h2>
                   <hr/>
                   <p>Account ID:20210801</p>
                   <h3>Customer Name:Judith Newman</h3>
                   <div className="upperleft-and-icon"><FaEye/><p>08032321123</p></div>
                   <div className="upperleft-and-icon"><FaEye/><p>Judithnewman@gmail.com</p></div>
               </div>
            </div>
            <div className="Upperright-newsub">
           
                <div className="cardImage">
                   
                  <div className="cardImage-acc">
                      <p>Account Id</p>
                      <p>20210801</p>
                  </div>
                    <div className="cardImage-balance">
                        <p>E-wallet Balance</p>
                        <p>NGN 134,457.56</p>
                    </div>
                </div>
                <button>FUND WALLET</button>
            </div>
        </div> */}
        <Upperbox/>
        
        {/* {`${props.match.url}/15`} */}
    <Belowbox icon={image.val} firstbutn={"ADD TO LIST"} noclick={(()=>{alert("none")})}
     firstclick={Addlist} product={packageFiles} secondbutn={"SUBSCRIBE"} secondclick={subscribe}/>

        </div>
         
    </Dashopen>
    </div>
    <div className="newsub-mobile">
        <MobileDashopen>

        <div className="newsubContainer">
        {/* <div className="upperboX">
            <div className="Upperleft">
                
               <div className="upperleftCOntent">
                   <h2>CUSTOMER INFORMATION</h2>
                   <hr/>
                   <p>Account ID:20210801</p>
                   <h3>Customer Name:Judith Newman</h3>
                   <div className="upperleft-and-icon"><FaEye/><p>08032321123</p></div>
                   <div className="upperleft-and-icon"><FaEye/><p>Judithnewman@gmail.com</p></div>
               </div>
            </div>
            <div className="Upperright-newsub">
           
                <div className="cardImage">
                   
                  <div className="cardImage-acc">
                      <p>Account Id</p>
                      <p>20210801</p>
                  </div>
                    <div className="cardImage-balance">
                        <p>E-wallet Balance</p>
                        <p>NGN 134,457.56</p>
                    </div>
                </div>
                <button>FUND WALLET</button>
            </div>
        </div> */}
        <Upperbox/>
        
        {/* {`${props.match.url}/15`} */}
    <Belowbox icon={image.val} firstbutn={"ADD TO LIST"} noclick={(()=>{alert("none")})}
     firstclick={Addlist} product={packageFiles} secondbutn={"SUBSCRIBE"} secondclick={subscribe}/>

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
     addarray:(item)=>dispatch(addarray(item))
 
 })
const mapstatetoprops=({flex:{presentcolor,customer,subscription,subarray}})=>({
 
    presentcolor,
    customer,
    subscription,
    subarray
   
   

})

export default connect(mapstatetoprops,MapDispatchToProps) (Newsub)