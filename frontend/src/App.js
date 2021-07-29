import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import EditProfile from './Components/EditProfile';
import Homepage from "./Homepage";
import login from "./User/login";
import Register from './User/register';


function App() {
  return (
    <Router>
    <div>
    <Switch>
    <Route path="/signin" exact component={login}/>
    <Route path="/signup" exact component={Register}/>
    <Route path="/editprofile" exact component={EditProfile}/>
    <Route path="/"  component={Homepage}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
