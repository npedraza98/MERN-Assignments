const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');
const port = 8000;

const createUser = () => {
    const newUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email:faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number()
    };
};

const createCompany =() => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country(),
        },
    };
};

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const responseObj = {
        user: newUser,
        company: newCompany,
    };
    res.json(responseObj);
});

app.listen(port, () => console.log(`express server running on port ${port}`));
