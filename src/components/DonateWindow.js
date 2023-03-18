import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'


const DonateWindow = (props) => {
    const navigate = useNavigate()
    // const [donateValue, setDonateValue] = useState('')
    const [donationAmount, setDonationAmount] = useState()
    const [donationMessage, setDonationMessage] = useState('')
    const [cardName, setCardName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cardExpiry, setCardExpiry] = useState('')
    const [cardCVC, setCardCVC] = useState('')
    const [cardZip, setCardZip] = useState('')


    const handleSubmit = (e) => {
        // the e.preventDefault() is to prevent the page from refreshing
        e.preventDefault()
        console.log('submit')
    }

    function cc_format_number(value) {
        const v = value
        // Remove all non-digit characters
            // this first replace is to remove all spaces
            .replace(/\s+/g, "")
            // this second replace is to remove all non-digit characters
            .replace(/\D/g, "")
            // this third replace is to limit the length to 16 characters
            .substr(0, 16);
        const parts = [];

        // Split into 4 character chunks
        for (let i = 0; i < v.length; i += 4) {
            parts.push(v.substr(i, 4));
        }

        return parts.length > 1 ? parts.join(" ") : value;
    }

    function cc_format_expdate(value){
        const v = value
        // Remove all non-digit characters
            .replace(/\s+/g, "")
            .replace(/\D/g, "")
            .substr(0, 4);
        const parts = [];

        // Split into 2 character chunks
        for (let i = 0; i < v.length; i += 2) {
            parts.push(v.substr(i, 2));
        }

        // THis 
        return parts.length > 1 ? parts.join(" / ") : value;
    }


  return (
    
    <div className='bg-gray-100 p-4'>
        <div className='text-2xl font-bold '>
            You are supporting {props.title}
            <div className='text-sm italic font-normal'>You have until {props.plannedEndDate} to support the cause</div>
        </div>
        <div className='flex justify-center text-3xl pt-6'>
            Help make a difference
        </div>
        <form onSubmit={handleSubmit} >
            <div className='flex  p-4 justify-center border-b'>
                <div className='flex flex-col relative'>
                    <label className='flex justify-center'>
                        <div className='absolute top-4 left-11 font-bold text-3xl'>$</div>
                            <input
                                className='border-2 border-gray-300 p-4  rounded-lg text-right text-3xl w-48' 
                                type="number"
                                min="1" 
                                value={donationAmount}
                                onChange={(e) => setDonationAmount(e.target.value)}
                                name='donationAmount' 
                                placeholder='0.00'
                                
                                required
                            /> 
                    </label>
                    <textarea 
                        className='border-2 border-gray-300 p-2 rounded-lg w-64 h-48 mt-2' 
                        type="text" 
                        name='donationMessage' 
                        value={donationMessage}
                        onChange={(e) => setDonationMessage(e.target.value)}
                        placeholder='Leave a message'
                        required 
                        />
                </div>
            </div>
            <div className='text-4xl flex justify-center py-6'>
                Payment Information
            </div>
            <div className='px-16'>
                    <label>
                        <div className='text-xl'>Name on Card</div>
                        <input
                            className='border-2 border-gray-300 p-2 rounded-lg w-full '
                            type="text"
                            name='cardName'
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            placeholder='Full Name'
                            required
                        />
                    </label>

                <div className='flex flex-wrap justify-start w-full  py-4'>
                    <label className='md:w-2/3 '>
                        <div className='text-xl'>Card Number</div>
                        <input
                            className='border-2 border-gray-300 p-2 rounded-lg md:w-full'
                            type="text"
                            name='cardName'
                            value={cc_format_number(cardNumber)}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder='XXXX XXXX XXXX XXXX'
                            required
                        />
                    </label>
                    <label className='md:w-1/3 w-full'>
                    <div className='text-xl'>Security Code</div>
                    <input
                        className='border-2 border-gray-300 p-2 rounded-lg md:w-full'
                        type="number"
                        name='cardCVC'
                        maxLength={3}
                        value={cardCVC}
                        onChange={(e) => {
                            if (e.target.value.length < 4) {
                                setCardCVC(e.target.value)
                            }
                        }}
                        placeholder='CVC'
                        required
                    />
                </label>
                </div>

                <div className='flex flex-wrap   py-4'>
                    <label className='md:w-1/2'>
                        <div className='text-xl'>Expiration Date</div>
                        <input
                            className='border-2 border-gray-300 p-2 rounded-lg'
                            type="text"
                            name='cardExpiry'
                            value={cc_format_expdate(cardExpiry)}
                            onChange={(e) => setCardExpiry(e.target.value)}
                            placeholder='MM/YY'
                            required
                        />
                    </label>
                    <label className='md:w-1/2'>
                        <div className='text-xl'>Zip Code</div>
                        <input
                            className='border-2 border-gray-300 p-2 rounded-lg'
                            type="number"
                            name='cardZip'
                            maxLength="5"
                            value={cardZip}
                            onChange={(e) => {
                                if (e.target.value.length < 6) {
                                    setCardZip(e.target.value)
                                }
                            }}
                            placeholder='Zip Code'
                            required
                        />
                    </label>
                </div>

            </div>




            <div className='flex flex-wrap p-4 justify-between'>
                <button className='bg-gray-500 text-white p-2 rounded-lg' onClick={() => navigate(-1)}>Back</button>
                <button className='p-4 border rounded-lg text-white bg-green-500 hover:bg-green-600 duration-200'>Donate</button>
            </div>
        </form>
    </div>
  )
}

export default DonateWindow