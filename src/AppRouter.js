import { Route, Switch } from "react-router-dom";
import Developer from "./screens/Developer/Developer";
import Home from "./screens/Home/Home";
import Result from "./screens/Result/Result";
import { AnimatePresence } from "framer-motion";
import Form from "./screens/Form/Form";
import Analyzer from "./screens/Analyzer/Analyzer";
import Iframe from "./components/Iframe/Iframe";

function AppRouter() {
  return (
    <main>
      <AnimatePresence>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/form" component={Form} exact />
          <Route path="/form/result" component={Result} exact />
          <Route path="/developer" component={Developer} exact />
          <Route path="/estimator" component={Iframe} exact />
          <Route path="/form/result/analyzer" component={Analyzer} exact />
        </Switch>
      </AnimatePresence>
    </main>
  );
}

export default AppRouter;
