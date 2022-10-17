import { TENIT_API_TOKEN } from "./env";

type FeaturesResponse = {
    enabled: boolean
}

export async function isEnabled(feature : string, userId : string) : Promise<boolean> {
    try {
    return fetch(`https://features.tenitx.com/${feature}/enabled?user=${userId}`, 
    {
        headers: {
            'x-tenit-api-token': TENIT_API_TOKEN
        }
    })
    .then(apiResponse => apiResponse.json() as Promise<FeaturesResponse>)
    .then(flag => flag.enabled);
    } catch (error) {
        console.error("Error fetching Tenit Feature Flag", error);
        // A Default fallback incase things go wrong.
        return false;
    }
}

