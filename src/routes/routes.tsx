import BaseLayout from "../components/layout/BaseLayout";
import Home from "../pages/home/home";
import Blog from "../pages/blog/Blog";
import BlogDetail from "../pages/blog/BlogDetails";
import Services from "../pages/services/services";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
// import ProtectedRoute from "../components/routing/ProtectedRoute";
// import AdminLayout from "../components/layout/admin/AdminLayout";
// import AdminPosts from "../components/layout/admin/blogs/Blogs";
// import AdminDashboard from "../components/layout/admin/dashboard/Dashboard";
// import AnalyticsDashboard from "../components/layout/admin/dashboard/AnalyticDashboard";
import AdminNewPost from "../components/layout/admin/blogs/AddBlog";
import LoginPage from "../pages/admin/Login";
// import Privacy from "../pages/privacy/Privacy";
// import Disclaimer from "../pages/disclaimer/disclaimer";
// import NotFound from "../pages/notfound/notfound";

import PATHS from "../constants/paths";
// const isAuthenticated = true; // ❌ placeholder


const routes = [
  {
    element: <BaseLayout />,
    children: [
      { path: PATHS.Home, element: <Home /> },
      { path: PATHS.Login, element: <LoginPage /> },
      { path: PATHS.Blog, element: <Blog /> },
      { path: PATHS.BlogDetail, element: <BlogDetail /> },
      { path: PATHS.Services, element: <Services /> },
      { path: PATHS.About, element: <About /> },
      { path: PATHS.Contact, element: <Contact /> },
      // { path: PATHS.Privacy, element: <Privacy /> },
      // { path: PATHS.Disclaimer, element: <Disclaimer /> },
      // { path: PATHS.NotFound, element: <NotFound /> },
    ],
  },
  // {
  //   path: PATHS.Admin,
  //   element: (
  //     <ProtectedRoute isAuthenticated={isAuthenticated}>
  //       <AdminLayout />
  //     </ProtectedRoute>
  //   ),
  //   children: [
  //     { path: PATHS.Admin, element: <AdminDashboard /> },
  //     { path: PATHS.AdminPosts, element: <AdminPosts /> },
  //     { path: PATHS.Analytics, element: <AnalyticsDashboard /> },
  //   ],
  // },
  { path: PATHS.Admin, element: <AdminNewPost /> },
];

export default routes;