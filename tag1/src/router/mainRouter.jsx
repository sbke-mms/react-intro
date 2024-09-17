import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Homepage from '../pages/Homepage'
import AboutUs from '../pages/AboutUs'
import MainLayout from '../layouts/MainLayout'
import Blog from '../pages/Blog'
import SingleArticle from '../pages/SingleArticle'

export const mainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Homepage/>}/> //index for rootpath
            <Route path="aboutus" element={<AboutUs/>}/>
            <Route path="*" element={<h1>404 Page Not Found</h1>}/>
            <Route path="blog">
                <Route index element={<Blog/>}/>
                <Route path=":id" element={<SingleArticle/>}/>
            </Route>
        </Route>
    )
)