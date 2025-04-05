import PersonalInfo from './components/PersonalInfo'
import SelectPlan from './components/SelectPlan'
import Addons from './components/Addons'
import StepCount from './components/StepCount'
import StepButton from './components/StepButton'
import Summary from './components/Summary'
import { useState } from 'react'

export default function App() {
  const [step, setStep] = useState(2)

  const nextStep = () => setStep(prev => prev + 1)
  const goBack = () => setStep(prev => prev - 1)

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo onNext={nextStep} />
      case 2:
        return <SelectPlan />
      case 3:
        return <Addons />
      default:
        return <Summary />
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

