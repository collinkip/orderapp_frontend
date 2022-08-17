import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

function App() {
  return (
    <div className="py-5">
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
      <div className="card">
        <div className="card-header">
          Create delivery
        </div>


        <form className='card-body'>
          <div className="mb-3">
            <input type="number" name='budget' className='form-control' placeholder='Budget' />
          </div>
          <div className="mb-3">
            <textarea name='notes' className='form-control' placeholder='Notes' />
          </div>
          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default App;
