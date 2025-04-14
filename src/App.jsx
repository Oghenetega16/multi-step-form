import PersonalInfo from './components/PersonalInfo'
import SelectPlan from './components/SelectPlan'
import Addons from './components/Addons'
import StepCount from './components/StepCount'
import FinishingUp from './components/FinishingUp'
import Summary from './components/Summary'
import { useState } from 'react'
import StepButton from './components/StepButton'

export default function App() {
  const [step, setStep] = useState(1)
  const [toggle, setToggle] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'arcade',
    addons: ['online', 'storage']
  })
  const [isConfirmed, setIsConfirmed] = useState(false)

  const nextStep = () => setStep(prev => prev + 1)
  const goBack = () => setStep(prev => prev - 1)
  const handleToggle = () => setToggle(!toggle)

  const updateFormData = (newData) => setFormData((prev) => ({ ...prev, ...newData }))

  const isValidStep = () => {
    switch (step) {
      case 1:
        return formData.name && formData.email && formData.phone;
      case 2:
        return formData.plan;
      case 3:
        return formData.addons.length > 0;
      default:
        return true;
    }
  }

  const goToStep = (stepNumber) => {
    setStep(stepNumber)
  }
  
  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo formData={formData} updateFormData={updateFormData} isValid={isValidStep} step={step} onNext={nextStep} onBack={goBack} />
      case 2:
        return <SelectPlan step={step} isValid={isValidStep} formData={formData} updateFormData={updateFormData} toggle={toggle} handleToggle={handleToggle} onNext={nextStep} onBack={goBack} />
      case 3:
        return <Addons step={step} isValid={isValidStep} formData={formData} updateFormData={updateFormData} toggle={toggle} onNext={nextStep} onBack={goBack} />
      case 4:
        return isConfirmed ? (<Summary />) : (<FinishingUp step={step} formData={formData} toggle={toggle} onNext={() => setIsConfirmed(true)} onBack={goBack} goToStep={goToStep}/>)
    }
  }

  return (
    <div className="container">
      <div className='main'>
        <StepCount step={step} />
        {renderStep()}
      </div>
    </div>
  )
}


