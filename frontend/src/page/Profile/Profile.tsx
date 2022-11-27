import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../../components/Container/Container'
import ItemCard from '../../components/ItemCard/ItemCard'
import Button from '../../components/UI/Button/Button'
import Loader from '../../components/UI/Loader/Loader'
import { useAction } from '../../hooks/useAction'
import { useTypesSelector } from '../../hooks/useTypesSelector'

import styles from './Profile.module.scss'

const Profile = () => {
    const {logoutAuth,fetchAuth,fetchOrder} = useAction()
    const {auth} = useTypesSelector(state => state.auth)
    const {loading,orders} = useTypesSelector(state => state.order)
    const history = useNavigate()

    useEffect(() => {
        if(!auth){
            history('/auth')
        }
    },[auth])

    useEffect(() => {
        fetchOrder()
    },[])


    const handleLogout = () => {
        logoutAuth()
        fetchAuth()
    }

    if(loading){
        return <Loader/>
    }

    return (
        <div className={styles.profile}>
            <Container>
                <div className={styles.orders}>
                    <div className={styles.history}>
                        История заказов
                    </div>
                    <div className={styles.costAll}>
                        Общая стоимость заказов: {orders[0]?.costAll} 
                    </div>
                    <div className={styles.orderMain}>
                        {orders[0]?.ordersLog.map((item:any) => 
                            <div key={item._id} className={styles.orderMainBlock}>
                                <div className={styles.orderInfo}>
                                    <div className={styles.text}>
                                        Номер заказа: {item.orderId}
                                    </div>
                                    <div className={styles.text}>
                                        Цена заказа: {item.endCost}
                                    </div>
                                </div>
                                <div className={styles.orderBlock}>
                                    {item.items.map((element:any) => <ItemCard key={element._id} id={element._id} imgLink={element.imageId} name={element.title} price={element.cost} interaction={false} height='350' width='250'/>)}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.logoutBlock}>
                    <Button type='default' onClick={handleLogout}>
                        Выйти
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default Profile