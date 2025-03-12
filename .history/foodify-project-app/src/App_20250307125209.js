import './App.css';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import RecipeLists from './Pages/RecipeLists';
import Favourites from './Pages/Favourites';
import RecipeDetails from './Pages/RecipeDetails';
import CartsPage from './Pages/CartsPage';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <main c>
       <Route path='/home'>
     <Home />
     </Route>
     <Route path='/recipelists'>
     <RecipeLists /> 
     </Route>
      </main>
     <Route path='/favourites'>
     <Favourites />
     </Route>
     <Route path='/recipedetails'>
     <RecipeDetails />
     </Route>
     <Route path='/cartspage'>
     <CartsPage />
     </Route>

    </div>
  );
}

export default App;
