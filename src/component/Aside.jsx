import { useContext } from "react"
import { FormContext } from "../context/stepContext"

export default function Aside() {
  const { stepCount } = useContext(FormContext)
  return (
    <ul className="aside-container">
      <li className={stepCount === 0 ? 'active' : ''}>
        <div className="circle">1</div>
        <div className="circle-text">
          <p>step 1</p>
          <p>Your Info</p>
        </div>
      </li >
      <li className={stepCount === 1 ? 'active' : ""}>
        <div className="circle">2</div>
        <div className="circle-text">
          <p>step 2</p>
          <p>YOur plan</p>
        </div>
      </li>
      <li className={stepCount === 2 ? 'active' : ''}>
        <div className="circle">3</div>
        <div className="circle-text">
          <p>step 3</p>
          <p>add-ons</p>
        </div>
      </li>
      <li className={stepCount >= 3 ? 'active' : ''}>
        <div className="circle">4</div>
        <div className="circle-text">
          <p>Step 4</p>
          <p>Summary</p>
        </div>
      </li>

    </ul>
  )
}