import Select from 'react-select'
import { CreateItemProps } from './CreateItem.props'

import cn from "classnames"
import styles from './CreateItem.module.scss'

const CreateItem = ({color,cost,format,light,name,handleColor,handleCost,handleFormat,handleLight,handleName,createItem}:CreateItemProps) => {

    const imgArray = [
        {imageId: '1',imgSrc: "img/cardItem/1.png"},
        {imageId: '2',imgSrc: "img/cardItem/2.png"},
        {imageId: '3',imgSrc: "img/cardItem/3.png"}
    ]
    const optionsColor = [
        { value: 'yellow', label: 'желтый' },
        { value: 'white', label: 'белый' },
        { value: 'green', label: 'зеленый' }
    ]
    const optionsFormat = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    const optionsLight = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const selectStyles = {
        menu: () => ({
            border:"1px solid #43FFD2"
        }),
        control: (baseStyles:any) => ({
           ...baseStyles,
           border: '1px solid #43FFD2',
           background:'transparent',
        }),
        singleValue: (baseStyles:any) => ({
            ...baseStyles,
            color:"white"
        }),
        valueContainer: (baseStyles:any) => ({
            ...baseStyles,
            color:"red"
        }),
        option: (baseStyles:any) => ({
            padding: '8px 12px',
            color:"white",
            ":hover": {
                backgroundColor:'#7D2253'
            },
        
        })
    }


    return (
        <div className={styles.createItem}>
            <div className={styles.imgBlock}>
                {imgArray.map((item,index) => <img key={item.imageId} id={item.imageId} src={item.imgSrc} alt="imageId" className={styles.img}/>)}
            </div>
            <div className={styles.inputBlock}>
                <input placeholder='Название товара' className={styles.input} value={name} onChange={handleName}/>
                <input placeholder='Цена товара' className={styles.input} value={cost} onChange={handleCost}/>
            </div>
            <div className={styles.typeBlock}>
                <div className={styles.subTitle}>
                    Параметры товара
                </div>
                <div className={styles.selectBlock}>
                    <Select options={optionsColor} styles={selectStyles} onChange={handleColor}/>
                    <Select options={optionsFormat} styles={selectStyles} onChange={handleFormat}/>
                    <Select options={optionsLight} styles={selectStyles} onChange={handleLight}/>
                </div>
            </div>
            <div className={styles.btnBlock}>
                <button className={styles.btn} onClick={createItem}>
                    Создать товар
                </button>
            </div>
        </div>
    )
}

export default CreateItem