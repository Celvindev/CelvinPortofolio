import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homee from './Pages/Home/Homee';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homee />} />
      </Routes>
    </Router>
  );
}

export default App;
