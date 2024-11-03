import Banner from "../components/Banner";
import Heading from "../components/Heading";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Heading title={'Browse coffees by category'} subtitle={'Choose your desired coffee category to browse through specific coffee that fit in your taste'}></Heading>
        </div>
    );
};

export default Home;