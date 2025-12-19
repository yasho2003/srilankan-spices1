import React from 'react';
import womenSpicesHero from '../assets/women_spices_hero.png';
import './WomenWithSpices.css';

const WomenWithSpices = () => {
    const videos = [
        {
            id: "video1",
            title: "The Saffron Harvesters",
            embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=7B5q7X0Z8e6y9Y4J", // Placeholder ID, replace with real relevant ones if available
            description: "In the valleys of Taliouine, women begin their work before dawn to harvest saffron flowers. This delicate process requires patience and precision, as each stigma must be plucked by hand. This documentary short captures the camaraderie and skill of these women, highlighting their crucial role in producing the world's most expensive spice and preserving a centuries-old tradition."
        },
        {
            id: "video2",
            title: "Guardians of the Argan Tree",
            embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=7B5q7X0Z8e6y9Y4J",
            description: "Watch how a cooperative of women turns Argan nuts into liquid gold. The process of cracking the nuts and grinding the kernels is labor-intensive but serves as a vital economic lifeline for rural communities. Their laughter and songs fill the air, turning varied tasks into a shared community event that empowers them financially and socially."
        },
        {
            id: "video3",
            title: "Spices of the Atlas",
            embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=7B5q7X0Z8e6y9Y4J",
            description: "High in the Atlas Mountains, local women gather wild herbs and spices used in traditional Moroccan cooking. This video explores their deep knowledge of the land and its bounty, showcasing sustainble harvesting practices passed down through generations. See how these ingredients are transformed from wild plants into the aromatic blends found in markets."
        },
        {
            id: "video4",
            title: "The Spice Market matriarchs",
            embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=7B5q7X0Z8e6y9Y4J",
            description: "Meet the women who run the stalls in the bustling souks of Marrakech. They are not just sellers but storytellers, advising chefs and home cooks alike on the perfect blends. This intimate look reveals the business acumen and warm hospitality that define the female presence in what was once a male-dominated marketplace."
        }
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
                    <p>Celebrating the hands and hearts behind the flavors we love.</p>
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
