import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// importing material ui elements
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";

// importing components
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import Layout from "./components/Layout";
import Update from './pages/Update'
import { useState } from "react";

// defining custom themes
const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: indigo,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  // sort as per difficulty
  const [asPerDiff,setAsPerDiff] = useState(false);
  return (
    // theme provider to override the default theme of Mui
    <ThemeProvider theme={theme}>
      <Router>
        <Layout sorting={asPerDiff} setSorting={setAsPerDiff}>
          <Switch>
            <Route exact path="/">
              <Notes sorting={asPerDiff} setSorting={setAsPerDiff} />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/update">
              <Update />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;