

import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
 } from 'react-router-dom';
import Navbar from './components/Navbar';

//no longer need to bring this stuff in bcause we will do it with home pages
// import Hero from './components/Hero';
// import HomeCards from './components/HomeCards';
// import JobListings from './components/JobListings';
// import ViewAllJobs from './components/ViewAllJobs';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
//create a variable called router
const router = createBrowserRouter(
  //inside use create routes from elements
  //and inside that the component
  //because homepage, we can just put index
  //you can put anything in it, for example an h1 tag




  createRoutesFromElements(
  //create a parent route to the rest of our routes?
  <Route path='/' element={<MainLayout />}>

  <Route index element={<HomePage/>} />
  </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}/>
    // return that HTML we just copied inside fragments!!!
  //<>
  {/* we're gonna have separate pages, so these components will not be embedded hear */}
    {/* <Navbar/>
    <Hero />
    <HomeCards/>
    <JobListings/>
    <ViewAllJobs/>    */}
  //  </>

    //all we return is the router provider

  
};

export default App
