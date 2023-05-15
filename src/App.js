import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookDetails from "./components/BookDetails";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/*" element={<NotFoundPage />} />
        <Route exact path="/book/:asin" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
