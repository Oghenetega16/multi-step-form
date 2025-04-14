import StepButton from './StepButton'

export default function FinishingUp({ step, formData, toggle, onNext, onBack, goToStep }) {

    const { plan, addons } = formData;

    const planPrices = {
        arcade: toggle ? 9 : 90,
        advanced: toggle ? 12 : 120,
        pro: toggle ? 15 : 150
    }

    const addonPrices = {
        online: toggle ? 1 : 10,
        storage: toggle ? 2 : 20,
        profile: toggle ? 2 : 20
    }

    const planDisplay = plan.charAt(0).toUpperCase() + plan.slice(1)
    const planRate = toggle ? 'mo' : 'yr'

    const total = planPrices[plan] + addons.reduce((sum, addon) => sum + addonPrices[addon], 0);


    return (
        <>
            <div className="finish">
                <div className="finish-up">
                    <h2>Finishing up</h2>
                    <p>Double-check everythig looks OK before confirming.</p>

                    <section className='finish-info'>
                        <div className='finish-items'>
                            <div className='plan-items'>
                                <div className='plan-item'>
                                    <h4>{`${planDisplay} (${toggle ? 'Monthly' : 'Yearly'})`}</h4>
                                    <button onClick={() => goToStep(2)}>Change</button>
                                </div>
                                <span>{`$${planPrices[plan]}/${planRate}`}</span>
                            </div>
                            
                            <div className='addons-items'>
                                {addons.map((addon) => (
                                    <div key={addon} className='addons-item'>
                                        <span className='addons-desc'>
                                            {addon === 'online' && 'Online service'}
                                            {addon === 'storage' && 'Larger storage'}
                                            {addon === 'profile' && 'Customizable profile'}
                                        </span>
                                        <span className='addons-value'>
                                            {`+$${addonPrices[addon]}/${planRate}`}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className='total'>
                        <p>{`Total (per ${toggle ? 'month' : 'year'})`}</p>
                        <h4 className='total-value'>{`$${total}/${planRate}`}</h4>
                    </section>
                </div>
            </div>
            <StepButton 
                step={step}
                onNext={onNext} 
                onBack={onBack} 
                isValid={() => !!formData.plan}
                nextLabel='Confirm'
                className='confirm'
            />
        </>
    )
}