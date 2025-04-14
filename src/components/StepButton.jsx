export default function StepButton( { step, onNext, onBack, isValid, nextLabel='Next Step', className='next' }) {
    return (
        <div className={step == 1 ? 'button single' : 'button'}>
            {step > 1 && <p className="back" onClick={onBack}>Go Back</p>}
            <button className={className} type="button"
                onClick={() => {
                    if (typeof isValid === 'function' && isValid()) {
                        onNext()
                    } else if (!isValid) {
                        onNext()
                    }
                }}>{nextLabel}</button> 
        </div>
    )
}