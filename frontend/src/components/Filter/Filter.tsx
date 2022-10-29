import { useEffect, useState } from 'react'
import Button from '../UI/Button/Button'
import CheckBox from '../UI/CheckBox/CheckBox'

import styles from './Filter.module.scss'
import { FilterProps } from './Filter.props'

const Filter = ({defaultPrice,setColor,setInputValue,setPrice,defaultFilter,searchValue,colors}:FilterProps) => {
  
  const [minPrice,setMinPrice] = useState(defaultPrice[0])
  const [maxPrice,setMaxPrice] = useState(defaultPrice[1])


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
          <div>
            <div>
              <p>min</p>
              <input value={defaultPrice[0]} onChange={(e:any) => handlePrice(e,setMinPrice)}/>
            </div>
            <div>
              <p>max</p>
              <input value={defaultPrice[1]} onChange={(e:any) => handlePrice(e,setMaxPrice)}/>
            </div>
          </div>
        </div>
        <div className={styles.filterBlock}>
          <p className={styles.label}>
              По цвету
          </p>
          <div>
            {colors.map((item:any) => <div key={item.id} onClick={() => setColor(item.id)}><span>{item.value}</span><CheckBox checked={item.checked}/></div>)}
          </div>
        </div>
        <Button type='cart' onClick={defaultFilter}>
            Сбросить фильтер
        </Button>
    </div>
  )
}

export default Filter