import { useState } from 'react';
import { FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi';
import { Cart } from '../Cart/Cart';

import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/User/root-reducer';

export const Header: React.FC = () => {
	const { user } = useSelector(
		(rootReducer: RootReducer) => rootReducer.userReducer
	);

	const dispatch = useDispatch();

	console.log(user);

	const [showCart, setShowCart] = useState(false);
	const isLogged = user != null;

	function handleUserAuth() {
		if (user === null) {
			dispatch({
				type: 'user/login',
				payload: {
					name: 'Leandro Borges',
					email: 'leandro@gmail.com',
				},
			});
		} else {
			dispatch({
				type: 'user/logout',
			});
		}
	}

	console.log(user);

	return (
		<S.StyledHeader>
			<S.Wrapper>
				<S.HeaderTitle>MyStore</S.HeaderTitle>

				<S.ButtonsWrapper>
					<S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
						{isLogged ? 'Logout' : 'Login'}
						{isLogged ? <FiLogOut /> : <FiLogIn />}
					</S.AuthButton>
					<S.Cartbutton onClick={() => setShowCart(!showCart)}>
						Carrinho <FiShoppingCart />
					</S.Cartbutton>
				</S.ButtonsWrapper>
			</S.Wrapper>

			<Cart showCart={showCart} />
		</S.StyledHeader>
	);
};
