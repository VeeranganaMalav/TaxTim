import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import image from "../images/c.png"
import image1 from "../images/c2.png";
import "../css/Login.css";
import axios from "axios";
import { useToast } from '@chakra-ui/react'
import { AuthContext } from '../Context/AuthContextProvider';
import { Navigate } from 'react-router-dom';

export const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [email1, setEmail1] = useState("")
  const [password1, setPassword1] = useState("");
  const [name, setName] = useState("");
  const toast = useToast();
  const [data, setData] = useState([]);

  const {isAuth, setIsAuth} = useContext(AuthContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      name, email, password
    }
    for(let i=0;i<data.length;i++){
      if(data[i].email === email){
        toast({
          title: 'Error!',
          description: "Gmail Already Exist",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
        return (setEmail(''),setName(''),setPassword(''))
      }
    }

    if(name.length === 0 || email.length === 0 || password.length === 0){
      toast({
        title: 'Error!',
        description: "Fill all inputs",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }
    axios.post(`https://6453b750e9ac46cedf2d995b.mockapi.io/api/bikes/login`, newObj)
      .then(() => {
        toast({
          title: 'Register Successfully',
          description: "We've created your account for you.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        setEmail("")
        setName("")
        setPassword("")
      })
      .catch(() => {
        toast({
          title: 'Error!',
          description: "Some thing went wrong",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      })
  }


  useEffect(() => {
    axios.get(`https://6453b750e9ac46cedf2d995b.mockapi.io/api/bikes/login`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err.message)) 
  }, [])


  const handleLogout = () =>{
    setIsAuth(false);
  }

  useEffect(() => {
    // Check if authentication state is stored in localStorage
    const storedAuth = localStorage.getItem('isAuth');

    if (storedAuth) {
      setIsAuth(JSON.parse(storedAuth));
    }
  }, []);

  useEffect(() => {
    // Update localStorage when authentication state changes
    localStorage.setItem('isAuth', isAuth);
  }, [isAuth]);

  const handleLogin = (e) => {
    e.preventDefault();
    for(let i=0;i<data.length;i++){
      if(data[i].email === email1 && data[i].password === password1){
        toast({
          title: 'login Successfully',
          description: "You are logged in",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        setEmail1('');
        setPassword1('')
          return setIsAuth(true)
      }
    }
    toast({
      title: 'Error!',
      description: "Email and Password not match",
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
      return setIsAuth(false)
  }
  

  // if(isAuth){
  //   return <Navigate to = "/" />
  // }
  return (
    <div className='loginContainer1'>
      <div className='loginContainer'>
        <div className='login'>
          <h1 className='texth1'>I am a returning user.</h1>
          <h2 className='texth2'>Please enter your login details from before.</h2>
          {isAuth? <h1 style={{color:"green", fontSize : "2.5rem" , fontWeight: "bold"}}>You are logged in</h1> : ""}

          <form className='loginform' onSubmit={handleLogin}>
            <label className='lablefrom'>Email address:
              {" "}
            </label>
            <input type="text" name='email1' className='inputform' value={email1} onChange={(e) => setEmail1(e.target.value)} />

            <label className='lablefrom'>
              Password:
            </label>
            <input type="text" name='password1' value={password1} onChange={(e) => setPassword1(e.target.value)} className='inputform' />

            <label className='lablefrom'>
              <input type="checkbox" />
              Remember me next time
            </label>
            <div className='link1'>
              <Link to={"/passwordReset"}>Forgot your password?</Link>
            </div>
          {isAuth? <button className='formbtn' onClick={handleLogout}>Logout</button>:<button className='formbtn' type='submit'>LOGIN TO MY ACCOUNT</button>}

          </form>
          <button onClick={() => setShow(!show)} className='formbtn'>I AM NEW HERE</button>
        </div>

        <div>
          <img className={show ? "image1" : "image2"} src={show ? image : image1} alt="error" />
        </div>

        {/* **************************** sign-up  ****************** */}
        {show ?
          <div className='sign'>

            <h1  className='texth1'>I am new here.</h1>
            <h2 className='texth2'>Enter your details below to start your Tax Return.</h2>

            <form className='loginform' onSubmit={handleSubmit}>
              <label className='lablefrom'>First name:
                {" "}
              </label>
              <input type="text" name='name' className='inputform' value={name} onChange={(e) => setName(e.target.value)} />


              <label className='lablefrom'>Email address:
                {" "}
              </label >
              <input type="text" name='email' className='inputform' value={email} onChange={(e) => setEmail(e.target.value)} />

              <label className='lablefrom'>
                Password:
              </label>
              <input type="password" name='password' className='inputform' value={password} onChange={(e) => setPassword(e.target.value)} />

              <label className='lablefrom'>
                <input type="checkbox" />
                I accept the TaxTim terms
              </label>

              <button className='formbtn' type='submit'>START YOUR TAX RETURN</button>

            </form>
            <div className='para'>
              <p><b style={{ color: "#4d4d4d", fontWeight: "bold" }}>TaxTim is for all individuals earning income in South Africa</b> including small business owners, freelancers and entrepreneurs. CFCs and local farming are excluded.</p>

              <p>TaxTim also caters for<b style={{ color: "#4d4d4d", fontWeight: "bold" }}>Micro Businesses</b> (under R14m Turnover) and Dormant Companies.</p>

              <p>TaxTim handles even the most complicated tax returns. Try us!</p>
            </div>
          </div> : ""}


      </div>
    </div>
  )
}