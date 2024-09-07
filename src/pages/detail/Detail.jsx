import "./Detail.css";
import { useParams } from "react-router-dom";
const Detail = () => {
    const { id } = useParams();
    const [product, setProducts] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:8000/products/" + id)
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
    }, []);
    return ( 
        <>
        <h1>detail</h1>
        <h1>{product.id}</h1>
        <h1>{product.name}</h1>
        </>
     );
}
 
export default Detail;