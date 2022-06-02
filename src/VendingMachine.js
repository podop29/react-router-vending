import {Link} from 'react-router-dom'
import './VendingMachine.css'

function VendingMachine() {
  return (
    <div className="Machine">
            <h2>Hello, I am a wending machine</h2>
            <h3>What would you like to eat??</h3>
        <div className='choices'>
            <Link className='choice cheese' exact to="cheese">Cheese</Link>
            <Link className='choice' exact to="apple">Apple</Link>
            <Link className='choice' exact to="soda">Soda</Link>


        </div>


      
    </div>
  );
}

export default VendingMachine;
