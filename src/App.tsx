import { RouterProvider } from "@tanstack/react-router";
import { router } from "./components/0-router";

export function App() {
    return (
        <RouterProvider router={router} />
    );
}
