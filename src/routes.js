import { HomePage } from './pages/home-page.jsx'
import { LoginSignup } from './pages/login-signup.jsx'
// import { AboutUs } from './pages/about-us.jsx'
// import { CarApp } from './pages/car-app.jsx'
// import { ReviewApp } from './pages/review-app.jsx'
// import { ChatApp } from './pages/chat-app.jsx'
// import { AdminApp } from './pages/admin-app.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage />,
    },
    // {
    //     path: '/workspace',
    //     component: <WorkSpace />,
    // },
    // {
    //     path: '/board',
    //     component: <BoardApp />,
    // },
    {
        path: '/:signup',
        component: <LoginSignup />,
    },
    {
        path: '/login',
        component: <LoginSignup />,
    }

    // {
    //     path: '/',
    //     component: <TaskDetails />,
    // },
]

export default routes