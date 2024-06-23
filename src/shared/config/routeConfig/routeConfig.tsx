import { MainPage } from 'pages';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    // ABOUT = 'about',
    // PROFILE = 'profile',
    // last
    // NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    // [AppRoutes.ABOUT]: '/about',
    // [AppRoutes.PROFILE]: '/profile',
    // последний
    // [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    // [AppRoutes.ABOUT]: {
    //     path: RoutePath.about,
    //     element: <AboutPage />,
    // },
    // [AppRoutes.PROFILE]: {
    //     path: RoutePath.profile,
    //     element: <ProfilePage />,
    //     authOnly: true,
    // },
    // // last
    // [AppRoutes.NOT_FOUND]: {
    //     path: RoutePath.not_found,
    //     element: <NotFoundPage />,
    // },
};