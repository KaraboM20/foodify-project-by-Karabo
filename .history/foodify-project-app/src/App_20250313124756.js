import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import RecipeLists from './Pages/RecipeLists';
import Favourites from './Pages/Favourites';
import RecipeDetails from './Pages/RecipeDetails';
import Header from './components/Header';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Notifications from './Pages/Notifications';
import { RecipeProvider } from './components/RecipeContext';



const App = () => {
  return (
    
    <div>
      <RecipeProvider>
       <Header />
      <main>
        <Switch>
          <Route path='/' exact>
          <Redirect to='/home' />
          </Route>
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
          <Route path='/notifications'>
          <Notifications />
          </Route>
        </Switch> 

      </RecipeProvider>
      
       
      
     

    </div>
  );
}

export default App;