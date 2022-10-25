import Catalog from '../components/Catalog/Catalog'
import HowOrder from '../components/HowOrders/HowOrder'
import Main from '../components/Main/Main'
import Popular from '../components/Popular/Popular'
import Questions from '../components/Questions/Questions'

const Home = () => {
  return (
    <div>
        <Main/>
        <Catalog/>
        <Popular/>
        <HowOrder/>
        <Questions/>
    </div>
  )
}

export default Home