export interface HistoricalEvent {
  year: string;
  date: string;
  description: string;
  image: string;
  featured: string[];
}

export const history: HistoricalEvent[] = [
  {
    year: '2012',
    date: 'May 26, 2012',
    description:
      'Dillo 2012 was experienced on May 26, 2012. Mayfest and WNUR brought a star-studded Main Stage lineup of Steve Aoki, Big Boi, Reel Big Fish, Kendrick Lamar, and Cold War Kids, all artists who would soon go on to dominate the music industry.',
    image: '/img/dillo-2012.jpg',
    featured: [
      'Steve Aoki',
      'Big Boi',
      'Reel Big Fish',
      'Kendrick Lamar',
      'Cold War Kids',
    ],
  },
  {
    year: '2013',
    date: 'June 1, 2013',
    description:
      'Dillo 2013 took place on June 1, 2013 featuring an electric performances by Wiz Khalifa, Lunice, Smash Mouth, Danny Brown, and Walk the Moon.',
    image: '/img/dillo-2013.jpg',
    featured: [
      'Wiz Khalifa',
      'Lunice',
      'Smash Mouth',
      'Danny Brown',
      'Walk the Moon',
    ],
  },
  {
    year: '2014',
    date: 'May 31, 2014',
    description:
      "Dillo 2014 came to life on May 31, 2014 when 2 Chainz, Ryan Hemsworth, Cults, Chance the Rapper, and OK Go all brought their talents to the Lakefill's Main Stage.",
    image: '/img/dillo-2014.jpg',
    featured: [
      '2 Chainz',
      'Ryan Hemsworth',
      'Cults',
      'Chance the Rapper',
      'OK Go',
    ],
  },
  {
    year: '2015',
    date: 'May 30, 2015',
    description:
      'Dillo 2015 was planned for May 30, 2015 with Miguel, Odesza, Charli XCX, A$AP Ferg, and Saint Motel scheduled to perform on the Main Stage. Unfortunately, Dillo 2015 was canceled due to weather.',
    image: '/img/dillo-2015.jpg',
    featured: ['Miguel', 'Odesza', 'Charli XCX', 'A$AP Ferg', 'Saint Motel'],
  },
  {
    year: '2016',
    date: 'May 21, 2016',
    description:
      "Dillo 2016 was celebrated on May 21, 2016. Mayfest and WNUR brought a number of artists with Main Stage performers Schoolboy Q, Cashmere Cat, Hayden James (DJ Set), Anderson .Paak & The Free Nationals, and The Mowgli's, Nongshim x WNUR Stage performers Marie Davidson, MikeQ, Downtown Boys, Chynna Rogers, and Bunny, and student performers/winners of Battle of the Bands and Battle of the DJs, respectively, Onnij x Ouyang and Prez Harris & Friends.",
    image: '/img/dillo-2016.jpg',
    featured: [
      'Schoolboy Q',
      'Cashmere Cat',
      'Hayden James (DJ Set)',
      'Anderson .Paak & The Free Nationals',
      "The Mowgli's",
    ],
  },
  {
    year: '2017',
    date: 'May 20, 2017',
    description:
      'Dillo 2017 was celebrated on May 20, 2017. Mayfest and WNUR brought a number of artists with Main Stage performers MGMT, Gramatik, Little Simz, D.R.A.M. feat Daf, and Porches, Nongshim x WNUR Stage performers Marie Davidson, MikeQ, Downtown Boys, Chynna Rogers, and Bunny, and student performers/winners of Battle of the Bands and Battle of the DJs, respectively, Onnij x Ouyang and Prez Harris & Friends.',
    image: '/img/dillo-2017.jpg',
    featured: [
      'MGMT',
      'Gramatik',
      'Little Simz',
      'D.R.A.M. feat Daf',
      'Porches',
    ],
  },
  {
    year: '2018',
    date: 'June 2, 2018',
    description:
      'On May 31, 2018, Mayfest and WNUR collaborated to bring Dillo 2018 to the campus. The lineup included a number of artists with Postmates Main Stage performers YOUNG THE GIANT, Joey Bada$$, Daniel Caesar, Whitney, and TOKiMONSTA, Nongshim x WNUR Second Stage performers Dos Santos, Violence, Jasmine Infiniti, Cupcakke, and Guerilla Toss, and student performers/winners of Battle of the Bands and Battle of the DJs, respectively, Wop St. Bass Ritual and EJ3.',
    image: '/img/dillo-2018.jpg',
    featured: [
      'YOUNG THE GIANT',
      'Joey Bada$$',
      'Daniel Caesar',
      'Whitney',
      'TOKiMONSTA',
    ],
  },
  {
    year: '2019',
    date: 'June 1, 2019',
    description:
      'Dillo 2019 happened on June 1, 2019. The lineup was stacked with Main Stage performers Hippo Campus, Teyana Taylor, Anna Lunoe, Daya, and A$AP Ferg, Second Stage performers Monique Heart*, Kota the Friend*, DFree Da Vinci*, Caleborate, and Amindi, and student performers/winners of Battle of the Bands and Battle of the DJs, respectively, FIZZ and Luminosity* making this the first predominantly-female Dillo lineup in the festival\'s history. Additionally, this was the first ever themed Dillo Day. The selected theme "Retro" was integrated into all aspects of the festival including the development of promotional materials and day-of programming including a live mural that was created under commission by Chicago-based artist Afrokilla and other experiential art projects brought to the lakefill by a number of student artists.',
    image: '/img/dillo-2019.jpg',
    featured: [
      'Hippo Campus',
      'Teyana Taylor',
      'Anna Lunoe',
      'Daya',
      'A$AP Ferg',
    ],
  },
  {
    year: '2020',
    date: 'May 30, 2020',
    description:
      'On May 30, 2020, Mayfest Productions hosted the first ever Digital Dillo. The typically in-person festival scheduled for that date was moved to a virtual format due to COVID-19. Still, the organization was able to secure The Regrettes, Jail Wolf, and Rico Nasty for the virtual Main Stage and Azjah, Yung Kayo, and Mir Fontane for the virtual second stage of the "Neon Nature" themed event. Similarly, Mayfest and FMO collaborated with a number of other Northwestern student organizations including STITCH Magazine, .WAV, NUDM, NSTV, The Blackout, and WNUR to bring student entertainment to the digital festival.',
    image: '/img/dillo-2020.jpg',
    featured: ['The Regrettes', 'Jail Wolf', 'Rico Nasty'],
  },
];
