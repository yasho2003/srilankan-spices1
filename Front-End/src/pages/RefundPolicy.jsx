import React, { useState } from 'react';
import './RefundPolicy.css';

const RefundPolicy = () => {
    const [refundData, setRefundData] = useState({
        orderId: '',
        issueType: 'broken',
        message: ''
    });

    const handleChange = (e) => {
        setRefundData({ ...refundData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { orderId, issueType, message } = refundData;

        // Construct mailto link
        const subject = encodeURIComponent(`Refund Request - Order #${orderId} - ${issueType}`);
        const body = encodeURIComponent(`Order ID: ${orderId}\nIssue Type: ${issueType}\n\nDetails:\n${message}`);

        window.location.href = `mailto:support@srilankanspices.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="refund-page">
            <header className="refund-hero">
                <h1>Refund Policy & Customer Care</h1>
            </header>

            <div className="refund-container">
                <div className="policy-content">
                    <section>
                        <h2>Privacy Policy</h2>
                        <p>At Sri Lankan Spices, we value your privacy. We collect personal information only to process your orders and improve your shopping experience. We do not sell or share your data with third parties for marketing purposes.</p>
                        <ul className="policy-list">
                            <li><strong>Emails:</strong> We use your email to send order updates and, if you opt-in, establishing newsletters about new arrivals.</li>
                            <li><strong>Security:</strong> All transactions are encrypted and secure.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Shipping Policy</h2>
                        <p>We ship worldwide directly from Sri Lanka to ensure authenticity.</p>
                        <ul className="policy-list">
                            <li><strong>Processing Time:</strong> Orders are processed within 2-3 business days.</li>
                            <li><strong>Delivery:</strong> Standard shipping takes 10-15 business days. Express options are available at checkout.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Refund & Return Policy</h2>
                        <p>We take great pride in the quality of our spices. However, mistakes can happen.</p>
                        <div className="policy-highlight">
                            <h3>Eligibility for Refund</h3>
                            <ul>
                                <li><strong>Broken Items:</strong> If your item arrives damaged or broken.</li>
                                <li><strong>Mismatch:</strong> If you received a product different from what you ordered.</li>
                            </ul>
                            <p>Please report any issues within 7 days of receiving your order.</p>
                        </div>
                    </section>
                </div>

                <div className="refund-form-container">
                    <h2>Request a Refund</h2>
                    <p>Did something go wrong? Let us settle it for you.</p>

                    <form className="refund-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="orderId">Order ID</label>
                            <input
                                type="text"
                                id="orderId"
                                name="orderId"
                                value={refundData.orderId}
                                onChange={handleChange}
                                required
                                placeholder="e.g., #SPICE-1234"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="issueType">Issue Type</label>
                            <select
                                id="issueType"
                                name="issueType"
                                value={refundData.issueType}
                                onChange={handleChange}
                            >
                                <option value="broken">Item Arrived Broken/Damaged</option>
                                <option value="mismatch">Received Wrong Item (Mismatch)</option>
                                <option value="other">Other Issue</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message / Details</label>
                            <textarea
                                id="message"
                                name="message"
                                value={refundData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                placeholder="Please describe the issue..."
                            ></textarea>
                        </div>

                        <button type="submit" className="btn-refund">Submit Refund Request</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
