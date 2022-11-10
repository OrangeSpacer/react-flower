import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Container from '../../components/Container/Container'
import Button from '../../components/UI/Button/Button'
import Title from '../../components/UI/Title/Titiel'
import { useAction } from '../../hooks/useAction'
import { useTypesSelector } from '../../hooks/useTypesSelector'

import styles from './Auth.module.scss'

interface IFormInputs{
    Email:string,
    Password:number,
}

const Auth = () => {
    const history = useNavigate()
    const {loginAuth,registerAuth,fetchAuth} = useAction()
    const {error,auth} = useTypesSelector(state => state.auth)
    const {register, handleSubmit, formState: {errors}} = useForm<IFormInputs>()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    useEffect(() => {
        if(auth){
            history('/profile')
        }
    },[auth])

    const handleRegister = () => {
        registerAuth(email,password)
        fetchAuth()
    }

    const handleLogin = () => {
        loginAuth(email,password)
        fetchAuth()
    }

    const handleEmail = (e:any) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e:any) => {
        setPassword(e.target.value)
    }

    const onSubmit = () => {
    }
    
    return (
        <div className={styles.auth}>
            <Container>
                <div className={styles.title}>
                    <Title title='Регистрация/Вход' titleSide='l'/>
                </div>
                {error ? <div>{error}</div> : null}
                <div className={styles.content}>
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.inputBlock}>
                            <p className={styles.error}>{errors.Email?.message}</p>
                            <input className={styles.input} value={email} {...register("Email",{required:"Введите ваш Email",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:'Введите корректное имя'},onChange:handleEmail})} placeholder='Ваш Email'/>
                        </div>
                        <div className={styles.inputBlock}>
                            <p className={styles.error}>{errors.Password?.message}</p>
                            <input className={styles.input} value={password} {...register("Password",{required:"Введите ваш Пароль",onChange:handlePassword})} placeholder='Ваш пароль'/>
                        </div>
                        <div className={styles.buttonsBlock}>
                            <Button type='default' onClick={handleLogin}>
                                Войти
                            </Button>
                            <Button type='default' onClick={handleRegister}>
                                Зарегистрироваться
                            </Button>
                        </div>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Auth