import React, {useState} from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import {signup} from "../auth/helper/index"
const Signup =()=>{
    const [values,setValues] = useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success:false
    })
    const {name,email,password,error,success} = values;
    const handleChange = name =>event =>{
        setValues({...values,error:false,[name]:event.target.value})
    }

    const onSubmit = event =>{
        event.preventDefault();
        setValues({...values,error:false}) 
        signup({name,email,password})
        .then(data=>{
            if(data.error){
                setValues({...values,error:data.error,success:false})
            }else{
                setValues({...values,name:"",email:"",password:"",error:"",success:true})
            }
        })
        .catch(err=>console.log("Error in SignUp"));
    }
    const signUpForm = ()=>(
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <form>
                    <div className="form-group">
                        <label className="text-light">Name</label>
                        <input className="form-control" value={name} onChange={handleChange("name")} type="text" />
                    </div>
                    <div className="form-group">
                        <label className="text-light">Email</label>
                        <input className="form-control" value={email} onChange={handleChange("email")} type="email" />
                    </div>
                    <div className="form-group">
                        <label className="text-light">Password</label>
                        <input className="form-control" value={password} onChange={handleChange("password")} type="password" />
                    </div>
                    <button onClick={onSubmit} className="btn btn-success btn-block">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )

    const successMessage = () =>(
        <div className="row">
            <div className="alert alert-success col-md-6 offset-sm-3 text-left" style={{display:success?"":"none"}}>
            New Account was created successfully. Please
            <Link to="/signin">Login Here</Link>
            </div>
        </div>
        
    )
    const errorMessage = () =>(
        <div className="row">
             <div className="alert alert-danger col-md-6 offset-sm-3 text-left" style={{display:error?"":"none"}}>
            {error}
            </div>
        </div>
    )
    return (
        <Base title="SignUp page" description="Create Your Account Here 😁😁😁">
            {successMessage()}
            {errorMessage()}
            {signUpForm()}
        </Base>
    );
};

export default Signup;
