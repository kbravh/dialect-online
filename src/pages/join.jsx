import React from 'react'

const Join = () => {
    return (
        <>
            <h1>Join a game session</h1>
            <label>
                Enter your game ID
                <input type="text" id="session-id" />
            </label>
            <label>
                Enter your 4 digit pin
                <input type="number" id="session-pin" />
            </label>
            <button>Join</button>
        </>
    )
}

export default Join