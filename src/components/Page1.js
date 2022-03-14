import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Blog from '/Users/muthusankar/Desktop/pizza app/client/src/components/Blog.js'
import Blog1 from '/Users/muthusankar/Desktop/pizza app/client/src/components/Blog1.js'
import Blog2 from '/Users/muthusankar/Desktop/pizza app/client/src/components/Blog2.js'
import Blog3 from '/Users/muthusankar/Desktop/pizza app/client/src/components/Blog3.js'
import Cart from '/Users/muthusankar/Desktop/pizza app/client/src/components/Cart.js'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Blog />
      <Blog1 />
      <Blog2 />
      <Blog3 />
      
    </div>
  );
}

export default App;