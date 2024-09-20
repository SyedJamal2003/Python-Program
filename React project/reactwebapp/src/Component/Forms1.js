import { useState } from 'react';

function Forms1() {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [mobilenumber, setMobilenumber] = useState("")

    const handleChange =(e) =>{
        setName(e.target.value);
    }
    const handelAddress =(e) =>{
        setAddress(e.target.value);
    }
    const handelMobilenumber =(e) =>{
        setMobilenumber(e.target.value);
    }

    const handleSubmit= (e)=>{
        e.preventDefault();
        console.log(name);
        console.log(address);
        console.log(mobilenumber);
        }
    


    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>User Name</label>
                <input type='text' name='uname' id='uname' onChange={handleChange}/><br/>

                <label>Address</label>
                <textarea type='textarea' name='uaddress' id='uaddress' onChange={handelAddress}></textarea><br/>

                <label>Mobilenumber</label>
                <textarea type='number' name='umobilenumber' id='mobilenumber' onChange={handelMobilenumber}></textarea><br/>

                <input type="submit" />
            </form>
        </>
    )
}
       

export default Forms1;