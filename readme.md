# Twitter WOEID

Twitter uses Yahoo! WOEID for all of their Trends related API endpoints. But that Yahoo! service has been [shutdown](https://developer.yahoo.com/boss/).

This NPM module offers methods to get WOEID of all locations that Twitter has trending topic information for.

## Usage

```JS
getSingleWOEID(cityName)
```

Use the above method for getting the WOEID of a City (Local Trends).

Use the above method for getting the WOEID of a Country (National Trends).

```JS
getAllWOEID(countryName)
```

Use the above method for getting the WOEIDs of all cities (that Twitter has trending topic information for) of that country.

Each of the above methods returns an array of matching city/country.

## Example

#### City

```JS
console.log(getSingleWOEID('new york'));

// RETURNS

[{ name: 'New York', country: 'United States', woeid: 2459115 }];
```

#### Country

```JS
console.log(getSingleWOEID('india'));

// RETURNS

[{ name: 'India', country: 'India', woeid: 23424848 }];
```

#### All (Available) cities of a Country

```JS
console.log(getAllWOEID('japan'));

// RETURNS

[
  { name: 'Kitakyushu', country: 'Japan', woeid: 1110809 },
  { name: 'Saitama', country: 'Japan', woeid: 1116753 },
  ...
  { name: 'Okayama', country: 'Japan', woeid: 90036018 },
];
```
