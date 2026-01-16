import React from 'react';
import womenSpicesHero from '../assets/women_spices_hero_generated.png';
import './WomenWithSpices.css';

const WomenWithSpices = () => {
    const videos = [
        {
            id: "video1",
            title: "How Sri Lankan Cinnamon Is Made | World’s Purest Spice Handcrafted",
            embedUrl: "https://www.youtube.com/embed/CjIHRBUq8Fk",
            description: "This video explores the handcrafted production of true Ceylon cinnamon in Sri Lanka. It details the traditional process of harvesting, hand-peeling, and sun-drying the delicate inner bark into golden quills. Highlighting its health benefits and low coumarin levels, the film celebrates cinnamon as a vital symbol of Sri Lankan heritage."
        },
        {
            id: "video2",
            title: "The National Spice garden Sri Lanka",
            embedUrl: "https://www.youtube.com/embed/Rd_8zzbSmCU",
            description: "This video showcases the National Spice Garden in Sri Lanka, highlighting a variety of aromatic spices grown in the region. It gives viewers a visual tour of spice plants and trees, showing how different spices like cinnamon, cardamom, pepper, and more are cultivated and harvested. The footage captures the lush gardens, the natural beauty of the spice plantations, and provides a glimpse into Sri Lanka’s rich tradition of spice cultivation and export."
        },
        {
            id: "video3",
            title: "Agri-Business Potential in Sri Lanka - Ceylon Spices",
            embedUrl: "https://www.youtube.com/embed/9dtw9WgJjwc",
            description: "This video highlights the global agri-business potential of Ceylon spices, focusing on top-quality cinnamon, pepper, and vanilla. It explores their culinary and medicinal benefits while advocating for farmer cooperatives. By organizing smallholders and enhancing value-addition, Sri Lanka aims to tap into massive, underserved international markets."
        },
        {
            id: "video4",
            title: "Chas Organics: Sr Lanka Food Travel Documentary Film | Colombo to Kandy | Sri Lanka Organic Farming",
            embedUrl: "https://www.youtube.com/embed/CexGbyFzulQ",
            description: "This documentary explores Sri Lanka’s organic farming, highlighting the production of True Ceylon Cinnamon, black pepper, and coconut milk. It showcases sustainable, fair-trade practices and traditional Ayurvedic medicine. The film emphasizes biodiversity and community-led initiatives like 1% for Elephants to support local farmers and wildlife."
        },
        {
            id: "video5",
            title: "Spice Island | Spices & Herbs of Sri Lanka",
            embedUrl: "https://www.youtube.com/embed/tkxRvk4afjg",
            description: "This video showcases why Sri Lanka is known as the Spice Island. It highlights indigenous Ceylon cinnamon, the high-heat black pepper, and other exotic crops like cloves, cardamom, and vanilla. Beyond culinary uses, the film explores the medicinal benefits and rich agricultural heritage behind these globally sought-after aromatic treasures."
        },
        {
            id: "video6",
            title: "The Geography of Spices and Herbs",
            embedUrl: "https://www.youtube.com/embed/E1mMgwp7iaE",
            description: "This video explores the biological and geographical origins of spices, explaining how plants developed flavors as chemical defenses. It tracks the historical spice trade from tropical regions like Sri Lanka and India to the Mediterranean, highlighting how these plant toxins revolutionized food preservation and shaped global exploration and history."
        },
    ];

    return (
        <div className="women-spices-page">
            <div className="hero-section">
                <img
                    src={womenSpicesHero}
                    alt="Women laughing with spices"
                    className="hero-image"
                />
                <div className="hero-overlay">
                    <h1>Women with Spices</h1>
                    <h2>Celebrating the hands and hearts behind the flavors we love.</h2>
                </div>
            </div>

            <div className="video-grid">
                {videos.map(video => (
                    <div key={video.id} className="video-card">
                        <div className="video-wrapper">
                            <iframe
                                width="560"
                                height="315"
                                src={video.embedUrl}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="video-content">
                            <h3>{video.title}</h3>
                            <p>{video.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WomenWithSpices;
