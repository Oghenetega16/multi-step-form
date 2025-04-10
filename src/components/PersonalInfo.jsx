import StepCount from './StepCount'
import StepButton from './StepButton'
import { useState } from 'react'

export default function PersonalInfo({ formData, updateFormData }) {
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
            newErrors.phone = "Please enter a valid phone"
        } else if (!/^\d{10,15}$/.test(formData.phone)) {
            newErrors.phone = "Please enter a valid phone"
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0
    }

    
    function handleSubmit(event) {
        event.preventDefault()
        if (validate()) {
            updateFormData(formData)
        }
    }

    return (
        <>
            <div className="personal">
                <div className="personal-info">
                    <h2>Personal info</h2>
                    <p>Please provide your name, email, address, and phone number.</p>

                    <form onSubmit={handleSubmit}>
                        <label>Name</label>
                        {errors.name && <p className="error">{errors.name}</p>}
                        <input type="text"
                                name="name" 
                                placeholder="e.g. Stephen King" 
                                value={formData.name}
                                onChange={(event) => updateFormData({name: event.target.value})}
                        />

                        <label>Email Address</label>
                        {errors.email && <p className="error">{errors.email}</p>}
                        <input type="email"
                                name="email"
                                placeholder="e.g. stephenking@lorem.com" 
                                value={formData.email}
                                onChange={(event) => updateFormData({email: event.target.value})}
                        />

                        <label>Phone Number</label>
                        {errors.phone && <p className="error">{errors.phone}</p>}
                        <input type="tel"
                                name="phone"
                                placeholder="e.g. +1 234 567 890" 
                                value={formData.phone}
                                onChange={(event) => updateFormData({phone: event.target.value})}
                        />
                    </form>
                </div>
            </div>
        </>
    )
}