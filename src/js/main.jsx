import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';
import PropTypes from 'prop-types';

// components
// import Home from './components/Home';


function SimpleCounter(props) {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark" id="body"> 
    <div className="bigcounter card text-center mx-auto my-5border border-white " style={{ maxWidth: "900px" }}>
      <div className="card text-center ">
        <div className="card-header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/640px-NASA_Worm_logo.svg.png" className="img-fluid" style={{ maxHeight: "60px" }}/>
       </div>
      </div>

      <div className="counter-container">
        <div className="d-flex flex-wrap justify-content-center gap-3 p-3">
          <div className="timer-icon card p-4 text-bg-danger border border-white">
            <i className="fa-solid fa-rocket"></i>
          </div>
          <div className="four card p-4 border border-white text-bg-danger" >{props.digitFour % 10 }</div>
          <div className="three card p-4 border border-white text-bg-danger">{props.digitThree % 10 }</div>
          <div className="two card p-4 border border-white text-bg-danger">{props.digitTwo % 10}</div>
          <div className="one card p-4 border border-white text-bg-danger">{props.digitOne % 10}</div>
        </div>
      </div>

      <div className="card-footer  text-danger-emphasis border border-white ">
        Officially licensed device of the National Aeronautics & Space Administration
      </div>
    </div>
    </div>
  );
}

  SimpleCounter.propsTypes = {
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number
}

let counter = 0;

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(function(){
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10) ;
  const one = counter / 1;
  root.render(
    <React.StrictMode>
      <SimpleCounter
        digitFour={four}
        digitThree={three}
        digitTwo={two}
        digitOne={one}
      />
    </React.StrictMode>
  );
  counter++;
}, 1000);


//render your react application



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleCounter/>
  </React.StrictMode>,
)
