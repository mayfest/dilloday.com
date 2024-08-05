export interface HistoricalEvent {
  year: string;
  date: string;
  description: string;
  image: string;
  artists?: {
    stage: string;
    names: string[];
  }[];
}

export const history: HistoricalEvent[] = [
  {
    year: '2012',
    date: 'May 26, 2012',
    description:
      'Dillo 2012 was experienced on May 26, 2012. Mayfest and WNUR brought a star-studded Main Stage lineup of Steve Aoki, Big Boi, Reel Big Fish, Kendrick Lamar, and Cold War Kids, all artists who would soon go on to dominate the music industry.',
    image: '/img/dillo-2012.jpg',
    artists: [
      {
        stage: 'Main Stage',
        names: [
          'Cold War Kids',
          'Kendrick Lamar',
          'Reel Big Fish',
          'Big Boi',
          'Steve Aoki',
        ],
      },
    ],
  },
  {
    year: '2013',
    date: 'June 1, 2013',
    description:
      'Dillo 2013 took place on June 1, 2013 featuring an electric performances by Wiz Khalifa, Lunice, Smash Mouth, Danny Brown, and Walk the Moon.',
    image: '/img/dillo-2013.jpg',
    artists: [
      {
        stage: 'Main Stage',
        names: [
          'Walk the Moon',
          'Danny Brown',
          'Smash Mouth',
          'Lunice',
          'Wiz Khalifa',
        ],
      },
    ],
  },
  {
    year: '2014',
    date: 'May 31, 2014',
    description:
      "Dillo 2014 came to life on May 31, 2014 when 2 Chainz, Ryan Hemsworth, Cults, Chance the Rapper, and OK Go all brought their talents to the Lakefill's Main Stage.",
    image: '/img/dillo-2014.jpg',
    artists: [
      {
        stage: 'Main Stage',
        names: [
          '2 Chainz',
          'Ryan Hemsworth',
          'Cults',
          'Chance the Rapper',
          'OK Go',
        ],
      },
      {
        stage: 'WNUR x IndieU Stage',
        names: [
          'Tink',
          'The GTW',
          'Sirr Tmo',
          'Teen Witch Fan Club',
          'RUNNING',
        ],
      },
    ],
  },
  {
    year: '2015',
    date: 'May 30, 2015',
    description:
      'Dillo 2015 was planned for May 30, 2015 with Miguel, Odesza, Charli XCX, A$AP Ferg, and Saint Motel scheduled to perform on the Main Stage. Unfortunately, Dillo 2015 was canceled due to weather.',
    image: '/img/dillo-2015.jpg',
    artists: [
      {
        stage: 'Main Stage',
        names: ['Charli XCX', 'Odesza', 'Miguel', 'A$AP Ferg', 'Saint Motel'],
      },
      {
        stage: 'WNUR Stage',
        names: [
          'Sicko Mobb',
          'Cakes da Killa',
          'Ben Aqua',
          'Archie Powell & The Exports',
          'K Rizz',
        ],
      },
    ],
  },
  {
    year: '2016',
    date: 'May 21, 2016',
    description:
      "Dillo 2016 was celebrated on May 21, 2016. Mayfest and WNUR brought a number of artists with Main Stage performers Schoolboy Q, Cashmere Cat, Hayden James (DJ Set), Anderson .Paak & The Free Nationals, and The Mowgli's, Nongshim x WNUR Stage performers Marie Davidson, MikeQ, Downtown Boys, Chynna Rogers, and Bunny, and student performers/winners of Battle of the Bands and Battle of the DJs, respectively, Onnij x Ouyang and Prez Harris & Friends.",
    image: '/img/dillo-2016.jpg',
    artists: [
      {
        stage: 'Main Stage',
        names: [
          'Schoolboy Q',
          'Cashmere Cat',
          'Hayden James (DJ Set)',
          'Anderson .Paak & The Free Nationals',
          "The Mowgli's",
        ],
      },
      {
        stage: 'WNUR Stage',
        names: [
          'Derrick Carter',
          'Smino',
          'Mister Wallace',
          'Colleen Green',
          'Akenya',
        ],
      },
    ],
  },
  {
    year: '2017',
    date: 'May 20, 2017',
    description:
      'Dillo 2017 was celebrated on May 20, 2017. Mayfest and WNUR brought a number of artists with Main Stage performers MGMT, Gramatik, Little Simz, D.R.A.M. feat Daf, and Porches, Nongshim x WNUR Stage performers Marie Davidson, MikeQ, Downtown Boys, Chynna Rogers, and Bunny, and student performers/winners of Battle of the Bands and Battle of the DJs, respectively, Onnij x Ouyang and Prez Harris & Friends.',
    image: '/img/dillo-2017.jpg',
    artists: [
      {
        stage: 'Main Stage',
        names: [
          'MGMT',
          'Gramatik',
          'Little Simz',
          'D.R.A.M. feat Daf',
          'Porches',
        ],
      },
      {
        stage: 'WNUR x Nongshim Stage',
        names: [
          'Marie Davidson',
          'MikeQ',
          'Downtown Boys',
          'Chynna Rogers',
          'Bunny',
        ],
      },
    ],
  },
  {
    year: '2018',
    date: 'June 2, 2018',
    description:
      'On May 31, 2018, Mayfest and WNUR collaborated to bring Dillo 2018 to the campus. The lineup included a number of artists with Postmates Main Stage performers YOUNG THE GIANT, Joey Bada$$, Daniel Caesar, Whitney, and TOKiMONSTA, Nongshim x WNUR Second Stage performers Dos Santos, Violence, Jasmine Infiniti, Cupcakke, and Guerilla Toss, and student performers/winners of Battle of the Bands and Battle of the DJs, respectively, Wop St. Bass Ritual and EJ3.',
    image: '/img/dillo-2018.jpg',
    artists: [
      {
        stage: 'Main Stage',
        names: [
          'YOUNG THE GIANT',
          'Joey Bada$$',
          'Daniel Caesar',
          'Whitney',
          'TOKiMONSTA',
        ],
      },
      {
        stage: 'WNUR x Nongshim Stage',
        names: [
          'Cupcakke',
          'Dos Santos',
          'Violence',
          'Jasmine Infiniti',
          'Guerilla Toss',
        ],
      },
    ],
  },
  {
    year: '2019',
    date: 'June 1, 2019',
    description:
      'Dillo 2019 happened on June 1, 2019. The lineup was stacked with Main Stage performers Hippo Campus, Teyana Taylor, Anna Lunoe, Daya, and A$AP Ferg, Second Stage performers Monique Heart*, Kota the Friend*, DFree Da Vinci*, Caleborate, and Amindi, and student performers/winners of Battle of the Bands and Battle of the DJs, respectively, FIZZ and Luminosity* making this the first predominantly-female Dillo lineup in the festival\'s history. Additionally, this was the first ever themed Dillo Day. The selected theme "Retro" was integrated into all aspects of the festival including the development of promotional materials and day-of programming including a live mural that was created under commission by Chicago-based artist Afrokilla and other experiential art projects brought to the lakefill by a number of student artists.',
    image: '/img/dillo-2019.jpg',
    artists: [
      {
        stage: 'Main Stage',
        names: [
          'Hippo Campus',
          'Teyana Taylor',
          'Anna Lunoe',
          'Daya',
          'A$AP Ferg',
        ],
      },
      {
        stage: 'FMO Stage',
        names: [
          'Monique Heart',
          'Kota the Friend',
          'DFree Da Vinci',
          'Caleborate',
          'Amindi',
        ],
      },
    ],
  },
  {
    year: '2020',
    date: 'May 30, 2020',
    description:
      'On May 30, 2020, Mayfest Productions hosted the first ever Digital Dillo. The typically in-person festival scheduled for that date was moved to a virtual format due to COVID-19. Still, the organization was able to secure The Regrettes, Jail Wolf, and Rico Nasty for the virtual Main Stage and Azjah, Yung Kayo, and Mir Fontane for the virtual second stage of the "Neon Nature" themed event. Similarly, Mayfest and FMO collaborated with a number of other Northwestern student organizations including STITCH Magazine, .WAV, NUDM, NSTV, The Blackout, and WNUR to bring student entertainment to the digital festival.',
    image: '/img/dillo-2020.jpg',
    artists: [
      {
        stage: 'Main Stage',
        names: ['The Regrettes', 'Jail Wolf', 'Rico Nasty'],
      },
      {
        stage: 'FMO Stage',
        names: ['Azjah', 'Yung Kayo', 'Mir Fontane'],
      },
    ],
  },
  {
    year: '2021',
    date: 'May 22, 2021',
    description:
      "Dillo 2021 was a historic one: the first to feature a lineup consisting entirely of artists of color. Mayfest Production's second Digital Dillo took place on May 22, 2021, adapting to provide unprecedented talent despite the unprecedented circumstances imposed by COVID-19. Headliner Playboi Carti with opener Ken Car$on, daytime headliner Omar Apollo, KAYTRANADA, and beabadoobee graced the online Main Stage. In partnership with FMO, Blxst, Brittney Carter, and Brandon Banks appeared on the Second Stage, and Battle of the Bands and DJs winners Wes Park and the Blueberry Boo Boo Babies and Sydco performed as well. Live Q & As were hosted with beabadobee, Blxst, Brittney Carter, and Brandon Banks. These performances followed a series of in-person programming, all related to Dillo's POSTMODERN theme. Mayfest hosted a Warhol student art exhibit, collaborated with WNUR to put on a silent disco, partnered with NU Thrift and Stitch for Dillo Thrift, and worked with InkTank to create exclusive Dillo merch. Dillo Day itself also featured in-person components, with food trucks stationed on Deering Meadow for Mayfeast. The spirit and energy of Dillo was alive and well as students toted special Dillo care packages, artwork adorned the lakefill, and monumental performances dominated screens across campus.",
    image: '/img/dillo-2021.jpg',
    artists: [
      {
        stage: 'Main Stage',
        names: [
          'Playboi Carti',
          'Ken Car$on',
          'Omar Apollo',
          'KAYTRANADA',
          'beabadoobee',
        ],
      },
      {
        stage: 'FMO Stage',
        names: ['Blxst', 'Brittney Carter', 'Brandon Banks'],
      },
    ],
  },
  {
    year: '2022',
    date: 'May 21, 2022',
    description:
      "Dillo Day 50, celebrated on May 21st, 2022, rode into history as a spectacular milestone, marking the fiftieth anniversary of this legendary Northwestern festival. True to its \"Return of the Rodeo\" theme, this edition of Dillo Day wrangled an electric mix of artists and activities, transforming Northwestern into a modern-day rodeo arena. Kicking off the day, the Battle of the Artists student performers - Moondog, Ciel, and Poor Man's Yacht Club - lassoed the crowd's attention, setting the stage for Vicetone's energetic opening act. As the day continued, performers like Cochise, daytime headliner Remi Wolf, Sean Kingston, and Tinashe took the reins, each delivering exceptional performances. The evening reached its peak with Dominic Fike's unforgettable headline act under the starry night. Meanwhile, the FMO Stage corralled a posse of rising stars, showcasing the diverse talents of Kaze, Moyana Olivia, Rhome, Jordan Hawkins, Kari Faux, Scorey, and Taylor Bennett. Beyond the music, Dillo Day 50 tipped its cowboy hat to the festival's rich history and spirit, with on-campus activities infused with the vibrant Rodeo theme.",
    image: '/img/dillo-2022.jpg',
    artists: [
      {
        stage: 'Main Stage',
        names: [
          'Dominic Fike',
          'Tinashe',
          'Sean Kingston',
          'Remi Wolf',
          'Cochise',
          'Vicetone',
        ],
      },
      {
        stage: 'FMO Staage',
        names: ['Taylor Bennett', 'Kari Faux', 'Scorey', 'Jordan Hawkins'],
      },
    ],
  },
  {
    year: '2023',
    date: 'May 20, 2023',
    description:
      'On May 20, 2023, concertgoers finally touched down on Planet Dillo for Dillo Day 2023. Performers on the space-themed adventure included Main Stage artists Offset, Briston Maroney, J. Worra, TiaCorine, and RINI, FMO stage artists Blvck Svm, Lil Kayla, BigBabyGucci, and Zeph France, and student performers/winners of Battle of the Artists and Battle of the DJs, Tavern, Musecology (formerly Muse etc.), and DJ Lu.',
    image: '/img/dillo-2023.jpg',
    artists: [
      {
        stage: 'Main Stage',
        names: ['Offset', 'TiaCorine', 'Briston Maroney', 'RINI', 'J. Worra'],
      },
      {
        stage: 'FMO Stage',
        names: ['Blvck Svm', 'Lil Kayla', 'BigBabyGucci', 'Zeph France'],
      },
    ],
  },
  {
    year: '2024',
    date: 'May 18, 2024',
    description:
      'On May 18, 2024, concertgoers put on their bandanas, boots, and backpacks and hiked out to Camp Dillo for Dillo Day 2024. Singing around the campfire were performers including Main Stage artists Swae Lee, Bakar, Amaarae, Lupe Fiasco, LF System, and Maude Latour, FMO Stage artists YungManny, Maiya the Don, Adanna Duru, and Nada!, winners of Battle of the Artists and Battle of the DJs, The Mee-Ow Band and Vitamin K, and FMO student artists Ciel McDaniels, TiggyBouf, and KenDu!',
    image: '/img/dillo-2024.jpg',
    artists: [
      {
        stage: 'Main Stage',
        names: ['Swae Lee', 'Bakar', 'Amaarae', 'Lupe Fiasco', 'LF System', 'Maude Latour'],
      },
      {
        stage: 'FMO Stage',
        names: ['YungManny', 'Maiya the Don', 'Adanna Duru', 'Nada!'],
      },
    ],
  },
];
