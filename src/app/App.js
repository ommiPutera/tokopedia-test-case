import Layout from "./layouts";
import AnimeList from "./pages/Anime";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<AnimeList />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
