export const getEmployees = async () => {
    const data = await fetch(`http://localhost:4000/employees`)
    .then((response) => response.json());

    return data;
};