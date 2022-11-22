import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from './pages/UserPage';
import CategoryPage from './pages/CategoryPage';
import RecipePage from './pages/RecipePage';
import Error404 from './pages/Error404';
import CategoryPageTwo from './pages/Category2/CategoryPageTwo';

import './css/App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<CategoryPage/>}/>
          <Route path='/2' element={<CategoryPageTwo/>}/>
          <Route path='/user' element={<UserPage/>}/>
          <Route path='/recipe' element={<RecipePage/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </Router>
  );
}

export default App;
