import React from 'react';
// import logo from './logo.svg';
import './App.scss';

const headerApp = (
  <header className="header">
    <div className="image"></div>
    <div className="user-info">
      <h1 className="username">Alex Guerrero</h1>
      <p className="date">Lunes 26 de junio de 2017</p>
    </div>
  </header>
)
const mainApp = (
  <main>
    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque reprehenderit nobis accusantium quas, illum repudiandae doloremque ex doloribus? Recusandae facere eveniet doloremque illo, dolorem rerum ad voluptatem quos deserunt magni! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis odio nesciunt necessitatibus excepturi temporibus rerum aspernatur repudiandae est expedita, id soluta iste assumenda, repellat quaerat, tempora accusamus molestias. Quo, in?</p>
  </main>
)
const footerApp = (
  <footer className="footer">
    <a href="/" className="link">Leer más...</a>
    <div className="likes">
      <p className="counter">37</p>
      <i className="fas fa-heart"></i>
    </div>
  </footer>
)
class App extends React.Component {
  render() {
    const appRoot = (
      <div className="App">
        <div className="container">
        {headerApp}
        {mainApp}
        {footerApp}
        </div>
      </div>
    );
    return appRoot;
  }
}

export default App;