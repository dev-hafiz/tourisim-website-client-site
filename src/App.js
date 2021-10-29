import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import ContactHeader from './Pages/Shared/ContactHeader/ContactHeader';
import PlaceDetail from './Pages/Home/PlaceDetail/PlaceDetail';
import Login from './Pages/Home/Login/Login/Login';
import AuthProvider from './context/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
          <ContactHeader/>
          <Header/>
          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route  path="/home">
                  <Home/>
              </Route>
              <Route path="/singlePlace/:detailId">
                  <PlaceDetail/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route exact path="*">
                  <NotFound/>
              </Route>
          </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
