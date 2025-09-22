import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import PostList from "./components/postList";
import PostEdit from "./components/postEdit";
import PostCreate from "./components/postCreate";
import Register from "./components/register";
import Login from "./components/login";
import DashboardPage from "./components/homePage";
import ProtectedRoute from "./components/protectedRoute";
import LogoutPage from "./components/logoutPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/edit/:id" element={<PostEdit />} />
        <Route path="/create" element={<PostCreate />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
