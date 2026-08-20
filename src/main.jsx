import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import How from './components/how_it_works/How.jsx';
import Footer from './components/footer/Footer.jsx';
import Extend from './components/extend_team/Extend.jsx';
import Onboarding from './components/onboarding_to_ongoing/Onboarding.jsx';
import Proof from './components/proof/Proof.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <How />
    <Onboarding />
    <Proof />
    <Extend />
    <Footer />

  </>,
)
