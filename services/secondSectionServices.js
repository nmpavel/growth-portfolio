export const getAbout = async () => {
    const data = await fetch(`http://localhost:4000/about`)
    .then((response) => response.json());

    return data;
};

export const getInterviews = async () => {
    const data = await fetch(`http://localhost:4000/interviews`)
    .then((response) => response.json());

    return data;
};

export const getServices = async () => {
    const data = await fetch(`http://localhost:4000/services`)
    .then((response) => response.json());

    return data;
};

export const getAwards = async () => {
    const data = await fetch(`http://localhost:4000/awards`)
    .then((response) => response.json());

    return data;
};

export const getExhibitions = async () => {
    const data = await fetch(`http://localhost:4000/exhibitions`)
    .then((response) => response.json());

    return data;
};

export const getSkills = async () => {
    const data = await fetch(`http://localhost:4000/skills`)
    .then((response) => response.json());

    return data;
};