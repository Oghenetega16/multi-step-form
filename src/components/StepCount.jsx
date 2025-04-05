export default function Steps({ step }) {
    return (
        <div className="steps">
            <div className="step">
                <p className={step === 1 ? 'step-num active' : 'step-num'}>1</p>
                <div className="step-info">
                    <span>STEP 1</span>
                    <p>YOUR INFO</p>
                </div>
            </div>
            <div className="step">
                <p className={step === 2 ? 'step-num active' : 'step-num'}>2</p>
                <div className="step-info">
                    <span>STEP 2</span>
                    <p>SELECT PLAN</p>
                </div>
            </div>
            <div className="step">
                <p className={step === 3 ? 'step-num active' : 'step-num'}>3</p>
                <div className="step-info">
                    <span>STEP 3</span>
                    <p>ADD-ONS</p>
                </div>
            </div>
            <div className="step">
                <p className={step === 4 ? 'step-num active' : 'step-num'}>4</p>
                <div className="step-info">
                    <span>STEP 4</span>
                    <p>SUMMARY</p>
                </div>
            </div>
        </div>
    )
}