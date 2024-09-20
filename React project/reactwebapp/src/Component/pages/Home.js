import { useEffect, useState } from "react";
import axios from 'axios'
const Home = (props) => {
  const [count, setCount] = useState(0);
  const [data,setData] = useState([]);
  const [inputs, setInputs] = useState({});
  const [editId,setEditId] = useState();
  useEffect(() => {
    try {
     axios.get('http://127.0.0.1:8000/getPersons').then((response) => {
      console.log(response.data.data,'response.data');
      setData(response.data.data);
      });
    }
      catch (error) {
      console.log(error);
      }
  },[]);

  const incrcount = () =>{
    setCount(count + 1)
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }


  const addUser = () => {
    axios.post('http://127.0.0.1:8000/addPerson',{...inputs})
       .then((response) => {
       alert("Form submited success");
       });
 };

 const editUser = (id) =>{
  setEditId(id);
  axios.get('https://jsonplaceholder.typicode.com/posts/'+id).then((response) => {
    setInputs(response.data);
    });
 }

 const updateUser = () =>{
  axios.put('https://jsonplaceholder.typicode.com/posts/'+editId,{...inputs})
       .then((response) => {
       alert("Form updated success");
       });
 }

 const deleteUser = (id) =>{
  axios.delete('https://jsonplaceholder.typicode.com/posts/'+id)
       .then((response) => {
       alert("Deleted success");
       });
 }
    return (
        <>
        <form>
          <label>Id</label>
          <input type="text" name="first_name" id="id"  onChange={handleChange}/>
          <input type="text" name="last_name" id="id"  onChange={handleChange}/>
          <button type="button" onClick={editId ? updateUser : addUser}>Submit</button>
        </form>
          <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Body</th>
              <th>Tittle</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {data.map((userData) => (
            <tr>
              <td>{userData.id}</td>
              <td>{userData.first_name}</td>
              {/* <td>{userData.body}</td>
              <td>{userData.title}</td>
              <td><button type="button" onClick={()=>editUser(userData.id)}>Edit</button> <button type="button" onClick={()=>deleteUser(userData.id)}>Delete</button></td> */}
              </tr>
          ))
        }
        </tbody>
        </table>
        </>
      ) 
  };
  
  export default Home;