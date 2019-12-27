import React, { Component } from "react";

class App extends Component {
    render() {
      return (
        <h1>Welcome to React session</h1>
      )
    }
  }


/* STETEFULL COMPONENT*/ 
// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state ={
//       number: 2
//     }
//   }

//   render(){
//     console.log("rendering")
//     return(
//     <h1>{this.state.number}</h1>
//     )
//   }
// }  

  
/* STETELESS COMPONENT*/   
//   const App = () =>{
//    return (
//       <h1>Welcome to React session</h1>
//    )
//   };




export default App;