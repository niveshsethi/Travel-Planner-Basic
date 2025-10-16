// A static list of Indian destinations with legitimate details and multiple images.
const indianDestinationsData = [
  {
    id: '1',
    name: 'Jaipur',
    country: 'Rajasthan',
    images: [
      'https://images.unsplash.com/photo-1617153257589-543a20959244?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567157577822-b2dff045a420?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603261379381-9311499f3b04?q=80&w=800&auto=format&fit=crop'
    ],
    description: "Known as the 'Pink City', Jaipur is the capital of Rajasthan. It's a vibrant city of palaces, forts, and bustling markets. Hawa Mahal, a five-story honeycomb-like structure, is one of its most famous landmarks.",
    tips: "Visit Chokhi Dhani for a taste of Rajasthani culture. Bargain hard in the local bazaars like Johari Bazaar and Bapu Bazaar. The best time to visit is between October and March."
  },
  {
    id: '2',
    name: 'Varanasi',
    country: 'Uttar Pradesh',
    images: [
      'https://images.unsplash.com/photo-1561361523-8834a75b7a81?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-15271353994-a447814a8894?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1543048993-24715f3412a8?q=80&w=800&auto=format&fit=crop'
    ],
    description: "Situated on the banks of the sacred river Ganges, Varanasi is one of the oldest living cities in the world. It's a major pilgrimage site for Hindus, known for its ghats, temples, and spiritual atmosphere.",
    tips: "Witness the Ganga Aarti ceremony in the evening. Take a boat ride at dawn to see the ghats come to life. Be respectful of local customs and traditions, especially around cremation sites."
  },
  {
    id: '3',
    name: 'Goa',
    country: 'Goa',
    images: [
      'https://images.unsplash.com/photo-1570246329049-2ab13a35ac53?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593078166039-c373d54271b5?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590811817874-68e4e4a743c7?q=80&w=800&auto=format&fit=crop'
    ],
    description: "Famous for its stunning beaches, vibrant nightlife, and Portuguese heritage, Goa is a popular tourist destination on India's west coast. From the bustling beaches of North Goa to the serene shores of the South, there's something for everyone.",
    tips: "Rent a scooter to explore the coastline. Try the local seafood and Feni, a traditional Goan spirit. Visit Old Goa to see the historic churches, a UNESCO World Heritage site."
  },
  {
    id: '4',
    name: 'Leh',
    country: 'Ladakh',
    images: [
      'https://images.unsplash.com/photo-1605649487212-47bdab0624e5?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626621341524-71ab14f28b3e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616162239294-447eb167e453?q=80&w=800&auto=format&fit=crop'
    ],
    description: "Nestled in the Himalayas, Leh is the main town of the Ladakh region. It's known for its breathtaking landscapes, Buddhist monasteries (gompas), and adventure activities. The stark beauty of the surrounding mountains is unforgettable.",
    tips: "Acclimatize for at least a day or two to avoid altitude sickness. Visit Pangong Tso lake and Nubra Valley. The road to Leh is only open from May to October."
  },
  {
    id: '5',
    name: 'Munnar',
    country: 'Kerala',
    images: [
      'https://images.unsplash.com/photo-1616251249651-e3758d4d453e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593641292078-433b45b4a3c1?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1623583482436-9939f2324933?q=80&w=800&auto=format&fit=crop'
    ],
    description: "A hill station in the Western Ghats, Munnar is famous for its rolling hills covered in tea plantations. The lush greenery, misty mountains, and pleasant climate make it a perfect retreat.",
    tips: "Visit a tea museum to learn about tea processing. Trek to Anamudi, the highest peak in South India. Look out for the Neelakurinji flower, which blooms once every 12 years."
  },
  {
    id: '6',
    name: 'Rishikesh',
    country: 'Uttarakhand',
    images: [
      'https://images.unsplash.com/photo-1609769682982-6e191c94a5e8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599708422113-90a42c30805c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1597863503433-042878ec9696?q=80&w=800&auto=format&fit=crop'
    ],
    description: "Known as the 'Yoga Capital of the World', Rishikesh is a spiritual town on the banks of the Ganges in the foothills of the Himalayas. It's a hub for yoga, meditation, and adventure sports like white-water rafting.",
    tips: "Walk across the iconic Laxman Jhula and Ram Jhula suspension bridges. Attend a yoga or meditation class. Try river rafting for an adrenaline rush."
  },
  {
    id: '7',
    name: 'Amritsar',
    country: 'Punjab',
    images: [
      'https://images.unsplash.com/photo-1632415978114-e698b3191337?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1588282322673-c31965a75c3e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620766165522-61143569372a?q=80&w=800&auto=format&fit=crop'
    ],
    description: "Home to the magnificent Golden Temple (Harmandir Sahib), the holiest shrine in Sikhism, Amritsar is a city of great historical and religious significance. The city is also known for its delicious Punjabi cuisine.",
    tips: "Visit the Golden Temple at different times of the day to see it in different light. Witness the Wagah Border ceremony. Don't miss out on the local street food, especially Amritsari Kulcha."
  },
  {
    id: '8',
    name: 'Darjeeling',
    country: 'West Bengal',
    images: [
      'https://images.unsplash.com/photo-1544634389-0cf1e84841a4?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616823333367-287733f17543?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593224478120-f7607a2a0956?q=80&w=800&auto=format&fit=crop'
    ],
    description: "A charming hill station in the Indian state of West Bengal, famous for its tea plantations and the Darjeeling Himalayan Railway, a UNESCO World Heritage site. It offers stunning views of Kanchenjunga, the world's third-highest mountain.",
    tips: "Take a ride on the 'Toy Train'. Watch the sunrise over Kanchenjunga from Tiger Hill. Visit a tea estate and sample some world-famous Darjeeling tea."
  },
  {
    id: '9',
    name: 'Udaipur',
    country: 'Rajasthan',
    images: [
      'https://images.unsplash.com/photo-1599661046223-159103625de8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578271887552-5ac3a727528b?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1621364923338-7323b40032b8?q=80&w=800&auto=format&fit=crop'
    ],
    description: "Often called the 'City of Lakes' or the 'Venice of the East', Udaipur is known for its romantic and picturesque setting. The city is built around a series of artificial lakes and is famed for its lavish royal residences.",
    tips: "Take a boat ride on Lake Pichola and visit the Jag Mandir palace. Explore the magnificent City Palace complex. Enjoy a sunset view from the Monsoon Palace (Sajjangarh)."
  },
  {
    id: '10',
    name: 'Hampi',
    country: 'Karnataka',
    images: [
      'https://images.unsplash.com/photo-1592534164344-71a71f364d3c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554282422-c45a2d810851?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599355812130-99154334305f?q=80&w=800&auto=format&fit=crop'
    ],
    description: "A UNESCO World Heritage site, Hampi was the capital of the Vijayanagara Empire in the 14th century. The ruins are set in a surreal landscape of giant boulders and include temples, palaces, and royal complexes.",
    tips: "Rent a bicycle or moped to explore the vast area. Cross the Tungabhadra River on a coracle (a traditional round boat). Climb Matanga Hill for a panoramic view of the ruins at sunrise or sunset."
  },
  {
    id: '11',
    name: 'Shillong',
    country: 'Meghalaya',
    images: [
      'https://images.unsplash.com/photo-1609366172253-9d6f642f8541?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1626074961596-cab914d937e1?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603200787431-143f6893d0d3?q=80&w=800&auto=format&fit=crop'
    ],
    description: "The capital of Meghalaya, Shillong is a beautiful hill station known as the 'Scotland of the East'. It's characterized by rolling hills, waterfalls, and a vibrant music scene. The culture is a unique blend of Khasi traditions and modern influences.",
    tips: "Visit Elephant Falls and Shillong Peak. Explore the lively Police Bazar for shopping and food. Take a day trip to Cherrapunji (Sohra), one of the wettest places on Earth."
  },
  {
    id: '12',
    name: 'Mumbai',
    country: 'Maharashtra',
    images: [
      'https://images.unsplash.com/photo-1562979314-1ace85b39e44?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1592656094265-e299a49d3c26?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583635382375-3a78a691724d?q=80&w=800&auto=format&fit=crop'
    ],
    description: "Mumbai, the 'City of Dreams', is India's financial powerhouse and the heart of the Bollywood film industry. It's a bustling metropolis known for its iconic landmarks, colonial architecture, and vibrant street life.",
    tips: "Stroll along Marine Drive, also known as the 'Queen's Necklace'. Visit the Gateway of India and take a ferry to Elephanta Caves. Experience the local train network for a true Mumbai experience."
  },
];

/**
 * Returns a static list of destination objects with legitimate details.
 * @returns {Array<Object>} An array of destination objects.
 */
export function generateDestinations() {
  // Using state in the 'country' field for consistency with existing UI code.
  return indianDestinationsData;
}
