export interface Team {
  name: string;
  description: string;
  image: string;
  teamImage: string;
  members?: {
    executive?: {
      name: string;
      position: string;
      image?: string;
    }[];
    general?: {
      name: string;
    }[];
  };
}

export const teams: Team[] = [
  {
    name: 'BOOKING',
    description:
      "The Booking committee books the Dillo Day mainstage lineup. Members work directly with talent agencies, write offers, negotiate prices, and handle contracts for all of the Dillo Day artists. Booking's main goal is to create a diverse, representative festival lineup that appeals to the Northwestern community and brings out the greatest number of students to the lakefill. The Booking Committee plays a major role in making Dillo Day a memorable experience for the entire student body.",
    image: '/img/booking.jpg',
    teamImage: '/img/booking-team.jpg',
    members: {
      executive: [
        {
          name: 'Nathan Dent',
          position: '2024 Booking Director',
        },
      ],
      general: [
        { name: 'Payton Marino' },
        { name: 'Timia Quincy McCoade' },
        { name: 'Rachana Aluri' },
        { name: 'Sebastian Huerta' },
        { name: 'Avalon Bookstaver' },
        { name: 'Mariam Fofana' },
      ],
    },
  },
  {
    name: 'COMMUNITY',
    description:
      "The Community committee's primary responsibility remains integrating diversity, inclusion, and wellness best practices throughout the organization. Pointedly, the committee facilitates quarterly cultural awareness trainings and internal wellness forums to cultivate a welcoming environment in the organization and ensure the wellbeing of the organization's members. Additionally, the committee aids the Promotions committee in developing recruitment initiatives to reach untapped segments of Northwestern's campus.",
    image: '/img/community.jpg',
    teamImage: '/img/community-team.jpg',

    members: {
      executive: [
        {
          name: 'Eleanor Dempsey',
          position: '2024 Community Co-Director',
        },
        {
          name: 'Emma Kogan',
          position: '2024 Community Co-Director',
          image: '/img/emmak.jpg'
        },
      ],
      general: [
        { name: 'Payton DiSario' },
        { name: 'Anya Bardach' },
        { name: 'Danielle Nevett' },
        { name: 'Risha Hussain' },
        { name: 'Sakina Husein' },
        { name: 'Rukevwe Alade' },
      ],
    },
  },
  {
    name: 'CORPORATE',
    description:
      'The Corporate committee is in charge of securing sponsored-based funding; partnering with on-campus, local, and national organizations. All funds raised by the Corporate Committee go directly to improving the quality of artists and the Dillo Day festival experience. The Corporate Committee builds professional-grade pitch decks, communicates with sponsors, and works with other Mayfest committees to implement sponsorship agreements. They also manage the food vendors at Dillo Day.',
    image: '/img/corporate.jpg',
    teamImage: '/img/corporate-team.jpg',
    members: {
      executive: [
        {
          name: 'Ali Lee',
          position: '2024 Corporate Director',
        },
        {
          name: 'Tyler Keim',
          position: '2024 Corporate Director',
        },
      ],
      general: [
        { name: 'Olivia (Liv) Clark' },
        { name: 'Adam Valiji' },
        { name: 'Grace Shao' },
        { name: 'Morrie Schonfield' },
        { name: 'Gio Cacciato' },
        { name: 'Jonathan Lee' },
      ],
    },
  },
  {
    name: 'FINANCE',
    description:
      "The Finance committee manages the budget of one of the largest financially-backed student organizations at Northwestern University. The committee works closely with all of Mayfest's committees and Northwestern financial administrators to facilitate the allocation of funds for all aspects of Dillo Day. Finance is responsible for obtaining the majority of funding and ensuring all payments are made accurately and on-time. Additionally, the committee is working towards more data/statistics related projects on a sub-committee that would benefit Mayfest as a whole.",
    image: '/img/finance.jpg',
    teamImage: '/img/finance-team.jpg',
    members: {
      executive: [
        {
          name: 'Aimee Chooi',
          position: '2024 Finance Co-Director',
          image: '/img/aimee.jpg',
        },
        {
          name: 'Zander Sy',
          position: '2024 Finance Co-Director',
        },
      ],
      general: [{ name: 'Quinn Shumway' }, { name: 'Luke Fosdick' }],
    },
  },
  {
    name: 'OPERATIONS',
    description:
      'The Operations committee serves as the primary liaison between Mayfest and Northwestern administration for the biggest and most logistically challenging event of the year. The committee works closely with NUPD, the Norris Student Center, the Neighborhood and Community Relations Office, and ambulance services to design, implement, and oversee the Dillo Day security plan, coordinate school-wide wristband distribution and admission, and create an entertaining and safe environment for the Beer Garden. Additionally, Operations has recently prioritized a new safety and wellness initiative focusing on student-led de-escalation tactics and drug overdose mitigation while pushing sustainability a new priority of the festival.',
    image: '/img/operations.jpg',
    teamImage: '/img/operations-team.jpg',
    members: {
      executive: [
        {
          name: 'Natalie Gurganus',
          position: '2024 Operations Co-Director',
        },
        {
          name: 'Chloe Coenraets',
          position: '2024 Operations Co-Director',
        },
      ],
      general: [
        { name: 'Sam Albright' },
        { name: 'Emiliano Ghislieri' },
        { name: 'Gabby Garcia' },
        { name: 'Marina Shirky' },
        { name: 'Jing Xi Yap' },
        { name: 'Shae Lake' },
        { name: 'Adam Durr' },
        { name: 'Brendan Howard' },
      ],
    },
  },
  {
    name: 'PRODUCTION',
    description:
      "The Production committee is instrumental in planning and executing the logistics of Dillo Day. The committee handles every aspect of producing a professional-grade music festival, which takes on a range of duties such as: coordinating staging, video/lights, fencing and tents; managing artist contracts, performances and all related aspects of the musical acts' Dillo Day experience; and working with outside vendors, artist agents, university administration, and other Mayfest committees to ensure that Dillo Day goes off without a hitch.",
    image: '/img/production.jpg',
    teamImage: '/img/production-team.jpg',
    members: {
      executive: [
        {
          name: 'Keyanna Adams',
          position: '2024 Executive Producer',
          image: '/img/keyanna.jpg',
        },
        {
          name: 'Ethan Sterling',
          position: '2024 Executive Producer',
          image: '/img/ethans.jpg',
        },
      ],
      general: [
        { name: 'Irem Ozsavasci' },
        { name: 'Connor Capoot' },
        { name: 'Emma Brown' },
        { name: 'Asha Buerk' },
        { name: 'Jack Ryzenman' },
        { name: 'Keya Umesh' },
        { name: 'Rishi Shah' },
        { name: 'Yaewon Woo' },
        { name: 'Grace Herzog' },
      ],
    },
  },
  {
    name: 'PROGRAMMING',
    description:
      'The Programming committee plans and executes various music-related events throughout the year bringing together the efforts of all Mayfest committees. In previous years, events have included Battle of the Bands, Battle of the DJs, a week of programming preceding Dillo Day, and many more. Additionally, the committee is in charge of the Lakefill Programming during the festival including local vendors, carnival games, and student art. Programming elevates Dillo Day from beyond a music festival to an immersive experience. The aim of the committee is to creatively engage and excite both the campus and Mayfest leading up to and throughout Dillo Day.',
    image: '/img/programming.jpg',
    teamImage: '/img/programming-team.jpg',

    members: {
      executive: [
        {
          name: 'Catherine (Cat) Johnston',
          position: '2024 Programming Director',
          image: '/img/catherine.jpg'
        },
      ],
      general: [
        { name: 'Luke Incardona' },
        { name: 'Joel Reyes' },
        { name: 'Caryl Shepard' },
        { name: 'Autumn Grieb' },
        { name: 'Anais Duewel' },
      ],
    },
  },
  {
    name: 'PROMOTIONS',
    description:
      "The Promotions committee is responsible for designing and distributing all promotional materials pertaining to Mayfest Productions and Dillo Day. Pointedly, the committee executes all artist announcements, creates merchandise and digital content, and produces marketing campaigns for Mayfest events. Promo engages and interacts with the student body through our social media pages and manages the virtual presence of the organization and music festival. Ultimately, the committee's primary goal is to create and maintain a cohesive brand image for both Mayfest and Dillo Day and relay exciting updates about our work to the greater student body.",
    image: '/img/promotions.jpg',
    teamImage: '/img/promotions-team.jpg',
    members: {
      executive: [
        {
          name: 'Seeley McGillis',
          position: '2024 Promotions Co-Director',
        },
        {
          name: 'Felipe Reis Maccari',
          position: '2024 Promotions Co-Director',
        },
      ],
      general: [
        { name: 'Annabel Goldman' },
        { name: 'Glorietta Arthoro' },
        { name: 'Lee Ekong' },
        { name: 'Anoushka Dasgupta' },
        { name: 'Joss Broward' },
        { name: 'Alicia Gu' },
      ],
    },
  },
  {
    name: 'TECHNOLOGY',
    description:
      "The Tech Team Committee develops everything from the website you are on now to the mobile app and virtual performance live-stream. The committee's role is to make sure that every element of Dillo Day is accessible, engaging, and creative! The Tech Team's primary goal is to utilize technology in order to create a more inclusive, safe, and enjoyable Dillo Day experience. Every year, the Tech Team adds new features to their mobile application, such as the interactive festival map and lineup, in order to ensure the best festival experience.",
    image: '/img/tech.jpg',
    teamImage: '/img/tech-team.jpg',
    members: {
      executive: [
        {
          name: 'Ethan Pineda',
          position: '2024 Tech Director',
        },
      ],
      general: [
        { name: 'Eduardo Ramos' },
        { name: 'Vivian Chen' },
        { name: 'David Fu' },
        { name: 'Cate Rose' },
      ],
    },
  },
  {
    name: 'CO-CHAIRS & GENERAL BOARD',
    description:
      "The General Board is led by the two co-chairs of Mayfest Productions. The committee referred to as Gen Board is comprised of first year and second year students who shadow other committees in the winter and spring quarters to better integrate themselves into the Mayfest community and get exposure to the responsibilities they would have as a committee member. Typically, Gen Board members have returned the following year as a committee member of one of the groups they shadowed. Ultimately, membership on this committee serves as a great way to bolster one's knowledge about the organization and its many functions.",
    image: '/img/general-board.jpg',
    teamImage: '/img/general-board-team.jpg',
    members: {
      executive: [
        {
          name: 'Defne Deda',
          position: 'Mayfest Co-Chair',
          image: '/img/defne.jpg',
        },
        {
          name: 'Alexandra Kahn',
          position: 'Mayfest Co-Chair',
          image: '/img/alexandra.jpg',
        },
      ],
      general: [{ name: 'Coming Soon!' }],
    },
  },
];
