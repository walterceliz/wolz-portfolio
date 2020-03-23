import React from 'react'
import './Home.css'
import Info from './Info'

const Home = () => {
    return (
        <div className="homeContainer">
            <Info
                name="Walter"
                compname="Wolz"
                iam="JavaScript Full Stack"
            />
        </div>
    )
}

export default Home