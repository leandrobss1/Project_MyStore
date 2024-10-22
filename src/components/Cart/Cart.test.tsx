import { render, screen } from '@testing-library/react';
import { Cart } from './Cart';
import { products } from '../../data/products';
import userEvent from '@testing-library/user-event';
import { useDispatch } from 'react-redux';

const cart = products.slice(0, 2);
const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
	useDispatch: () => mockDispatch,
}));

describe('Cart > Unit tests', () => {
	it('should render an empty cart correctly', () => {
		render(<Cart showCart={true} cart={[]} toggleCart={() => {}} />);
		const titleElement = screen.getByRole('heading', { level: 1 });
		const totalElement = screen.getByTestId('total');
		const cartListElement = screen.getByRole('list');

		expect(titleElement).toHaveTextContent('Carrinho');
		expect(totalElement).toHaveTextContent('$0');
		expect(cartListElement).toBeEmptyDOMElement();
	});

	it('should render a cart with two products', () => {
		render(<Cart showCart={true} cart={cart} toggleCart={() => {}} />);
		const productItemElements = screen.getAllByRole('listitem');
		const firstProductTitleElement = screen.getByText(cart[0].title);
		const secondProductTitleElement = screen.getByText(cart[1].title);

		expect(productItemElements.length).toBe(2);
		expect(firstProductTitleElement).toBeInTheDocument();
		expect(secondProductTitleElement).toBeInTheDocument();
	});

	it('should remove product when remove button is clicked', () => {
		render(<Cart showCart={true} cart={[products[0]]} toggleCart={() => {}} />);
		const removeProductButton = screen.getByRole('button', {
			name: /remover/i,
		});

		userEvent.click(removeProductButton);
		expect(mockDispatch).toHaveBeenCalled();
	});
});
