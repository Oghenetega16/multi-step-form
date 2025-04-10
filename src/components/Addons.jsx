import { useState } from 'react'
import StepButton from './StepButton'

export default function AddOns({ toggle }) {
    const [selectedAddons, setSelectedAddons] = useState({
        onlineService: true,
        largerStorage: true,
        customProfile: false
    })

    function toggleAddon(key) {
        setSelectedAddons((prev) => ({
            ...prev,
            [key] : !prev[key]
        }))
    }
    
    return (
        <>
            <div className="select">
                <div className="select-add-ons">
                    <h2>Pick add-ons</h2>
                    <p>Add-ons help enhance your gaming experience.</p>

                    <section>
                        <div
                            className={selectedAddons.onlineService ? 'add active' : 'add'}
                            onClick={() => toggleAddon('onlineService')}>
                            <div className='add-ons'>
                                <div className={selectedAddons.onlineService ? 'checkbox active' : 'checkbox'}>
                                    {selectedAddons.onlineService && <img src="./src/assets/images/icon-checkmark.svg" alt="icon-checkmark" />}
                                </div>
                                <div className='addons-text'>
                                    <h4>Online service</h4>
                                    <span>Access to multiplayer games</span>
                                </div>
                            </div>
                            {toggle ? <span className='price'>+$1/mo</span> : <span className='price'>+$10/yr</span>}
                        </div>

                        <div
                            className={selectedAddons.largerStorage ? 'add active' : 'add'}
                            onClick={() => toggleAddon('largerStorage')}>
                            <div className='add-ons'>
                                <div className={selectedAddons.largerStorage ? 'checkbox active' : 'checkbox'}>
                                    {selectedAddons.largerStorage && <img src="./src/assets/images/icon-checkmark.svg" alt="icon-checkmark" />}
                                </div>
                                <div className='addons-text'>
                                    <h4>Larger storage</h4>
                                    <span>Extra 1TB of cloud save</span>
                                </div>
                            </div>
                            {toggle ? <span className='price'>+$2/mo</span> : <span className='price'>+$20/yr</span>}
                        </div>

                        <div
                            className={selectedAddons.customProfile ? 'add active' : 'add'}
                            onClick={() => toggleAddon('customProfile')}>
                            <div className='add-ons'>
                                <div className={selectedAddons.customProfile ? 'checkbox active' : 'checkbox'}>
                                    {selectedAddons.customProfile && <img src="./src/assets/images/icon-checkmark.svg" alt="icon-checkmark" />}
                                </div>
                                <div className='addons-text'>
                                    <h4>Customizable profile</h4>
                                    <span>Custom theme on your profile</span>
                                </div>
                            </div>
                            {toggle ? <span className='price'>+$2/mo</span> : <span className='price'>+$20/yr</span>}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}