import React,{useState} from 'react'

const Counter=()=>{

    const [count,setCount]=useState(0)
    const [step,setStep]=useState(1)

    const handleReset=()=>{
        setCount(0)
        setStep(1)
    }
    const date=new Date()
    date.setDate(date.getDate()+count)

    return(
        <div>
            <div>
                <input
                    type='range'
                    min="0"
                    max="10"
                    value={step}
                    onChange={(e)=>setStep(Number(e.target.value))}
                />
                <span>Step: {step}</span>
            </div>
            <div>
                <button onClick={()=>setCount((c)=>c-step)}>-</button>
                <span>Count : {count}</span>
                <button onClick={()=>setCount((c)=>c+step)}>+</button>
            </div>
            <div>
                <p>
                    {
                        count ===0
                        ? "Today is"
                        : count > 0
                        ? `${count} days from today is`
                        : `${Math.abs(count)} days ago was `
                    }
                </p>
                <span>{date.toDateString()}</span>
            </div>
            {
                count !== 0 || step !== 1 ? (
                    <div>
                        <button onClick={handleReset}>Reset</button>
                    </div>
                ):null
            }
        </div>
    )


}
export default Counter;
