import { Redirect, Route, Switch } from "react-router-dom";
import Developer from "./screens/Developer/Developer";
import Home from "./screens/Home/Home";
import Result from "./screens/Result/Result";
import { AnimatePresence } from "framer-motion";
import Form from "./screens/Form/Form";
import Analyzer from "./screens/Analyzer/Analyzer";
import { useEffect, useState } from "react";

function AppRouter() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(true);
  }, []);

  return (
    <main>
      <AnimatePresence>
        <Switch>
          {loggedIn ? null : <Redirect to="/" />}
          <Route path="/" component={Home} exact />
          <Route path="/form" component={Form} exact />
          <Route path="/result" component={Result} exact />
          <Route path="/developer" component={Developer} exact />
          <Route path="/analyzer" component={Analyzer} exact />
        </Switch>
      </AnimatePresence>
    </main>
  );
}

export default AppRouter;
