import Catalog from '../components/Catalog/Catalog'
import HowOrder from '../components/HowOrders/HowOrder'
import Main from '../components/Main/Main'
import Popular from '../components/Popular/Popular'

const Home = () => {
  return (
    <div>
        <Main/>
        <Catalog/>
        <Popular/>
        <HowOrder/>
    </div>
  )
}

export default Home