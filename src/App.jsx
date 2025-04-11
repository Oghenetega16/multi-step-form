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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    addons: ['online', 'storage', 'profile']
  })

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
  
  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo formData={formData} updateFormData={updateFormData} />
      case 2:
        return <SelectPlan formData={formData} updateFormData={updateFormData} toggle={toggle} handleToggle={handleToggle} />
      case 3:
        return <Addons formData={formData} updateFormData={updateFormData} toggle={toggle} />
      case 4:
        return <FinishingUp formData={formData} />
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
      <StepButton step={step} onNext={nextStep} onBack={goBack} isValid={isValidStep} />
    </div>
  )
}

// What's left to do:
// 1. The form
// 2. The other pages

