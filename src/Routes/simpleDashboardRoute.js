import SimpleDashboardLayout from '../Layouts/SimpleDashboardLayout'
import MainPage from "../Pages/SimpleDashBoard/MainPage/MainPage";

export default [
    {
        path: 'simple-dashboard',
        children: [
            {
                path: '',
                element: <SimpleDashboardLayout renderElement={() => <MainPage/>}/>
            },
            {
                path: 'forms',
                element: <SimpleDashboardLayout renderElement={() => <MainPage/>}/>
            },
            {
                path: 'tables',
                element: <SimpleDashboardLayout renderElement={() => <MainPage/>}/>
            },
            {
                path: 'charts',
                element: <SimpleDashboardLayout renderElement={() => <MainPage/>}/>
            },
            {
                path: 'components',
                element: <SimpleDashboardLayout renderElement={() => <MainPage/>}/>
            },
        ]
    }
]
