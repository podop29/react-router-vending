import { Link } from 'react-router-dom';
import "./apple.css"


function Apple() {
  return (
      <>
      <span className='stem'></span>
    <div className="Apple">
            <h3>Apple</h3>
            <Link to='/'>Back</Link>

    </div>
    </>
  );
}

export default Apple;
