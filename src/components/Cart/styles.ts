import styled from 'styled-components';

interface ContainerProps {
	showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
	position: fixed;
	top: 0;
	right: ${(props) => (props.showCart ? '0' : '-250px')};

	width: 224px;
	height: 100vh;
	background-color: white;

	padding: 2rem;
	box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

	transition: right 0.5s;
`;

export const Title = styled.h1``;

export const CartProductsList = styled.ul`
	padding: 2rem 0;
	list-style: none;

	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const CartProductsItem = styled.li``;

export const CartTotal = styled.strong``;

export const RemoveProductListAside = styled.button`
	border: none;
	padding: 0.2rem;
	color: red;
	background-color: white;
`;

export const FaArrowRight = styled.button`
	border: none;
`;
