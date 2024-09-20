import{useState} from "react";
function Sample(){
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [mobile,setMobile] = useState("");

    const updateDetails =() =>{
        setName('Dhoni');
        setAddress('Ranji');
        setMobile('7');
    }

    return(
        <>
        <h1>Name {name}</h1>
        <h1>Address {address}</h1>
        <h1>mobile {mobile}</h1>
        {/* <button onClick={()=>{setColor('green')}}>updateColor</button> */}
        <button onClick={updateDetails}>showDetails</button>
        </>
    )
}
export default Sample;