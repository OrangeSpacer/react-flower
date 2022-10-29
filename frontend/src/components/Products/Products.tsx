import Container from '../Container/Container'
import ItemCard from '../ItemCard/ItemCard'
import Filter from '../Filter/Filter'
import { ProductsProps } from './Products.props'
import { useEffect, useState } from 'react'

import styles from  './Products.module.scss'

const Products = ({products}:ProductsProps) => {
  const [list,setList]:any = useState([])
  const [selectedColor,setSelectedColor] = useState(null)
  const [selectedPrice,setSelectedPrice] = useState(['100','10000'])
  const [searchInput,setSeacrhInput] = useState('')
  const [colors,setColor] = useState([
    {id:'1',color:'yellow',value:'Желтый',checked:false},
    {id:'2',color:'white',value:'Белый',checked:false},
    {id:'3',color:'green',value:'Зеленый',checked:false},
  ])

  useEffect(() => {
    setList(products)
  },[products])


  const handlerColorsChecked = (id:string) => {
    const colorStateList = colors
    const changeCheckedColor = colorStateList.map((item) => item.id === id ? {...item,checked:!item.checked}:item)
    setColor(changeCheckedColor)
  }


  const handleInputValue = (e:any) => setSeacrhInput(e.target.value)

  // const handleSelectColor = (value:any) => !value ? null : setSelectedColor(value)

  const handleSelectPrice = (value:any) => setSelectedPrice(value)

  const applyFilters = () => {
    let updateList = products

    const colorChecked = colors.filter((item) => item.checked).map((item) => item.color)
    console.log(1)
    if(colorChecked.length){
      updateList = updateList.filter((item) => colorChecked.includes(item.tags.colors))
    }

    // if(selectedColor){
    //   updateList = updateList.filter((item:any) => item.tags.colors === selectedColor)
    // }

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
  },[selectedColor,selectedPrice,searchInput,colors])


  const defaultFilter = () => {
    setList(products)
    setSelectedColor(null)
    setSelectedPrice(['100','10000'])
    setSeacrhInput('')
  }

  return (
    <div className={styles.products}>
        <Container>
          <div className={styles.content}>
            <div>
              <Filter colors={colors} defaultPrice={selectedPrice} searchValue={searchInput} defaultFilter={defaultFilter} setColor={handlerColorsChecked} setInputValue={handleInputValue} setPrice={handleSelectPrice}/>
            </div>
            <div className={styles.items}>
              {list.map((item:any) => <ItemCard key={item._id} imgLink={item.imageId} name={item.nameItem} price={item.cost} width='255' height='335'/>)}
            </div>
          </div>
        </Container>
    </div>
  )
}

export default Products