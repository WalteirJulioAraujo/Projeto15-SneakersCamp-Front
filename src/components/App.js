import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home.js";
import LogIn from "./LogIn.js";
import SignUp from "./SignUp.js";
import Cart from "./Cart.js";
import Navbar from "./Navbar.js";
import GlobalStyle from "../styles/GlobalStyles.js";
import UserContext from "../contexts/UserContext.js";
import CartContext from "../contexts/CartContext.js";

export default function App() {

  const [ user, setUser ] = useState(undefined);
  const [ amILoginOrSingup, setAmILoginOrSingup ] = useState(false);
  const [ cart, setCart ] = useState("");

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Navbar />
              <Home />
            </Route>
            <Route path="/login" exact>
              <LogIn setAmILoginOrSingup={setAmILoginOrSingup} />
            </Route>
            <Route path="/signup" exact>
              <SignUp setAmILoginOrSingup={setAmILoginOrSingup}/>
            </Route>
            <Route path="/cart" exact component={(Navbar, Cart)} />
          </Switch>
        </BrowserRouter>
        <GlobalStyle amILoginOrSingup={amILoginOrSingup}/>
      </CartContext.Provider>
      </UserContext.Provider>
    </>
  );
}
