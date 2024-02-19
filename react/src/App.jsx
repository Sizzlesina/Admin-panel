/** @format */

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/elements/AppLayout';
import HomePage from './pages/HomePage';
import Error from './pages/Error';
import AdminPage from './pages/users/AdminPage';
import TeachersPage from './pages/users/TeachersPage';
import StudentPage from './pages/users/StudentPage';
import ArticlesPage from './pages/posts/ArticlesPage';
import PostsPage from './pages/posts/PostsPage';
import CoursesPage from './pages/posts/CoursesPage';
import MenuHeaderPage from './pages/setting/MenuHeaderPage';
import FooterHeaderPage from './pages/setting/FooterHeaderPage';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/users/admin',
        element: <AdminPage />,
      },
      {
        path: '/users/teachers',
        element: <TeachersPage />,
      },
      {
        path: '/users/student',
        element: <StudentPage />,
      },
      {
        path: '/posts/articles',
        element: <ArticlesPage />,
      },
      {
        path: '/posts/post',
        element: <PostsPage />,
      },
      {
        path: '/posts/courses',
        element: <CoursesPage />,
      },
      {
        path: '/setting/menu',
        element: <MenuHeaderPage />,
      },
      {
        path: '/setting/footer',
        element: <FooterHeaderPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
