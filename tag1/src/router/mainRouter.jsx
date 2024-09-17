import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Homepage from '../pages/Homepage'
import AboutUs from '../pages/AboutUs'
import MainLayout from '../layouts/MainLayout'

export const mainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Homepage/>}/> //index for rootpath
            <Route path='aboutus' element={<AboutUs/>}/>
        </Route>
    )
)