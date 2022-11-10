import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import { useAction } from '../../hooks/useAction'
import { useTypesSelector } from '../../hooks/useTypesSelector'

const Profile = () => {
    const {logoutAuth,fetchAuth} = useAction()
    const {auth} = useTypesSelector(state => state.auth)
    const history = useNavigate()

    useEffect(() => {
        if(!auth){
            history('/auth')
        }
    },[auth])

    const handleLogout = () => {
        logoutAuth()
        fetchAuth()
    }
    return (
    <div>
        <Button type='default' onClick={handleLogout}>
            Logout
        </Button>
    </div>
    )
}

export default Profile