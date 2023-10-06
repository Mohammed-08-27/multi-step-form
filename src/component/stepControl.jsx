import { useContext } from "react"
import { FormContext } from "../context/stepContext"

const StepControl = () => {
  const { stepCount, name, phone, email, nextFun, prevFun, thankFun } = useContext(FormContext)
  return (
    <div className='btn-controle' style={stepCount > 3 ? { display: 'none' } : {}}>
      <button className={stepCount === 0 ? 'not-visible' : 'visible'} onClick={prevFun}>
        Go Back
      </button>
      {
        stepCount === 3
          ? <button className='comfirm' type='submit' onClick={thankFun}>Confirm</button>
          : <button className='next' onClick={nextFun} >
            Next Step
          </button>}
    </div>
  )
}
export default StepControl