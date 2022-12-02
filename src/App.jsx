import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Provider} from 'react-redux'
import { store } from "./redux/store";
import MainPage from "./pages/mainPage/MainPage";
import UserPage from "./pages/userPage/UserPage";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/:id" element={<UserPage />}/>

      </Routes>
    </BrowserRouter>
    </Provider>
  );
}
export default App;
