import Arcade from '../../assets/images/icon-arcade.svg';
import Advance from '../../assets/images/icon-advanced.svg'
import Pro from '../../assets/images/icon-pro.svg';
import { useContext } from 'react';
import { FormContext } from '../../context/stepContext';

export default function StepTwo() {
  const { activeFun, plan, dataPrice, Checked, selectedPlan } = useContext(FormContext);


  return (
    <div className='form-container'>
      <div className="form-header flex-col">
        <h1>Select your plan</h1>
        <p>
          You have the option of monthly or yearly billing..
        </p>
      </div>
      <ul className='plan-container'>
        <li className={selectedPlan === 'Arcade' ? 'active' : ''} onClick={activeFun}>
          <img src={Arcade} alt="arcade" />
          <div className="text-plan">
            <h2>Arcade</h2>
            <p>${plan === 'Yr' ? +dataPrice[0].arcade * 10 : dataPrice[0].arcade}/{plan}</p>
            <p className={plan === 'Mon' ? 'hidden' : ''}>2 Months Free</p>
          </div>
        </li>

        <li className={selectedPlan === 'Advance' ? 'active' : ''} onClick={activeFun} >
          <img src={Advance} alt="arcade" />
          <div className="text-plan">
            <h2>Advance</h2>
            <p>${plan === 'Yr' ? +dataPrice[1].advance * 10 : dataPrice[1].advance}/{plan}</p>
            <p className={plan === 'Mon' ? 'hidden' : ''}>2 Months Free</p>
          </div>
        </li>

        <li className={selectedPlan === 'Pro' ? 'active' : ''} onClick={activeFun}>
          <img src={Pro} alt="arcade" />
          <div className="text-plan">
            <h2>Pro</h2>
            <p>${plan === 'Yr' ? +dataPrice[2].pro * 10 : dataPrice[2].pro}/{plan}</p>
            <p className={plan === 'Mon' ? 'hidden' : ''}>2 Months Free</p>
          </div>
        </li>

      </ul>
      <div className="plan-controle">
        <span className={plan === 'Mon' ? 'active' : ''}>Monthly</span>
        <label htmlFor="planCheckBox" onClick={Checked}>
          <input type="checkbox" name='checkbock' id='planCheckBox' value={plan === 'Yr' ? 'on' : 'off'} />
          <span></span>
        </label>
        <span className={plan === 'Yr' ? 'active' : ''}>yearlyly</span>
      </div>
    </div>

  )
}