import StepButton from './StepButton'

export default function SelectPlan() {
    return (
        <>
            <div className="select">
                <div className="select-plan">
                    <h2>Select your plan</h2>
                    <p>You have the option of monthly or yearly billing.</p>

                    <section>
                        <div className='plan active'>
                            <div className='img'>
                                <img src="./src/assets/images/icon-arcade.svg" alt="icon-arcade" />
                            </div>
                            <div className='plan-text'>
                                <h4>Arcade</h4>
                                <span>$9/mo</span>
                            </div>
                        </div>

                        <div className='plan'>
                            <div className='img'>
                                <img src="./src/assets/images/icon-advanced.svg" alt="icon-advanced" />
                            </div>
                            <div className='plan-text'>
                                <h4>Advanced</h4>
                                <span>$12/mo</span>
                            </div>
                        </div>

                        <div className='plan'>
                            <div className='img'>
                                <img src="./src/assets/images/icon-pro.svg" alt="icon-pro" />
                            </div>
                            <div className='plan-text'>
                                <h4>Pro</h4>
                                <span>$15/mo</span>
                            </div>
                        </div>
                    </section>

                    <section className='toggle'>
                        <p className='active'>Monthly</p>
                        <i class="fa-solid fa-toggle-off"></i>
                        <p>Yearly</p>
                    </section>
                </div>
            </div>
        </>
    )
}