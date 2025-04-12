import StepButton from './StepButton'
import { useState } from 'react'

export default function PersonalInfo({ step, formData, updateFormData, onNext }) {
    const[errors, setErrors] = useState({})

    function validate() {
        const newErrors = {}
        if (!formData.name.trim()) {
            newErrors.name = "Name is required"
        }
        
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/^[\w.-]+@[\w.-]+\.\w{2,4}$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email"
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required"
        } else if (!/^\d{10,15}$/.test(formData.phone)) {
            newErrors.phone = "Please enter a valid phone"
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0
    }

    return (
        <>
            <div className="personal">
                <div className="personal-info">
                    <h2>Personal info</h2>
                    <p>Please provide your name, email, address, and phone number.</p>

                    <form>
                        <div className='label_error'>
                            <label>Name</label>
                            {errors.name && <p className="error">{errors.name}</p>}
                        </div>
                        
                        <input type="text"
                                name="name" 
                                placeholder="e.g. Stephen King" 
                                value={formData.name}
                                className={errors.name && 'input-error'}
                                onChange={(event) => updateFormData({name: event.target.value})}
                        />

                        <div className='label_error'>
                            <label>Email Address</label>
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>
                        
                        <input type="email"
                                name="email"
                                placeholder="e.g. stephenking@lorem.com" 
                                value={formData.email}
                                className={errors.email && 'input-error'}
                                onChange={(event) => updateFormData({email: event.target.value})}
                        />

                        <div className='label_error'>
                            <label>Phone Number</label>
                            {errors.phone && <p className="error">{errors.phone}</p>}
                        </div>
                        
                        <input type="tel"
                                name="phone"
                                placeholder="e.g. +1 234 567 890" 
                                value={formData.phone}
                                className={errors.phone && 'input-error'}
                                onChange={(event) => updateFormData({phone: event.target.value})}
                        />
                        
                    </form>
                </div>
            </div>
            <StepButton step={step} onNext={onNext} isValid={validate}/>
        </>
    )
}