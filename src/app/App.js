import Layout from "./layouts";
import AnimeList from "./pages/Anime/List";
import CollectionList from "./pages/Collection/List";
import CollectionDetail from "./pages/Collection/Detail";
import AnimeDetail from "./pages/Anime/Detail";
import AnimeContextProvider from "../contexts/AnimeContext";
import CollectionContextProvider from "../contexts/CollectionContext";
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
          <CollectionContextProvider>
            <Routes>
              <Route path='/' element={<AnimeList />} />
              <Route path='/detail/:id' exact element={<AnimeDetail />} />
              <Route path='/collection/list' element={<CollectionList />} />
              <Route path='/collection/detail/:id' element={<CollectionDetail />} />
            </Routes>
          </CollectionContextProvider>
        </AnimeContextProvider>
      </Layout>
    </Router>
  );
}

export default App;
