import { CounterProps } from "./Counter.props"

import styles from './Counter.module.scss'

const Counter = ({setValue,value}:CounterProps) => {

    const handleMinusValue = () => {
        if(parseInt(value) - 1 > 0){
            setValue(parseInt(value) - 1)
        }
    }

    const handlePlusValue = () => {
        setValue(parseInt(value) + 1)
    }

    return (
    <div className={styles.counter}>
        <button onClick={handleMinusValue} className={styles.btn}>
            -
        </button>
        <div className={styles.value}>
            {value}
        </div>
        <button onClick={handlePlusValue} className={styles.btn}>
            +
        </button>
    </div>
    )
}

export default Counter