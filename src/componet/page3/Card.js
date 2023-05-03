import React from 'react'
import { NavLink } from 'react-router-dom'
import "./card.css"
import { BsPeople } from "react-icons/bs";

function Card(props) {
    return (
        <div>
            <div className='maindiv'>
                <NavLink to={props.link} target="_blank" className="Nav">
                    <div className='smallname'>

                        <img src={props.imgsrc} alt="mypic" className='card-imgsamll' />
                        <p>{props.pname}</p></div>
                    <h2>{props.hname}</h2>

                    <div className='card_info'>
                        <img src={props.imgsrc} alt="mypic" className='card-img' />
                        <div className='smallname1'>
                            <h3 className="card_cat">{props.name}</h3>
                            <p className='score'>{props.xppoints}</p>
                        </div>

                    </div>
                    <div>
                        <div className='lastdiv'>
                            <div className='lastflex'>
                                <h4>  <BsPeople /></h4>
                                <h5>{props.likes} Like</h5>
                            </div>
                            <div>
                                <h5>{props.task}/{props.ttask} tasks</h5>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div >
        </div >
    )
}

export default Card