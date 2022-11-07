// import { data as products } from "./helpers/data";

<<<<<<< HEAD
import Aside from "./components/Aside/aside";

import axios from "axios";

function App() {
  const [card, setCard] = useState([]);

  const [products, setProducts] = useState([]);
  // console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  const baseUrl = "https://fakestoreapi.com/products";

  const getProducts = async () => {
    try {
      const { data } = await axios.get(baseUrl);
      setProducts(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };


  const addToCart = (newCard) => {
    console.log("product clicked", newCard);
    setCard([...card, newCard]);
  };

  const removeCard = (id) => {
    console.log(id);
    const filteredCard = card.filter((item) => item.id !== id);
    setCard(filteredCard);
  };

=======
import AppRouter from "./router/AppRouter";

function App() {
>>>>>>> 29af806d3b2898fa77e788ddf6abc3c5d273d75f
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
