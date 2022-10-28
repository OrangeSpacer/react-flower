import Container from '../Container/Container'
import ItemCard from '../ItemCard/ItemCard'
import { ProductsProps } from './Products.props'

import styles from  './Products.module.scss'
import { useEffect, useState } from 'react'
import Button from '../UI/Button/Button'

const Products = ({products}:ProductsProps) => {
  const [items,setItems]:any = useState([])
  const [itemName,setItemName] = useState('')
  const [price,setPrice] = useState(Infinity)

  useEffect(() => {
    setItems(products)
  },[products])

  const filterName = (value:any) => {
    const newArray = products.filter((item:any) => item.nameItem.toLowerCase().includes(value.toLowerCase()))
    setItems(newArray)
  }

  const filterPrice = (value:any) => {
  }


  const nameHandler = (e:any) => {
    const name = e.target.value
    setItemName(name)
    filterName(name)
  }

  const setFilter = () => {
    filterName('')
    setItemName('')
    setPrice(Infinity)
  }

  return (
    <div className={styles.products}>
        <Container>
          <div className={styles.content}>
            <div className={styles.filter}>
              <div>
                <p className={styles.label}>
                  Посик по названию
                </p>
                <input value={itemName} onChange={nameHandler} className={styles.input}/>
              </div>
              <div>
              <p className={styles.label}>
                  Цена
                </p>
                <Button type='cart' onClick={filterPrice}>
                  Поставить цену
                </Button>
              </div>
              <Button type='cart' onClick={setFilter}>
                Сбросить фильтер
              </Button>
            </div>
            <div className={styles.items}>
              {items.map((item:any) => <ItemCard key={item._id} imgLink={item.imageId} name={item.nameItem} price={item.cost} width='255' height='335'/>)}
            </div>
          </div>
        </Container>
    </div>
  )
}

export default Products