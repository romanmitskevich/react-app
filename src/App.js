import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MainLayout from "./pages/MainLayout";
import Info from "./pages/Info";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
    const [user, setUser] = useState(null);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout user={user} />}>
                    <Route path="/" element={<Home />} />
                    <Route path="info" element={<Info />} />

                    <Route path="login" element={<Login setUser={setUser} />} />
                    <Route path="profile" element={
                        <ProtectedRoute user={user}><Profile user={user} /></ProtectedRoute>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
