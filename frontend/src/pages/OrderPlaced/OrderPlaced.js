import React,{useEffect} from 'react'
import Navbar from '../../Components/NavigationBar/Navbar';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';
export default function OrderPlaced() {

    useEffect(() => {
        if("payload" in localStorage){
            let payload = JSON.parse(localStorage.getItem("payload"));
            try{
                axios.post('/api/v1/order/createNewOrder',payload).then((res) => {
                    console.log(res);
                    localStorage.removeItem("payload");
                    localStorage.removeItem("bookingDetails");
                    localStorage.removeItem("userDetails");
                })
            }catch(e){

            }
        }
    },[])

  return (
    <div>
        
        <Navbar />
        <div>OrderPlaced</div>
        <Footer />
    </div>
    
  )
}
