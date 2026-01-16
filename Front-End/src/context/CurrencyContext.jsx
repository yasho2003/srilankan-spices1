import React, { useState, useEffect } from 'react';
import { CurrencyContext } from './CurrencyContextDef';

export const CurrencyProvider = ({ children }) => {
    // Default to LKR
    const [currency, setCurrency] = useState('LKR');
    const [rates, setRates] = useState({});

    useEffect(() => {
        // Fetch rates on mount
        const fetchRates = async () => {
            try {
                const response = await fetch('https://api.exchangerate-api.com/v4/latest/LKR');
                const data = await response.json();
                setRates(data.rates);
            } catch (error) {
                console.error('Error fetching currency rates:', error);
                // Fallback rates if API fails
                setRates({ USD: 1 / 300, LKR: 1 });
            }
        };

        fetchRates();
    }, []);

    // Derived state
    const exchangeRate = currency === 'USD' ? (rates.USD || 1 / 300) : 1;

    // Helper to format price
    const formatPrice = (priceInLkr) => {
        if (!priceInLkr && priceInLkr !== 0) return '';

        const convertedPrice = priceInLkr * exchangeRate;

        if (currency === 'USD') {
            return `$${convertedPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        } else {
            return `Rs. ${convertedPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        }
    };

    const value = {
        currency,
        setCurrency,
        formatPrice
    };

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    );
};
