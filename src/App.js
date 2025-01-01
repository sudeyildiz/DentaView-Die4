import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout'; // Gemeinsames Layout importieren
import Home from './Home';
import Beitrag1 from './Beitrag1';
import Beitrag2 from './Beitrag2';
import Impressum from './Impressum';
import ThreeDModel from './ThreeDModel';


const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/beitrag1" element={<Beitrag1 />} />
                    <Route path="/beitrag2" element={<Beitrag2 />} />
                    <Route path="/impressum" element={<Impressum />} />
                    <Route path="/model" element={<ThreeDModel />} />

                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
