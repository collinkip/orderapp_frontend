import {React,useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'


const Delivery =()=>{
    const [state, setState] = useState({
        "id": "01GAR8ZZEEXCQA6ZFSMFFCTFDQ",
        "budget": 50,
        "notes": "get 3 chicken wings",
        "status": "ready"
    });
    


    const submit= async(e,type)=>{
        e.preventDefault();
        const form =new FormData(e.target);
        const data = Object.fromEntries(form.entries());
        const response=await fetch('http://127.0.0.1:8000/event',{
            method:'POST',
            headers:{'Content-Type':'application/json',  "access-control-allow-origin" : "*",
                "Content-type": "application/json; charset=UTF-8"    
    
            },
            body:JSON.stringify({
                type,
                data
            })

        });

        if (!response.ok) {
            const {detail}=await response.json();
            alert(detail);
            return;
            
        }
    }





    return <div className="row w-100">
        <div className="col-12 mb-4">
            <h4 className="fw-bold text-white">DeliveryId: {state.id}</h4>
        </div>
        <div className="col-12 mn-5">
            <div className="progress">
           

            {state.status !== 'ready' ?
               <div className= {state.status==='active' ?  "progress-bar bg-success progress-bar-striped progress-bar-animated":"progress-bar bg-success"} 
               role="progressbar" style={{width:'50%'}}>
            </div>: ""}
           {state.status ==='collected' || state.status ==='completed' ?
               <div className= {state.status==='collected' ?  "progress-bar bg-success progress-bar-striped progress-bar-animated":"progress-bar bg-success"}
               role="progressbar" style={{width:'50%'}}>
           </div>:''}
           
       </div>
            
        </div>


        <div className="col-3">
            <div className="card mt-4">
                <div className="card-header">
                    Start delivery
                </div>
            </div>

            <form className='card-body' onSubmit={e => submit(e,"START_DELIVERY")}>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>

        <div className="col-3">
            <div className="card mt-4">
                <div className="card-header">
                    Start delivery
                </div>

                <form className='card-body'  onSubmit={e => submit(e,"INCREASE_BUDGET")}>
                    <div className=" input-group mb-3">
                        <input type="number" name='budget' className='form-control' 
                        placeholder='Budget' />
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>

        <div className="col-3">
            <div className="card mt-4">
                <div className="card-header">
                    pickup products
                </div>

                <form className='card-body'  onSubmit={e => submit(e,"PICKUP_PRODUCTS")}>
                    <div className="input-group mb-3">
                        <input type="number" name='purchase_price' className='form-control'
                         placeholder='Purchase Price' />
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" name='quantity' className='form-control'
                         placeholder='Quantity' />
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>

        <div className="col-3">
            <div className="card mt-4">
                <div className="card-header">
                    Deliver products
                </div>

                <form className='card-body'  onSubmit={e => submit(e,"PICKUP_PRODUCTS")}>
                    <div className="input-group mb-3">
                        <input type="number" name='sell_price' className='form-control'
                         placeholder='Sell Price' />
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" name='quantity' className='form-control'
                         placeholder='Quantity' />
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>

 
    </div>;
};

export default Delivery;

