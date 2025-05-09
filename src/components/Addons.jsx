import StepButton from './StepButton'

export default function AddOns({ step, formData, updateFormData, toggle, onNext, onBack }) {
    const handleAddonToggle = (addon) => {
        const updatedAddons = formData.addons.includes(addon)
        ? formData.addons.filter((item) => item !== addon)
        : [...formData.addons, addon];

        updateFormData({ addons: updatedAddons });
    };
    
    return (
        <>
            <div className="select">
                <div className="select-add-ons">
                    <h2>Pick add-ons</h2>
                    <p>Add-ons help enhance your gaming experience.</p>

                    <section>
                        <div
                            className={formData.addons.includes('online') ? 'add active' : 'add'}
                            onClick={() => handleAddonToggle('online')}>
                            <div className='add-ons'>
                                <div className={formData.addons.includes('online') ? 'checkbox active' : 'checkbox'}>
                                    {formData.addons.includes('online') && <img src="./images/icon-checkmark.svg" alt="icon-checkmark" />}
                                </div>
                                <div className='addons-text'>
                                    <h4>Online service</h4>
                                    <span>Access to multiplayer games</span>
                                </div>
                            </div>
                            <span className='price'>{toggle ? '+$1/mo' : '+$10/yr'}</span>
                        </div>

                        <div
                            className={formData.addons.includes('storage') ? 'add active' : 'add'}
                            onClick={() => handleAddonToggle('storage')}>
                            <div className='add-ons'>
                                <div className={formData.addons.includes('storage') ? 'checkbox active' : 'checkbox'}>
                                    {formData.addons.includes('storage') && <img src="./images/icon-checkmark.svg" alt="icon-checkmark" />}
                                </div>
                                <div className='addons-text'>
                                    <h4>Larger storage</h4>
                                    <span>Extra 1TB of cloud save</span>
                                </div>
                            </div>
                            <span className='price'>{toggle ? '+$1/mo' : '+$10/yr'}</span>
                        </div>

                        <div
                            className={formData.addons.includes('profile') ? 'add active' : 'add'}
                            onClick={() => handleAddonToggle('profile')}>
                            <div className='add-ons'>
                                <div className={formData.addons.includes('profile') ? 'checkbox active' : 'checkbox'}>
                                    {formData.addons.includes('profile') && <img src="./images/icon-checkmark.svg" alt="icon-checkmark" />}
                                </div>
                                <div className='addons-text'>
                                    <h4>Customizable profile</h4>
                                    <span>Custom theme on your profile</span>
                                </div>
                            </div>
                            <span className='price'>{toggle ? '+$1/mo' : '+$10/yr'}</span>
                        </div>
                    </section>
                </div>
            </div>
            <StepButton 
                step={step}
                onNext={onNext} 
                onBack={onBack} 
                isValid={() => formData.addons.length > 0}
            />
        </>
    )
}