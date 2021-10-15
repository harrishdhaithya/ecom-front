import React from 'react';
import API from "../backend"
import Base from './Base';
import "../styles.css";

const Home = () => {
    console.log("API IS",API)
    return (
        <Base title="This is the fancy Ecommerce store to buy Tshirts😉😉" description="Buy here some cool good looking and fancy tshirts"> 
            <h1 class="text-primary">Harrish</h1>
        </Base>
    );
}

export default Home;
