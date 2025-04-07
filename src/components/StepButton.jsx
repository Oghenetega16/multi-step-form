export default function StepButton( { step, onNext, onBack }) {
    return (
        <div className={step == 1 ? 'button single' : 'button'}>
            {step > 1 && (
                <p className="back" type="button" onClick={onBack}>Go Back</p>
            )}
            {step === 4 ?
                <button className="confirm" type="button" onClick={onNext}>Confirm</button> : 
                <button className="next" type="button" onClick={onNext}>Next Step</button>
            }
        </div>
    )
}