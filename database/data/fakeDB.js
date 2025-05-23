const fakeUsers = [
  {
    id: 1,
    name: "Alice Johnson",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    brief: "Front-end developer with a passion for UI/UX design.",
    contact: {
      email: "alice.johnson@example.com",
      phone: "+1-555-123-4567",
      location: "New York, USA",
      latitude: 40.7128,
      longitude: -74.0060
    },
    interests: ["Design", "React", "Photography"]
  },
  {
    id: 2,
    name: "Bob Smith",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    brief: "Full-stack developer who loves open-source projects.",
    contact: {
      email: "bob.smith@example.com",
      phone: "+1-555-234-5678",
      location: "San Francisco, USA",
      latitude: 37.7749,
      longitude: -122.4194
    },
    interests: ["Node.js", "GitHub", "Hiking"]
  },
  {
    id: 3,
    name: "Clara Lee",
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
    brief: "Data scientist focused on machine learning and AI.",
    contact: {
      email: "clara.lee@example.com",
      phone: "+1-555-345-6789",
      location: "Boston, USA",
      latitude: 42.3601,
      longitude: -71.0589
    },
    interests: ["Machine Learning", "Python", "Travel"]
  },
  {
    id: 4,
    name: "David Kim",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
    brief: "Cybersecurity expert with a background in networks.",
    contact: {
      email: "david.kim@example.com",
      phone: "+1-555-456-7890",
      location: "Seattle, USA",
      latitude: 47.6062,
      longitude: -122.3321
    },
    interests: ["Security", "Linux", "Chess"]
  },
  {
    id: 5,
    name: "Eva Brown",
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
    brief: "Product manager with a love for innovation and teams.",
    contact: {
      email: "eva.brown@example.com",
      phone: "+1-555-567-8901",
      location: "Chicago, USA",
      latitude: 41.8781,
      longitude: -87.6298
    },
    interests: ["Agile", "Leadership", "Books"]
  },
  {
    id: 6,
    name: "Franklin Adams",
    photo: "https://randomuser.me/api/portraits/men/6.jpg",
    brief: "Mobile app developer building cross-platform apps.",
    contact: {
      email: "frank.adams@example.com",
      phone: "+1-555-678-9012",
      location: "Austin, USA",
      latitude: 30.2672,
      longitude: -97.7431
    },
    interests: ["Flutter", "Dart", "Gaming"]
  },
  {
    id: 7,
    name: "Grace Turner",
    photo: "https://randomuser.me/api/portraits/women/7.jpg",
    brief: "Marketing specialist and digital strategy consultant.",
    contact: {
      email: "grace.turner@example.com",
      phone: "+1-555-789-0123",
      location: "Denver, USA",
      latitude: 39.7392,
      longitude: -104.9903
    },
    interests: ["SEO", "Content Marketing", "Running"]
  },
  {
    id: 8,
    name: "Henry Walker",
    photo: "https://randomuser.me/api/portraits/men/8.jpg",
    brief: "DevOps engineer automating everything.",
    contact: {
      email: "henry.walker@example.com",
      phone: "+1-555-890-1234",
      location: "Los Angeles, USA",
      latitude: 34.0522,
      longitude: -118.2437
    },
    interests: ["Docker", "Kubernetes", "Cycling"]
  },
  {
    id: 9,
    name: "Isabella Martinez",
    photo: "https://randomuser.me/api/portraits/women/9.jpg",
    brief: "UI designer crafting beautiful experiences.",
    contact: {
      email: "isabella.martinez@example.com",
      phone: "+1-555-901-2345",
      location: "Miami, USA",
      latitude: 25.7617,
      longitude: -80.1918
    },
    interests: ["Figma", "Illustration", "Dancing"]
  },
  {
    id: 10,
    name: "Jake Wilson",
    photo: "https://randomuser.me/api/portraits/men/10.jpg",
    brief: "Back-end engineer working on scalable systems.",
    contact: {
      email: "jake.wilson@example.com",
      phone: "+1-555-012-3456",
      location: "Dallas, USA",
      latitude: 32.7767,
      longitude: -96.7970
    },
    interests: ["Java", "Databases", "Sci-Fi"]
  },
  {
    id: 11,
    name: "Kelly Brooks",
    photo: "https://randomuser.me/api/portraits/women/11.jpg",
    brief: "Technical writer making complex things simple.",
    contact: {
      email: "kelly.brooks@example.com",
      phone: "+1-555-123-9876",
      location: "Portland, USA",
      latitude: 45.5051,
      longitude: -122.6750
    },
    interests: ["Writing", "Documentation", "Gardening"]
  },
  {
    id: 12,
    name: "Leo Garcia",
    photo: "https://randomuser.me/api/portraits/men/12.jpg",
    brief: "AI researcher exploring NLP and computer vision.",
    contact: {
      email: "leo.garcia@example.com",
      phone: "+1-555-234-8765",
      location: "Atlanta, USA",
      latitude: 33.7490,
      longitude: -84.3880
    },
    interests: ["Deep Learning", "NLP", "Movies"]
  },
  {
    id: 13,
    name: "Mia Clark",
    photo: "https://randomuser.me/api/portraits/women/13.jpg",
    brief: "UX researcher uncovering user insights.",
    contact: {
      email: "mia.clark@example.com",
      phone: "+1-555-345-7654",
      location: "Philadelphia, USA",
      latitude: 39.9526,
      longitude: -75.1652
    },
    interests: ["Research", "Prototyping", "Yoga"]
  },
  {
    id: 14,
    name: "Noah Davis",
    photo: "https://randomuser.me/api/portraits/men/14.jpg",
    brief: "Cloud architect designing distributed systems.",
    contact: {
      email: "noah.davis@example.com",
      phone: "+1-555-456-6543",
      location: "Phoenix, USA",
      latitude: 33.4484,
      longitude: -112.0740
    },
    interests: ["AWS", "Microservices", "Basketball"]
  },
  {
    id: 15,
    name: "Olivia White",
    photo: "https://randomuser.me/api/portraits/women/15.jpg",
    brief: "QA engineer ensuring product quality at scale.",
    contact: {
      email: "olivia.white@example.com",
      phone: "+1-555-567-5432",
      location: "Houston, USA",
      latitude: 29.7604,
      longitude: -95.3698
    },
    interests: ["Testing", "Automation", "Painting"]
  }
];

module.exports = fakeUsers;
