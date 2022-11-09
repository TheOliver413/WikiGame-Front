import { Link } from 'react-router-dom';
import './landing.css'

export default function Landing() {

  return (
    <div className="lpcontainer">
      <p className="text">Wiki Games</p>
        <Link to="/videogames">
          <button className="but">START</button>
        </Link>
    </div>
  );
}