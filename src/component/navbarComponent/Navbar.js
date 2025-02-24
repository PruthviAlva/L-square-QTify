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
            <Button>Give Feedback</Button>
        </nav>
    )
}

export default Navbar;