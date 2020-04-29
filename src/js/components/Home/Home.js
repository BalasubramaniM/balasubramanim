import React from 'react';
import ReactDOM from "react-dom";

const Home = () => {
    return (
        <div>
            {'Balasubramani M'}
        </div>
    )
}

export default Home;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;
