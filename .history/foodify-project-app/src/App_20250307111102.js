import './App.css';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import RecipeLists from './Pages/RecipeLists';

const App = () => {
  return (
    <div>
     <Route path='/home'>
     <Home />
     </Route>
     <Route path='/recipelist'>
     <RecipeLists />
     </Route>
     <Route path='.'
    </div>
  );
}

export default App;
