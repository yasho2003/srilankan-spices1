import React from 'react';
import './SpiceJournal.css';
import moroccoRoses from '../assets/morocco_roses.png';
import sriLankaSpices from '../assets/sri_lanka_spices_new.jpg';
import vietnamSpices from '../assets/vietnam_market.jpg';

const journalEntries = [
    {
        id: 1,
        title: 'Morocco Field Report: The Queen of Roses',
        summary: 'While the world appears to be on fire, both literally and figuratively—from the Israel-Hamas conflict to the Sudan civil war, to our own country\'s political woes, it feels almost trivial to write about a rose. ',
        image: moroccoRoses,
        link: 'https://aromatum.blogspot.com/2024/07/morocco-field-report-queen-of-roses.html',
        isExternal: true
    },
    {
        id: 2,
        title: 'Spices of Sri Lanka',
        summary: 'If you know anything about us Sri Lankans, it would include the fact that we love our spices. Our local cuisine is known for particular combinations of herbs, meats, vegetables, fruits and rices; which are highly centred upon the use of spices.',
        image: sriLankaSpices,
        link: 'https://www.resplendentceylon.com/our-journal/spices-of-sri-lanka/',
        isExternal: true
    },
    {
        id: 3,
        title: 'Vietnam Field Report',
        summary: 'The cinnamon from Vietnam is a specific species Cinnamomum loureirii that produces higher aromatic oils than any other type of cinnamon resulting in a sweetness and intensity that is unforgettable.',
        image: vietnamSpices,
        link: 'https://aromatum.blogspot.com/2022/11/vietnam-field-report.html',
        isExternal: true
    }
];

const SpiceJournal = () => {
    return (
        <div className="spice-journal-page">
            <header className="journal-header">
                <h1>Spice Journal</h1>
                <p>Field reports, discoveries, and stories from our sourcing adventures around the globe.</p>
            </header>

            <div className="journal-grid">
                {journalEntries.map(entry => (
                    entry.isExternal ? (
                        <a href={entry.link} key={entry.id} className="journal-card-link" target="_blank" rel="noopener noreferrer">
                            <article className="journal-card">
                                <div className="journal-image-wrapper">
                                    <img src={entry.image} alt={entry.title} className="journal-image" />
                                </div>
                                <div className="journal-content">
                                    <h2>{entry.title}</h2>
                                    <p>{entry.summary}</p>
                                    <span className="read-more">Read Full Story &rarr;</span>
                                </div>
                            </article>
                        </a>
                    ) : (
                        <a href={entry.link} key={entry.id} className="journal-card-link">
                            <article className="journal-card">
                                <div className="journal-image-wrapper">
                                    <img src={entry.image} alt={entry.title} className="journal-image" />
                                </div>
                                <div className="journal-content">
                                    <h2>{entry.title}</h2>
                                    <p>{entry.summary}</p>
                                    <span className="read-more">Read Reprot &rarr;</span>
                                </div>
                            </article>
                        </a>
                    )
                ))}
            </div>
        </div>
    );
};

export default SpiceJournal;
