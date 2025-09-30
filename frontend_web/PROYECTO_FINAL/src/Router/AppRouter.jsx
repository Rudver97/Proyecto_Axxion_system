import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../assets/components/Login';

export default function AppRouter() {
    return(
            <Routes>
                <Route path='*' element={<Navigate to={"/login"} />} />
                <Route path='/login' element={<Login />} />
            </Routes>
    )
}

