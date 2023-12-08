import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import {publicRoutes,privateRoutes} from "../router";

const AppRouter = () => {
    const isAuth=true;
    return (
        isAuth
        ?  <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={<route.element />}
                        path={route.path}
                        key={route.path}
                    />
                )}
            </Routes>
        :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={<route.element />}   //key={route}
                        path={route.path}
                        key={route.path}
                    />
                )}
            </Routes>

    );
};

export default AppRouter;