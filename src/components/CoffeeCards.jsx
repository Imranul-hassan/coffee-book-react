import { useParams } from "react-router-dom";


const CoffeeCards = () => {
    const {category} = useParams()
    console.log(category)
    return (
        <div>
            <h3>coffees cards</h3>
        </div>
    );
};

export default CoffeeCards;