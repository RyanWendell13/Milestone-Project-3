import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from './pages/UserPage';
import CategoryPage from './pages/CategoryPage';
import RecipePage from './pages/RecipePage';
import Error404 from './pages/Error404';

import './css/App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<CategoryPage/>}/>
          <Route path='/user' element={<UserPage/>}/>
          <Route path='/recipe/:id' element={<RecipePage/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </Router>
  );
}

export default App;
