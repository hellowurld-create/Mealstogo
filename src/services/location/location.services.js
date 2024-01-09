import camelize from "camelize";

import { locations } from "./location.mock";


export const locationRequest = (searchTerm) => {
    return new Promise((resolve, reject) => { 
        const locationMock = locations[searchTerm];
        if (!locationMock) {
            reject(`Location not found for search term: ${searchTerm}`);
        }
        resolve(locationMock);
    })
}

export const locationTransform = (result) => {
    const formattedResponse = camelize(result);
    const { geometry = {} } = formattedResponse.results[0];
    const { lat, lng } = geometry.location;

    return { lat, lng };
}