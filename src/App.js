

import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";
import EditProfile from "./pages/EditProfile";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/log-in" component={Login} />
          <Route exact={true} path="/sign-up" component={SignUp} />
          <Route exact={true} path="/search" component={Search} />
          <Route exact={true} path="/edit-profile" component={EditProfile} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
