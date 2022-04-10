import React from "react";
import AddNode from "../../components/actions/add_node";
import Header from "../../components/header";
import Map from "../../components/map";
const Dashboard = () =>{
    return (
        <div>
            <Header />
            <div className="container d-flex justify-content-center align-items-center"><Map  /></div>
            <div className="container d-flex justify-content-center align-items-center"><AddNode/> </div>
        
        </div>
    )
}

export default Dashboard