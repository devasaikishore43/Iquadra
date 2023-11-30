
import React,{useEffect,useState} from 'react';
import './Login.css'
import axios from 'axios';
const Login = () => {
    const [data,setData] = useState({
        email:"",
        password:"",
    });
    const Email = (e) => {
        data["email"] = e.target.value;
        // console.log(data["email"])
    }
    const Password = (e) => {
        data["password"] = e.target.value;
        // console.log(data["password"])
    }
    const Send = () => {
        console.log(data)
        axios.post("http://localhost:8000/checkUser",data)
        .then(res =>{
            // console.log(res.data[0])
            var x = JSON.stringify(res.data[0])
            localStorage.setItem("pic",x)
            // console.log(localStorage.getItem("pic"))
            if(res.data.length >= 1){
                window.location.href="/Home";
            }
            else{
                alert("user not found");
            }
        })
        .catch(err => {
            console.log(err);
            alert("user not found");
        })
    }
    const Signup = () =>{
        window.location.href = '/signup'
    }

    return (
        
        <section>
          <div className="signin">
            <div className="content">
              <h2>Sign In</h2>
              <div className="form">
                <div className="inputBox">
                  <input type="text" onChange={Email} required placeholder="email" />
                  <i>email</i>
                </div>
                <div className="inputBox">
                  <input type="password" onChange={Password} required placeholder="Password" />
                  <i>Password</i>
                </div>
                <div className="inputBox">
                    <div className='buttons'>
                  <input type="submit" onClick={Send} value="Login" />
                  <input type="submit" onClick={Signup} value="SignUp" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        // <div className='login-container'>
        //     <div className='signin'>
        //         <div className='content'>Login</div>
        //         <div className='input_type'><input type="text" onChange={Email} placeholder='Enter Email'/></div>
        //         <div className='input_type'><input type="password" onChange={Password} placeholder='Enter password'/></div>
        //         <div className='Buttons'>
        //             <button onClick={Send}>Login</button>
        //             <button onClick={Signup}>Signup</button>
        //             </div>
        //     </div>
        // </div>
    );
};

export default Login;
