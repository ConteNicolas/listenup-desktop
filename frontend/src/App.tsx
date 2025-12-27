import "@/index.css";
import { BrowserRouter, Route, Routes } from "react-router";

import Settings from "./pages/settings";
import MusicPlayer from "./pages/music-player";
import Home from "./pages/home";
import MainLayout from "./components/layout/main-layout";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/music-player" element={<MusicPlayer />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
