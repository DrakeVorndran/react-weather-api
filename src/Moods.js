import React from 'react'

const Moods = (props) => {

    return(
      <div className="container">
        <h1>Moods</h1>
        {props.moods.map((mood, i) => <p key={i}>{mood.weather}: {mood.mood}</p>)}
      </div>
    )
}

export default Moods