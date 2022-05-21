import Layout from "./layouts";
import AnimeList from "./pages/Anime/List";
import AnimeDetail from "./pages/Anime/Detail";
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
            <Route path='/detail/:id' exact element={<AnimeDetail />} />
          </Routes>
        </AnimeContextProvider>
      </Layout>
    </Router>
  );
}

export default App;
