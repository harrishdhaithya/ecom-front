import React from "react";
import Menu from "./Menu";



export default class Base extends React.Component{
    
    render(){
        return <div>
        <Menu/>
        <div className="container-fluid">
            <div className="jumbotron bg-dark text-white text-center">
                <h2 className="display-4">{this.props.title}</h2>
                <p className="lead">{this.props.description}</p>
            </div>
            <div className={this.props.className}>{this.props.children}</div>

        </div>
        <footer className="footer inner  bg-dark py-3 mt-4">
             <div className="container-fluid bg-success text-white text-center">
                <h4>If you got any queries, feel free to reach out</h4>
                <button className="btn btn-warning btn-lg">Contact Us</button>
            </div>
            <div className="container">
                <span className="text-muted">
                    An Amazing place to buy Tshirt
                </span>
            </div>
        </footer>
    </div>
    }
}
Base.defaultProps = {    
    title:"This is the title",
    description:"This is the description"
}
