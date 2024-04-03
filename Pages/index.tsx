// HomePage.tsx
import React from 'react';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import AppAppBar from '@/component/app-bar';
import '../component/Home/style.css'
import Home from '@/component/Home/home';
import BackgroundImageLayout from '@/component/Layout/BackgroundImageLayout';
const HomePage: React.FC = () => {
  return (
    <>
     
     <div className='back'>
    
     {/* <BackgroundImageLayout backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRce9ZRPEQQk87P6qWb3IEf7yanwnGbuza_7SAcOWm4XeSmERN6IblBusrYYjUs6YTkgyI&usqp=CAU"> */}
     <AppAppBar mode="dark" toggleColorMode={() => {}}/>
     <div >
    {/* <Header /> */}
     </div>
     <Home />
     <Footer />
     {/* </BackgroundImageLayout> */}
     </div>
     </>
  );
};

export default HomePage;
