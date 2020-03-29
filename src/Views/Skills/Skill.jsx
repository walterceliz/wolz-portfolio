import React from 'react'
import './Skill.css'

import Tech from './Tech'
import Techs from '../../Samples/Techs.json'

const Skill = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">

            <div>
                {Techs.map((tech)=>{
                        console.log(tech)
                        return <Tech
                                key={tech.id}
                                img={tech.img}
                                tech={tech.name}
                                level={tech.level}
                                hash={tech.hash}/>
                    })}
            </div>

            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Skill