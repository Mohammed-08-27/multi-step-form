import { createContext, useState } from "react";

export const FormContext = createContext();
const FormContextProvider = ({ children }) => {
  const dataPrice = [{ arcade: 9 }, { advance: 12 }, { pro: 15 }, { online: 1 }, { storage: 2 }, { profile: 2 }]
  const [inputError, setInputError] = useState(false)
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState('Mon');
  const [selectedPlan, setSelectedPlan] = useState('Arcade');
  const [planPrice, setPlanPrice] = useState(9)
  const [stepCount, setStepCount] = useState(0);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [total, setTotal] = useState('');
  const [addonPrice, setAddonPrice] = useState(0)
  // function
  const nextFun = () => {
    if (stepCount === 2) {
      if (selectedPlan === '') {
        setSelectedPlan('Arcade')
      }
      setTotal(Number(planPrice) + addonPrice)
    } if (isNaN(name) && email && !isNaN(phone)) {
      setStepCount(stepCount + 1)
      setInputError(false)
    } else {
      setInputError(true)
    }
  };
  const prevFun = () => {
    if (stepCount < 2) {
      setTotal('')
    }
    setStepCount(stepCount - 1)
  };


  const activeFun = (e) => {
    const el = e.currentTarget;
    const elTitle = el.children[1].children[0].textContent;
    const elPrice = el.children[1].children[1].textContent;
    const numPrice = elPrice.split('').filter(item => !isNaN(item)).join('');
    const activePlan = document.querySelector('.plan-container .active');
    activePlan.classList.remove('active')
    el.classList.add('active');
    setSelectedPlan(elTitle);
    setPlanPrice(numPrice);
    setTotal(numPrice)
  }
  const thankFun = () => {
    setStepCount(4)
  }

  const activeToggle = (e) => {
    const el = e.currentTarget;
    const addons = el.children[1].children[0].textContent;
    const addonNum = el.children[2].textContent.split('').filter(item => !isNaN(item)).join('');

    if (!el.classList.contains('active')) {
      el.classList.add('active');
      setSelectedAddons(selectedAddons.concat(addons))
      setAddonPrice(addonPrice + Number(addonNum))
      console.log(addonPrice)
    } else {
      el.classList.remove('active');
      let updateAddon = selectedAddons.filter(item => item !== addons)
      setSelectedAddons(updateAddon)
      setAddonPrice(addonPrice - Number(addonNum))
      console.log(addonPrice)
    }
  }

  function Checked(e) {
    e.preventDefault();
    if (plan === 'Mon') {
      return setPlan('Yr')
    } else {
      return setPlan('Mon');
    }
  }

  return (
    <FormContext.Provider value={{ name, setName, stepCount, nextFun, prevFun, phone, setPhone, email, setEmail, thankFun, activeFun, plan, setPlan, dataPrice, activeToggle, selectedPlan, planPrice, selectedAddons, Checked, total, setStepCount, inputError }}>
      {children}
    </FormContext.Provider>
  )
}
export default FormContextProvider;
