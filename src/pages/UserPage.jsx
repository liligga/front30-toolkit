import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../store/userSlice';
// import products from '../data/products.json';


const UserPage = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPhone, setUserPhone] = useState('')

  const { name, email, phone } = useSelector((state) => state.user.user)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userActions.changeUser({ name: userName, email: userEmail, phone: userPhone }))

    setUserName('')
    setUserEmail('')
    setUserPhone('')
  }


  return (
    <div className='grid grid-cols-5 gap-5 lg:gap-[20px] max-w-[960px] [&>*]:justify-self-center'>
      <span className='text-2xl col-span-full'>Страница пользователя</span>
      <form 
        onSubmit={handleSubmit} 
        className="w-full col-span-full md:max-w-xs xl:max-w-md lg:col-start-1 lg:col-end-3 flex flex-col justify-center gap-3 [&>*]:px-2 [&>*]:py-1 [&>input]:rounded-sm [&>button]:rounded-md [&>button]:bg-slate-300">
        <input 
          type="text" 
          placeholder='Имя пользователя'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input 
          type="email" 
          placeholder='Email'
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input 
          type="text" 
          placeholder='Телефон'
          value={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
        />
        <button type="submit">Сохранить</button>
      </form>
      <div className='w-full col-span-full md:max-lg:max-w-xs lg:col-start-3 lg:col-end-6 flex flex-col gap-3 items-stretch text-md text-left [&>span]:truncate [&>span]:border-2 [&>span]:border-rose-400 [&>span]:border-dashed [&>*]:p-1'>
        <span>Имя: {name}</span>
        <span>Email: {email}</span>
        <span>Телефон: {phone}</span>
      </div>
    </div>
  )
}

export default UserPage 
