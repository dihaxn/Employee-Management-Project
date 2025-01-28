import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AppProvider } from './context/AppContext.jsx'; // Correct name: AppProvider
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AppProvider>
            <App />
        </AppProvider>
    </BrowserRouter>
);