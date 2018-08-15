//These imports are mandatory for all components created under ./subComponents
//If these aren't imported, than it'll break, as you're usin React, and SplitPane
import { SplitPane } from "..";
import React from 'react';
import {  Link } from 'react-router-dom';

//Components to be combined together for the specific framework, such as Leaderboard
import MenuBar from "../components/MenuBar";
import LandingPage from "../components/LandingPage";
import ClassCreateEdit from "../components/ClassCreateEdit";


//Left Component
function LeftContent() {
    return (
        <div className="LeftContent" style={{ height: '100%' }}>
            <MenuBar />
        </div>
    );
}

//Right Component
function RightContent() {

    return (
        <div className="RightContent" style={{ height: '100%' }}>
            < ClassCreateEdit />
        </div>
    );
}

//These styles can go into a CSS file, such as HomeTemplate.css
//I did them this way because it's faster
const CreateEdit = (props) => {
    const linkBox = {
        //I had to specify top, bottom, left, right
        //It doesn't work if I say simply, borderColor: '2px solid black' <--- FAILS
        // So, you'll have to play around with CSS, until something works.
        //So, specificity, being more specific is a way around this issue.
        borderTop: ' 2px solid black',
        borderRight: ' 2px solid black',
        borderBottom: ' 2px solid black',
        borderLeft: ' 2px solid black',
        width: '12%',
        height: '100%',
        marginLeft: '80%',
        marginRight: '20%'
    }
    return (
        <div style={{ height: '100%' }}>
            <div style={{ height: '3em' }} >
                <div style={linkBox} >
                        <Link style={{marginRight: '8%', textDecoration: 'none' }} to="/class">

                            Classes
                        </Link>
                        <Link style={{marginRight: '8%', textDecoration: 'none' }} to="/">
                            Home
                        </Link>
                        <Link style={{marginRight: '8%', textDecoration: 'none' }} to="/signout">
                            Sign Out
                        </Link>
                </div>
            </div>
            <SplitPane left={<LeftContent />} right={<RightContent />} />
        </div>
    )
}
export default CreateEdit;