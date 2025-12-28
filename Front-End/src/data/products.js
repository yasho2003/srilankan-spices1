import oilRose from '../assets/oil_rose.png';
import oilLavender from '../assets/oil_lavender.jpg';
import oilLily from '../assets/oil_lily.png';
import oilJasmine from '../assets/oil_jasmine.png';
import oilLemon from '../assets/oil_lemon.jpg';
import oilPeppermint from '../assets/oil_peppermint.jpg';
import oilEucalyptus from '../assets/oil_eucalyptus.jpg';
import oilChamomile from '../assets/oil_chamomile.jpg';
import oilCinnamon from '../assets/oil_cinnamon.jpg';
import oilVanilla from '../assets/oil_vanilla.jpg';
import oilSandalwood from '../assets/oil_sandalwood.jpg';
import oilClove from '../assets/oil_clove.jpg';

export const products = [
    { id: 1, name: "Ceylon Cinnamon Sticks (කුරුඳු) 100g", price: 2000, category: "spice", image: "https://images.unsplash.com/photo-1587131782738-de30ea91a542?q=80&w=880&auto=format&fit=crop" },
    { id: 2, name: "Black Pepper seed (ගම්මිරිස් ඇට) 100g", price: 1000, category: "spice", image: "https://images.unsplash.com/photo-1655662844262-7bb61527c0d8?q=80&w=627&auto=format&fit=crop" },
    { id: 3, name: "Clove (කරාබුනැටි) 100g", price: 1400, category: "spice", image: "https://media.istockphoto.com/id/1130305802/photo/cloves-in-wooden-bowl-and-scoop-isolated-on-white-background-closeup.jpg?s=612x612&w=0&k=20&c=YPnr5uQHLnaPIJmskqeq581p8TBhf9R8J1vWt4X94fY=" },
    { id: 4, name: "Cardamom (කරදමුංගු) 100g", price: 1500, category: "spice", image: "https://images.unsplash.com/photo-1642255521852-7e7c742ac58f?w=600&auto=format&fit=crop&q=60" },
    { id: 5, name: "Fennel (මහදුරු) 100g", price: 1600, category: "spice", image: "https://images.unsplash.com/photo-1701189975842-591ebd1e26a2?w=600&auto=format&fit=crop&q=60" },
    { id: 6, name: "Ginger (ඉඟුරු) 100g", price: 1200, category: "spice", image: "https://images.unsplash.com/photo-1630623093145-f606591c2546?w=600&auto=format&fit=crop&q=60" },
    { id: 7, name: "Mustard (අබ) 100g", price: 1800, category: "spice", image: "https://media.istockphoto.com/id/1593333096/photo/mustard-seeds-on-white-bowl-with-wooden-spoon-on-white-background.jpg?s=612x612&w=0&k=20&c=NqZZlp3hatYbA0c8IHtmt3R1nhRymhFQZ9VC7SRpR5s=" },
    { id: 8, name: "Turmeric powder (කහ කුඩු) 100g", price: 1900, category: "spice", image: "https://media.istockphoto.com/id/1248898428/photo/turmeric-powder-in-white-bowl.jpg?s=612x612&w=0&k=20&c=QMjgRjfDkb5Si7y4_lHN9qwiAdxwDe0ioFGl6NbXPII=" },
    { id: 9, name: "Garam Masala (ගරම් මසාලා) 100g", price: 2000, category: "spice", image: "https://media.istockphoto.com/id/2245598948/photo/curry-powder-in-bowl-on-white-background.jpg?s=612x612&w=0&k=20&c=FGiTcB3-R_d8Wiv8ZOc9uIzEIhMmwgCQSTZTJXn6j18=" },
    { id: 10, name: "Coriander (කොත්තමල්ලි) 100g", price: 2000, category: "spice", image: "https://media.istockphoto.com/id/1237676889/photo/dried-coriander-seeds-wooden-bowl-on-white-background.jpg?s=612x612&w=0&k=20&c=PmmxwdzEARzUg3iZvxbNJjlQAPeQGN_3hfRjsycFbBo=" },
    { id: 11, name: "Cumin (සූදුරු) 100g", price: 1800, category: "spice", image: "https://media.istockphoto.com/id/144803768/photo/white-bowl-with-cumin-seeds.jpg?s=612x612&w=0&k=20&c=R7Wn3cV4cLCjn0_dkqfXwZGJHi34y1UE0QHm8Dv4RwQ=" },
    { id: 12, name: "Chilli Flakes (කෑලි මිරිස්) 100g", price: 1500, category: "spice", image: "https://media.istockphoto.com/id/2222365767/photo/korean-red-chili-pepper-flake-ground-powder-coarse-paprika-or-gochugaru-isolated-on-white.jpg?s=612x612&w=0&k=20&c=Pd87M36HqEPZ2AQ_kGqwpThK1JwQ9EkdK6xQp9SVFRI=" },
    { id: 13, name: "Nutmeg (සාදික්කා) 100g", price: 2400, category: "spice", image: "https://media.istockphoto.com/id/1297851317/photo/nutmeg-isolated-whole-and-grated-top-view.jpg?s=612x612&w=0&k=20&c=i07Z4J11ocG-eeeP-atovRR9L_fFunBRUeZrMqdwQH8=" },
    { id: 14, name: "Fenugreek (උලුහාල්) 100g", price: 2200, category: "spice", image: "https://media.istockphoto.com/id/1066487472/photo/fenugreek-seeds-in-a-wooden-bowl-isolated-on-white-fenugreek-seeds-isolated-on-white.jpg?s=612x612&w=0&k=20&c=sz3WhgFYpbVcezcgQ7KFcTUCdlCToXMnL1HDaDX6xDc=" },
    { id: 15, name: "Chilli Powder (මිරිස් කුඩු) 100g", price: 1800, category: "spice", image: "https://media.istockphoto.com/id/1447454666/photo/ground-red-pepper-in-white-bowl-isolated-on-white-front-view.jpg?s=612x612&w=0&k=20&c=r9129aP931UktW4QKynb4JF8dHOkNLdkmeXUZGmXOsM=" },
    { id: 16, name: "Black Pepper powder (ගම්මිරිස් කුඩු) 100g", price: 1200, category: "spice", image: "https://images.unsplash.com/photo-1734415646776-eb5fd675ac73?w=600&auto=format&fit=crop&q=60" },
    { id: 17, name: "Curry Leaves Powder (කරපිංචා කුඩු) 100g", price: 1800, category: "spice", image: "https://media.istockphoto.com/id/2235875611/photo/top-view-green-matcha-tea-powder-isolated-on-white-background.webp?a=1&s=612x612&w=0&k=20&c=ieSeVdTJIFtlUEX5bpJskLF5G1cVOcKgGCBccAJ-bN0=" },
    { id: 18, name: "Cylon Cinnamon Powder (කුරුඳු කුඩු) 100g", price: 2500, category: "spice", image: "https://media.istockphoto.com/id/941943474/photo/cinnamon-sticks-and-ground-cinnamon.jpg?s=612x612&w=0&k=20&c=p94EOhtNhdRz31I6IKzpsvflJzQOWx2doi0Nq3kee2o=" },
    { id: 19, name: "Mustard Cream (අබ ක්‍රීම්) 100g", price: 2000, category: "spice", image: "https://media.istockphoto.com/id/1536246260/photo/mustard-sauce-in-bowl-on-white-background.jpg?s=612x612&w=0&k=20&c=WEd1W-2O0lcULonTNcYtBkgXMATOje74mi9yOH37kW8=" },
    { id: 20, name: "Star Anise (බුරියානිමල්) 100g", price: 3100, category: "spice", image: "https://images.unsplash.com/photo-1642255485146-bc28a517dcfb?w=600&auto=format&fit=crop&q=60" },
    // Essential Oils (IDs 21-32)
    { id: 21, name: "Pure Rose Essential Oil", price: 18.00, size: "15ml", category: "oil", image: oilRose, description: "A timeless floral scent known for its calming properties. Perfect for aromatherapy and self-care." },
    { id: 22, name: "Lavender Serenity", price: 15.00, size: "15ml", category: "oil", image: oilLavender, description: "Relax and unwind with the soothing aroma of fresh lavender fields." },
    { id: 23, name: "Lily Essence", price: 20.00, size: "10ml", category: "oil", image: oilLily, description: "A delicate and sweet fragrance that captures the essence of spring bloooms." },
    { id: 24, name: "Jasmine Absolute", price: 22.00, size: "10ml", category: "oil", image: oilJasmine, description: "Exotic and rich, Jasmine oil is perfect for uplifting your mood and spirit." },
    { id: 25, name: "Zesty Lemon", price: 12.00, size: "15ml", category: "oil", image: oilLemon, description: "Bright, refreshing, and energetic. A burst of citrus to revitalize your space." },
    { id: 26, name: "Fresh Peppermint", price: 14.00, size: "15ml", category: "oil", image: oilPeppermint, description: "Cool and invigorating. Excellent for focus and clearing the mind." },
    { id: 27, name: "Eucalyptus Clarity", price: 14.00, size: "15ml", category: "oil", image: oilEucalyptus, description: "A crisp, purifying scent that promotes deep breathing and wellness." },
    { id: 28, name: "Chamomile Calm", price: 19.00, size: "10ml", category: "oil", image: oilChamomile, description: "Gentle and soothing. Ideal for establishing a peaceful bedtime routine." },
    { id: 29, name: "Ceylon Cinnamon", price: 16.00, size: "15ml", category: "oil", image: oilCinnamon, description: "Warm, spicy, and inviting. The true scent of Sri Lankan heritage." },
    { id: 30, name: "Pure Vanilla", price: 25.00, size: "10ml", category: "oil", image: oilVanilla, description: "Sweet, comforting, and classic. A familiar aroma that feels like home." },
    { id: 31, name: "Sacred Sandalwood", price: 28.00, size: "5ml", category: "oil", image: oilSandalwood, description: "Woody, earthy, and grounding. A luxurious oil for meditation and peace." },
    { id: 32, name: "Spicy Clove", price: 15.00, size: "15ml", category: "oil", image: oilClove, description: "Strong and stimulating. A powerful spice oil with a rich, historical aroma." },
];
