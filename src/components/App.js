import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { VillagerForm } from './villagers/VillagerForm';
import { VillagerContainer } from '../containers/VillagerContainer';
import { VillagerCard } from './villagers/VillagerCard';
import {Navbar} from './navigation/Navbar';
import {Header} from './navigation/Header';
import {Home} from '../Home';
import {About} from './navigation/About';
import {Footer} from './navigation/Footer';


function App() {

  const handleClick = e => {}
    debugger

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header slogan= "Keep Track of Your ACNH Friends!" storeName="VillagerBook"/>
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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
