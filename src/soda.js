import { Link } from 'react-router-dom';
import "./soda.css"


function Soda() {
  return (
    <div className="Soda">
            <span className='red'>.</span>
            <h3>Soda</h3>
            <Link to='/'>Back</Link>

    </div>
  );
}

export default Soda;
