import { Link } from 'react-router-dom';
import "./cheese.css"



function Cheese() {
  return (
    <div className="Cheese">
            <span style={{margin:10}} className='circle'></span>
            <span style={{margin:50}} className='circle'></span>

            <h3>Cheese</h3>

            <Link to='/'>Back</Link>
            <span  style={{margin:50}} className='circle'></span>


    </div>
  );
}

export default Cheese;
