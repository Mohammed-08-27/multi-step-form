import { useContext } from "react"
import { FormContext } from "../../context/stepContext"

export default function StepFour() {
  const { plan, selectedPlan, planPrice, selectedAddons, total, setStepCount } = useContext(FormContext)
  return (
    <div className='form-container'>
      <div className="form-header flex-col">
        <h1>Finished up</h1>
        <p>
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="summary-container">
        <div className="selected-plan">
          <p className="plan-name main-text">{`${selectedPlan} ${plan === 'Mon' ? '(Monthly)' : '(Yearly)'}`} <br /><button className="accent-text" style={{ background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => setStepCount(1)}>Change</button></p>
          <p className="plan-price main-text">{plan === 'Mon' ? `$${planPrice}/mon` : `$${planPrice}/yr`}</p>
        </div>
        <hr />
        <ul className="addons">
          {selectedAddons.map((item, index) => {
            return (<li className="flex-row justify-between" key={index} style={{ paddingTop: '1rem' }}>
              <p className="accent-text" >{item}</p>
              {
                plan === 'Mon' ?
                  <p className="main-text">{item.startsWith('O') ? `$1 ${plan}` : `$2 ${plan}`}</p>
                  : <p className="main-text">{item.startsWith('O') ? `$10 ${plan}` : `$20 ${plan}`}</p>
              }
            </li>)
          })}
        </ul>

      </div>
      <div className="total-container flex-row justify-between">
        <span className="accent-text">Total ( per {plan === 'Mon' ? 'month' : 'year'} )</span>
        <span className="main-text" style={{ color: '#473dff' }}>${total}/{plan === 'Mon' ? 'mon' : 'yr'}</span>
      </div>
    </div>
  )
}