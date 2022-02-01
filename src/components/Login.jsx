import React from "react";
const Login=(props)=>{
    return <form onSubmit={props.submit}>
        <label htmlFor="username">Username</label>
        <input id="username" onChange={props.change} value={props.username}/>
        <label htmlFor="password">Password:</label>
        <input id="password" onChange={props.change} value={props.password}/>
        <button type="submit">submit</button>
    </form>
}
export default Login