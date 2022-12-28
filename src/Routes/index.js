import simpleDashboardRoute from './simpleDashboardRoute'
import NotFound404 from "../Pages/NotFound404";

const routesArray = [
    ...simpleDashboardRoute,
    {
        path: '*',
        element: <NotFound404/>
    },
]

export default routesArray;
