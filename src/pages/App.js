import { GloablStyles } from "../globalStyles/globalStyles";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./Home";
import InterShipsPage from './InternshipsPage'

const App = () => {
  return (
    <>
    <GloablStyles />
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/internships/:alias" element={<InterShipsPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
