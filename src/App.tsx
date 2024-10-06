import { Header } from "./components/Header/Header";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { GlobalStyles } from "./styles/GlobalStyles";

//Criando componentes funcionais
function App() {
	return (
		<>
			<Header />

			<ProductsList />

			<GlobalStyles />
		</>
	);
}

export default App;
