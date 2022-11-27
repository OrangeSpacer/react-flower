import Select from 'react-select'
import { CreateItemProps } from './CreateItem.props'
import {imgArray,optionsColor,optionsFormat,optionsLight} from './CreateItemValue'

import cn from "classnames"
import styles from './CreateItem.module.scss'

const CreateItem = ({imageId,cost,name,handleColor,handleCost,handleFormat,handleLight,handleName,createItem,handleImage}:CreateItemProps) => {


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
                {imgArray.map((item,index) => <img key={item.imageId} id={item.imageId} src={item.imgSrc} alt="imageId" className={cn(styles.img,{[styles.active]: String(index+1)==imageId})} onClick={() => handleImage(index+1)}/>)}
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
                    <Select options={optionsColor} styles={selectStyles} onChange={handleColor} placeholder="Цвет"/>
                    <Select options={optionsFormat} styles={selectStyles} onChange={handleFormat} placeholder="Формат"/>
                    <Select options={optionsLight} styles={selectStyles} onChange={handleLight} placeholder="Свет"/>
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