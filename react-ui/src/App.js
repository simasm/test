import React, {  useState } from "react";
import './App.css';
import Bar from './Components/Bar'
import ProductContainer from "./Components/ProductContainer";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
 import Admin_view from "./Components/Admin/Admin_view";

//const stock = new Items();


export const UserContext = React.createContext({});


 
const App = () => {

    
    
    const [appState,setAppState] = useState({username:"", cart : []});
  

    return (
        <div className="container">
            <UserContext.Provider value={{appState: appState ,setAppState}}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                     
                       <Bar /> 
                   
                    <Switch>
                        <Route exact path="/">
                            <ProductContainer />
                        </Route>
                        <Route path="/cart">
                            <Cart />
                        </Route>
                        <Route path="/cart/:user">
                            <Cart />
                        </Route>
                        <Route path="/admin">
                         
                            
                            <Admin_view />
                        </Route>
                        <Route path="/:id">
                            <ProductContainer />
                        </Route>
                    </Switch>

                    <Footer />


                </BrowserRouter>
            </UserContext.Provider >
        </div>

    );

}
export default App;


