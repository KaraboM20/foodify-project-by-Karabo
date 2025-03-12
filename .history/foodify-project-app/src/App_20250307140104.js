import './App.css';
import { Route, Switch } from 'react-router-dom';
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
      <main>
        <Switch>
          <Route
          <Route path='/home'>
          <Home />
          </Route>
          <Route path='/recipelists'>
          <RecipeLists /> 
          </Route>
          <Route path='/recipedetails/:id'>
          <RecipeDetails />
          </Route>
          <Route path='/favourites'>
          <Favourites />
          </Route>
          <Route path='/cartspage'>
          <CartsPage />
          </Route>
        </Switch>
       
      </main>
     

    </div>
  );
}

export default App;
