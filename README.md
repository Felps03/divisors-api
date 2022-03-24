🚀 API Divisors

![GitHub repo size](https://img.shields.io/github/repo-size/Felps03/divisors-api)

## Description

- NodeJs API to find divisor and find prime divisors that make up the number.

## Info

<p align="center">
   <img src="http://img.shields.io/static/v1?label=Node&message=12.22.5&color=green&style=for-the-badge&logo=node.js"/>
   <img src="http://img.shields.io/static/v1?label=javascript&message=1.7&color=yellow&style=for-the-badge&logo=javascript"/>
   <img src="http://img.shields.io/static/v1?label=express&message=4.17.1&color=blue&style=for-the-badge&logo=express"/>
</p>

## Instaling <API API Divisors>

```
git pull https://github.com/Felps03/divisors-api.git
```

```
npm install
```

Run as user:

```
npm start
```

Run as developer:

```
npm run dev
```

Test a REST API with curl 
```
curl --location --request POST 'http://localhost:3333/v1/math' \
--header 'Content-Type: application/json' \
--data-raw '{
    "number": 45
}'
```

REST API was made with Given-When-Then pattern
![Alt text](assets\all-tests.png?raw=true "All Tests")


With 100% coverage
![Alt text](assets\test-coverage.png?raw=true "Test in coverage")
