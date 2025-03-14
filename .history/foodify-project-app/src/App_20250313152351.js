import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import RecipeLists from './Pages/RecipeLists';
import Favourites from './Pages/Favourites';
import RecipeDetails from './Pages/RecipeDetails';
import Header from './components/Header';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Notifications from './Pages/Notifications';
import { RecipeProvider } from './context/RecipeContext';



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
          <Route path='/recipe'>
          <RecipeLists /> 
          </Route>
          <Route path='/recipe/:id'>
          <RecipeDetails />
          </Route>
          <Route path='/favourites'>
          <Favourites />
          </Route>
          <Route path='/notifications'>
          <Notifications />
          </Route>
        </Switch> 
        </main>
      </RecipeProvider>
      
      
    </div>
  );
}

export default App;