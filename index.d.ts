declare module "twitter-woeid" {
    export function getSingleWOEID(cityName: string): woeid | undefined
    export function getAllWOEID(countryName: string): woeid | undefined
}

interface woeid {
    name: string,
    country: string,
    woeid: number
}