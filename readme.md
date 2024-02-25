# Twitter WOEID

## 1.0.3 Update - This package might not be useful - Instead use [trends/available](https://developer.twitter.com/en/docs/twitter-api/v1/trends/locations-with-trending-topics/api-reference/get-trends-available) endpoint directly.

Twitter uses Yahoo! WOEID for all of their Trends related API endpoints. But that Yahoo! service has been [shutdown](https://developer.twitter.com/en/docs/twitter-api/v1/trends/locations-with-trending-topics/api-reference/get-trends-available).

This NPM module offers methods to get WOEID of all locations that Twitter has trending topic information for.

## Contents:

[Methods](#available-methods)

[Example](#example)

[Using with Twit](#usage-with-twit)

## Available Methods

Use this method for getting the WOEID of a City (Local Trends) or a Country (National Trends).

```JS
getSingleWOEID(cityName)
```

Use the this method for getting the WOEIDs of all cities (that Twitter has trending topic information for) of that country.

```JS
getAllWOEID(countryName)
```

## Example

#### City

```JS
console.log(getSingleWOEID('new york'));

// RETURNS

{ name: 'New York', country: 'United States', woeid: 2459115 };
```

#### Country

```JS
console.log(getSingleWOEID('india'));

// RETURNS

{ name: 'India', country: 'India', woeid: 23424848 };
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

## Usage with Twit

Using destructuring

```JS
const { woeid } = getSingleWOEID('chennai');

twit.get('trends/place', { id: woeid })
  .then(res => console.log(res.data[0]))
  .catch(e => console.log(e));
```
