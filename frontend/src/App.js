import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import EditProfile from './Components/EditProfile';
import MainPage from './Components/MainPage';
import Porfile from './Components/Porfile';
import ListGigtype from './Components/ListGigtype';
import Homepage from "./Homepage";
import login from "./User/login";
import Register from './User/register';
import GigDisplay from './Components/GigDisplay';


function App() {
  return (
    <Router>
    <div>
    <Switch>
    <Route path="/signin" exact component={login}/>
    <Route path="/signup" exact component={Register}/>
    <Route path="/editprofile" exact component={EditProfile}/>
    <Route path="/main" exact component={MainPage}/>
    <Route path="/profile"  component={Porfile}/>
    <Route path="/main/gigs"  component={ListGigtype}/>
    <Route path="/main/gig/:title"  component={GigDisplay}/>
    <Route path="/"  component={Homepage}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
