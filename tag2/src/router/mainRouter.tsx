import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.tsx'
import Homepage from '../pages/Homepage.tsx'
import AboutUs from '../pages/AboutUs.tsx'

export const mainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout/>}>
            <Route index element={<Homepage/>}/>
            <Route path='aboutus' element={<AboutUs/>}/>
        </Route>
    )
)