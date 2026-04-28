const properties = [
  {
    id: "PROP_1001",
    title: "Luxury 3BHK Sea View Apartment",
    slug: "luxury-3bhk-sea-view-apartment-chennai-omr",
    description:
      "Experience premium living in this fully furnished 3BHK sea-view apartment located in a prime gated community on OMR. Designed with modern interiors, smart home automation, imported fittings, and breathtaking ocean views from all major rooms.",

    propertyType: "Apartment",
    listingType: "Residential",
    status: "For Sale",
    verifiedProperty: true,
    featured: true,
    premiumListing: true,

    price: {
      amount: 12500000,
      currency: "INR",
      pricePerSqft: 8500,
      negotiable: true,
      bookingAmount: 500000,
      maintenanceCharges: 4500
    },

    location: {
      address: "OMR Road, Sholinganallur",
      landmark: "Near Infosys Campus",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      pincode: "600119",
      latitude: 12.9005,
      longitude: 80.227,
      googleMapUrl: "https://maps.google.com/?q=12.9005,80.227"
    },

    area: {
      totalSqft: 1850,
      carpetSqft: 1600,
      builtUpSqft: 1750,
      plotAreaSqft: 0,
      unitType: "3BHK Apartment"
    },

    rooms: {
      bedrooms: 3,
      bathrooms: 3,
      balconies: 2,
      kitchen: 1,
      livingRoom: 1,
      diningRoom: 1,
      storeRoom: 1
    },

    furnishing: {
      status: "Fully Furnished",
      items: [
        "Modular Kitchen",
        "Wardrobes",
        "TV Unit",
        "AC in all rooms",
        "Sofa Set",
        "Dining Table",
        "Bed with Mattress"
      ]
    },

    facing: "East",

    floorDetails: {
      totalFloors: 15,
      propertyOnFloor: 8,
      liftAvailable: true,
      unitsPerFloor: 4
    },

    parking: {
      car: 1,
      bike: 2,
      visitorParking: true,
      coveredParking: true
    },

    ageOfProperty: "3 Years",
    availability: "Immediate",
    possessionDate: "2026-05-15",
    constructionStatus: "Ready to Move",

    approvedBy: ["CMDA", "RERA Approved"],

    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D",

      "https://media.istockphoto.com/id/1337482310/photo/large-modern-contemporary-house-in-wood-and-concrete-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=95-rYSt9EdjksgcxNP8l_XFcPplw7JwX9QrwDib8CD8=",
      "https://media.istockphoto.com/id/147205632/photo/modern-home-with-swimming-pool.webp?a=1&b=1&s=612x612&w=0&k=20&c=auqvR6pRnKN7ttKapti20AGpJNYBWk4j-M6rRAzXwco=",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1574739782812-9b064e1efeaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1661964274776-b8c2867acea1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8"
    ],


    amenities: [
      "Swimming Pool",
      "Gym",
      "24/7 Security",
      "Children Play Area",
      "Power Backup",
      "Club House",
      "Jogging Track",
      "CCTV Surveillance",
      "Covered Parking",
      "Lift",
      "Rain Water Harvesting",
      "Landscaped Garden"
    ],

    nearbyPlaces: [
      { name: "Infosys Campus", type: "IT Park", distance: "2.5 km" },
      { name: "Apollo Hospital", type: "Hospital", distance: "4 km" },
      { name: "Kovalam Beach", type: "Beach", distance: "6 km" },
      { name: "VGP Universal Kingdom", type: "Amusement Park", distance: "3.2 km" },
      { name: "PVR Grand Mall", type: "Shopping Mall", distance: "5 km" }
    ],

    owner: {
      name: "VS Property Vision",
      company: "VS Property Vision Pvt Ltd",
      contact: "+91 9876543210",
      email: "vs1606@gmail.com",
      verified: true,
      rating: 4.7
    },

    agent: {
      id: "AGT_101",
      name: "Senthil Kumar",
      role: "Senior Property Consultant",
      phone: "+91 9000000000",
      email: "agent@vsproperty.com",
      experience: "5 Years",
      languages: ["Tamil", "English"],
      rating: 4.8,
      totalDeals: 120
    },

    seo: {
      metaTitle:
        "Luxury 3BHK Sea View Apartment for Sale in Chennai | OMR Sholinganallur",
      metaDescription:
        "Buy premium 3BHK sea view apartment in Chennai OMR with luxury amenities, smart home features, and gated community security.",
      keywords: [
        "3BHK apartment Chennai",
        "sea view flat OMR",
        "luxury flats in Sholinganallur",
        "Chennai gated community flats",
        "premium apartments Chennai"
      ]
    },

    analytics: {
      views: 1250,
      uniqueViews: 980,
      likes: 340,
      shares: 85,
      inquiries: 42,
      savedByUsers: 120
    },

    reviews: [
      {
        user: "Arun Kumar",
        rating: 5,
        comment: "Excellent property with great sea view and amenities.",
        date: "2026-04-10"
      },
      {
        user: "Priya S",
        rating: 4,
        comment: "Good location and premium construction quality.",
        date: "2026-04-15"
      }
    ],


    createdAt: "2026-04-20T10:00:00Z",
    updatedAt: "2026-04-28T09:30:00Z",
    publishedAt: "2026-04-21T08:00:00Z"
  },
  {
  id: "PROP_1002",
  title: "Elegant 2BHK Lake View Apartment with Modern Interiors",
  slug: "elegant-2bhk-lake-view-apartment-chennai-pallikaranai",
  description:
    "A beautifully designed 2BHK lake view apartment located in Pallikaranai, Chennai. Features modern interiors, semi-furnished setup, peaceful lake view, and excellent connectivity to IT corridors and city centers.",

  propertyType: "Apartment",
  listingType: "Residential",
  status: "For Sale",
  verifiedProperty: true,
  featured: false,
  premiumListing: true,

  price: {
    amount: 6800000,
    currency: "INR",
    pricePerSqft: 7000,
    negotiable: true,
    bookingAmount: 200000,
    maintenanceCharges: 3000
  },

  location: {
    address: "Pallikaranai Main Road",
    landmark: "Near Kamakshi Hospital",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    pincode: "600100",
    latitude: 12.9279,
    longitude: 80.2086,
    googleMapUrl: "https://maps.google.com/?q=12.9279,80.2086"
  },

  area: {
    totalSqft: 980,
    carpetSqft: 820,
    builtUpSqft: 900,
    plotAreaSqft: 0,
    unitType: "2BHK Apartment"
  },

  rooms: {
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    kitchen: 1,
    livingRoom: 1,
    diningRoom: 1,
    storeRoom: 0
  },

  furnishing: {
    status: "Semi Furnished",
    items: [
      "Modular Kitchen",
      "Wardrobes",
      "Fans",
      "Lights",
      "Geyser"
    ]
  },

  facing: "North",

  floorDetails: {
    totalFloors: 12,
    propertyOnFloor: 6,
    liftAvailable: true,
    unitsPerFloor: 6
  },

  parking: {
    car: 1,
    bike: 1,
    visitorParking: true,
    coveredParking: false
  },

  ageOfProperty: "4 Years",
  availability: "Immediate",
  possessionDate: "2026-05-20",
  constructionStatus: "Ready to Move",

  approvedBy: ["CMDA", "RERA Approved"],

  images: [
        "https://media.istockphoto.com/id/2242892404/photo/luxury-two-story-villa-with-modern-architectural-design-at-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=uISn4eFJ8CLe4e5rPbOZYUHGXlAtzuxtoI51GXf-740=",
    "https://media.istockphoto.com/id/2242892404/photo/luxury-two-story-villa-with-modern-architectural-design-at-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=uISn4eFJ8CLe4e5rPbOZYUHGXlAtzuxtoI51GXf-740=",
    "https://media.istockphoto.com/id/2197518289/photo/black-and-wooden-panels-modern-luxurious-villa-with-garden.jpg?s=612x612&w=0&k=20&c=rnOQ3N-1GGQ_Y3W7jh0hx_1_V4KnmZf6H21esyOW1k0=",
    "https://media.istockphoto.com/id/2242892404/photo/luxury-two-story-villa-with-modern-architectural-design-at-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=uISn4eFJ8CLe4e5rPbOZYUHGXlAtzuxtoI51GXf-740="
  ],

  videoTour: "https://example.com/videos/lake-tour.mp4",
  virtualTourUrl: "https://example.com/virtual-tour/prop-1006",

  amenities: [
    "Lake View",
    "Gym",
    "24/7 Security",
    "Children Play Area",
    "Power Backup",
    "Lift",
    "CCTV Surveillance",
    "Covered Parking",
    "Community Hall",
    "Rain Water Harvesting"
  ],

  nearbyPlaces: [
    { name: "Kamakshi Hospital", type: "Hospital", distance: "2 km" },
    { name: "Velachery IT Hub", type: "IT Park", distance: "5 km" },
    { name: "Phoenix Mall", type: "Mall", distance: "6 km" },
    { name: "Perungudi Station", type: "Transport", distance: "4 km" },
    { name: "Pallikaranai Marsh", type: "Nature", distance: "1 km" }
  ],

  owner: {
    name: "VS Property Vision",
    company: "VS Property Vision Pvt Ltd",
    contact: "+91 9876543210",
    email: "vs1606@gmail.com",
    verified: true,
    rating: 4.6
  },

  agent: {
    id: "AGT_106",
    name: "Senthil Kumar",
    role: "Property Consultant",
    phone: "+91 9000000000",
    email: "agent@vsproperty.com",
    experience: "4 Years",
    languages: ["Tamil", "English"],
    rating: 4.7,
    totalDeals: 110
  },

  seo: {
    metaTitle:
      "2BHK Lake View Apartment for Sale in Chennai Pallikaranai | Affordable Homes",
    metaDescription:
      "Buy premium 2BHK lake view apartment in Pallikaranai Chennai with modern amenities, peaceful environment, and great connectivity.",
    keywords: [
      "2BHK Chennai",
      "lake view apartment Chennai",
      "Pallikaranai flats",
      "budget apartments Chennai",
      "affordable homes Chennai"
    ]
  },

  analytics: {
    views: 980,
    uniqueViews: 750,
    likes: 260,
    shares: 70,
    inquiries: 30,
    savedByUsers: 110
  },

  reviews: [
    {
      user: "Vijay R",
      rating: 4,
      comment: "Peaceful location with good connectivity.",
      date: "2026-04-18"
    },
    {
      user: "Divya N",
      rating: 5,
      comment: "Nice lake view and well maintained apartment.",
      date: "2026-04-22"
    }
  ],

  documents: {
    reraCertificate: "https://example.com/docs/rera-1006.pdf",
    floorPlan: "https://example.com/docs/floorplan-1006.pdf",
    legalClearance: "https://example.com/docs/legal-1006.pdf"
  },

  socialShare: {
    facebook: true,
    whatsapp: true,
    twitter: true
  },

  createdAt: "2026-04-26T08:30:00Z",
  updatedAt: "2026-04-28T12:10:00Z",
  publishedAt: "2026-04-27T09:00:00Z"
},
{
  id: "PROP_1003",
  title: "Spacious 3BHK Garden View Apartment with Premium Amenities",
  slug: "spacious-3bhk-garden-view-apartment-chennai-velachery",
  description:
    "A spacious 3BHK garden view apartment located in Velachery, Chennai. Offers premium lifestyle living with landscaped gardens, modern interiors, and excellent connectivity to IT parks and shopping hubs.",

  propertyType: "Apartment",
  listingType: "Residential",
  status: "For Sale",
  verifiedProperty: true,
  featured: true,
  premiumListing: false,

  price: {
    amount: 9800000,
    currency: "INR",
    pricePerSqft: 7800,
    negotiable: true,
    bookingAmount: 300000,
    maintenanceCharges: 4000
  },

  location: {
    address: "Velachery Main Road",
    landmark: "Near Phoenix Market City",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    pincode: "600042",
    latitude: 12.9815,
    longitude: 80.218,
    googleMapUrl: "https://maps.google.com/?q=12.9815,80.218"
  },

  area: {
    totalSqft: 1450,
    carpetSqft: 1250,
    builtUpSqft: 1350,
    plotAreaSqft: 0,
    unitType: "3BHK Apartment"
  },

  rooms: {
    bedrooms: 3,
    bathrooms: 2,
    balconies: 2,
    kitchen: 1,
    livingRoom: 1,
    diningRoom: 1,
    storeRoom: 1
  },

  furnishing: {
    status: "Semi Furnished",
    items: [
      "Modular Kitchen",
      "Wardrobes",
      "Fans",
      "Lights",
      "Geyser",
      "TV Unit"
    ]
  },

  facing: "West",

  floorDetails: {
    totalFloors: 14,
    propertyOnFloor: 7,
    liftAvailable: true,
    unitsPerFloor: 5
  },

  parking: {
    car: 1,
    bike: 2,
    visitorParking: true,
    coveredParking: true
  },

  ageOfProperty: "6 Years",
  availability: "Immediate",
  possessionDate: "2026-05-25",
  constructionStatus: "Ready to Move",

  approvedBy: ["CMDA", "RERA Approved"],

  images: [
    "https://media.istockphoto.com/id/174071742/photo/ranthambhore-np-in-rajasthan-india.jpg?s=612x612&w=0&k=20&c=qlLo18mGCbn1u5kpKjPNoQXpZrB1v0fbJ4p2l8aVqsw=",
    "https://media.istockphoto.com/id/157732706/photo/ranthambhore-np-in-rajasthan-india.jpg?s=612x612&w=0&k=20&c=y4wklV412KjItFSjq75g-cM78rK5Jezn8PyI82LsCgk=",
    "https://media.istockphoto.com/id/175402131/photo/ranthambhore-np-in-rajasthan-india.jpg?s=612x612&w=0&k=20&c=L9a3XY0kWjSZC9M19WUFH19n0ELj6pHwyDBb8Ipawes=",
    "https://media.istockphoto.com/id/175391091/photo/ranthambhore-np-in-rajasthan-india.jpg?s=612x612&w=0&k=20&c=86MVH1uCNFXO9WRlJ78U7dYPxGNkcKSyQm0ekyEj5zc=",
    "https://media.istockphoto.com/id/175392423/photo/ranthambhore-np-in-rajasthan-india.jpg?s=612x612&w=0&k=20&c=Ht7KVmtWrr3qRjOVKJUyUlCkaysviuGBFTSZg4H3Y28="
  ],

  videoTour: "https://example.com/videos/vel-tour.mp4",
  virtualTourUrl: "https://example.com/virtual-tour/prop-1007",

  amenities: [
    "Garden View",
    "Gym",
    "24/7 Security",
    "Children Play Area",
    "Power Backup",
    "Lift",
    "CCTV Surveillance",
    "Covered Parking",
    "Jogging Track",
    "Club House"
  ],

  nearbyPlaces: [
    { name: "Phoenix Market City", type: "Mall", distance: "2 km" },
    { name: "Velachery Railway Station", type: "Transport", distance: "3 km" },
    { name: "Gandhi Hospital", type: "Hospital", distance: "4 km" },
    { name: "Tidel Park", type: "IT Park", distance: "5 km" },
    { name: "Guindy National Park", type: "Nature", distance: "6 km" }
  ],

  owner: {
    name: "VS Property Vision",
    company: "VS Property Vision Pvt Ltd",
    contact: "+91 9876543210",
    email: "vs1606@gmail.com",
    verified: true,
    rating: 4.7
  },

  agent: {
    id: "AGT_107",
    name: "Senthil Kumar",
    role: "Senior Property Consultant",
    phone: "+91 9000000000",
    email: "agent@vsproperty.com",
    experience: "5 Years",
    languages: ["Tamil", "English"],
    rating: 4.8,
    totalDeals: 135
  },

  seo: {
    metaTitle:
      "3BHK Garden View Apartment for Sale in Chennai Velachery | Premium Homes",
    metaDescription:
      "Buy spacious 3BHK apartment in Velachery Chennai with garden view, premium amenities, and excellent connectivity.",
    keywords: [
      "3BHK Velachery",
      "garden view apartment Chennai",
      "Velachery flats for sale",
      "premium apartments Chennai",
      "Chennai residential flats"
    ]
  },

  analytics: {
    views: 1100,
    uniqueViews: 860,
    likes: 310,
    shares: 95,
    inquiries: 38,
    savedByUsers: 140
  },

  reviews: [
    {
      user: "Sathish K",
      rating: 4,
      comment: "Good location and spacious rooms.",
      date: "2026-04-19"
    },
    {
      user: "Nivetha P",
      rating: 5,
      comment: "Very peaceful environment and well maintained property.",
      date: "2026-04-24"
    }
  ],

  documents: {
    reraCertificate: "https://example.com/docs/rera-1007.pdf",
    floorPlan: "https://example.com/docs/floorplan-1007.pdf",
    legalClearance: "https://example.com/docs/legal-1007.pdf"
  },

  socialShare: {
    facebook: true,
    whatsapp: true,
    twitter: true
  },

  createdAt: "2026-04-27T08:00:00Z",
  updatedAt: "2026-04-28T12:30:00Z",
  publishedAt: "2026-04-28T09:00:00Z"
},
 {
  id: "PROP_1004",
  title: "Compact 1BHK Studio Apartment Near IT Corridor",
  slug: "compact-1bhk-studio-apartment-chennai-perungudi",
  description:
    "A modern compact 1BHK studio apartment located in Perungudi, Chennai. Perfect for IT professionals and students, offering smart space utilization, modern interiors, and excellent connectivity to major IT parks.",

  propertyType: "Apartment",
  listingType: "Residential",
  status: "For Sale",
  verifiedProperty: true,
  featured: false,
  premiumListing: false,

  price: {
    amount: 4200000,
    currency: "INR",
    pricePerSqft: 6500,
    negotiable: true,
    bookingAmount: 150000,
    maintenanceCharges: 2500
  },

  location: {
    address: "Perungudi Industrial Estate Road",
    landmark: "Near RMZ Millenia IT Park",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    pincode: "600096",
    latitude: 12.9698,
    longitude: 80.2463,
    googleMapUrl: "https://maps.google.com/?q=12.9698,80.2463"
  },

  area: {
    totalSqft: 650,
    carpetSqft: 550,
    builtUpSqft: 600,
    plotAreaSqft: 0,
    unitType: "1BHK Studio Apartment"
  },

  rooms: {
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
    kitchen: 1,
    livingRoom: 1,
    diningRoom: 0,
    storeRoom: 0
  },

  furnishing: {
    status: "Fully Furnished",
    items: [
      "Bed with Mattress",
      "Wardrobe",
      "Study Table",
      "AC",
      "Mini Kitchen Setup",
      "Geyser",
      "Chair Set"
    ]
  },

  facing: "South",

  floorDetails: {
    totalFloors: 8,
    propertyOnFloor: 3,
    liftAvailable: true,
    unitsPerFloor: 10
  },

  parking: {
    car: 0,
    bike: 1,
    visitorParking: true,
    coveredParking: false
  },

  ageOfProperty: "2 Years",
  availability: "Immediate",
  possessionDate: "2026-05-30",
  constructionStatus: "Ready to Move",

  approvedBy: ["CMDA", "RERA Approved"],

  images: [
    "https://plus.unsplash.com/premium_photo-1757976211084-0af08f46da96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1757976211084-0af08f46da96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1686782502720-fcbb821e3bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1686782502385-2de1281e9b0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
  ],

  videoTour: "https://example.com/videos/studio-tour.mp4",
  virtualTourUrl: "https://example.com/virtual-tour/prop-1008",

  amenities: [
    "WiFi Enabled",
    "Gym",
    "24/7 Security",
    "Lift",
    "Power Backup",
    "CCTV Surveillance",
    "Laundry Service",
    "Common Workspace"
  ],

  nearbyPlaces: [
    { name: "RMZ Millenia", type: "IT Park", distance: "1 km" },
    { name: "Tidel Park", type: "IT Park", distance: "3 km" },
    { name: "Phoenix Market City", type: "Mall", distance: "4 km" },
    { name: "Perungudi Railway Station", type: "Transport", distance: "2 km" },
    { name: "Apollo Hospital", type: "Hospital", distance: "5 km" }
  ],

  owner: {
    name: "VS Property Vision",
    company: "VS Property Vision Pvt Ltd",
    contact: "+91 9876543210",
    email: "vs1606@gmail.com",
    verified: true,
    rating: 4.6
  },

  agent: {
    id: "AGT_108",
    name: "Senthil Kumar",
    role: "Property Consultant",
    phone: "+91 9000000000",
    email: "agent@vsproperty.com",
    experience: "4 Years",
    languages: ["Tamil", "English"],
    rating: 4.7,
    totalDeals: 90
  },

  seo: {
    metaTitle:
      "1BHK Studio Apartment for Sale in Chennai Perungudi | Affordable Homes Near IT Park",
    metaDescription:
      "Buy compact 1BHK studio apartment in Perungudi Chennai with modern amenities and excellent IT corridor connectivity.",
    keywords: [
      "1BHK Chennai",
      "studio apartment Perungudi",
      "budget flats Chennai",
      "IT corridor apartments",
      "affordable homes Chennai"
    ]
  },

  analytics: {
    views: 760,
    uniqueViews: 600,
    likes: 180,
    shares: 45,
    inquiries: 22,
    savedByUsers: 85
  },

  reviews: [
    {
      user: "Rahul D",
      rating: 4,
      comment: "Compact and perfect for working professionals.",
      date: "2026-04-20"
    },
    {
      user: "Anjali M",
      rating: 5,
      comment: "Great location near IT parks and very affordable.",
      date: "2026-04-25"
    }
  ],

  documents: {
    reraCertificate: "https://example.com/docs/rera-1008.pdf",
    floorPlan: "https://example.com/docs/floorplan-1008.pdf",
    legalClearance: "https://example.com/docs/legal-1008.pdf"
  },

  socialShare: {
    facebook: true,
    whatsapp: true,
    twitter: true
  },

  createdAt: "2026-04-28T08:00:00Z",
  updatedAt: "2026-04-28T12:45:00Z",
  publishedAt: "2026-04-28T09:30:00Z"
},
{
  id: "PROP_1005",
  title: "Luxury 4BHK Duplex Apartment with Skyline View",
  slug: "luxury-4bhk-duplex-apartment-chennai-adyar-skyline",
  description:
    "A premium 4BHK duplex apartment located in Adyar, Chennai with stunning skyline views, modern interiors, smart home automation, and spacious living designed for luxury urban lifestyle.",

  propertyType: "Apartment",
  listingType: "Residential",
  status: "For Sale",
  verifiedProperty: true,
  featured: true,
  premiumListing: true,

  price: {
    amount: 19500000,
    currency: "INR",
    pricePerSqft: 9200,
    negotiable: false,
    bookingAmount: 750000,
    maintenanceCharges: 6000
  },

  location: {
    address: "Adyar Main Road",
    landmark: "Near Adyar Bridge",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    pincode: "600020",
    latitude: 13.0067,
    longitude: 80.2575,
    googleMapUrl: "https://maps.google.com/?q=13.0067,80.2575"
  },

  area: {
    totalSqft: 2100,
    carpetSqft: 1850,
    builtUpSqft: 2000,
    plotAreaSqft: 0,
    unitType: "4BHK Duplex Apartment"
  },

  rooms: {
    bedrooms: 4,
    bathrooms: 4,
    balconies: 3,
    kitchen: 1,
    livingRoom: 2,
    diningRoom: 1,
    storeRoom: 1
  },

  furnishing: {
    status: "Fully Furnished",
    items: [
      "Italian Modular Kitchen",
      "Smart Home Automation System",
      "Luxury Sofa Set",
      "Wardrobes",
      "Central AC",
      "Designer Lighting",
      "Premium Dining Set"
    ]
  },

  facing: "North-East",

  floorDetails: {
    totalFloors: 18,
    propertyOnFloor: 16,
    liftAvailable: true,
    unitsPerFloor: 2
  },

  parking: {
    car: 2,
    bike: 3,
    visitorParking: true,
    coveredParking: true
  },

  ageOfProperty: "2 Years",
  availability: "Immediate",
  possessionDate: "2026-06-10",
  constructionStatus: "Ready to Move",

  approvedBy: ["CMDA", "RERA Approved", "DTCP Approved"],

  images: [
    "https://plus.unsplash.com/premium_photo-1733760125474-0cf0d3aac257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1733760125434-f6cff2d230aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1733760125442-efad43dd88c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1733760125038-06564d0a4568?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1734545294051-9a138d4ff323?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
  ],

  videoTour: "https://example.com/videos/duplex-tour.mp4",
  virtualTourUrl: "https://example.com/virtual-tour/prop-1009",

  amenities: [
    "Skyline View",
    "Infinity Pool",
    "Gym",
    "24/7 Security",
    "Smart Home System",
    "Club House",
    "High-Speed Elevator",
    "CCTV Surveillance",
    "Power Backup",
    "Private Terrace"
  ],

  nearbyPlaces: [
    { name: "Adyar River Bridge", type: "Landmark", distance: "0.5 km" },
    { name: "Besant Nagar Beach", type: "Beach", distance: "3 km" },
    { name: "Anna University", type: "Education", distance: "2 km" },
    { name: "Apollo Hospital", type: "Hospital", distance: "4 km" },
    { name: "Tidel Park", type: "IT Park", distance: "5 km" }
  ],

  owner: {
    name: "VS Property Vision",
    company: "VS Property Vision Pvt Ltd",
    contact: "+91 9876543210",
    email: "vs1606@gmail.com",
    verified: true,
    rating: 4.8
  },

  agent: {
    id: "AGT_109",
    name: "Senthil Kumar",
    role: "Luxury Property Consultant",
    phone: "+91 9000000000",
    email: "agent@vsproperty.com",
    experience: "6 Years",
    languages: ["Tamil", "English"],
    rating: 4.9,
    totalDeals: 160
  },

  seo: {
    metaTitle:
      "Luxury 4BHK Duplex Apartment for Sale in Chennai Adyar | Skyline View Homes",
    metaDescription:
      "Buy premium 4BHK duplex apartment in Adyar Chennai with skyline view, luxury interiors, and smart home features.",
    keywords: [
      "4BHK duplex Chennai",
      "Adyar luxury apartment",
      "skyline view Chennai flats",
      "premium homes Adyar",
      "luxury apartments Chennai"
    ]
  },

  analytics: {
    views: 1850,
    uniqueViews: 1500,
    likes: 620,
    shares: 190,
    inquiries: 78,
    savedByUsers: 280
  },

  reviews: [
    {
      user: "Manoj K",
      rating: 5,
      comment: "Excellent duplex with amazing city view.",
      date: "2026-04-23"
    },
    {
      user: "Swathi R",
      rating: 5,
      comment: "Very premium and spacious, loved the interiors.",
      date: "2026-04-26"
    }
  ],

  documents: {
    reraCertificate: "https://example.com/docs/rera-1009.pdf",
    floorPlan: "https://example.com/docs/floorplan-1009.pdf",
    legalClearance: "https://example.com/docs/legal-1009.pdf"
  },

  socialShare: {
    facebook: true,
    whatsapp: true,
    twitter: true
  },

  createdAt: "2026-04-28T09:15:00Z",
  updatedAt: "2026-04-28T13:00:00Z",
  publishedAt: "2026-04-28T10:00:00Z"
}
];

export default properties;