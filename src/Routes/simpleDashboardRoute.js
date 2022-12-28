import SimpleDashboardLayout from '../Layouts/SimpleDashboardLayout'
import MainPage from "../Pages/SimpleDashBoard/MainPage/MainPage";
import FormPage from "../Pages/FormPage/FormPage";

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
                element: <SimpleDashboardLayout renderElement={() => <FormPage/>}/>
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
            }
        ]
    }
]
