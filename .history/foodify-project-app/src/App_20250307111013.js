import './App.css';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';

const App = () => {
  return (
    <div>
     <Route path='/home'>
     <Home />
     </Route>
     <Route path='/recipelist'>
     </Re
     </Route>
    </div>
  );
}

export default App;
