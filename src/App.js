import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useState } from 'react';
import UserContext from './Components/UserContext';

import Schedule from './Pages/Schedule';
import Login from './Pages/Login';

import AdminHome from './Pages/Admin Pages/Home';
import AdminEmployees from './Pages/Admin Pages/Employees';
import AdminCreateQuote from './Pages/Admin Pages/Create a Quote';
import AdminOrder from './Pages/Admin Pages/Order';
import AdminOrderStatus from './Pages/Admin Pages/Order Status';
import AdminOrderHistory from './Pages/Admin Pages/Order History';
import AdminQuoteHistory from './Pages/Admin Pages/Quote History';
import AdminClients from './Pages/Admin Pages/Clients';
import AdminNewUser from './Pages/Admin Pages/New Employee';

import Press240 from './Pages/Press Pages/Press 240';
import Press528 from './Pages/Press Pages/Press 528';
import Press540 from './Pages/Press Pages/Press 540';

import Bindery from './Pages/Bindery';

import BillingAndInvoice from './Pages/Billing and Invoice';

import PrePress from './Pages/Pre-Press';

import Shipping from './Pages/Shipping';

import CreateUser from './Pages/CreateUser';



function App() {
const [user, setUser] = useState({});

  return (
    <Router>
      <Switch>
      <UserContext.Provider value={{user, setUser}}>
        <Route path="/" exact>
          <Schedule />
        </Route>
          <Route path="/Login" exact>
        <Login />
        </Route>

        <Route path="/Admin/Home" exact>
          <AdminHome />
        </Route>
        <Route path="/Admin/Employees" exact>
          <AdminEmployees />
        </Route>
        <Route path="/Admin/Create-a-Quote" exact>
          <AdminCreateQuote />
        </Route>
        <Route path="/Admin/Order" exact>
          <AdminOrder />
        </Route>
        <Route path="/Admin/Order-Status" exact>
          <AdminOrderStatus />
        </Route>
        <Route path="/Admin/Order-History" exact>
          <AdminOrderHistory />
        </Route>
        <Route path="/Admin/Quote-History" exact>
          <AdminQuoteHistory />
        </Route>
        <Route path="/Admin/Clients" exact>
          <AdminClients />
        </Route>
        <Route path="/Admin/New-Employee" exact>
          <AdminNewUser />
        </Route>

        <Route path="/Press/Press-240" exact>
          <Press240 />
        </Route>
        <Route path="/Press/Press-528" exact>
          <Press528 />
        </Route>
        <Route path="/Press/Press-540" exact>
          <Press540 />
        </Route>

        <Route path="/Billing-and-Invoice" exact>
          <BillingAndInvoice />
        </Route>

        <Route path="/Bindery" exact>
          <Bindery />
        </Route>

        <Route path="/Pre-Press" exact>
          <PrePress />
        </Route>

        <Route path="/Shipping" exact>
          <Shipping />
        </Route>

        <Route path="/CreateUser" exact>
          <CreateUser />
        </Route>
        </UserContext.Provider>

      </Switch>
    </Router>
    
  );
}

export default App;
