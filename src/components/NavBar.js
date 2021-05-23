import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavBar = () => {

    function colorLink(){
        if(document.querySelectorAll('.nav_link')){
            document.querySelectorAll('.nav_link').forEach(l=> l.classList.remove('active'))
            this.classList.add('active')
        }
    }
    document.querySelectorAll('.nav_link').forEach(l=> l.addEventListener('click', colorLink))

    function handleClick(e){
        e.preventDefault();
        document.getElementById("navbar").classList.toggle("show");
        if(document.getElementById("btn").classList.contains("bx-menu")){
            document.getElementById("btn").classList.replace("bx-menu" , "bx-x");
        }else{
            document.getElementById("btn").classList.replace("bx-x", "bx-menu");
        }
    }

    return (
        <div className="l_navbar" id="navbar">
            <div class="logo_content">
                <div class="logo" as={Link} to="/creator">
                    <i class='bx bxs-backpack' as={Link} to="/creator"></i>
                    <div class="logo_name">EdTech</div>
                </div>
                <i class='bx bx-menu' id="btn" onClick={handleClick} ></i>
            </div>

            <ul className="nav_list">
                <li>
                    <Link to="/timetable" className="nav_link active">
                        <i className='bx bx-table nav_icon'></i>
                        <span className="nav_name">Timetable</span>
                    </Link>
                    <span class="tooltip">Timetable</span>
                </li>
                <li>
                    <Link to="/portion" className="nav_link">
                        <i className='bx bx-list-check nav_icon'></i>
                        <span className="nav_name">Portion</span>
                    </Link>
                    <span class="tooltip">Portion</span>
                </li>
                <li>
                    <Link to="/textbook" className="nav_link">
                        <i className='bx bxs-book nav_icon'></i>
                        <span className="nav_name">TextBook</span>
                    </Link>
                    <span class="tooltip">TextBook</span>
                </li>
                <li>
                    <Link to="/notes" className="nav_link">
                        <i className='bx bx-book-open nav_icon'></i>
                        <span className="nav_name">Notes</span>
                    </Link>
                    <span class="tooltip">Notes</span>
                </li>
                <li>
                    <Link to="/recommendation" className="nav_link">
                        <i className='bx bx-library nav_icon'></i>
                        <span className="nav_name">Recommendation</span>
                    </Link>
                    <span class="tooltip">Recommendation</span>
                </li>
                <li>
                    <Link to="/faculty" className="nav_link">
                        <i className='bx bx-user nav_icon'></i>
                        <span className="nav_name">People</span>
                    </Link>
                    <span class="tooltip">People</span>
                </li>
                <li>
                    <Link to="/about" className="nav_link">
                        <i className='bx bxs-school nav_icon'></i>
                        <span className="nav_name">About</span>
                    </Link>
                    <span class="tooltip">About</span>
                </li>
            </ul>
        </div>
    )
}

export default NavBar