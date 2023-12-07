import React, {useEffect, useMemo, useState} from 'react';
import './styles/App.css';
import About from "./pages/About";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";

function App() {
    return(
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;