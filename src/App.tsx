import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layouts from './layouts/Layouts';
import Home from './pages/Home/Home';
import Compaines from './pages/Compaines/Compaines';
import Servies from './pages/Servies/Servies';
import CompanyDetails from './pages/CompanyDetails/CompanyDetails';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Chart from './pages/Chart/Chart';
import CompletePurchase from './pages/CompletePurchase/CompletePurchase';
import CompletePurchase2 from './pages/CompletePurchase/CompletePurchase2';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import UserSignUp from './pages/UserSignUp/UserSignUp';
import UserLogin from './pages/UserLogin/UserLogin';
import CompanySingUp from './pages/CompanySingUp/CompanySingUp';
import CompanyLongin from './pages/CompanyLongin/CompanyLongin';
import UserProfile from './pages/UserProfile/UserProfile';
import MainPage from './pages/UserProfile/Page/MainPage';
import MessagePage from './pages/UserProfile/Page/MessagePage';
import OrdersPage from './pages/UserProfile/Page/OrdersPage';
import Location from './pages/UserProfile/Page/Location';
import ProfileSettings from './pages/UserProfile/Page/ProfileSettings';
import HelpCenter from './pages/UserProfile/Page/HelpCenter';

const routes = createBrowserRouter([
  { path: "/", element: <Layouts />, children:[
    { index: true, element: <Home/> },
    { path: "compaines", element: <Compaines/> },
    { path: "servies", element: <Servies/> },
    { path: "companyDetails", element: <CompanyDetails/> },
    { path: "productDetails", element: <ProductDetails/> },
    { path: "chart", element: <Chart/> },
    { path: "completePurchase", element: <CompletePurchase/> },
    { path: "completePurchase2", element: <CompletePurchase2/> },
    { path: "createAccount", element: <CreateAccount/> },
    { path: "userSignUp", element: <UserSignUp/> },
    { path: "userLogin", element: <UserLogin/> },
    { path: "userProfile", element: <UserProfile/>, children:[
      {path: "/userProfile/mainPage", element: <MainPage/>},
      {path: "/userProfile/message", element: <MessagePage/>},
      {path: "/userProfile/order", element: <OrdersPage/>},
      {path: "/userProfile/location", element: <Location/>},
      {path: "/userProfile/profileSettings", element: <ProfileSettings/>},
      {path: "/userProfile/helpCenter", element: <HelpCenter/>},
    ] },
    { path: "companySingUp", element: <CompanySingUp/> },
    { path: "companyLongin", element: <CompanyLongin/> },
  ]} 
]);
function App() {

  return (

    <RouterProvider router={routes} />
  )
}

export default App
