import { routes } from "./0-all-routes";
import { rootRoute } from "./1-root";
import { ErrorPage } from "./3-error-page-404";
import { HomePage } from "./2-home";
import { Route, Router } from "@tanstack/react-router";
import { About as AboutPage, Books as BooksPage, Contacts as ContactsPage } from "../2-pages";

const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/",
    component: function Index() {
        return <HomePage />;
    },
});

const aboutRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/about",
    component: function About() {
        return <AboutPage />;
    },
});

const booksRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/books",
    component: function Books() {
        return <BooksPage />;
    },
});

const contactsRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/contact",
    component: function Contacts() {
        return <ContactsPage />;
    },
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, booksRoute, contactsRoute]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

// export const router = createBrowserRouter([{
//     path: "/",
//     element: <Root routes={routes} />,
//     errorElement: <div className="pt-11  h-screen bg-sky-800"><HomePage /></div>, // errorElement: <ErrorPage />, // a special case to self host on github pages
//     children: routes,
// }]);
