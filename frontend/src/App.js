import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserView from './views/UserView';
import BookView from './views/BookView';
import RecipeView from './views/RecipeView';
import Error404 from './views/Error404';

import './css/App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<BookView/>}/>
          <Route path='/user' element={<UserView/>}/>
          <Route path='/recipe' element={<RecipeView/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </Router>
  );
}

export default App;
