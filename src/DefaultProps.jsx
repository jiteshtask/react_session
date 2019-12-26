
import React from "react";

const DefaultProps = props =>{
 return (
    <h1>{props.session}</h1>
 )
};

DefaultProps.defaultProps = {  
    session: "Welcome to React session"  
 }

 export default DefaultProps;