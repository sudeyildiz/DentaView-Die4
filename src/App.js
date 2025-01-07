import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout'; // Gemeinsames Layout importieren
import Home from './Home';
import Beitrag1 from './Beitrag1';
import Beitrag2 from './Beitrag2';
import Impressum from './Impressum';
import ThreeDModel from './ThreeDModel';
import Quiz from "./Quiz";



const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Beitrag1" element={<Beitrag1 />} />
                    <Route path="/Beitrag2" element={<Beitrag2 />} />
                    <Route path="/impressum" element={<Impressum />} />
                    <Route path="/model" element={<ThreeDModel />} />
                    <Route path={"/Quiz"} element={<Quiz />} />

                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
