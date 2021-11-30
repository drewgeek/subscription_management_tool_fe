import React, {useRef, useState} from 'react'
import axios from 'axios';
import {ReactComponent as FlexLogo} from '../../Asset/LOGO FLEX.svg';
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa"; 
import {Link, useParams, useHistory} from 'react-router-dom'
import DashFrame from '../../Components/DashFrame/DashFrame';
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { headercolor, updatedetails } from '../../redux/flex/flex.actions';
import './payment.css'

const Pmt = ({presentcolor,headercolor, updatedetails, detailsupdate}) => {
    const history = useHistory();
    const {id} = useParams();
    const [image, setImage] = useState("");
    
    const fileInputRef = useRef();

    const user = localStorage.getItem('user');
    const userStr = JSON.parse(user)
    

    // const handleFormChanges = (event) => {
    //     event.preventDefault()
    //     event.stopPropagation()
        
    //     setUserData({ ...userData, [event.target.name]: event.target.value });
    // }

    useEffect(() => {
        console.log(image)
    }, [image])

    useEffect(()=>{
        headercolor({ dashheadercolor:"#6200f0"}) 

    },[]);

    

    const handleSubmit = (e) => {
        e.preventDefault();

        const params = {
            firstName: detailsupdate.firstName,
            lastName: detailsupdate.lastName,
            country: detailsupdate.country,
            email: detailsupdate.email,
            phone: detailsupdate.phone,
            photo: image,
        }

        axios.patch(`https://subscription-management-tool.herokuapp.com/users/edit/${id}`, params)
        .then(res => {
            localStorage.setItem('customerDetail', JSON.stringify(res.data.data))
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    return (
        <>
            <DashFrame dashPaymentStyle={{backgroundColor:presentcolor.dashheadercolor}}>
                <div className="inner-settings-section">
                    <div className="pmt-header">
                        <h3>Payments</h3>
                        <input type="search"  placeholder="Search for products"/>
                    </div>
                    <hr className="welcome-divider"/>
                    <div className="pmt-links">
                        <div className="pmt-sub-header">
                            <Link to="/payment/funding-history" style={{borderBottom: "3px solid #6200f0", color: "#030640"}}><p>Funding history</p></Link>
                            <Link to="#"><p>Payment setup</p></Link>
                        </div>
                        <select className="filter-trans">
                            <option>Filter transaction</option>
                        </select>
                    </div>
                    <div className="inner-section">  
                        <div></div>
                    </div>
                    
                </div>    
            </DashFrame> 
        </>
    )
}

const MapDispatchToProps=(dispatch)=>({

    //const userinput= {[items]:value}
     //signin:(item)=> dispatch(signin(item)),
     updatedetails:(item)=>dispatch(updatedetails(item)),
    
     headercolor:(item)=>dispatch(headercolor(item))
 
 })
const mapstatetoprops=({flex:{presentcolor, detailsupdate}})=>({
 
    presentcolor,
    detailsupdate
   
   

})

export default connect(mapstatetoprops,MapDispatchToProps) (Pmt)

