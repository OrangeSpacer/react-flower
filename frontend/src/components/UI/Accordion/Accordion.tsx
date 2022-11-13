import { AccordionProps } from './Accordion.props'
import { useState } from 'react'

import cn from "classnames"
import styles from './Accordion.module.scss'

const Accordion = ({content}:AccordionProps):JSX.Element => {
    const [active,setActive] = useState(-1)

    const handleActiveItem = (index:number) => {
        if(index!==active){
            setActive(index)
        }else{
            setActive(-1)
        }
    }

    return (
    <div className={styles.accordion}>
        {content.map((item,index) => 
        <>
            <div className={styles.block}>
                <div key={index} className={styles.heading} onClick={() => handleActiveItem(index)}>
                    <div className={styles.title}>
                        {item.title}
                    </div>
                    <div>
                        <img src={active === index ? 'img/Accordion/close.svg':'img/Accordion/open.svg'} alt="open" />
                    </div>
                </div>
                <div className={cn(styles.content,{[styles.open]: index===active})}>
                    <div className={styles.container}>
                        <div className={styles.text}>
                            {item.text}
                        </div>
                    </div>
                </div>
            </div>
        </>
        )}
    </div>
    )
}

export default Accordion