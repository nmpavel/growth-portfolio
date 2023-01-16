export const getAustralianClients = async () => {
    const data = await fetch(`http://localhost:4000/companies1`)
    .then((response) => response.json());

    return data;
};
export const getWorldwideClients = async () => {
    const data = await fetch(`http://localhost:4000/companies`)
    .then((response) => response.json());

    return data;
};