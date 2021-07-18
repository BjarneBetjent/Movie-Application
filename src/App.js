import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SearchPage from "./components/searchPage";
import Movie from "./components/movie";

const App = () =>
{
    // Store state for search and movie here to send it to the components? 
    const [search, setSearch] = useState("");
    const [movie, setMovie] = useState(null);

    return (
        <div className="wrapper">
            <Router>
                <Switch>
                    <Route exact path="/"><SearchPage
                        search={search}
                        setSearch={setSearch}
                        setMovie={setMovie}
                    />
                    </Route>
                    <Route path="/movie"><Movie movie={movie} /></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
