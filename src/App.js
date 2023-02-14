import {Route,Switch} from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage';
import Subscription from './Pages/Subscription/Subscription';
import Signup from './Pages/Signup/Signup';
import Signin from './Pages/Sign-in/Signin';
// import Resetpassword from './Pages/Passwordreset/Passwordreset'
import Productcategory from './Pages/Productcategory/Productcategory';
import Product from './Pages/Product/Product';
import Partners from './Pages/Partners/Partners';
import Newsub from './Pages/Newsub/Newsub';
import Invite from './Pages/Invite/Invite';
import HowWorks from './Pages/How-it-works/How-it-works'
import Dashboard from './Pages/Dashboard/Dashboard'
import Company from './Pages/Company/Company';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Addsub from  './Pages/Addsub/Addsub';
import Blog from  './Pages/Blog/Blog'
import Delete from './Pages/Delete/Delete'
import Fundsuccess from './Pages/Payment/fundsuccess/Fundsuccess';
import Profile from './Pages/Settings/Profile/Profile';
import Notifications from './Pages/Settings/Notifications/Notifications'
import Application from './Pages/Settings/Application/Application';
import Payments from './Pages/Settings/Payments/Payments';
import payment from './Pages/Payment/payment';
//import Passwordreset from './Pages/Passwordreset/Passwordreset'
import Fundwallet from './Pages/Payment/Fundwallet/Fundwallet';
import Signincontinue from './Pages/Sigincontinue/Signincontinue'
import Logout from './Pages/Logout/Logout';
import LogoutReal from './Pages/LogoutReal/LogoutReal';
import Requestconfirm from './Pages/Requestconfirm/Requestconfirm'
import Renew from './Pages/Renew/Renew';
import Payoption from './Pages/Payoption/Payoption';
import Paymentcard from './Pages/Paymentcard/Paymentcard';
import Paymentsuccess from './Pages/Paymentsuccess/Paymentsuccess';
import Passwordreset from './Pages/Passwordreset/Passwordreset';
import Resetpassword from './Pages/Resetpassword/Resetpassword';
import Passwordconfirmation from './Pages/Passwordconfirmation/Passwordconfirmation'
import Processing from './Pages/Processing/Processing';
import Frequent from './Pages/Support/Frequent/Frequent'
import Autochange from './Pages/Autochange/Autochange';
import Walletpayment from './Pages/Walletpayment/Walletpayment';
import Walletsuccesspayment from './Pages/Walletsuccesspayment/Walletsuccesspayment';
import Pinverification from './Pages/Pinverification/Pinverification';
import './App.css';



function App() {
  return (
    <div className="App">
    <Switch>
    
     <Route exact path="/" component={Homepage}/>
     <Route exact path="/dashboard" component={Dashboard}/>
     <Route exact path="/resetpassword/:token" component={Resetpassword}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/autochange" component={Autochange}/>
     <Route exact path="/addsub/:name" component={Addsub}/>
     <Route exact path="/blog" component={Blog}/>
     <Route exact path="/company" component={Company}/>
     <Route exact path="/contact" component={Contact}/>
     <Route exact path="/delete/:name" component={Delete}/>
     <Route exact path="/fundwallet" component={Fundwallet}/>
     <Route exact path="/fundsuccess" component={Fundsuccess}/>
     <Route exact path="/HowWorks" component={HowWorks}/>
     <Route exact path="/invite" component={Invite}/>
     <Route exact path="/Newsub/:name" component={Newsub}/>
     <Route exact path="/partners" component={Partners}/>
     <Route exact path="/passwordconfirmation" component={Passwordconfirmation}/>
     <Route exact path="/paymentcard" component={Paymentcard}/>
     <Route exact path="/payoption" component={Payoption}/>
     <Route exact path="/Paymentsuccess" component={Paymentsuccess}/>
     <Route exact path="/product" component={Product}/>
     <Route exact path="/productcategory" component={Productcategory}/>
     <Route exact path="/Requestconfirm" component={Requestconfirm}/>
     <Route exact path="/Passwordreset" component={Passwordreset}/>
     <Route exact path="/Renew/:name" component={Renew}/>
     <Route exact path="/signup" component={Signup}/>
     <Route exact path="/logout" component={Logout}/>
     <Route exact path="/logoutReal" component={LogoutReal}/>
     <Route exact path="/signin" component={Signin}/>
     <Route exact path="/signincontinue" component={Signincontinue}/>
     <Route exact path="/subscription" component={Subscription}/>
     <Route exact path="/settings/profile/:id" component={Profile}/>
     <Route exact path="/processing" component={Processing}/>
     <Route exact path="/settings/notifications" component={Notifications}/>
     <Route exact path="/settings/application" component={Application}/>
     <Route exact path="/settings/payments" component={Payments}/>
     <Route exact path="/pinverification" component={Pinverification}/>
     <Route exact path="/support/faq" component={Frequent}/>
     <Route exact path="/payment/funding-history" component={payment}/>
     <Route exact path="/walletpayment" component={Walletpayment}/>
     <Route exact path="/walletsuccesspayment" component={Walletsuccesspayment}/>
    </Switch>
    </div>
  );
}

export default App;
