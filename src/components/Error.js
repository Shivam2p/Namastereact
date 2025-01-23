import React from "react"
import { useRouteError } from "react-router"


const Error=()=>{
    const err=useRouteError();
    console.log(err)
    return <div>
        <h1>oopssss</h1>
        <h4>{err.status}  {err.statusText}</h4>
    </div>

}
export default Error