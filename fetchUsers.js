import { URL } from "./url.js";

const getUser = async () => {
    try {
        const response = await fetch(URL);
        if(!response.ok) throw new Error("error");
        const data = await response.json();
        const person = data.results[0];
        const { phone, email } = person;
        const { large: image } = person.picture;
        const { password } = person.login;
        const { first: firstName, last: lastName } = person.name;
        const { dob: {age} } = person;
        const { street: { number, name } } = person.location
        return {
            phone, email, image, password, age, street: `${number} ${name}`, name: `${firstName} ${lastName}`
        }
    } catch (error) {
        console.log(error);
    }
}

export default getUser;