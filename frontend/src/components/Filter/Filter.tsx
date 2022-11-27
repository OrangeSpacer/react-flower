import { useEffect, useState } from 'react'
import { FilterProps } from './Filter.props'
import Button from '../UI/Button/Button'

import styles from './Filter.module.scss'
import FilterCategory from './FilterCategory/FilterCategory'

const Filter = ({light,setLight,format,setFormat,defaultPrice,setColor,setInputValue,setPrice,defaultFilter,searchValue,colors}:FilterProps) => {
  
  const [minPrice,setMinPrice] = useState(defaultPrice[0])
  const [maxPrice,setMaxPrice] = useState(defaultPrice[1])

  const category = [
    {title:"По цвету",arrayValue:colors,setValue:setColor},
    {title:"По формату",arrayValue:format,setValue:setFormat},
    {title:"По свету",arrayValue:light,setValue:setLight}
  ]



  const handlePrice = (e:any,setNewValue:any) => {
    const newValue = e.target.value
    if(newValue.match(/^\d+$/)){
      setNewValue(newValue)
      setPrice([minPrice,maxPrice])
    }
    if(newValue === ''){
      setNewValue('')
    }
  }


  useEffect(() => {
    setPrice([minPrice,maxPrice])
  },[minPrice,maxPrice])


  return (
    <div className={styles.filter}>
        <div className={styles.filterBlock}>
          <p className={styles.label}>
              Посик по названию
          </p>
          <input className={styles.input} value={searchValue} onChange={setInputValue}/>
        </div>
        <div className={styles.filterBlock}>
          <p className={styles.label}>
              Цена
          </p>
          <div className={styles.category}>
            <div>
              <p className={styles.miniLabel}>min</p>
              <input value={defaultPrice[0]} onChange={(e:any) => handlePrice(e,setMinPrice)} className={styles.input}/>
            </div>
            <div>
              <p className={styles.miniLabel}>max</p>
              <input value={defaultPrice[1]} onChange={(e:any) => handlePrice(e,setMaxPrice)} className={styles.input}/>
            </div>
          </div>
        </div>
        {category.map((item,index) => 
          <div className={styles.filterBlock} key={index}>
            <FilterCategory title={item.title} category={item.arrayValue} setCategory={item.setValue}/>
          </div>
        )}
        <Button type='cart' onClick={defaultFilter}>
            Сбросить фильтер
        </Button>
    </div>
  )
}

export default Filter