import React, { useState,useEffect } from "react";
import axios from "axios";

const Home = () => {
  // console.log(JSON.parse(localStorage.getItem("pic")));
  const[contacts , setContacts] = useState([])
  const[x,setX] = useState([])
  var m;
  var url =
    "http://localhost:8080/Images/" +
    JSON.parse(localStorage.getItem("pic")).phone +
    ".jpg";
    useEffect(()=>{
      axios.post("http://localhost:8080/getcontacts",{"id":JSON.parse(localStorage.getItem("pic"))._id})
      .then(res => {
       console.log(res.data)
        setContacts(res.data);
        m = res.data;
      })
      .catch(err => {
        console.log(err);
      })
  
    },[])
    const [data, setData] = useState({
    id:JSON.parse(localStorage.getItem("pic"))._id,
    first_name: "",
    last_name: "",
    phone_number: 0,
    email: "",
    address: "",
    socialmedia:""
  });
  const First_Name = (e) => {
    data["first_name"] = e.target.value;
  };
  const Last_Name = (e) => {
    data["last_name"] = e.target.value;
  };
  const Phone_number = (e) => {
    data["phone_number"] = e.target.value;
  };
  const Email = (e) => {
    data["email"] = e.target.value;
  };
  const Address = (e) => {
    data["address"] = e.target.value;
  };
  const SocialMedia = (e) =>{
    data["socialmedia"] = e.target.value;
  }
  const Send = () => {
    axios.post("http://localhost:8080/addTodo",data)
    .then(res =>  console.log(res))
    .catch(err => console.log(err))
  }

  const[toggle , setToggle] = useState(false);
  const Change =()=>{
    setToggle(!toggle)
  }
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  m = contacts.filter((item) =>{
  if(typeof searchTerm == 'string'){
    console.log(searchTerm)
    if(item.firstname.toLowerCase().includes(searchTerm.toLowerCase())){
      return  item.firstname.toLowerCase().includes(searchTerm.toLowerCase())
    }
    else if(item.lastname.toLowerCase().includes(searchTerm.toLowerCase())){
      return  item.lastname.toLowerCase().includes(searchTerm.toLowerCase())
      
    }
    else if(String(item.phone_number).toLowerCase().includes(searchTerm.toLowerCase())){
      return String(item.phone_number).toLowerCase().includes(searchTerm.toLowerCase())
    }
  } 
  
  
  return false;
}
);

  return (
    <div className="Home_division">
      <div className="Profile_division">
        <div className="Img">
          <img src={url} />
        </div>
        <div className="College_name">Aditya Engineering College</div>
        <div className="Details">
          <div>Email:&nbsp;{JSON.parse(localStorage.getItem("pic")).email}</div>
          <br />
          <div>
            mobile:&nbsp;{JSON.parse(localStorage.getItem("pic")).phone}
          </div>
          <br />
          <div>
            address:&nbsp;{JSON.parse(localStorage.getItem("pic")).address}
          </div>
        </div>
      </div>
      <button onClick={Change}>Add Contact</button>
      <div className="Details_ra">
        <div className="Details_ra_1">
        <input type="text" placeholder="Search" onChange={handleSearch} />
            {
              m.map((ele,index) =>{
                return <div className="Details_ra_1_1">
                  <div className="data"><div>FirstName : {ele.firstname}</div></div>
                  <div className="data"><div>LastName : {ele.lastname}</div></div>
                  <div className="data"><div>Phone Number : {ele.phone_number}</div></div>
                  <div className="data"><div>Address : {ele.address}</div></div>
                  <div className="data"><div>email : {ele.email}</div></div>
                  <div className="data"><div>SocialMedia : {ele.socialmedia}</div></div>
                </div>
              })
            }
        </div>
      <div className="Details_ra_2">
          {toggle?<div className="Sign_up_1">
        <div className="Name_division">
          <input
            type="text"
            className="firstname"
            onChange={First_Name}
            placeholder="First Name"
          />
          <input
            type="text"
            className="secondname"
            onChange={Last_Name}
            placeholder="Last Name"
          />
        </div>
        <div className="input_type">
          <input
            type="number"
            onChange={Phone_number}
            placeholder="Enter Mobile Number"
          />
        </div>
        <div className="input_type">
          <input type="email" onChange={Email} placeholder="Enter email" />
        </div>
        <div className="input_type">
          <input type="text" onChange={SocialMedia} placeholder="Instagram / Facebook" />
        </div>
        <div className="input_type">
          <textarea placeholder="Enter Address" onChange={Address} />
        </div>
        <button onClick={Send}>Submit</button>
      </div>:<></>}
        </div>
      </div>
      
      
    
    </div>
  );
};

export default Home;
