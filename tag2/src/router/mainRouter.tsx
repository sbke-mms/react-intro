import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.tsx'
import Homepage from '../pages/Homepage.tsx'
import AboutUs from '../pages/AboutUs.tsx'
import LoginPage from '../pages/LoginPage.tsx'
import BlogPage from '../pages/BlogPage.tsx'
import BlogArticle from '../components/BlogArticle.tsx'
//import ControllerExercise from '../components/controllerExercise/ControllerExercise.tsx'
import BlogPost from '../pages/BlogPost.tsx'
import UserPage from '../pages/UserPage.tsx'
import ProtectedRoute from '../components/protectedRoutes/ProtectedRoute.tsx'

export const mainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<Homepage/>}/>
            <Route path='aboutus' element={<AboutUs/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='blog' element={<ProtectedRoute/>}>
                <Route index element={<BlogPage/>}/>
                <Route path='create' element={<BlogPost/>}/>
                <Route path=':id' element={<BlogArticle/>}/>
            </Route>
            <Route path='users' element={<UserPage/>}/>

                    </Route>
    )
    //<Route path='users' element={<ControllerExercise/>}/>

)