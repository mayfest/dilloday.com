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

export const chicagoDistribution: WristbandDistribution = {
  location: {
    name: 'Pritzker School of Law',
    address: '375 E Chicago Ave, Chicago, IL 60611',
    directions: 'https://maps.app.goo.gl/vxvxhky3PotdmRBz7',
  },

  times: [
    {
      date: 'Wednesday, May 13',
      time: '10:00 AM - 2:00 PM',
    },
  ],
};

export const evanstonDistribution: WristbandDistribution = {
  location: {
    name: 'Seabury Hall',
    address: '2122 Sheridan Rd, Evanston, IL 60208',
    directions: 'https://maps.app.goo.gl/grpv2npZKejzuCSG7',
  },

  times: [
    {
      date: 'Thursday, May 7',
      time: '1:00 PM - 5:00 PM',
    },
    {
      date: 'Friday, May 8',
      time: '11:00 AM - 5:00 PM',
    },
    {
      date: 'Saturday, May 9',
      time: '3:00 PM - 7:00 PM',
    },
    {
      date: 'Sunday, May 10',
      time: '11:00 AM - 5:00 PM',
    },
    {
      date: 'Monday, May 11',
      time: '11:00 AM - 7:00 PM',
    },
    {
      date: 'Tuesday, May 12',
      time: '11:00 AM - 5:00 PM',
    },
    {
      date: 'Wednesday, May 13',
      time: '11:00 AM - 9:00 PM',
    },
    {
      date: 'Thursday, May 14',
      time: '4:30 PM - 10:00 PM',
    },
    {
      date: 'Friday, May 15',
      time: '11:00 AM - 6:00 PM',
    },
  ],
};
