import React, { useState } from "react";

const PersonCard = (props) => {
    const {firstName, lastName, age, hair } = props;
    const [ stateAge, setStateAge ] = useState(age)
    return (
        <>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {stateAge}</p>
            <p>Hair Color: {hair}</p>
            <button onClick={ (event) => setStateAge(stateAge + 1)}>Birthday button for { firstName } { lastName }</button>
        </>
    );
}

export default PersonCard;