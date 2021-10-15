import React, {useState} from "react";
import Base from "../core/Base";
import { Link, Redirect} from "react-router-dom";
import {signin,authenticate,isAuthenticated} from "../auth/helper/index"

const Signin =()=>{
    const [values,setValues]=useState({
        email:"",
        password:"",
        error:"",
        loading:false,
        didRedirect:false
    })
    const {email,password,error,loading,didRedirect} = values;
    const {user}=isAuthenticated();
    const handleChange = name =>event =>{
        setValues({...values,error:false,[name]:event.target.value})
    }
    const performRedirect = ()=>{
        if(didRedirect){
            if(user&&user.role==1){
                return <Redirect to="/admin/dashboard"/>
            }else{
                return <Redirect to="/user/dashboard"/>
            }
        }
        if(isAuthenticated()){
            return <Redirect to="/"/>
        }
    }
    const onSubmit = event =>{
        event.preventDefault();
        setValues({...values,error:false,loading:true});
        signin({email,password})
        .then(data=>{
            if(data.error){
                setValues({...values,error:true,loading:false});
            }else{
                authenticate(data,()=>{
                    setValues({...values,didRedirect:true});
                })
            }
        })
        .catch(err=>console.log("SignIn failed"));

    }
    const loadingMessage = () =>(
        loading&&(
            <div className="alert alert-info">
                <h2>loading...</h2>
            </div>
        )  
    );
    const errorMessage = () =>(
        <div className="row">
             <div className="alert alert-danger col-md-6 offset-sm-3 text-left" style={{display:error?"":"none"}}>
             Email or Password is wrong
            </div>
        </div>
    )


    const signInForm = ()=>(
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <form action="">
                    <div className="form-group">
                        <label className="text-light">Email</label>
                        <input value={email} onChange={handleChange("email")} className="form-control" type="email" />
                    </div>
                    <div className="form-group">
                        <label className="text-light">Password</label>
                        <input value={password} className="form-control" onChange={handleChange("password")} type="password" />
                    </div>
                    <button onClick={onSubmit} className="btn btn-success btn-block">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )

    return (
        <Base title="SignIn page" description="SignIn Your Account Here 😁😁😁">
            {loadingMessage()}
            {errorMessage()}
            {signInForm()}
            {performRedirect()}
            <p className="text-white text-center">{JSON.stringify(values)}</p>
        </Base>
    );
};

export default Signin;
