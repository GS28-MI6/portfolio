import React from 'react';
import "../styles/start.css";


export default function phoneappCard(props) {
  return (
    <div className="d-flex my-2 justify-content-md-center col">
        <div
        className='cardContainer mobileApp'
        onClick={() => (window.location.href = props.link)}
        >
        <img
            src={props.src}
            alt={props.name}
            style={{ width: "40%", height: 350 }}
        />
        <div
            style={{ width: "100%", height: "100%"}}
        >
            <div className='cardTitle'>
                {props.name}
            </div>
            <div className='cardText'>
                {props.desc}
            </div>
        </div>
        </div>
    </div>
  )
}
