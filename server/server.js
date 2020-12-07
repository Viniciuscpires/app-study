const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');

const app = express()
const port = 3000
const corsOptions = {
  exposedHeaders: ['x-access-token']
};

app.set('secret', 'your secret phrase here');

app.use(cors(corsOptions));

app.use(bodyParser.json())

app.use((req, res, next) => {
  const token = req.headers['x-access-token'];
  console.log('####################################');
  if(token) {
      console.log('A token is send by the application');
      console.log('Token value is ' + token);
  } else {
      console.log('No token is send by the the application');
  }
  console.log('####################################');
  next();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/studies/2', (req, res) => {
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere massa vitae sem vulputate, id interdum risus sagittis. Curabitur hendrerit gravida est, molestie rutrum massa egestas et. In luctus laoreet purus at gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget odio egestas neque consequat lobortis a ac est. Donec ac est vitae diam semper pellentesque. Nulla nec sapien mauris. Nunc lectus mi, interdum posuere cursus at, posuere vitae risus. Proin sed consequat tellus.

  Nunc blandit vulputate porta. Aenean ut accumsan odio. Praesent condimentum, nibh in tempor condimentum, lectus nibh molestie sem, eget suscipit ante ex sed augue. Morbi condimentum libero a auctor mollis. Mauris enim ipsum, gravida in scelerisque et, imperdiet nec urna. Suspendisse nec accumsan libero, nec dapibus metus. Morbi consequat libero at suscipit hendrerit. Fusce lacinia ante lacinia augue hendrerit, nec volutpat lorem ultricies. Integer tempor faucibus lectus, ac egestas arcu scelerisque vitae.`

  const studies = [
    { 
      name: 'Gustavo',
      subject: 'Quimica',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
      description,
      creationDate: '2020-11-23T07:59:51.796Z'
    },
    { 
      name: 'Nando',
      subject: 'Fisica',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
      description,
      creationDate: '2020-11-22T09:59:51.796Z'
    }
  ]

  res.json(studies)
})

app.get('/studies', (req, res) => {
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere massa vitae sem vulputate, id interdum risus sagittis. Curabitur hendrerit gravida est, molestie rutrum massa egestas et. In luctus laoreet purus at gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget odio egestas neque consequat lobortis a ac est. Donec ac est vitae diam semper pellentesque. Nulla nec sapien mauris. Nunc lectus mi, interdum posuere cursus at, posuere vitae risus. Proin sed consequat tellus.

  Nunc blandit vulputate porta. Aenean ut accumsan odio. Praesent condimentum, nibh in tempor condimentum, lectus nibh molestie sem, eget suscipit ante ex sed augue. Morbi condimentum libero a auctor mollis. Mauris enim ipsum, gravida in scelerisque et, imperdiet nec urna. Suspendisse nec accumsan libero, nec dapibus metus. Morbi consequat libero at suscipit hendrerit. Fusce lacinia ante lacinia augue hendrerit, nec volutpat lorem ultricies. Integer tempor faucibus lectus, ac egestas arcu scelerisque vitae.`

  const studies = [
    { 
      name: 'Lucas',
      subject: 'Quimica',
      photo: 'https://cdn6.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumbCard.jpg',
      description,
      creationDate: '2020-11-23T07:59:51.796Z'
    },
    { 
      name: 'Gustavo',
      subject: 'Fisica',
      photo: 'https://cdn6.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumbCard.jpg',
      description,
      creationDate: '2020-11-22T09:59:51.796Z'
    },
    { 
      name: 'Vinicius',
      subject: 'Matematica',
      photo: 'https://cdn6.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumbCard.jpg',
      description,
      creationDate: '2020-11-26T12:59:51.796Z'
    },
    { 
      name: 'Giovanni',
      subject: 'Biologia',
      photo: 'https://cdn6.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumbCard.jpg',
      description,
      creationDate: '2020-11-21T15:59:51.796Z'
    }
  ]

  res.json(studies)
})

app.post('/user/login', (req, res) => {
    const { email, password } = req.body;
    console.log('####################################');
    
    let user = null
    if (email === 'vinicius@gmail.com' && password === '123') {
      user = {
        email
      }
    }
    console.log(user);
    
    if (user) {
        console.log(`User ${email} authenticated`);
        console.log('Authentication Token added to response');
        const token = jwt.sign(user, req.app.get('secret'), {
            expiresIn: 86400 // seconds, 24h
        });
        res.set('x-access-token', token);
        return res.json(user);
    } else {
        console.log(`Authentication failed for user ${email}`);
        console.log('No token generated');
        res.status(401).json({ message: `Authentication failed for user ${email}`});  
    }
})

app.use('*', (req, res) => {
  res.status(404).json({ message: `route ${req.originalUrl} does not exists!` });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});
