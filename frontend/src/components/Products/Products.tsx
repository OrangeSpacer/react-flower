import Container from '../Container/Container'
import ItemCard from '../ItemCard/ItemCard'
import Filter from '../Filter/Filter'
import { ProductsProps } from './Products.props'
import { useEffect, useState } from 'react'
import { colorsDefault,formatDefault,lightDefault } from './ProductsFeaultsValue'

import styles from  './Products.module.scss'

const Products = ({products}:ProductsProps) => {
  const [list,setList]:any = useState([])
  const [selectedPrice,setSelectedPrice] = useState(['100','10000'])
  const [searchInput,setSeacrhInput] = useState('')
  const [colors,setColor] = useState(colorsDefault)
  const [format,setFormat] = useState(formatDefault)
  const [light,setLight] = useState(lightDefault)

  useEffect(() => {
    setList(products)
  },[products])

  const handleLightChecked = (id:string) => {
    const lightStateLIst = light
    const changeCheckedLight = lightStateLIst.map(item => item.id === id ? {...item,checked:!item.checked}: item)
    setLight(changeCheckedLight)
  }

  const handlerColorsChecked = (id:string) => {
    const colorStateList = colors
    const changeCheckedColor = colorStateList.map((item) => item.id === id ? {...item,checked:!item.checked}:item)
    setColor(changeCheckedColor)
  }

  const handleFormatChecked = (id:string) => {
    const formatCheckedList = format
    const changeFormatChecked = formatCheckedList.map((item) => item.id===id ? {...item,checked: !item.checked}:item)
    setFormat(changeFormatChecked)
  }

  const handleInputValue = (e:any) => setSeacrhInput(e.target.value)

  const handleSelectPrice = (value:any) => setSelectedPrice(value)

  const applyFilters = () => {
    let updateList = products

    const lightchecked = light.filter(item => item.checked).map(item => item.backedValue)
    if(lightchecked.length){
      updateList = updateList.filter(item => lightchecked.includes(item.tags.light))
    }

    const colorChecked = colors.filter((item) => item.checked).map((item) => item.backedValue)
    if(colorChecked.length){
      updateList = updateList.filter((item) => colorChecked.includes(item.tags.colors))
    }

    const formatChecked = format.filter((item) => item.checked).map(item => item.backedValue)
    if(formatChecked.length){
      updateList = updateList.filter(item => formatChecked.includes(item.tags.format))
    }

    if(searchInput){
      updateList = updateList.filter((item:any) => item.nameItem.toLowerCase().includes(searchInput.toLowerCase()))
    }

    const minPrice = selectedPrice[0]
    const maxPrice = selectedPrice[1]
    

    updateList = updateList.filter((item:any) => parseInt(item.cost) >= parseInt(minPrice) && parseInt(item.cost) <= parseInt(maxPrice))

    setList(updateList)
  }


  useEffect(() => {
    applyFilters()
  },[selectedPrice,searchInput,colors,format,light])


  const defaultFilter = () => {
    setList(products)
    setSelectedPrice(['100','10000'])
    setColor(colorsDefault)
    setFormat(formatDefault)
    setLight(lightDefault)
    setSeacrhInput('')
  }

  return (
    <div className={styles.products}>
        <Container>
          <div className={styles.content}>
            <div className={styles.filterBlock}>
              <Filter light={light} setLight={handleLightChecked} format={format} setFormat={handleFormatChecked} colors={colors} defaultPrice={selectedPrice} searchValue={searchInput} defaultFilter={defaultFilter} setColor={handlerColorsChecked} setInputValue={handleInputValue} setPrice={handleSelectPrice}/>
            </div>
            <div className={styles.items}>
              {list.map((item:any) => <ItemCard key={item._id} id={item._id} inCart={item.inCart}  imgLink={item.imageId} name={item.nameItem} price={item.cost} width='255' height='335'/>)}
            </div>
          </div>
        </Container>
    </div>
  )
}

export default Products