import React from 'react';
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import HeaderContainer from './containers/HeaderContainer';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SinglePage from './pages/SinglePage';
import AddDishPage from './pages/AddDishPage';

function App() { 

  return (
    <div className="App text-black bg-gray-100 dark:bg-gray-800 min-h-screen pt-28 md:pt-15 pb-40">
      <HeaderContainer />
      <main>
        <Route path="/dish/:id" component={SinglePage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/cart" component={CartPage} exact />
        <Route path="/add" component={AddDishPage} exact />
        <Route path='/' component={HomePage} exact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
