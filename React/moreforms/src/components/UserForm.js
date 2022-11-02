import React, { useState } from "react";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
    };

    return (
        <div>    
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label>
                    <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) }/>
                </div>
                {firstName.length < 2 ? (<p>First name must be at least 2 characters</p>) : null}
                <div>
                    <label>Last Name: </label>
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) }/>
                </div>
                {lastName.length < 2 ? (<p>Last name must be at least 2 characters</p>) : null}
                <div>
                    <label>Email: </label>
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) }/>
                </div>
                {email.length < 5 ? (<p>Email must be at least 5 characters</p>) : null}
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) }/>
                </div>
                {password.length < 8 ? (<p>Password must be at least 8 characters</p>) : null}
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) }/>
                </div>
                {confirmPassword !== password ? <p>Passwords must match</p> : null}
            </form>
            <div>
                <h3>Your Form Data</h3>
                <p>
                    <label>First Name: </label> {firstName}
                </p>
                <p>
                    <label>Last Name: </label> {lastName}
                </p>
                <p>
                    <label>Email: </label> {email}
                </p>
                <p>
                    <label>Password: </label> {password}
                </p>
                <p>
                    <label>Confirm Password: </label> {confirmPassword}
                </p>
            </div>
        </div>
    );
}

export default UserForm;