import { useState, useCallback, useEffect, useRef } from 'react'
function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [characterAllowed, setCharacterAllowed] = useState(true);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password.slice(0, 20));
  }, [password]);


  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789" ;
    if(characterAllowed) str += "`~!@#$%^&*()_+{}[]:;|?/><,";
    for(let i = 1; i <= length; i++){
      let num = Math.floor(Math.random() * str.length + 1);
      
      
      pass +=  str.charAt(num);
    }
    setPassword(pass)
  }, [length, numberAllowed, characterAllowed, setPassword])
  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])


  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-stone-700 bg-gray-800'>
        <h1 className='text-white text-center my-3 py-3 font-bold text-lg'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input 
          ref={passwordRef}
          type="text"
          value={password}
          className="abc outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          />
          <button 
          onClick={copyPasswordToClipBoard}
          className='outline-none bg-blue-700 text-white px-3 py-1.5 shrink-0'
          >copy</button>

        </div>

        <div className='flex justify-evenly text-sm gap-x-5 text-white py-2'>
          <div className='flex items-center gap-x-4'>
            <input
             type="range"
             min={6}
             max={100}
             value={length}
             className='cursor-pointer'
             onChange={(e)=>{setLength(e.target.value)}}
             />
             <label >Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            // defaultChecked = {numberAllowed}
            checked = {numberAllowed}
            id='numberInput'
            onChange={()=>{
              setNumberAllowed((prev)=> !prev)
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>


          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked = {characterAllowed}
            id='characterInput'
            onChange={()=>{
              setCharacterAllowed((prev)=> !prev)
            }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default PasswordGenerator;
