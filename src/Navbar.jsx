import React from "react";
import {Link} from 'react-router-dom' ;

let img = "https://www.jagranimages.com/images/newimg/21082020/21_08_2020-ipl_logo_20650553.jpg" ;

const Nav = () => {
    return ( 
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={img} width="45" height="50" /> Indian Premier League </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/teams">Teams</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/players">Players</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/records">Records</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
     );
}
 
export {Nav};