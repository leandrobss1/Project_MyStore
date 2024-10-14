import { useDispatch, useSelector } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';
import { RootReducer } from '../../redux/User/root-reducer';
import { FaTrashAlt } from 'react-icons/fa';
import * as S from './styles';
import { removeProduct } from '../../redux/Cart/cart-slice';

interface CartProps {
	showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {
	const { cart } = useSelector(
		(rootReducer: RootReducer) => rootReducer.cartReducer
	);

	const total = cart.reduce((totalCart, product) => {
		return totalCart + product.price;
	}, 0);

	const dispatch = useDispatch();

	return (
		<S.Container showCart={showCart}>
			<S.Title>Carrinho</S.Title>

			<S.CartProductsList>
				{cart.map((product) => (
					<S.CartProductsItem key={product.id}>
						<strong>{product.title}</strong> - ${product.price}
						<S.RemoveProductListAside
							onClick={() => dispatch(removeProduct(product))}
						>
							<FaTrashAlt />
						</S.RemoveProductListAside>
					</S.CartProductsItem>
				))}
			</S.CartProductsList>

			<S.CartTotal>Total: ${total}</S.CartTotal>
		</S.Container>
	);
};
