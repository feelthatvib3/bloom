import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import CategoriesPage from './pages/CategoriesPage';
import ProductsPage from './pages/ProductsPage';
import ProductInfoPage from './pages/ProductInfoPage';
import CartPage from './pages/CartPage';
import Modal from './components/ui/Modal';

export default function App() {
    return (
        <>
            <Header />
            <div className="pt-[70px] text-black lg:pt-[110px] xl:pt-[126px]">
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
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
            <Footer />
            <Modal />
        </>
    );
}
