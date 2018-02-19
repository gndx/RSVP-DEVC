# RSVP-DEVC
RSVP Landing Page for Facebook Developer Circles Guadalajara

![RSVP DEVC](https://raw.githubusercontent.com/gndx/RSVP-DEVC/master/screenshot.png)
Demo: https://devcdgl.github.io 

# Install Dependencies
```
npm install
```

# Develop mode
```
npm run start
```

# Compile CSS (Stylus)
```
npm run stylus
```

# Config landing page

Edit the defaultProps in App.js

```javascript

App.defaultProps = {
  landing: {
    circleName: 'Facebook Developer Circles Guadalajara',  // Your DEVC Name
    logo: 'https://s3.amazonaws.com/chewiekie/img/logo-guadalajara.png', // Your DEVC Logo
    background: 'https://s3.amazonaws.com/chewiekie/img/devc-bg.png', // Home Background 
    groupUrl: 'https://www.facebook.com/groups/DevCGuadalajara/', // Your Group 
    email: 'devcgdl@gmail.com' // Your Contact
  },
  event: {
    title: 'Title of Event ',
    description: 'Description ',
    whatIs: 'Describe Developer Circles Program',
    venue: {
      name: 'Centraal Guadalajara',
      address: 'Av. Ignacio Luis Vallarta 3300, 44690 Guadalajara, Jal.',
      lat: 20.6751803,
      lng: -103.3927516
    },
    date: '2018-02-28 07:00:00 pm', // Event Date
    endRsvp: '2018-02-28 04:00:00 pm', // Close RSVP 
    buttonText: '¡Participar!', // Action Button Text
    messageRsvp: 'Por el momento no es posible registrar más lugares para el evento, nuestro cupo máximo ha sido alcanzado.', // Close message RSVP
    mailChimpEvent: '//facebook.us16.list-manage.com/subscribe/post?u=b7544c7f63148ada4e7f5893b&amp;id=7037202809' // URL Mailchimp (embed form)
  },
  agenda: [
    {time: '7:00PM ', activity: 'Register', attend: 'DEVC GDL'},
    {time: '7:30PM', activity: 'Welcome', attend: 'DEVC GDL'},
    {time: '7:40PM', activity: 'first activy', attend: 'Jhon Doe'},
    {time: '8:20PM', activity: 'second activy', attend: 'Oscar Barajas'},
    {time: '9:00PM', activity: 'Networking', attend: 'Community'},
  ],
  speakers: [
    {
      name: 'Jhon Doe', 
      photo: 'https://s3.amazonaws.com/chewiekie/img/fer-perales-devc-gdl.jpg',  //
      bio: 'Jhon Deo bio',
      jobTitle: 'FrontEnd Developer',
      conferenceTitle: 'Talk Title',
      description: 'Complete bio or description',
      social: [
        {name: 'twitter', url: 'https://twitter.com/'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in//'}
      ], // Accept any Social Network in FontAwesome Icons 
    },
    {
      name: 'Oscar Barajas', 
      photo: 'https://s3.amazonaws.com/chewiekie/img/zura-guerra-devc-gdl.jpg', 
      bio: 'Oscar Barajas Bio',
      jobTitle: 'Backend Developer',
      conferenceTitle: 'Talk title',
      description: 'Complete bio or description',
      social: [
        {name: 'facebook', url: 'https://facebook.com/oscarbarajastavares'},
        {name: 'twitter', url: 'https://twitter.com/gndx'},
        {name: 'github', url: 'https://github.com/gndx'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/oscarbarajas/'}
      ], // Accept any Social Network in FontAwesome Icons 
    }
  ]
};

```

# Config Mailchimp 

1. Create a new list
2. Add Type Field in "Settings > List Fields"
3. Create a "Signup Form > Embedded forms"
4. Copy form action in html embed code: 

The url is similar to this:
```
https://<YOUR-USER>.us16.list-manage.com/subscribe/post?u=b7544c7f63148ada4e7f5893b&amp;id=7037202809
```

5. Add this url in defaultProps > event > mailChimpEvent

# Basic SEO

Edit index.html in public/ folder

```HTML
    <link rel="canonical" href="https://devcgdl.github.io">
    <meta name="author" content="Oscar Barajas">
    <meta name="description" content="">
    <meta name="keywords" content="Facebook, Comunidad, Guadalajara">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@gndx">
    <meta name="twitter:creator" content="@gndx">
    <meta name="twitter:title" content="Facebook Developer Circles Guadalajara">
    <meta name="twitter:description" content="">
    <meta name="twitter:image" content="http://s3.amazonaws.com/chewiekie/img/devc-gdl-bg.png">
    <meta property="og:locale" content="en_US">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Facebook Developer Circles Guadalajara">
    <meta property="og:description" content="">
    <meta property="og:url" content="https://devcgdl.github.io">
    <meta property="og:site_name" content="devcgdl.github.io" />
    <meta property="og:image" content="http://s3.amazonaws.com/chewiekie/img/devc-gdl-bg.png">
    <meta itemprop="name" content="Facebook Developer Circles Guadalajara" />
    <meta itemprop="description" content="" />
    <meta itemprop="image" content="http://s3.amazonaws.com/chewiekie/img/devc-gdl-bg.png" />

```


# Build to Production
```
npm run build
```

# Github Page

See the documentation of this feature in [GitHub Pages](https://pages.github.com/)

# Contributes 

If someone wants to add or improve something, I invite you to collaborate directly in this repository.
