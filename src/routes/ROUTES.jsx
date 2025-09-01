import MainPage from "../pages/UserPages/index.jsx";
import HomePage from "../pages/UserPages/HomePage/index.jsx";
import ExplorePage from "../pages/UserPages/ExplorePage/index.jsx";
import ProfilePage from "../pages/UserPages/ProfilePage/index.jsx";

export const ROUTES = [
    {
        path: '/',
        element: <MainPage/>,
        children: [
            {
                path: '/home',
                element: <HomePage/>,
            },
            {
                path: '/explore',
                element: <ExplorePage/>,
            },
            {
                path: '/profile',
                element: <ProfilePage/>,
            }
        ]
    }
];