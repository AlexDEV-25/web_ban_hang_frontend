import Banner from "./components/Banner"
import Carousel from "./components/Carousel"
import List from '../product/List'

const HomePage: React.FC = () => {
    return (
        <div>
            <Banner />
            <Carousel />
            <List />
        </div>
    )
}
export default HomePage