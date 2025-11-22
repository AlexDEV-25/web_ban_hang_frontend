import Banner from "./components/Banner"
import Carousel from "./components/Carousel"
import List from '../product/List'
interface Props {
    keyWords: string;
}
const HomePage: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <Banner />
            <Carousel />
            <List keyWords={props.keyWords} />
        </div>
    )
}
export default HomePage