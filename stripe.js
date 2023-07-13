const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const firstName = "John";
const lastName = "Doe";
const email = "john@email.com";
const password = "12345678";

const user = {
    firstName,
    lastName,
    email,
    password
};

const customer = await stripe.customers.create({
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    description: "My First Test Customer (created for API docs)",
    address: {
        line1: "510 Townsend St",
        postal_code: "98140",
        city: "San Francisco",
        state: "CA",
        country: "US"
    }
});