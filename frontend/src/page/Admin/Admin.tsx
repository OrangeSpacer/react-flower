import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAction } from "../../hooks/useAction"
import { useTypesSelector } from "../../hooks/useTypesSelector"
import { nanoid } from "nanoid"
import Container from "../../components/Container/Container"
import CreateItem from "../../components/CreateItem/CreateItem"
import Button from "../../components/UI/Button/Button"
import Title from "../../components/UI/Title/Titiel"



import styles from './Admin.module.scss'
import ItemCard from "../../components/ItemCard/ItemCard"

const Admin = () => {
  const {logoutAuth,fetchAuth,deleteProductsCatalog,addProductsCatalog,addProductItem} = useAction()
  const history = useNavigate()
  const {auth} = useTypesSelector(state => state.auth)
  const [items,setItems] = useState<{}[]>([])
  const [cost,setCost] = useState('')
  const [name,setName] = useState('')
  const [color,setColor] = useState('')
  const [format,setFormat] = useState('')
  const [light,setLight] = useState('')
  const [imgId,setImgId] = useState('1')

  const handleCost = (e:any) => {
    const value = e.target.value
    if(!/\D+/.test(value)){
      setCost(value)
    }
  }

  const handleName = (e:any) => {
    let value = e.target.value
    if(!/\d+/g.test(value)){
      setName(value)
    }
  }

  const handleColor = (e:any) => {
    const value = e.value
    setColor(value)
  }

  const handleFormat = (e:any) => {
    const value = e.value
    setFormat(value)
  }

  const handleLight = (e:any) => {
    const value = e.value
    setLight(value)
  }


  useEffect(() => {
    if(!auth){
        history('/auth')
    }
  },[auth])

  const handleLogout = () => {
    logoutAuth()
    fetchAuth()
  }

  const handleItemAdd = () => {
    let newItems = [...items]
    newItems.push({
      "imageId": imgId,
      "nameItem":name,
      "tags":{
        colors:color,
        format:format,
        light:light
      },
      "cost":cost,
      "id":nanoid()
    })
    setItems(newItems)
  }

  const deleteItem = (id:string) => {
    let newArrays = [...items]
    newArrays = newArrays.filter((item:any) => item.id!==id)
    setItems(newArrays)
  }

  console.log(items)

  return (
    <div className={styles.admin}>
      <Container>
        <Title title="Админ" titleSide="c" subTitleSide="c" subtitle="панель"/>
        <CreateItem color={color} name={name} cost={cost} format={format} light={light} handleColor={handleColor} handleCost={handleCost} handleFormat={handleFormat} handleLight={handleLight} handleName={handleName} createItem={handleItemAdd}/>
        {items.length > 0 ? 
          <div>
            <div>
              Демонстрация созданного каталога:
            </div>
            <div>
                {items.map((item:any,index) => 
                <div key={item.id} id={item.id}>
                  <div onClick={() => deleteItem(item.id)}>
                    X
                  </div>
                  <ItemCard imgLink={item.imageId} name={item.name} price={item.cost} tags={item.tags} id={item.id} interaction={false}/>
                </div>)}
            </div>
          </div>:
          null
        }
        <button onClick={() => addProductItem(items)}>
          Добавить товар
        </button>
        <Button type="default" onClick={handleLogout}>
          Выйти
        </Button>
      </Container>
    </div>
  )
}

export default Admin