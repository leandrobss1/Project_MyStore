import { render, screen } from '@testing-library/react';
import { Cart } from './Cart';

jest.mock('react-redux');

describe('Cart > Unit tests', () => {
	it('should render an empty cart correctly', () => {
		render(<Cart showCart={true} cart={[]} />);

		const titleElement = screen.getByRole('heading', { level: 1 });

		expect(titleElement).toHaveTextContent('Carrinho');
	});
});
