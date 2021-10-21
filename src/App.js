import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthContext from "./AuthContext/AuthContext";
import About from "./pages/about/About";
import Doctors from "./pages/doctors/Doctors";
import SingleDoctor from "./pages/doctors/singleDocter/SingleDoctor";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Notfound from "./pages/notFound/Notfound";
import Register from "./pages/Register/Register";
import Services from "./pages/Services/Services";
import Single from "./pages/Services/Single/Single";
import Footer from "./pages/shared/Footer/Footer";
import Header from "./pages/shared/Header/Header";
import PrivateRoute from "./privateRoute/PrivateRoute";


function App() {

  return (
    <AuthContext>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about" component={About}></Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <PrivateRoute path="/service/:serviceId">
            <Single></Single>
          </PrivateRoute>
          <PrivateRoute path="/doctor/:doctorId">
            <SingleDoctor></SingleDoctor>
          </PrivateRoute>
          <PrivateRoute path="/doctors"> <Doctors></Doctors></PrivateRoute>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthContext >
  );
}

export default App;
