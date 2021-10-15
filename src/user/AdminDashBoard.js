import React from 'react';
import Base from '../core/Base'
import { isAuthenticated } from '../auth/helper';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const {user:{name,email,role}} = isAuthenticated();
    const adminLeftSide = ()=>{
        return (
            <div className="card">
                <h4 className="card-header bg-dark text-white text-center">Admin Navigation</h4>            
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/admin/create/category" className="nav-link text-info">Create Category</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/categories" className="nav-link text-info">Manage Category</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/create/product" className="nav-link text-info">Create Product</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/products" className="nav-link text-info">Manage Product</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/admin/orders" className="nav-link text-info">Manage Order</Link>
                    </li>
                </ul>
            </div>
        )
    }
    const adminRightSide = ()=>(
        <div className="card mb-4">
            <h4 className="card-header">Admin Information</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <p>
                    <span className="badge badge-success mr-2">Name:</span>{name}
                    </p>
                </li>
                <li className="list-group-item">
                    <p>
                    <span className="badge badge-success mr-2">Email:</span>{email}
                    </p>
                </li>
                <li className="list-group-item">
                    <span className="badge badge-danger">Admin-area</span>
                </li>
            </ul>
        </div>
    );

    return (
        <Base 
        title="Welcome to Admin DashBoard 😁😁😁" 
        description="Manage All of your products Here 👀👀"
        className="container bg-warning p-4"
        >
        <div className="row">
            <div className="col-lg-3">
                {adminLeftSide()}
            </div>
            <div className="col-lg-9">
                {adminRightSide()}
            </div>
        </div>
            
        </Base>
    );
}

export default AdminDashboard;
