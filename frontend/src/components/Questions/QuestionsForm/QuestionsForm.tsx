import Button from "../../UI/Button/Button";
import InputMask from "react-input-mask";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

import cn from 'classnames'
import styles from './QuestionsForm.module.scss'


interface IFormInputs{
    Name:string,
    Phone:number,
    Message: string
}


const QuestionsForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<IFormInputs>()
    const [phone,setPhone] = useState('')
    const [name,setName] = useState('')
    const [comment,setComment] = useState('')
    const [send,setSend] = useState(true)

    const handlePhone = (e:any) => {
        let phoneValue = e.target.value
        setPhone(phoneValue)
    }

    const handleName = (e:any) => {
        let nameValue = e.target.value
        setName(nameValue)
    }


    const handleComment = (e:any) => {
        let comment = e.target.value
        setComment(comment)
    }

    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        if(send === true){
            console.log(data)
        }else{
            console.log(checkNumber())
        }
    }

    const checkForm = () => {
        if(checkNumber() === false){
            setSend(false)
        }else{
            setSend(true)
            setPhone('')
            setName('')
            setComment('')
        }
    }

    const checkNumber = () => {
        const checkValue = []
        phone.split('').forEach(item => {
            if(item.match(/[0-9]/g)){
                checkValue.push(item)
            }
        })
        console.log(checkValue.length)
        return checkValue.length >= 11
    }
    
    return (
    <div className={styles.questionsForm}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.content}>
                <p className={styles.error}>{errors.Name?.message}</p>
                <input value={name} {...register("Name",{required:"Введите ваше Имя",pattern:{value:/^[a-zA-Zа-яА-я ]+$/gim,message:'Введите корректное имя'},onChange:handleName})} placeholder="Имя" className={styles.input}/>
            </div>
            <div className={styles.content}>
                {send ? null:<p className={styles.error}>Введите коректный телефон</p>}
                <InputMask
                    className={styles.input}
                    mask={"+9 (999) 999-99-99"}
                    alwaysShowMask={false}
                    type={'phone'}
                    value={phone}
                    placeholder="+7 (977) 777-77-77"
                    {...register("Phone", { required: "Введите корректный телефон",onChange:handlePhone})}
                />
            </div>
            <textarea value={comment} {...register("Message",{onChange:handleComment})} className={cn(styles.input,styles.textarea)} placeholder="Ваш коммпентарий"/>
            <Button type="default" onClick={checkForm}>
                Отправить
            </Button>
        </form>
    </div>
    )
}

export default QuestionsForm