import { useNavigate } from 'react-router-dom';
import Container from '../components/ui/Container';
import Title from '../components/ui/Title';
import { RootState, useAppSelector } from '../store';
import Button from '../components/ui/Button';
import CartItemsList from '../components/ui/CartItemsList';
import OrderForm from '../components/OrderForm';

export default function CartPage() {
    const { products } = useAppSelector((state: RootState) => state.cart);
    const navigate = useNavigate();
    return (
        <main>
            <Container>
                <div className="mb-6 mt-8 lg:mb-8 xl:my-10">
                    <Title
                        text="Shopping cart"
                        link={{ text: 'Back to store', href: '/products' }}
                    />
                </div>
                {products.length > 0 ? (
                    <div className="grid gap-y-5 xl:grid-cols-2 xl:gap-x-5 2xl:grid-cols-5 2xl:gap-x-8 2xl:gap-y-0">
                        {/* products list */}
                        <CartItemsList products={products} />
                        {/* order form */}
                        <OrderForm />
                    </div>
                ) : (
                    <div>
                        <p className="text-lg font-medium lg:text-xl">
                            Looks like you have no items in your basket
                            currently.
                        </p>
                        <Button
                            className="my-6"
                            onClick={() => navigate('/products')}
                        >
                            Continue Shopping
                        </Button>
                        <Button intent="link" className="mx-auto">
                            Back to the store
                        </Button>
                    </div>
                )}
            </Container>
        </main>
    );
}
