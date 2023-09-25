import { Routes, Route } from 'react-router-dom';
import Home from "./routes/Home";
import PostPage from './routes/PostPage';
import UserPage from './routes/UserPage';

function App() {
  return(
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/post/:id' element={<PostPage/>}/>
        <Route path='/user/:userId' element={<UserPage/>}/>
    </Routes>
    );
}

export default App;
