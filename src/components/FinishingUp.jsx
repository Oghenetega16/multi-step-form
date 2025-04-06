import StepButton from './StepButton'

export default function FinishingUp({ toggle }) {

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
                                    <h4>Arcade (Yearly)</h4>
                                    <a href=''>Change</a>
                                </div>
                                <span>$90/yr</span>
                            </div>
                            
                            <div className='addons-items'>
                                <div className='addons-item'>
                                    <span className='addons-desc'>Online service</span>
                                    <span className='addons-value'>$10/yr</span>
                                </div>
                                <div className='addons-item'>
                                    <span className='addons-desc'>Larger storage</span>
                                    <span className='addons-value'>$20/yr</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='total'>
                        <p>Total (per year)</p>
                        <h4>$120/yr</h4>
                    </section>
                </div>
            </div>
        </>
    )
}