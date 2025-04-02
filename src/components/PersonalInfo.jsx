export default function PersonalInfo() {
    return (
        <>
            <div className="personal">
                <div className="personal-info">
                    <h2>Personal info</h2>
                    <p>Please provide your name, email, address, and phone number.</p>

                    <form>
                        <label>Name</label>
                        <input type="text" placeholder=" e.g. Stephen King" />

                        <label>Email Address</label>
                        <input type="email" placeholder=" e.g. stephenking@lorem.com" />

                        <label>Phone Number</label>
                        <input type="text" placeholder=" e.g. +1 234 567 890" />
                    </form>
                </div>
                <div className="button">
                    <button type="submit">Next Step</button>
                </div>
            </div>
        </>
    )
}