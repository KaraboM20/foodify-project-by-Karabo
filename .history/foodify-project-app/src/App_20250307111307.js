import './App.css';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import RecipeLists from './Pages/RecipeLists';
import Favourites from './Pages/Favourites';
import RecipeDetails from './Pages/RecipeDetails';

const App = () => {
  return (
    <div>
     <Route path='/home'>
     <Home />
     </Route>
     <Route path='/recipelist'>
     <RecipeLists />
     </Route>
     <Route path='/favourites'>
     <Favourites />
     </Route>
     <Route path='/recipedetails'>
     <RecipeDetails />
     </Route>
     <Route path='/cart'>
     
     </Route>

    </div>
  );
}

export default App;
