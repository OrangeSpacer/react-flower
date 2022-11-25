import { useCallback, useEffect } from "react"
import CatalogMain from "../components/CatalogMain/CatalogMain"
import Products from "../components/Products/Products"
import Loader from "../components/UI/Loader/Loader"
import { useAction } from "../hooks/useAction"
import { useTypesSelector } from "../hooks/useTypesSelector"

const Catalog = () => {
  const {fetchProducts} = useAction()
  const {error,items,loading} = useTypesSelector(state => state.products)

  useEffect(() => {
    fetchProducts()
  },[])

  console.log(items)

  if(loading){
    console.log('Загрузка')
    return <Loader/>
  }

  if(error){
    return <div>{error}</div>
  }

  return (
    <div>
      <CatalogMain/>
      <Products products={items}/>
    </div>
  )
}

export default Catalog