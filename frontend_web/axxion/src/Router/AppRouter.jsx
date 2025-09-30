import {Navigate, Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login.jsx"
import Home from "../components/Home/Home";
import Dashboard from "../components/Dashboard/Dashboard.jsx";
import Categories from "../components/Categories/Categories";

export default function AppRouter() {
    return(
        <Routes>
            <Route path="*" element={<Navigate to={"/login"} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/" element={<Categories />} />
        </Routes>
    )
}