import { Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import CategoriesPage from './pages/CategoriesPage';
import ProductsPage from './pages/ProductsPage';
import ProductInfoPage from './pages/ProductInfoPage';

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
                        element={<ProductsPage type="category" />}
                    />
                    <Route
                        path="/products"
                        element={<ProductsPage type="products" />}
                    />
                    <Route
                        path="/sales"
                        element={<ProductsPage type="sales" />}
                    />
                    <Route
                        path="/products/:productId"
                        element={<ProductInfoPage />}
                    />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}
