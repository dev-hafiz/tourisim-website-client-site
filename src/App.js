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
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import MyAllBooking from './Pages/Home/MyAllBooking/MyAllBooking';
import BottomFooter from './Pages/Shared/Footer/BottomFooter';

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
              <PrivateRoute path="/singlePlace/:detailId">
                  <PlaceDetail/>
              </PrivateRoute>
              <Route path="/login">
                <Login/>
              </Route>
              <PrivateRoute path="/myAllBookinng">
                <MyAllBooking/>
              </PrivateRoute>
              <Route exact path="*">
                  <NotFound/>
              </Route>
          </Switch>
          <BottomFooter/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
