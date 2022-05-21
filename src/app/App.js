import Layout from "./layouts";
import AnimeList from "./pages/Anime";
import AnimeContextProvider from "../contexts/AnimeContext";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <AnimeContextProvider>
          <Routes>
            <Route path='/' element={<AnimeList />} />
          </Routes>
        </AnimeContextProvider>
      </Layout>
    </Router>
  );
}

export default App;
