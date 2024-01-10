import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CounterPage from "./pages/CounterPage";
import TodoListPage from "./pages/TodoListPage";
import UserPage from "./pages/UserPage";
import PostEditPage from "./pages/PostEditPage";
import PostsListPage from "./pages/PostsListPage";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<span className="text-2xl">Home Page</span>} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="posts" element={<PostsListPage />} />
          <Route path="posts/:id/edit" element={<PostEditPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="todos" element={<TodoListPage />} />
          </Route>
          <Route
            path="*"
            element={<span className="text-2xl">Not found</span>}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
