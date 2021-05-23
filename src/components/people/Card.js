import React from 'react'
import person_photo from '../../Waimakariri.png';

const Card = () => {

    function arrow(){
        document.getElementById("arr_container").classList.add("active_arr");
        if(document.getElementById("left_container").classList.contains("off")){
            document.getElementById("left_container").classList.remove("off");
            document.getElementById("left_container").classList.add("active");
        }
    }

    function arr_cancel(){
        document.getElementById("arr_container").classList.remove("active_arr");
        if(document.getElementById("left_container").classList.contains("active")){
            document.getElementById("left_container").classList.remove("active");
            document.getElementById("left_container").classList.add("off");
        }
    }

    return (
        <div className="box center">
            <img src={person_photo} alt="Person's profile"/>
            <div>
                <p className="person_name">Deep Shetye</p>
                <p className="person_designation">Software Engineer</p>
            </div>
            <div className="arr_container center" id="arr_container" onClick={arrow}>
                <i class='bx bx-right-arrow-alt'></i>
            </div>
            <div className="left_container off" id="left_container">
                <p>Social</p>
                <div className="icons">
                    <i class='bx bx-mail-send' style={{color:'#ffffff'}} ></i>
                    <i class='bx bxs-phone' style={{color:'#ffffff'}} ></i>
                    <i class='bx bxl-linkedin' style={{color:'#ffffff'}} ></i>
                    <i class='bx bxl-twitter' style={{color:'#ffffff'}}  ></i>
                </div>
                <div className="cancel center" id="cancel" onClick={arr_cancel}>
                    <i class='bx bx-x'></i>
                </div>
            </div>
        </div>
    )
}

export default Card