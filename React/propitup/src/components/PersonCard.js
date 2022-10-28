import React from "react";

const PersonCard = (props) => {
    const {firstName, lastName, age, hair } = props;
    return (
        <>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hair}</p>
        </>
    );
}

export default PersonCard;