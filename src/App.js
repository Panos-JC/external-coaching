import { Routes, Route } from 'react-router-dom';
import Home from "./routes/Home";
import PostPage from './routes/PostPage';

function App() {
  return(
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/post/:id' element={<PostPage/>}/>
    </Routes>
    );
}

export default App;
