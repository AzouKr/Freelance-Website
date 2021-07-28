import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from "./Homepage";
import login from "./User/login";
import register from './User/register';


function App() {
  return (
    <Router>
    <div>
    <Switch>
    <Route path="/signin" exact component={login}/>
    <Route path="/signup" exact component={register}/>
    <Route path="/"  component={Homepage}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
