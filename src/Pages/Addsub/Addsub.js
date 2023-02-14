import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom'
import { headercolor } from '../../redux/flex/flex.actions';
import Upperbox from '../../Components/Upperbox/Upperbox';
import Belowsecond from '../../Components/Belowsecond/Belowsecond'
import Dashopen from '../../Components/Dashopen/Dashopen';
import axios from 'axios';
import Gotv from '../../Asset/GOTV.png';
import Dstv from '../../Asset/Dstv.png';
import Netflix from '../../Asset/Netflix.png';
import Showmax from '../../Asset/Showmax.png';
import Playstation from '../../Asset/Playstation.png'
import { editarray } from '../../redux/flex/flex.actions'
import MobileDashopen from '../../Components/MobileDashopen/MobileDashopen'
import { baseURL } from '../../domain'
import MobileDash from '../../Components/MobileDash/MobileDash'
import '../Addsub/Addsub.css'
import { getDefaultNormalizer } from '@testing-library/dom';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom'

function Addsub({presentcolor,headercolor,match,subscription,editarray}){
    const history=useHistory()
    let packageFile=[]
    const[image,setImage]=useState({val:""})
    const[packageFiles,setPackageFiles]=useState([])
    const[named,setNamed]=useState("")
    const[idSub,setIdSub]=useState([])
    let news;
    useEffect(()=>{
        headercolor({ dashsubscribecolor:"#6200f0"})

        let token = JSON.parse(localStorage.getItem('bearertoken'));
        axios.defaults.headers.common['Authorization'] = token;

        axios.get(`${baseURL}/users/category`)
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
        setImage({val:Gotv})

       let packageFileorigin=res.data.data[1].products
       
          console.log(packageFile)
         packageFileorigin.map((val,index)=>{
            localStorage.setItem('userId', JSON.stringify(val._id));
            setIdSub(val)
            console.log(val)
            news=idSub._id
             console.log(news)
             console.log(idSub._id)

             packageFile.push(val)
             
            packageFile.map((val)=>{
                
            })
         })
         setPackageFiles(packageFile)
            console.log(packageFile)

    }
     if(names=="Netflix"){
        setImage({val:Netflix})
        let packageFileorigin=res.data.data[3].products
       
        console.log(packageFile)
       packageFileorigin.map((val,index)=>{
          localStorage.setItem('userId', JSON.stringify(val._id));
          setIdSub(val)
          console.log(val)
          news=idSub._id
           console.log(news)
           console.log(idSub._id)

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
         setImage({val:Showmax})
         let packageFileorigin=res.data.data[2].products
       
        console.log(packageFile)
       packageFileorigin.map((val,index)=>{
          localStorage.setItem('userId', JSON.stringify(val._id));
          setIdSub(val)
          console.log(val)
          news=idSub._id
           console.log(news)
           console.log(idSub._id)

           packageFile.push(val)
          
          packageFile.map((val)=>{
              
          })
       })
       setPackageFiles(packageFile)
       console.log(packageFile)
     }
    if(names=="Playstation"){
         setImage({val:Playstation})
         let packageFileorigin=res.data.data[4].products
       
        console.log(packageFile)
       packageFileorigin.map((val,index)=>{
          localStorage.setItem('userId', JSON.stringify(val._id));
          setIdSub(val)
          console.log(val)
          news=idSub._id
           console.log(news)
           console.log(idSub._id)

           packageFile.push(val)
           
          packageFile.map((val)=>{
              
          })
       })
       setPackageFiles(packageFile)
          console.log(packageFile)
    }
    if(names=="Dstv"){
        setImage({val:Dstv})
        let packageFileorigin=res.data.data[0].products
        
          console.log(packageFile)
         packageFileorigin.map((val,index)=>{
            setIdSub(val)
            news=idSub._id
            console.log(news)
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
     function sub(){
        editarray({amount:subscription.amount,product:subscription.productName,subCategory:named,autoRenew:subscription.Renewal,
            billinCycle:subscription.billingCycle,category:"Entertainment",})
            let Hidyval = JSON.parse(localStorage.getItem('clientIds'));
            localStorage.setItem('checkObject', JSON.stringify({Hidy:Hidyval}))
            localStorage.setItem('userObject', JSON.stringify({amount:subscription.amount,product:subscription.productName,subCategory:named,autoRenew:subscription.Renewal,
                billingCycle:subscription.billingCycle,category:"Entertainment"}));
            console.log(subscription)
            console.log(Hidyval)
         history.push("/payoption")

     }
     const add=(()=>{
       alert('add')
         const params={
            billersCode:1212121212,
             serviceID:"gotv",
            // headers:{"Authorization":"re@gmail.com:th96"}
        }
        // console.log(params)
        // console.log('hik')
        
    //    fetch("https://phonebook-nakov.firebaseio.com/phonebook.json",
    //    fetch("https://sandbox.vtpass.com/api/merchant-verify?"username:6",
    //    {method: 'POST',
    // body:JSON.stringify(params)})
    //    .then((resp) => resp.json())
    //     .then((resp) =>{
    //         console.log(resp)
    //     })

//          axios.post("https://sandbox.vtpass.com/api/merchant-verify", params)
//    .then(res=>{
//      console.log(res)})

     })

     
return(
    <div>
        <div className="add-sub-web">
    <Dashopen dashsubscribestyle={{backgroundColor:presentcolor.dashsubscribecolor}}>
        <div>
            <div className="addsubb">
                <Upperbox/>
                <Belowsecond icon={image.val} firstbutn={"DISCARD"} secondbutn={"SUBSCRIBE"} choice={""} cycle={""}
                firstclick={history.goBack} product={packageFiles} secondclick={sub}/>
            </div>
        </div>
         
    </Dashopen>
    </div>
    <div className="add-sub-mobile">
        <MobileDashopen>
        <div>
            <div className="addsubb">
                <Upperbox/>
                <Belowsecond icon={image.val} firstbutn={"DISCARD"} secondbutn={"SUBSCRIBE"} choice={""} cycle={""}
                firstclick={history.goBack} product={packageFiles} secondclick={sub}/>
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
     editarray:(item)=>dispatch(editarray(item))
 
 })
const mapstatetoprops=({flex:{presentcolor,editarray,subscription}})=>({
 
    presentcolor,
    editarray,
    subscription
   
   

})

export default connect(mapstatetoprops,MapDispatchToProps) (Addsub)