import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Importez la Navbar
import Home from './components/Home';
import Login from './components/Login';
import Produits from './components/Produits';
import RegisterForm from './components/RegisterForm';

function App() {
    return (
        <Router>
            {/* La Navbar est affichée une seule fois */}
            <Navbar />

            {/* Configuration des routes pour afficher les différentes pages */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/produits" element={<Produits />} />
                <Route path="/register" element={<RegisterForm />} />
            </Routes>
        </Router>
    );
}

export default App;
