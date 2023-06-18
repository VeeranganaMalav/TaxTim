import React, { useState , useEffect } from 'react'
import "../css/Login.css"
import axios from "axios";
import { useToast } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom';

export const PasswordReset = () => {
   const [data,setData] = useState([]);
   const [email,setEmail] = useState('');
   const [password1,setPassword1] = useState('');
   const [password2,setPassword2] = useState('');
   const toast = useToast();
   const [update,setUpdate] = useState(false);


   const handleSubmit = (e) =>{
    e.preventDefault();
if(password1 === password2 && password1.length>0){
     const obj={
        password : password1
     }
     for(let i =0;i<data.length;i++){
        if(data[i].email === email){
           handlePatch(data[i].id,obj)
            setUpdate(true);
        }
     }
     toast({
        title: 'Error!',
        description: "Password updated success fully!!",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }else{
        toast({
            title: 'Error!',
            description: "Password not Match",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
    }
   }


     const handlePatch = (id,obj) =>{
        axios.patch(`https://6453b750e9ac46cedf2d995b.mockapi.io/api/bikes/login/${id}`,obj)
        .then((res)=>{
            console.log(res.data);
        })
     }







   useEffect(() => {
    axios.get(`https://6453b750e9ac46cedf2d995b.mockapi.io/api/bikes/login`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err.message)) 
  }, [])


if(update){
    return <Navigate to = "/login" />
   }

   console.log(data);


 return (
    <div className='loginContainer1'>
        <div className='central'>
            <h1 className='texth1'>I'M here to help you reseting your password</h1>
            <form onSubmit={handleSubmit}>
                <label className='lablefrom'>
                    Enter your Email:
                    {" "} 
                </label>
                <input type="email" className='inputform' onChange={(e)=>setEmail(e.target.value)} />
                <label className='lablefrom'>
                    Enter your New Password:
                    {" "} 
                </label>
                <input type="password" className='inputform' onChange={(e)=>setPassword1(e.target.value)} />
                <label className='lablefrom'>
                    Confirm:
                    {" "} 
                </label>
                <input type="password" className='inputform' onChange={(e)=>setPassword2(e.target.value)} />
                <button className='formbtn' type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}