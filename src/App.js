import React, { useState } from 'react';
// import Menu from './Components/Menu';
import Categories from './Components/Categories';
import Menu from './Components/Menu';

function App() {

  const [mainCategory, setMainCategory] = useState('all');
 

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories mainCategory={mainCategory} setMainCategory={setMainCategory}/>
        <Menu mainCategory={mainCategory}/>
      </section>
    </main>
  );
}

export default App;
