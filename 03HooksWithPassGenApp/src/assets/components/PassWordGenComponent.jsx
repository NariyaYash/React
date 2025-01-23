import React, { useCallback, useEffect, useState , useRef} from 'react'

function PassWordGenComponent() {
    const [password, setPassword] = useState('')
    const [length, setLength] = useState(10)
    const [numberCheck, setNumberCheck] = useState(false)
    const [charater, setCharater] = useState(false)
    const passwordRef = useRef(null)
    
    const passwordGen = useCallback(() => {
        let pass = ''
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ"

        for(let i =1 ; i <= length ; i++){
            if(numberCheck){
                str += '1234567890'
            }
            if(charater){
                str += '!@#$%^&*()|'
            }
            let charIndex = Math.floor(Math.random() * str.length +1) 
            pass += str.charAt(charIndex)
        }

        setPassword(pass)
    },[length,numberCheck,charater,setPassword])

    const clipBoardCopay = useCallback(() => {
        passwordRef?.current?.select();
        window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(()=> {
        passwordGen();
    },[length,numberCheck,charater,passwordGen])

    return (
        <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-8 m-8  bg-gray-800 text-orange-500'>
            <h1 className='text-white text-center my-3'>|| Password Genrater ||</h1>
            <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                <input ref={passwordRef} type='text' className="outline-none w-full py-1 px-3" readOnly defaultValue={password} onChange={(event) => setPassword(event.target.value)}/>
                <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={clipBoardCopay}>Copy</button>
            </div>
            <div className='flex text-sm gap-x-2'>
                <div className='flex items-center gap-x-1'>
                    <input type='range' min={6} max={100} className='cursur-pointer' value={length} onChange={(e) => setLength(e.target.value)} />
                    <label>Lenght: {length}</label>
                </div>
                <div className='flex items-center gap-x-1'>
                    <label>Include Number:</label>
                    <input type='checkbox' defaultChecked={numberCheck} onChange={() => {
                        setNumberCheck((per) => !per)
                    }} />

                </div>
                <div className='flex items-center gap-x-1'>
                    <label>Include Charater:</label>
                    <input type='checkbox' defaultChecked={charater} onChange={() => {
                        setCharater((per) => !per)
                    }} />
                </div>
            </div>
        </div>
    )
}

export default PassWordGenComponent