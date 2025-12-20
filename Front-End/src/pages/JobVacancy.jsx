import React from 'react';
import './Careers.css';

const JobVacancy = () => {
    return (
        <div className="job-page">
            <header className="careers-header">
                <h1>Sales Promoter Vacancy</h1>
                <p>Join our dynamic sales team and help us bring the best spices to the world.</p>
            </header>

            <div className="job-details">
                <div className="job-section">
                    <h3>Job Description</h3>
                    <p>We are looking for enthusiastic Sales Promoters to represent our brand at various retail locations. You will be responsible for engaging with customers, explaining our products' unique qualities, and driving sales.</p>
                </div>

                <div className="job-section">
                    <h3>Qualifications & Requirements</h3>
                    <ul>
                        <li>Age: 18 - 35 years</li>
                        <li>Previous experience in sales or customer service is a plus.</li>
                        <li>Excellent communication skills in English and Sinhala/Tamil.</li>
                        <li>Friendly, outgoing, and proactive personality.</li>
                        <li>Ability to work on weekends.</li>
                    </ul>
                </div>

                <div className="job-section">
                    <h3>Benefits</h3>
                    <ul>
                        <li>Attractive commission structure.</li>
                        <li>Training on products and sales techniques.</li>
                        <li>Growth opportunities within the company.</li>
                    </ul>
                </div>
            </div>

            <div className="apply-form">
                <h3>Apply needed For The Post</h3>
                <form>
                    <div className="form-group">
                        <label>Name with Initials</label>
                        <input type="text" placeholder="e.g. A. B. Perera" required />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="07X XXX XXXX" required />
                    </div>

                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="you@example.com" required />
                    </div>

                    <div className="form-group">
                        <label>Experience (Briefly)</label>
                        <textarea rows="4" placeholder="Tell us about your previous work experience..."></textarea>
                    </div>

                    <div className="form-group">
                        <label>Upload CV (PDF/Word)</label>
                        <input type="file" accept=".pdf,.doc,.docx" />
                    </div>

                    <button type="submit" className="submit-btn" onClick={(e) => e.preventDefault()}>Submit Application</button>
                </form>
            </div>

        </div>
    );
};

export default JobVacancy;
