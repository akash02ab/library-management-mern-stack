import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Books from "./Books";
import Categories from "./Categories";
import Memebers from "./Memebers";
import Issues from "./Issues";

function Wrapper() {
    return (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Books} />
                    <Route path="/books" component={Books} />
                    <Route path="/categories" component={Categories} />
                    <Route path="/members" component={Memebers} />
                    <Route path="/issued" component={Issues} />
                </Switch>
            </App>
        </Router>
    );
}

export default Wrapper;
