import PersonalInfo from './components/PersonalInfo'
import SelectPlan from './components/SelectPlan'
import Addons from './components/Addons'
import StepCount from './components/StepCount'
import StepButton from './components/StepButton'
import FinishingUp from './components/FinishingUp'
import Summary from './components/Summary'
import { useState } from 'react'

export default function App() {
  const [step, setStep] = useState(1)
  const [toggle, setToggle] = useState(true)

  const nextStep = () => setStep(prev => prev + 1)
  const goBack = () => setStep(prev => prev - 1)

  function handleToggle() {
      setToggle(!toggle)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo onNext={nextStep} />
      case 2:
        return <SelectPlan toggle={toggle} handleToggle={handleToggle} />
      case 3:
        return <Addons toggle={toggle} />
      case 4:
        return <FinishingUp />
      default:
        return (
            <Summary />
        )
    }
  }

  return (
    <div className="container">
      <div className='main'>
        <StepCount step={step} />
        {renderStep()}
      </div>
      <StepButton step={step} onNext={nextStep} onBack={goBack} />
    </div>
  )
}

// What's left to do:
// 1. The form
// 2. The other pages

