interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://run.otfot.com',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'Running Page',
  navLinks: [
    {
      name: 'Home',
      url: 'https://otfot.com',
    },
    {
      name: 'About',
      url: 'https://writing.otfot.com',
    },
  ],
};

export default data;
