'use client'
import React, { useState } from 'react';
const Singup = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const handleNameChange = (e) => setName(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubmit = async() => {
    try {
      const res=await axios.post(`api/signup`,{
        name,age,email,phone,password
      })
      const msg=res.data.msg;
      console.log(res);
      setMessage(msg)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='border-blue-700 rounded-lg text-black w-[350px] border h-[500px] flex justify-around items-center flex-col'>
      <input
        className='h-10 w-[250px] p-3 rounded'
        type="text"
        placeholder='Name'
        value={name}
        onChange={handleNameChange}
      />
      <input
        className='h-10 w-[250px] p-3 rounded'
        type="text"
        placeholder='Age'
        value={age}
        onChange={handleAgeChange}
      />
      <input
        className='h-10 w-[250px] p-3 rounded'
        type="text"
        placeholder='Email'
        value={email}
        onChange={handleEmailChange}
      />
      <input
        className='h-10 w-[250px] p-3 rounded'
        type="text"
        placeholder='Phone'
        value={phone}
        onChange={handlePhoneChange}
      />
      <input
        className='h-10 w-[250px] p-3 rounded'
        type="text"
        placeholder='Password'
        value={password}
        onChange={handlePasswordChange}
      />
      <button className='h-10 w-[250px] rounded bg-blue-700' onClick={handleSubmit}>Sign up</button>
      <p className='text-white'>{message}</p>
    </div>
  );
};
export default Singup;