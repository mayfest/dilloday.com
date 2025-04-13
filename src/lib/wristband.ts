export interface WristbandDistribution {
  location: {
    name: string;
    address: string;
    directions: string;
  };

  times: {
    date: string;
    time: string;
  }[];
}

export const wristbandDistribution: WristbandDistribution = {
  location: {
    name: 'Seabury Hall',
    address: '2122 Sheridan Rd, Evanston, IL 60208',
    directions: 'https://maps.app.goo.gl/grpv2npZKejzuCSG7',
  },

  times: [
    {
      date: 'Thursday, May 8',
      time: '1:00 PM - 5:00 PM',
    },
    {
      date: 'Friday, May 9',
      time: '11:00 AM - 5:00 PM',
    },
    {
      date: 'Saturday, May 10',
      time: '11:00 AM - 5:00 PM',
    },
    {
      date: 'Sunday, May 11',
      time: '3:00 PM - 7:00 PM',
    },
    {
      date: 'Monday, May 12',
      time: '11:00 AM - 5:00 PM',
    },
    {
      date: 'Tuesday, May 13',
      time: '11:00 AM - 7:00 PM',
    },
    {
      date: 'Wednesday, May 14',
      time: '11:00 AM - 5:00 PM',
    },
    {
      date: 'Thursday, May 15',
      time: '11:00 AM - 9:00 PM',
    },
    {
      date: 'Friday, May 16',
      time: '10:00 AM - 2:00 PM',
    },
  ],
};
