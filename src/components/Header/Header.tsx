import { FiLogIn, FiShoppingCart } from "react-icons/fi";

import * as S from "./styles";

export const Header: React.FC = () => {
	return (
		<S.StyledHeader>
			<S.Wrapper>
				<S.HeaderTitle>MyStore</S.HeaderTitle>

				<S.ButtonsWrapper>
					<S.AuthButton>
						Login <FiLogIn />
					</S.AuthButton>
					<S.Cartbutton>
						Carrinho <FiShoppingCart />
					</S.Cartbutton>
				</S.ButtonsWrapper>
			</S.Wrapper>
		</S.StyledHeader>
	);
};
