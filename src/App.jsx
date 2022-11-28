import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import UserPage from "./pages/userPage/UserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/:id" element={<UserPage />}/>

      </Routes>
    </BrowserRouter>
  );
}
export default App;