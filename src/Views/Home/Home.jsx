import React from 'react'
import './Home.css'
import Info from './Info'
import BtnInfo from './BtnInfo'

const Home = () => {
    return (
        <div className="homeContainer">
            <BtnInfo/>
            <Info
                name="Walter"
                compname="Wolz"
                iam="Desarrollador Full Stack JavaScript"
            />
        </div>
    )
}

export default Home