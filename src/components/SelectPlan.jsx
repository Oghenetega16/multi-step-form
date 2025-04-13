import StepButton from './StepButton'

export default function SelectPlan({ step, formData, updateFormData, toggle, handleToggle, onNext, onBack }) {
    
    const handlePlanSelect = (plan) => {
        updateFormData({ plan })
    }

    return (
        <>
            <div className="select">
                <div className="select-plan">
                    <h2>Select your plan</h2>
                    <p>You have the option of monthly or yearly billing.</p>

                    <section className='plans'>
                        <div className={formData.plan === 'arcade' ? 'plan active' : 'plan'} onClick={() => handlePlanSelect('arcade')}>
                            <div className='img'>
                                <img src="./src/assets/images/icon-arcade.svg" alt="icon-arcade" />
                            </div>
                            <div className='plan-text'>
                                <h4>Arcade</h4>
                                {toggle ? <span className='month-plan'>$9/mo</span> : <span className='year-plan'>$90/yr</span>}
                                {toggle ? '' : <span className='bonus'>2 months free</span>}
                            </div>
                        </div>

                        <div className={formData.plan === 'advanced' ? 'plan active' : 'plan'} onClick={() => handlePlanSelect('advanced')}>
                            <div className='img'>
                                <img src="./src/assets/images/icon-advanced.svg" alt="icon-advanced" />
                            </div>
                            <div className='plan-text'>
                                <h4>Advanced</h4>
                                {toggle ? <span className='month-plan'>$12/mo</span> : <span className='year-plan'>$120/yr</span>}
                                {toggle ? '' : <span className='bonus'>2 months free</span>}
                            </div>
                        </div>

                        <div className={formData.plan === 'pro' ? 'plan active' : 'plan'} onClick={() => handlePlanSelect('pro')}>
                            <div className='img'>
                                <img src="./src/assets/images/icon-pro.svg" alt="icon-pro" />
                            </div>
                            <div className='plan-text'>
                                <h4>Pro</h4>
                                {toggle ? <span className='month-plan'>$15/mo</span> : <span className='year-plan'>$150/yr</span>}
                                {toggle ? '' : <span className='bonus'>2 months free</span>}
                            </div>
                        </div>
                    </section>

                    <section className='toggle'>
                        <p className={toggle ? 'active' : ''}>Monthly</p>
                        <i class={toggle ? "fa-solid fa-toggle-off" : "fa-solid fa-toggle-on"} onClick={handleToggle}></i>
                        <p className={toggle ? '' : 'active'}>Yearly</p>
                    </section>
                </div>
            </div>
            <StepButton 
                step={step}
                onNext={onNext} 
                onBack={onBack} 
                isValid={() => !!formData.plan}
            />
        </>
    )
}