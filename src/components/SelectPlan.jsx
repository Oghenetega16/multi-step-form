import StepButton from './StepButton'

export default function SelectPlan({ toggle, handleToggle }) {

    return (
        <>
            <div className="select">
                <div className="select-plan">
                    <h2>Select your plan</h2>
                    <p>You have the option of monthly or yearly billing.</p>

                    <section className='plans'>
                        <div className='plan active'>
                            <div className='img'>
                                <img src="./src/assets/images/icon-arcade.svg" alt="icon-arcade" />
                            </div>
                            <div className='plan-text'>
                                <h4>Arcade</h4>
                                {toggle ? <span className='month-plan'>$9/mo</span> : <span className='year-plan'>$90/yr</span>}
                                {toggle ? '' : <span className='bonus'>2 months free</span>}
                            </div>
                        </div>

                        <div className='plan'>
                            <div className='img'>
                                <img src="./src/assets/images/icon-advanced.svg" alt="icon-advanced" />
                            </div>
                            <div className='plan-text'>
                                <h4>Advanced</h4>
                                {toggle ? <span className='month-plan'>$12/mo</span> : <span className='year-plan'>$120/yr</span>}
                                {toggle ? '' : <span className='bonus'>2 months free</span>}
                            </div>
                        </div>

                        <div className='plan'>
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
        </>
    )
}