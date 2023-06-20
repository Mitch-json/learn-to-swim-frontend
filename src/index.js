import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PricingPage from './user-pages/PricingPage'
import Register from './pages/Register'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Login from './pages/Login';
import AdminClients from './admin-pages/AdminClients';
import AdminHome from './admin-pages/AdminHome';
import UserCalendar from './user-pages/UserCalendar';
import UserOverview from './user-pages/UserOverview';
import UserMessages from './user-pages/UserMessages';
import AdminHomeSection from './admin-pages/admin-sections/AdminHomeSection';
import AdminAboutSection from './admin-pages/admin-sections/AdminAboutSection';
import AdminContactSection from './admin-pages/admin-sections/AdminContactSection';
import AdminAddImage from './admin-pages/admin-sections/admin-add-edit-section/AdminAddImage';
import AdminEditImage from './admin-pages/admin-sections/admin-add-edit-section/AdminEditImage';
import BookSession from './user-pages/BookSession';
import AdminGallerySection from './admin-pages/admin-sections/AdminGallerySection';
import AdminPricing from './admin-pages/AdminPricing';
import AdminAddPricing from './admin-pages/admin-sections/admin-add-edit-pricing/AdminAddPricing';
import AdminEditPricing from './admin-pages/admin-sections/admin-add-edit-pricing/AdminEditPricing';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<App />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/book-a-session' element={<BookSession />} />
        
        {/* <Route path='/user/overview' element={<UserOverview />} />
        <Route path='/user/messages' element={<UserMessages />} />
        <Route path='/user/calendar' element={<UserCalendar />} /> */}

        <Route path='/admin/clients' element={<AdminClients />} />
        <Route path='/admin/home' element={<AdminHome />} />
        <Route path='/admin/pricing' element={<AdminPricing />} />

        <Route path='/admin/home/Home/section' element={<AdminHomeSection />} />
        <Route path='/admin/home/About/section' element={<AdminAboutSection />} />
        <Route path='/admin/home/Contact/section' element={<AdminContactSection />} />
        <Route path='/admin/home/Gallery/section' element={<AdminGallerySection />} />

        <Route path='/admin/home/add-image/section' element={<AdminAddImage />} />
        <Route path='/admin/pricing/add-pricing' element={<AdminAddPricing />} />

        <Route path='/admin/home/section/edit-image/image' element={<AdminEditImage />} />
        <Route path='/admin/pricing/edit-pricing' element={<AdminEditPricing />} />
        
      </ Routes>
    </ BrowserRouter>
  </CookiesProvider>
);



