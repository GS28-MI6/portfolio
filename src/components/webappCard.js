import React from 'react'

export default function webappCard(props) {
  return (
    <div className="d-flex my-2 justify-content-md-center col">
      <div
      className='cardContainer'
      onClick={() => (window.location.href = props.link)}
      >
        <div>
          <div className='cardTitle'>
              {props.name}
          </div>
        </div>
        <img
            src={props.src}
            alt={props.name}
            style={{ width: "100%", height: 350 }}
        />
      </div>
    </div>
  )
}
