import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { VillagerForm } from './Villagers/VillagerForm';
import { VillagerContainer } from '../containers/VillagerContainer';
import { Home } from '../Home';
import { VillagerCard } from './Villagers/VillagerCard';
import {Navbar} from './navigation/Navbar';
import {Header} from './navigation/Header';
import {Home} from './Home';
import {About} from './About';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
        <Switch>
          <Route path="/villagers/new">
            <VillagerForm />
          </Route>

          <Route path="/villagers/:id">
            <VillagerCard />
          </Route>

          <Route path="/villagers">
            <VillagerContainer />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
