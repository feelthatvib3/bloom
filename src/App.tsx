import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryProductsPage from './pages/CategoryProductsPage';

export default function App() {
    return (
        <>
            <Header />
            <div className="pt-[70px] lg:pt-[110px] xl:pt-[126px]">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/categories" element={<CategoriesPage />} />
                    <Route
                        path="/categories/:categoryId"
                        element={<CategoryProductsPage />}
                    />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}
