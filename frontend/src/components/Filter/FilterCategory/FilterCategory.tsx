import CheckBox from "../../UI/CheckBox/CheckBox"

import styles from './FilterCategory.module.scss'
import { FilterCategoryProps } from "./FilterCategory.props"

const FilterCategory = ({category,setCategory,title}:FilterCategoryProps) => {
  return (
    <>
        <p className={styles.label}>
            {title}
        </p>
        <div>
        {category.map((item:any) => 
            <div key={item.id} onClick={() => setCategory(item.id)} className={styles.checkItem}>
            <CheckBox checked={item.checked}/>
            <span className={styles.checkValue}>
                {item.value}
            </span>
            </div>
        )}
        </div>
    </>
  )
}

export default FilterCategory