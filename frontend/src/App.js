import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from './pages/UserPage';
import CategoryPage from './pages/CategoryPage';
import RecipePage from './pages/RecipePage';
import NewRecipePage from "./pages/NewRecipePage"
import Error404 from './pages/Error404';

import CurrentUserProvider from './contexts/CurrentUser';

import './css/App.css';

function App() {
  return (
    <CurrentUserProvider>
      <Router>
        <Routes>
          <Route path='/' element={<CategoryPage/>}/>
          <Route path='/user' element={<UserPage/>}/>
          <Route path='/recipe/:id' element={<RecipePage/>}/>
          <Route path='/recipe/new/:category' element={<NewRecipePage/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </Router>
    </CurrentUserProvider>
  );
}

export default App;
