export default function Steps({ step }) {
    return (
        <div className="steps">
            <div className={step === 1 ? 'step active' : 'step'}>
                <p>1</p>
            </div>
            <div className={step === 2 ? 'step active' : 'step'}>
                <p>2</p>
            </div>
            <div className={step === 3 ? 'step active' : 'step'}>
                <p>3</p>
            </div>
            <div className={step === 4 ? 'step active' : 'step'}>
                <p>4</p>
            </div>
        </div>
    )
}