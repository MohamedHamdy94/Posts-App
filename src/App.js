import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Posts from './Pages/Posts';
import PostDetails from './Pages/PostDetails';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container className=" mt-5 ">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="*" element={<Posts />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
export default App;
