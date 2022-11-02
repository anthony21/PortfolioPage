import React from 'react';
import './App.css';
import { Footer, Possibility, Features, Duv, Header } from './containers';
import { Cta, Brand, Navbar } from './components';
const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
            <Brand />
            <Duv />
            <Features />
            <Possibility />
            <Cta />
            {/* <Blog /> */}
            <Footer />
    </div>
  )
}

export default App