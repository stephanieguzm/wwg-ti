# WWG Technical Task

## Table of Contents
* [Overview](#overview)
* [Technologies Used](#technologies-used)
* [Acceptance Criteria](#acceptance-criteria)
* [Setup](#setup)
* [Database Objects](#database-objects)
* [Rest Routes](#rest-routes)

## Overview
This API provides a REST endpoint for fetching non-expired jobs from a provided MongoDB database.<br>

### Technologies Used
Project is created with:
<p>
<img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white">
<img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white">
<img src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white">

Project also utilizes the `mongoose` and `@nestjs/config` packages

## Acceptance Criteria: 
The API should:<br>
✔️ connect to the provided MongoDB database<br>
✔️ provide a REST endpoint for fetching jobs<br>
✔️ only return non-expired jobs<br>

## Setup
1. From your command line, `cd` to the parent directory where your project will live
2. Clone down this repository:
  ```
  git clone git@github.com:stephanieguzm/wwg-ti.git
  ```
3. `cd` into the `wwg-ti/api` directory and run:
  ```
  yarn install
  yarn start
  ```
4. Obtain a username and password to connect to the MongoDB connection URI below:
   ```
   mongodb+srv://<username>:<password>@stephanie.60hhy.mongodb.net/stephanie-technical-task
   ```
6. Update the `api` repository's `.env` file with your URI
  ```
  MONGODB_DB_URI="YOUR-CONNECTION-URI-HERE"
  ```
6. Restart the server on your command line:
  ```
  ctrl + c
  yarn start
  ```
7. Visit the API at the following url in your browser: `http://localhost:8000/jobs`

## Database Objects
### The JOB Object
| Properties | Type  |
|:----------- |:--------|
|_id| string| 
|body| string |
|career_area_name| string | 
|city_name|string| 
|company_name | string| 
|edulevels_name| { value: string, id?: string }[] | 
|employment_type_name | string | 
|expiredAt|  Date or null | 
|location|  { lat: number, lon: number, coordinates: { type: 'Point', coordinates: [number, number] } } | 
|max_salary|  number | 
|min_edulevels_name| string | 
|min_salary|  number | 
|min_years_experience?|  number | 
|onet|  string | 
|onet_name|  string | 
|posted|  Date | 
|remote_type|  number | 
|remote_type_name|  string | 
|riasec| string[] | 
|salary|  number | 
|skills_name|  { value: string }[] | 
|title_name|  string | 
|title_raw|  string | 
|is_earn_and_learn|  boolean | 
|is_gateway_job|  boolean | 
|url|  { value: string }[] | 
|createdAt?|  Date | 
|updatedAt?|  Date | 

## REST Routes 
primary route: http://localhost:8000

| Routes | HTTP Methods| Description
|:------- |:---------------|:--------------
| /jobs| GET | Displays all non-expired jobs
