import React, {useRef, useState} from 'react'
import axios from 'axios';
import {ReactComponent as FlexLogo} from '../../../Asset/LOGO FLEX.svg';
import {FaEye,FaEyeSlash,FaFacebookF,FaFacebook} from "react-icons/fa"; 
import {Link, useParams, useHistory} from 'react-router-dom'
import DashFrame from '../../../Components/DashFrame/DashFrame';
import MobileDash from '../../../Components/MobileDash/MobileDash';
import { connect } from 'react-redux'
import {useEffect} from 'react'
import { headercolor, updatedetails } from '../../../redux/flex/flex.actions';
import placeHolderImage from '../../../Asset/avi.jpg'
import './Profile.css'
import { baseURL } from '../../../domain';


const Profile = ({presentcolor,headercolor, updatedetails, detailsupdate}) => {
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

        axios.patch(`${baseURL}/users/edit/${id}`, params)
        .then(res => {
            localStorage.setItem('customerDetail', JSON.stringify(res.data.data))
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    return (
        <>
        <div className="mobile-and-web-settings">
            <div className="web-setings-view">
            <DashFrame dashSettingsStyle={{backgroundColor:presentcolor.dashheadercolor}}>
                <div className="inner-settings-section">
                    <div className="header">
                        <h3>Settings</h3>
                        <hr className="welcome-divider"/>
                    </div>
                    <div className="sub-header">
                        <Link to={`/settings/profile/${userStr.id}`} style={{borderBottom: "3px solid #6200f0", color: "#030640"}}><p >Profile</p></Link>
                        <Link to="/settings/notifications"><p>Notifications</p></Link>
                        <Link to="/settings/application"><p>Application</p></Link>
                        <Link to="/settings/payments"><p>Payments</p></Link>
                    </div>
                    <form>
                        {/* <div className="flex-profile-settings"> */}
                        <div className="inner-sector">   
                    
                            <div className="inner-left-section">
                                <div className="image-form">
                                    <div>
                                        <div className="profile-image">{image ? (<img src={image} width="150" height="150" style={{objectFit: "cover", borderRadius: "50%", border: "none"}}/>):(<img src={placeHolderImage} width="150" height="150" style={{borderRadius: "50%"}}/>)}</div>
                                        <span className="remove" onClick={() => {setImage(null)}}>Remove</span>
                                    </div>
                                    <div>
                                        <input type="file" className="file" name="photo" accept="image/*" ref={fileInputRef} onChange={async(event)=>{
                                        const files = event.target.files;
                                        const data = new FormData();
                                        data.append('file', files[0])
                                        data.append('upload_preset', 'huqkzrsj')
                                        const res = await fetch('https://api.cloudinary.com/v1_1/proxycrome01/image/upload',
                                            {
                                                method: 'POST',
                                                body: data
                                            }
                                        )
                                        const file = await res.json();
                                        setImage(file.secure_url)
                                        }}/>
                                        <label for="file" className="image-input" onClick={(event) => {
                                            event.preventDefault();
                                            fileInputRef.current.click();
                                        }}><span>Browse</span></label>
                                        <span className="instruct">Maximum file size is 2GB</span>
                                    </div>
                                </div>
                            </div>
                            <div className="inner-right-section">
                                <div className="user-form">
                                    <div className="user-info-form">
                                        <div className="middle-input">
                                            <input type="text" name="firstName" placeholder="First name" className="input-field" onChange={(e)=>{updatedetails({[e.target.name]:e.target.value})}}/>
                                            <input type="text" name="country" placeholder="Country" className="input-field" onChange={(e)=>{updatedetails({[e.target.name]:e.target.value})}}/>
                                            <span className="additional">Additional Information</span>
                                            <input type="number" name="phone" placeholder="Phone number" className="input-field" onChange={(e)=>{updatedetails({[e.target.name]:e.target.value})}}/>
                                        </div>
                                        <div className="right-input">
                                            <input type="text" name="lastName" placeholder="Last name" className="input-field" onChange={(e)=>{updatedetails({[e.target.name]:e.target.value})}}/>
                                            <input type="email" name="email" placeholder="Email address" className="input-field" onChange={(e)=>{updatedetails({[e.target.name]:e.target.value})}}/>
                                        </div>
                                    </div>
                                    <div className="btn-field">
                                        <button type="submit" className="pro-submit-btn" onClick={handleSubmit}>APPLY</button>
                                        <button type="button" className="discard-btn" onClick={()=> {history.goBack()}} >DISCARD</button>
                                    </div>
                                      
                                </div>
                            </div>   
                            </div>  
                           
                            {/* <div className="btn-field">
                                        <button type="submit" className="pro-submit-btn" onClick={handleSubmit}>APPLY</button>
                                        <button type="button" className="discard-btn" onClick={()=> {history.goBack()}} >DISCARD</button>
                                    </div> */}
                           
                        
                            
                            
                        
                       {/* </div> */}
                    </form>
                    
                </div>    
            </DashFrame> 
            </div>
            <div className="mobile-setings-view">
                <MobileDash  dashSettingsStyle={{backgroundColor:presentcolor.dashheadercolor}}>
               
                    <div className="header">
                        <h3>Settings</h3>
                        {/* <hr className="welcome-divider"/> */}
                    </div>
                    
                    <div className="sub-headers">
                        <Link to={`/settings/profile/${userStr.id}`} style={{borderBottom: "3px solid #6200f0",marginRight:"16px", color: "#030640",marginRight:"16px"}}><p style={{marginRight:"0"}}>Profile</p></Link>
                        <Link to="/settings/notifications"><p>Notifications</p></Link>
                        <Link to="/settings/application"><p>Application</p></Link>
                        <Link to="/settings/payments"><p>Payments</p></Link>
                    </div>
                    {/* <hr className="welcome-divider"/> */}
                    <div className="inner-settings-sections">
                    <form>
                        <div className="inner-sectionsy">   
                            <div className="inner-left-section">
                                <div className="image-forms">
                                    <div>
                                        <div className="profile-image">{image ? (<img src={image} width="100" height="100" style={{objectFit: "cover", borderRadius: "50%", border: "none"}}/>):(<img src={placeHolderImage} width="150" height="150" style={{borderRadius: "50%"}}/>)}</div>
                                        <span className="remove" onClick={() => {setImage(null)}}>Remove</span>
                                    </div>
                                    <div>
                                        <input type="file" className="file" name="photo" accept="image/*" ref={fileInputRef} onChange={async(event)=>{
                                        const files = event.target.files;
                                        const data = new FormData();
                                        data.append('file', files[0])
                                        data.append('upload_preset', 'huqkzrsj')
                                        const res = await fetch('https://api.cloudinary.com/v1_1/proxycrome01/image/upload',
                                            {
                                                method: 'POST',
                                                body: data
                                            }
                                        )
                                        const file = await res.json();
                                        setImage(file.secure_url)
                                        }}/>
                                        <label for="file" className="image-input" onClick={(event) => {
                                            event.preventDefault();
                                            fileInputRef.current.click();
                                        }}><span>Browse</span></label>
                                        <span className="instruct">Maximum file size is 2GB</span>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="inner-right-sections"> */}
                                <div className="user-forms">
                                    <div className="user-info-form">
                                        <div className="middle-input">
                                            <input type="text" name="firstName" placeholder="First name" className="input-field" onChange={(e)=>{updatedetails({[e.target.name]:e.target.value})}}/>
                                            <input type="text" name="lastName" placeholder="Last name" className="input-field" onChange={(e)=>{updatedetails({[e.target.name]:e.target.value})}}/>
                                            <input type="text" name="country" placeholder="Country" className="input-field" onChange={(e)=>{updatedetails({[e.target.name]:e.target.value})}}/>
                                            <input type="email" name="email" placeholder="Email address" className="input-field" onChange={(e)=>{updatedetails({[e.target.name]:e.target.value})}}/>
                                            <span className="additional">Additional Information</span>
                                            <input type="number" name="phone" placeholder="Phone number" className="input-field" onChange={(e)=>{updatedetails({[e.target.name]:e.target.value})}}/>
                                        </div>
                                        {/* <div className="right-input"> */}
                                           
                                            
                                        {/* </div> */}
                                    </div>
                                    <div className="btn-field">
                                        <button type="submit" className="pro-submit-btn" onClick={handleSubmit}>APPLY</button>
                                        <button type="button" className="discard-btn" onClick={()=> {history.goBack()}} >DISCARD</button>
                                    </div>   
                                </div>
                              
                            {/* </div>     */}
                        </div>
                    </form>
                    
                </div>    


                </MobileDash>
            </div>
            </div>
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

export default connect(mapstatetoprops,MapDispatchToProps) (Profile)

