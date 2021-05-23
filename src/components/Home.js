import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import '../App.css';
import About from './About';
import People from './people/People';
import NavBar from './NavBar'
import Notes from './Notes';
import Portion from './Portion';
import Recommendation from './Recommendation';
import Textbook from './textbook/Textbook';
import Timetable from './Timetable';
 
const Home = () => {

    const [ loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 8000)
    }, [])

    return (
        <div className="home_screen">
            {
                loading ?(
                <RingLoader color={'#3D17D8'} loading={loading} size={60} />
                ):(
                    <Router>
                        <NavBar />
                        <Switch>
                            <Route path="/timetable">
                                <Timetable />
                            </Route>
                            <Route path="/portion">
                                <Portion />
                            </Route>
                            <Route path="/textbook">
                                <Textbook />
                            </Route>
                            <Route path="/notes">
                                <Notes />
                            </Route>
                            <Route path="/recommendation">
                                <Recommendation />
                            </Route>
                            <Route path="/faculty">
                                <People />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                        </Switch>
                    </Router>
                )}
        </div>
    )
}

export default Home