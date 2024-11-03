import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";

const Home = () => {
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div>
            {/* banner section */}
            <Banner></Banner>

            {/* heading section */}
            <Heading title={'Browse coffees by category'} subtitle={'Choose your desired coffee category to browse through specific coffee that fit in your taste'}></Heading>

            {/* categories tab section  */}
            <Categories categories={categories}></Categories>

            {/* dynamic nested component  */}
            <Outlet></Outlet>

        </div>
    );
};

export default Home;