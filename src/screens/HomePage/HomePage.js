import React from 'react';
import "./homePage.css";

import Hero from "../../components/hero/Hero.js";
import DropdownBar from "../../components/dropdownBar/DropdownBar.js";
import Grid from "../../components/grid/Grid.js";
import Recommend from "../../components/recommend/Recommend.js"


const HomePage = () => {
    return (
        <div className="home">
            <DropdownBar/>
            <Hero/>
            <Grid/>
            <Recommend text="New Trending"/>
        </div>
    );
};

export default HomePage;