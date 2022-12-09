import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
    const history = useNavigate();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        mobileNumber: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e =>{
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const {firstName, lastName, age, email, mobileNumber, password, reEnterPassword} = user
        if(firstName && lastName && age && email && mobileNumber && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then(res => {
                alert(res.data.message)
                history("/login")
            });
        } else{
            alert("invalid input");
        }
    }

    return(
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="firstName" value={user.firstName} placeholder="Enter your first name" onChange={handleChange}></input>
            <input type="text" name="lastName" value={user.lastName} placeholder="Enter your last name" onChange={handleChange}></input>
            <input type="number" name="age" value={user.age} placeholder="Enter your age" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
            <input type="number" name="mobileNumber" value={user.mobileNumber} placeholder="Enter your mobile number" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
            <div className="button" onClick={register}>Register</div>
            <div>or</div>
            <div className="button" onClick={() => history("/login")}>Login</div>
        </div>
    )
}

export default Register;