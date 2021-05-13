import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Login from './Components/Login-Register/login';
import Signup from '../Login-Register/signup';

// class RouterURL extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Switch>
//                     <Route path="/signup" exact component={Signup} />
//                 </Switch>
//             </div>
//         );
//     }
// }
// export default RouterURL;


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                {/* <Route exact path="/" component={App} />
                <Route path="/pay" exact component={Pay} />
                <Route path="/delivery-policy" exact component={Delivery} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/login" exact component={Login} /> */}
                <Route path="/signup" exact component={Signup} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

