  import React, { useState, useEffect } from 'react';
   import { useSpring, animated } from 'react-spring';
   import './App.css';

   function Header() {
     const props = useSpring({ opacity: 1, from: { opacity: 0 } });
     return (
       <animated.header style={props}>
         <h1>ChicChinos</h1>
         <p>Elegancia casual para cada ocasión</p>
       </animated.header>
     );
   }

   function App() {
     const [products, setProducts] = useState([]);

     useEffect(() => {
       // Aquí podrías cargar tus productos desde una API
       setProducts([
         { id: 1, name: 'Chino Clásico', price: 59.99 },
         { id: 2, name: 'Chino Slim Fit', price: 64.99 },
         { id: 3, name: 'Chino Stretch', price: 69.99 },
       ]);
     }, []);

     return (
       <div className="App">
         <Header />
         <main>
           <h2>Nuestra Colección</h2>
           <div className="product-list">
             {products.map(product => (
               <div key={product.id} className="product-item">
                 <h3>{product.name}</h3>
                 <p>${product.price}</p>
               </div>
             ))}
           </div>
         </main>
       </div>
     );
   }

   export default App;
