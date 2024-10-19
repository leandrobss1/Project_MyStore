import { Provider } from 'react-redux';
import { Header } from './components/Header/Header';
import { ProductCard } from './components/ProductCard/ProductCard';
import { ProductsList } from './components/ProductsList/ProductsList';
import { GlobalStyles } from './styles/GlobalStyles';
import { store } from './redux/User/store';
import ScrollToTop from './components/Scroll/Scroll';

//Criando componentes funcionais
function App() {
	return (
		<Provider store={store}>
			<Header />

			<ProductsList />

			<GlobalStyles />

			<ScrollToTop />
		</Provider>
	);
}

export default App;
