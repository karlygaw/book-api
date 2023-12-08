const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Shugyla API Documentation',
            version: '1.0.0',
            description:
                "Menin API documentim",
            contact: {
                name: "Shugyla Baltabay",
                url: "shugyla.com",
                email: "shugyla.baltabay@narxoz.kz",
            },
        },
        servers: [
            {
                url: "http://localhost:8086/",
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;