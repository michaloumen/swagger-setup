const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const dotevn = require('dotenv');
dotevn.config();

const indexRoute = require('./swagger/index');

const app = express();
const port = process.env.PORT;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'Simple Swagger Setup',
      description: 'A simple swagger documentation setup',
      contact: {
        name: 'Michelle'
      },
      servers: [
        'http://localhost:3000'
      ]
    },
    schemes: ['http, https'],
  },
  apis: ['./swagger/*.js']
};
// a swagger pode trocar de nome para routes, por exemplo

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api', indexRoute);

app.get('/', (req, res) => {
  res.send('Server is listening');
})

try {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  })
} catch (error) {
  process.exit(1);
}