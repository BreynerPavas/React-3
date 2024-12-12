import React, {useEffect, useState} from 'react'
import './Reserve.css'
import { useNavigate } from 'react-router-dom';


const Reserve = () => {
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState("")

    

    const [data, setData] = useState({
        name: "",
        date: "",
    });
    
    let navigate = useNavigate();
    //funciones

    const validateForm = () => {
        if (!data.name) {
          setMessage("");
        } else if (data.name.length < 3) {
          setMessage("Name must be at least 3 characters");
          setBtnDisabled(true);
        }else if (!data.date) {
            setMessage("You must select a correct date");
            setBtnDisabled(true);
        }else{
            setMessage("")
            setBtnDisabled(false)
        }
      };
      


    const handleInputChange = (e) => {

        setData({
            ...data,
            [e.target.name]: e.target.value,
          });
      
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data);
        localStorage.setItem('Reserva', JSON.stringify(data));
        navigate("/")
    }

    useEffect(() => {
        validateForm();
      }, [data]);
    
    
  return (
    <form>
        <div>
            <label htmlFor="name">Nombre: </label>
            <input type="text" name='name' value={data.name} onChange={handleInputChange}/>
        </div>
        <div>
            <label htmlFor="date">Date: </label>
            <input type="date" name="date" value={data.date} onChange={handleInputChange}/>
        </div>
        <button onClick={handleSubmit} disabled={btnDisabled} >Submit</button>
        <p>{message}</p>
    </form>
  )
}

export default Reserve