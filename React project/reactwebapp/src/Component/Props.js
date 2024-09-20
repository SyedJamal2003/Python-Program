import{useState} from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';

function MissedGoal() {
	return <h1>MISSED!</h1>;
}

function MadeGoal() {
	return <h1>GOAL!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);

// function Props(Props){

//     const updateDetails =() =>{
//         Props.setName("Dhoni");
//         Props.setAddress("Chennai");
//         Props.setMobile('615243');
//     }

//     return(
//         <>
//         <h1>Name {Props.name}</h1>
//         <h1>Address {Props.address}</h1>
//         <h1>mobile {Props.mobile}</h1>
//         {/* <button onClick={()=>{setColor('green')}}>updateColor</button> */}
//         <button onClick={updateDetails}>show Details</button>
//         </>
//     )
// }
export default Props;