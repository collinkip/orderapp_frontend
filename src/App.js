import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {useState} from 'react';
import Delivery from './Delivery';



function App() {

  const [state, setstate] = useState({
    "id": "01GAP8CG9N4KGA03EHMM3XAETX",
    "budget": 50,
    "notes": "checkout 3 pizas",
    "status": "completed"
});

  const [id,setId]=useState('');
  console.log(id)

  const submit =async (e)=>{
    e.preventDefault();
    const form =new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    const response=await fetch('http://127.0.0.1:8000/deliveries/create',{
      method:'POST',
      headers:{'Content-Type':'application/json',  "access-control-allow-origin" : "*",
      "Content-type": "application/json; charset=UTF-8"    
    
    },
      body:JSON.stringify({
        type:"CREATE_DELIVERY",
        data
      })
    });

    const {id} =await response.json();
    setId(id)

  }

  return (
    <div className="py-5">


      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
      {id === "" ?
      <div className="card">
        <div className="card-header">
          Create delivery
        </div>

        <form className='card-body' onSubmit={submit}>
          <div className="mb-3">
            <input type="number" name='budget' className='form-control' placeholder='Budget' />
          </div>
          <div className="mb-3">
            <textarea name='notes' className='form-control' placeholder='Notes' />
          </div>
          <button className='btn btn-primary'>Submit</button>
        </form>
      </div> 
      :<Delivery></Delivery>}
      </div>
    </div>
  );
}

export default App;
