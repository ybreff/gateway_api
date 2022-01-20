# Project Name
gateways_api

## Demo link:
http://localhost:8080

## Table of Content:

- [About The App](#about-the-app)
- [Technologies](#technologies)
- [Setup](#setup)
- [MongoDb Location](#db-location)
- [Services Availables](#services-availables)

## About The App
gateways_api is an api-rest for managing gateways - master devices that control multiple peripheral devices

## Technologies
It was used `NodeJs`, `Express`, `MongoDb`

## Repository
https://github.com/ybreff/gatewayweb.git

## Setup
- download or clone the repository
- run `npm install`
- run `npm start` to start up the api-rest


## DB Location
- mongodb+srv://gatewaytest:gatewaytest@cluster0.jbpgb.mongodb.net/gatewaytest_db?retryWrites=true&w=majority

## Services availables
- Retrieve all gateways
  `curl 'http://localhost:8080/api/gateways'`

- Create new gateway
  `curl  POST 'http://localhost:8080/api/gateways' --data-raw '{"name": "Gateway Name","address": "192.168.0.1"}'`

- Update gateway
  `curl  PUT 'http://localhost:8080/api/gateways/61e9805d50962feeee92b812' --data-raw '{"name": "New Gateway Name","address": "192.168.0.1"}'`

- Remove gateway
  `curl  DELETE 'http://localhost:8080/api/gateways/61e9805d50962feeee92b812'`

- Retrieve all devices
  `curl 'http://localhost:8080/api/devices'`

- Retrieve all devices by gateway
  `curl 'http://localhost:8080/api/devices/gateway/61e9805d50962feeee92b812'`

- Create new device
  `curl  POST 'http://localhost:8080/api/devices' --data-raw '{"vendor": "Vendor Name", "isonline": true}'`

- Update device
  `curl  PUT 'http://localhost:8080/api/devices/61e8d21197029bd123d9d7f2' --data-raw '{"vendor": "New Vendor Name", "isonline": true}'`

- Remove device
  `curl  DELETE 'http://localhost:8080/api/devices/61e8d21197029bd123d9d7f2'`

