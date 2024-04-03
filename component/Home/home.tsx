// pages/index.js

import AppAppBar from "../app-bar";
import { TypeAnimation } from 'react-type-animation';
import Button from '@mui/material/Button';
import './style.css'
const Home = () => {
  return (
    <div className="top">
      <AppAppBar mode="dark" toggleColorMode={() => {}}/>
      <div className="container">

      <img src="https://img.freepik.com/free-vector/global-volunteer-solidarity-hands-up-banner-with-earth-map-vector_1017-48268.jpg?w=1380&t=st=1712147519~exp=1712148119~hmac=e6c74b3c4f83745974c286b26ecbad739dad188cb1b09a4ae576537a40915ad7" width={'100%'}/>
      <div className="text-first"><h1 className="head">MAKE A DIFFERENCE</h1>
      <h2 className="sub">We Are A Charity</h2>
      </div>
      
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Together We Can',
        1000,
        'Together We Will',
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="text"
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
      <p className="para">Help us build a regenerative future by investing in and rewarding
        youth who contribute to their communities.</p>
      </div>
      <Button variant="contained" color="primary" className="btn">
      Contribute
      </Button>
    </div>
  );
};

export default Home;
