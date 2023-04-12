import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "./context/apiContext";
import Header from "./components/Header";
import Feed from './components/Feed';
import SearchResultVideos from "./components/SearchResultVideos";
import VideoDetails from"./components/VideoDetails";

function App() {
  return (
    <>
   <AppContext>
    <BrowserRouter>
    <div className='flex flex-col h-full'>
      <Header />
    <Routes>
    <Route  path="/" exact element={<Feed />}/>
      <Route  path="/searchResult/:searchQuery" element={<SearchResultVideos />}/>
      <Route  path="/video/:id" element={<VideoDetails />}/>
    </Routes>
    </div>
    </BrowserRouter>
   </AppContext>
   </>
  );
}

export default App;
