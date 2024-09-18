import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.tsx'
import Homepage from '../pages/Homepage.tsx'
import AboutUs from '../pages/AboutUs.tsx'
import LoginPage from '../pages/LoginPage.tsx'
import BlogPage from '../pages/BlogPage.tsx'
import BlogArticle from '../components/BlogArticle.tsx'
import ControllerExercise from '../components/controllerExercise/ControllerExercise.tsx'

export const mainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<Homepage/>}/>
            <Route path='aboutus' element={<AboutUs/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='blog'>
                <Route index element={<BlogPage/>}/>
                <Route path=':id' element={<BlogArticle/>}/>
            </Route>
            <Route path='users' element={<ControllerExercise/>}/>
        </Route>
    )
)