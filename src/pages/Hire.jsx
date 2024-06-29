import axios from 'axios';
import React, { useState } from 'react'

const Hire = () => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const num = e.target.num.value

    if (text.length === 0 || number.length === 0 || desc.length === 0) {
      alert('Fill the inputs');
      return;
    } if (num.length > 17) {
      alert('Maximum characters of the number field is 13');
      return;
    } if (num.length < 9) {
      alert('Minimum characters of the number field is 9')
      return;
    } else {
      alert('Your informations are sucesfully saved!');
    }

    const token = '6468082632:AAHjNdMTUZX1n6CF6n1D-UShBWi2Msbmc0Y';
    const chat_id = '-4279193401';
    const my_text = `Name: ${text}. Number: ${number}. Description: ${desc} For: Hiring`;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(my_text)}`;

    axios.get(url)
      .then((response) => {
        console.log('Message sent', response.data);
      })
      .catch((error) => {
        console.error('Error sending message', error);
      });

    setText('');
    setNumber('');
    setDesc('');
  };

  return (
    <div className='flex justify-center items-center py-[89.4px] max-sm:py-[57.4px]'>
      <div data-aos="fade-up" className='p-5 rounded-xl bg-[#111928bf] w-[400px] max-sm:w-[350px] '>
        <h1 className='text-2xl font-medium text-white text-center mb-5'>Hire us</h1>
        <form onSubmit={handleSubmit} className='grid gap-7'>
          <input
            type="text"
            id="text"
            value={text}
            placeholder='Your Name Here...'
            onChange={(e) => setText(e.target.value)}
            className='text-white bg-[#1b2640] rounded-md border-2 border-[#44506e] h-10 pl-4 w-[363px] max-sm:w-[300px]'
          />
          <input
            type="tel"
            id="num"
            value={number}
            placeholder='Your Number Here...'
            onChange={(e) => setNumber(e.target.value)}
            className='text-white bg-[#1b2640] rounded-md border-2 border-[#44506e] h-10 pl-4 w-[363px] max-sm:w-[300px]'
          />
          <textarea
            id="message"
            value={desc}
            placeholder='Description Here...'
            onChange={(e) => setDesc(e.target.value)}
            className='text-white bg-[#1b2640] rounded-md border-2 border-[#44506e] pl-4 pt-2 w-[363px] max-sm:w-[300px]'
          />
          <div className='flex justify-center items-center'>
            <button type="submit" id="sign" className='bg-[#04cfad] transition-all px-8 py-1 mb-1 rounded-lg shadow hover:shadow-[#04cfad] text-white'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Hire