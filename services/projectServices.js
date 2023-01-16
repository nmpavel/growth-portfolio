export const getProjects = async () => {
    const data = await fetch(`http://localhost:4000/projects`)
    .then((response) => response.json());

    return data;
};