import styled from 'styled-components';

interface ContainerProps {
	showCart: boolean;
}

export const ClearCartButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	margin-left: 10px;
	color: red;
	font-size: 1.5rem;
`;

export const CloseButton = styled.button`
	border: none;
	background-color: white;
	padding: 0.6rem;
	color: red;
`;

export const Container = styled.aside<ContainerProps>`
	position: fixed;
	top: 0;
	right: ${(props) => (props.showCart ? '0' : '-250px')};

	width: 250px;
	height: 100vh;
	background-color: white;

	padding: 2rem;
	box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

	transition: right 0.5s;
	z-index: 1000;
	overflow-y: auto;
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

export const CartTotal = styled.strong`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const RemoveProductListAside = styled.button`
	border: none;
	padding: 0.2rem;
	color: red;
	background-color: white;
`;
