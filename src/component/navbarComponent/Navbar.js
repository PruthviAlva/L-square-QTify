import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import "./Navbar.css";
import Logo from './Logo';
import Search from './Search';

function Navbar({ searchData }) {
    return (
        <nav className="navbar">
            <Link to="/">
                <Logo />
            </Link>
            <Search
                placeholder="Search a song of your choice"
                searchData={searchData}
            />
            <div className="feedback">
                <Button style={{ color:'rgba(52, 201, 75, 1)' }} >Give Feedback</Button>
            </div>
        </nav>
    )
}

export default Navbar;