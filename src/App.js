import Home from './pages/Home'
import Movies from './pages/Movies'
import TvSeries from './pages/TvSeries';
import Marked from './pages/Marked';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/movies" component={Movies}/>
          <Route path="/tvseries" component={TvSeries}/>
          <Route path="/marked" component={Marked}/>
        </Switch>
    </Router>
    </>
  );
}

export default App;
