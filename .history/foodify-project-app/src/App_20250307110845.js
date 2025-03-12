import './App.css';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
     <Route path='/home'>
     <Home />
     </Route>
    </div>
  );
}

export default App;
