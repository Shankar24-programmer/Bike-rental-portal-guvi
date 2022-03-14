import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Blog from '/Users/muthusankar/Desktop/pizza app/client/src/components/Blog.js'
import Blog1 from '/Users/muthusankar/Desktop/pizza app/client/src/components/Blog1.js'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Blog />
      <Blog1 />
    </div>
  );
}

export default App;