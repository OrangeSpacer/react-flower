import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAction } from "../../hooks/useAction"
import { useTypesSelector } from "../../hooks/useTypesSelector"
import Container from "../../components/Container/Container"
import CreateItem from "../../components/CreateItem/CreateItem"
import Button from "../../components/UI/Button/Button"
import Title from "../../components/UI/Title/Titiel"



import styles from './Admin.module.scss'

const Admin = () => {
  const {logoutAuth,fetchAuth,deleteProductsCatalog,addProductsCatalog} = useAction()
  const {auth} = useTypesSelector(state => state.auth)
  const history = useNavigate()
  const [items,setItems] = useState<{}[]>([])


  useEffect(() => {
    if(!auth){
        history('/auth')
    }
  },[auth])

  const handleLogout = () => {
    logoutAuth()
    fetchAuth()
  }

  const handleItemAdd = (imageId:string,nameItem:string,tags:{colors:string,format:string,light:string},cost:string) => {
    let newItems = [...items]
    newItems.push({
      "imageId": imageId,
      "nameItem":nameItem,
      "tags":tags,
      "cost":cost
    })
    setItems(newItems)
  }

  return (
    <div className={styles.admin}>
      <Container>
        <Title title="Админ" titleSide="c" subTitleSide="c" subtitle="панель"/>
        <CreateItem/>
        {items.length > 0 ? 
          <div>
            <div>
              Демонстрация созданного каталога:
            </div>
            <div>
  
            </div>
          </div>:
          null
        }
        <Button type="default" onClick={handleLogout}>
          Выйти
        </Button>
      </Container>
    </div>
  )
}

export default Admin