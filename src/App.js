import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Notfound from "./pages/notFound/Notfound";
import Header from "./pages/shared/Header/Header";


function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/home" component={Home}></Route>







        <Route exact path="*" component={Notfound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
