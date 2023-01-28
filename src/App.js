// 「BrouwserRouter」このコンポーネントで囲った配下でルーティングする
// 「Link」はaタグみたいなもの
// 「Swith」リンクでのページのだし分け
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import "./styles.css";
import { Home } from "./Home.jsx";
import { Page1 } from "./Page1.jsx";
import { Page2 } from "./Page2.jsx";
import { Page1DetailA } from "./Page1DetailA.jsx";
import { Page1DetailB } from "./Page1DetailB.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Switch>
        {/* exactはパスが完全一致のみ */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* renderで囲うことで1行で記載可能 */}
        {/* <Route path="/page1" render={() => <Page1 />} /> */}
        <Route
          path="/page1"
          render={({ match: { url } }) => (
            // render={(props) => (
            <Switch>
              {console.log(url)}
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route path={`${url}/detailA`}>
                <Page1DetailA />
              </Route>
              <Route path={`${url}/detailB`}>
                <Page1DetailB />
              </Route>
            </Switch>
          )}
        />
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
