import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import './index.css';
import './components/Game/Game.css';
import './components/Start/Start.css';
import './components/Header/Header.css';

function App() {
    return (
        <>
            <Suspense fallback="Loading">
                <Outlet />
            </Suspense>
        </>
    );
}

export default App;
