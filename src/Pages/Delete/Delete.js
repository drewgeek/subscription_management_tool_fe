import React from 'react'
import DashFrame from '../../Components/DashFrame/DashFrame'
import { connect } from 'react-redux'
import {useEffect,useState} from 'react'
import { headercolor } from '../../redux/flex/flex.actions';
import {ReactComponent as Hug} from '../../Asset/hug.svg'
import axios from 'axios';
import '../Delete/Delete.css'
import { useHistory } from 'react-router-dom';
import { baseURL } from '../../domain';

function Delete({match}){
    const history=useHistory()
    let names=""
    let packageFile=[]
    const[image,setImage]=useState({val:""})
    const[packageFiles,setPackageFiles]=useState([])
    const[named,setNamed]=useState("")
    const[idSub,setIdSub]=useState([])
    const[realId,setRealId]=useState("")
    let news;
  useEffect(()=>{
        //const names=match.params.name


      
           
    
       
        let token = JSON.parse(localStorage.getItem('bearertoken'));
        axios.defaults.headers.common['Authorization'] = token;

        axios.get(`${baseURL}/users/category`)
    .then(res=>{
      console.log(res)
      console.log(res.data.data[0])
    //   if((JSON.parse(localStorage.getItem('packages')))==null){
        localStorage.setItem('packages', JSON.stringify(res.data.data));
      
        let packagestore=JSON.parse(localStorage.getItem('packages'))
        headercolor({ dashheadercolor:"#6200F0"})
        console.log(packagestore)
                    
        console.log(match.params.name)
        names=match.params.name
        setNamed(match.params.name)
     if(names=="Gotv"){
        // setImage({val:Gotv})

       let packageFileorigin=res.data.data[1].products
       
          console.log(packageFile)
         packageFileorigin.map((val,index)=>{
            localStorage.setItem('userId', JSON.stringify(val._id));
            let Hid = JSON.parse(localStorage.getItem('userId'));
            setIdSub(Hid)
            console.log(val)
            news=idSub._id
             console.log(news)
             console.log(idSub)

            
         })

    }    
    
    if(names=="Netflix"){
        // setImage({val:Netflix})
        let packageFileorigin=res.data.data[3].products
       
        console.log(packageFile)
       packageFileorigin.map((val,index)=>{
          localStorage.setItem('userId', JSON.stringify(val._id));
          let Hid = JSON.parse(localStorage.getItem('userId'));
            setIdSub(Hid)
            console.log(val)
            news=idSub._id
             console.log(news)
             console.log(idSub)

       })
     }
    if(names=="Showmax"){
        //  setImage({val:Showmax})
         let packageFileorigin=res.data.data[2].products
       
        console.log(packageFile)
       packageFileorigin.map((val,index)=>{
          localStorage.setItem('userId', JSON.stringify(val._id));
          let Hid = JSON.parse(localStorage.getItem('userId'));
            setIdSub(Hid)
            console.log(val)
            news=idSub._id
             console.log(news)
             console.log(idSub)

          
       })
     }
    if(names=="Playstation"){
        //  setImage({val:Playstation})
         let packageFileorigin=res.data.data[4].products
       
        console.log(packageFile)
       packageFileorigin.map((val,index)=>{
          localStorage.setItem('userId', JSON.stringify(val._id));
          let Hid = JSON.parse(localStorage.getItem('userId'));
          setIdSub(Hid)
          console.log(val)
          news=idSub._id
           console.log(news)
           console.log(idSub)

           
       })
    }
    if(names=="Dstv"){
        // setImage({val:Dstv})
        let packageFileorigin=res.data.data[0].products
        
          console.log(packageFile)
         packageFileorigin.map((val,index)=>{
            localStorage.setItem('userId', JSON.stringify(val._id));
            let Hid = JSON.parse(localStorage.getItem('userId'));
            setIdSub(Hid)
            console.log(val)
            news=idSub._id
             console.log(news)
             setRealId(news)
             console.log(realId)
            
         })
    }
})
  },[])
function handleDelete(){

let subId=match.params.name
let num=subId.split(" ")[0]
let status=subId.split(" ")[1]
console.log(subId.split(" ")[0])
 axios.delete(`${baseURL}/users/subscription/${num}`)
 .then(res=>{
 console.log(res)
 let storestatus = JSON.parse(localStorage.getItem('status'));
storestatus=-1
localStorage.setItem('activ', JSON.stringify(storestatus))
 history.push("/dashboard")
 })



}      
   

    
   
return(
    <div className="logout">

            <div className="logout-inner">

              
               <h3>Are you sure you want to delete this subscription ?</h3>
               <div className="LOGOUT-BUTTON">
                   <button onClick={history.goBack} className="logout-first-button">CANCEL</button>
                   <button onClick={handleDelete} className="logout-second-button">DELETE</button>
               </div>
            </div>
        </div>
         
 


         
 

)


} 

export default  Delete