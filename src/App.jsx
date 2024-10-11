
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "./constants/constants";
import { logIn, logOut } from "./features/AuthSlice";


function App() {
const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn);
const dispatch = useDispatch();

const checkAuth = async () => {
  try {
    const response = await axios(`${baseUrl}/user/check_auth`, {
      withCredentials: true,
    })
    console.log(response);
    
    const user = JSON.parse(JSON.stringify(response?.data?.data.user))
    if (response?.data?.statusCode === 200) {
      dispatch(logIn({user: user}))
    }

  } catch (error) {
    dispatch(logOut());
    console.log(error);
      
  }
}

useEffect(()=>{
  console.log(baseUrl);
  
  !isLoggedIn && checkAuth(); 
}, [])

  return (
    <main  className="bg-gray-200 font-poppins min-h-screen relative">
      <Navbar />
      <ToastContainer/>
      <div className="min-h-[55vh]">
      <Outlet />
      </div>
      <Footer/>
    </main>
  );
}

export default App;
