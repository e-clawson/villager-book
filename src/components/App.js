import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Navbar} from './navigation/Navbar';
import {Header} from './navigation/Header';
import {Home} from '../Home';
import {About} from './navigation/About';
import {Footer} from './navigation/Footer';
import {NewVillager} from './villagers/NewVillager';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header slogan= "Keep Track of Your ACNH Friends!" storeName="VillagerBook"/>
        <Switch>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/newvillager">
            <NewVillager />
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
