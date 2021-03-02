
// Configuration
module.exports = {
  service1: {
    api: ['/carousal', '/register', '/share'],
    url: 'http://localhost:3001',
    bundle: 'bundle.js',
  },
  service2: {
    api: ['/locations', '/reservation'],
    url: 'http://localhost:3002',
    bundle: 'bundle.js',
  }
};


/*
  The url key in each service object should correspond to the url of the service you are trying to
  proxy requests to. At the start these will point to servers running locally on your machine, but
  once you deploy onto AWS then you will need to update these urls to point to the ip addresses
  of the servers running on AWS.
  The bundle key in each service object should correspond to the name of that particular service's
  webpack bundle.
*/
