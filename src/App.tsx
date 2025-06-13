import React from 'react';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import './styles.css';

const App: React.FC = () => {
    return (
        <div className="relative">
            <Header />
            <main className="pt-16">
                <Portfolio />
            </main>
        </div>
    );
};

export default App;
