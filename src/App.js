import './App.scss';
import Header from "./components/header/Header"
import {Route, Routes} from "react-router-dom"
import Home from "./components/page/Home";
import Popular from "./components/page/Popular";
import TopRated from "./components/page/TopRated";
import DetailPage from "./components/page/DetailPage";


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/popular'} element={<Popular/>}/>
            <Route path={'/top-rated'} element={<TopRated/>}/>
            <Route path={'/movies/detail-page/:movieId'} element={<DetailPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
