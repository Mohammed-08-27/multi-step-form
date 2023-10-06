import { useContext } from "react";
import { FormContext } from "../../context/stepContext";

export default function StepThree() {
  const { plan, dataPrice, activeToggle, selectedAddons } = useContext(FormContext)

  return (
    <div className='form-container'>
      <div className="form-header flex-col">
        <h1>Pick Add-ons</h1>
        <p>
          Add-ons help enhance your gaming experience.</p>
      </div>
      <ul className='addon-container'>
        <li className={selectedAddons.includes('Online service') ? 'active' : ''} onClick={activeToggle}>
          <label htmlFor="addons-online" className="checkbox">
            <input type="checkbox" id="addons-online" />
            <span className="mark"></span>
          </label>
          <div className="text-plan flex-col">
            <h2 className="main-text">Online service</h2>
            <p className="accent-text">Acces to multiplayer games</p>
          </div>
          <p className="special-text">${plan === 'Mon' ? +dataPrice[3].online : +dataPrice[3].online * 10}/{plan}</p>
        </li>
        <li className={selectedAddons.includes('Large storage') ? 'active' : ''} onClick={activeToggle} >
          <label htmlFor="addons-storage" className="checkbox">
            <input type="checkbox" id="addons-storage" />
            <span className="mark"></span>
          </label>
          <div className="text-plan flex-col">
            <h2 className="main-text">Large storage</h2>
            <p className="accent-text">Extra 1TB of cloud saved</p>
          </div>
          <p className="special-text">${plan === 'Mon' ? dataPrice[4].storage : +dataPrice[4].storage * 10}/{plan}</p>
        </li>
        <li className={selectedAddons.includes('Customizable profile') ? 'active' : ''} onClick={activeToggle}>
          <label htmlFor="addons-profile" className="checkbox">
            <input type="checkbox" id="addons-profile" />
            <span className="mark"></span>
          </label>
          <div className="text-plan flex-col">
            <h2 className="main-text">Customizable profile</h2>
            <p className="accent-text">Custom theme on your profile</p>
          </div>
          <p className="special-text">${plan === 'Mon' ? dataPrice[5].profile : +dataPrice[5].profile * 10}/{plan}</p>
        </li>
      </ul>
    </div>
  )
}