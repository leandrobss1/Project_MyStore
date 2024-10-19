import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import * as S from './styles';
import { removeProduct } from '../../redux/Cart/cart-slice';
import { Product } from '../../data/products';
import { FaArrowCircleRight } from 'react-icons/fa';

interface CartProps {
	showCart: boolean;
	cart: Product[];
	toggleCart: () => void;
}

export const Cart: React.FC<CartProps> = ({ showCart, cart, toggleCart }) => {
	const dispatch = useDispatch();

	const total = cart
		.reduce((totalCart, product) => {
			return totalCart + product.price;
		}, 0)
		.toFixed(2);

	return (
		<S.Container showCart={showCart}>
			<S.Title>
				Carrinho
				<S.CloseButton onClick={toggleCart}>
					<FaArrowCircleRight />
				</S.CloseButton>
			</S.Title>
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
