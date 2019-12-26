
import React from "react";

const ChildComponent = props =>{
 return (
    <h1>{props.session}</h1>
 )
};

ChildComponent.defaultProps = {  
    session: "Default Props"  
 }

 export default ChildComponent;