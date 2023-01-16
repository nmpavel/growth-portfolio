export const getClients = async () => {
    const data = await fetch(`http://localhost:4000/clients`)
    .then((response) => response.json());

    return data;
};