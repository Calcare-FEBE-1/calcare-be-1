# calcare-be-1
This is an repo for final project. This project is homemade by FEBE-1 Team. Enjoy my website.

# API Specification

# User Atrributes (Authentication and Authorization)

| Atrributes     | Data Type | Description           |
| -------------- | --------- | --------------------  |
| id             |           |                       |
| nama           | String    | User Nama             |      
| email          | String    | User Email            |
| password       | String    | User Password         |
| tinggi_badan   | Integer   | Tinggi badan User     |  
| berat_badan    | Integer   | Berat Badan User      |
| umur           | String    | Umur User             |
| aktivitas_fisik| String    | User Aktivitas        |
| jenis_kelamin  | String    | Jenis Kelamin User    |

### Register

Request :

- Method : POST
- Endpoint : /auth/register
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body :
```js
{
 "nama":"calcare FEBE1",
 "email":"calcare@gmail.com",
 "password":"Febe1",
 "jenis_kelamin":"laki-laki",
 "tinggi_badan":"170",
 "berat_badan":"60",
 "umur":"21",
 "aktivitas_fisik":"aktivitas rendah"
 
}
 
```
- Response :
```js
{
  "msg": "Register Berhasil"
}
```
### Login

Request :

- Method : POST
- Endpoint : /auth/login
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body :
```js
{
 "email":"calcare@gmail.com",
 "password":"Febe1",
}
 
```
- Response :
```js
{
  "message": "welcome",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InJvbGUiOiJ1c2VyIn0sImlhdCI6MTY2OTc3OTI3NiwiZXhwIjoxNjY5NzgyODc2fQ.KXGEWTas_RyE5b29t71tR1rnu4_V9gfxTLuzd4gjonE"
}
```

### Get All User
Request :

- Method : GET
- Endpoint : /user
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Response :
```js
{
  "message": "success get user data",
  "data": [
    {
      "id": 1,
      "nama": "Puput",
      "email": "puput@gmail.com",
      "password": "12345",
      "tinggi_badan": 150,
      "berat_badan": 50,
      "umur": 21,
      "aktivitas_fisik": "olahraga",
      "jenis_kelamin": "perempuan",
      "createdAt": "2022-11-28T02:39:11.000Z",
      "updatedAt": "2022-11-28T02:39:11.000Z"
    },
    {
      "id": 2,
      "nama": "ilham",
      "email": "ilham@gmail.com",
      "password": "222344",
      "tinggi_badan": 160,
      "berat_badan": 45,
      "umur": 22,
      "aktivitas_fisik": "olahraga",
      "jenis_kelamin": "laki-laki",
      "createdAt": "2022-11-28T02:39:11.000Z",
      "updatedAt": "2022-11-28T02:39:11.000Z"
    },
    {
      "id": 11,
      "nama": "calcare FEBE1",
      "email": "calcare@gmail.com",
      "password": "$2a$10$q7h9iexFrROm73km/ygo5OScSlfQmlkiUfcUk3y6f9oF/5eFeKfrS",
      "tinggi_badan": 170,
      "berat_badan": 60,
      "umur": 21,
      "aktivitas_fisik": "aktivitas rendah",
      "jenis_kelamin": "laki-laki",
      "createdAt": "2022-11-30T03:31:07.000Z",
      "updatedAt": "2022-11-30T03:31:07.000Z"
    }
  ]
}
```
### Get User ByID
Request :

- Method : GET
- Endpoint : /user/id
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Response :
```js
{
  "message": "success get data by id",
  "data": {
    "id": 11,
    "nama": "calcare FEBE1",
    "email": "calcare@gmail.com",
    "password": "$2a$10$q7h9iexFrROm73km/ygo5OScSlfQmlkiUfcUk3y6f9oF/5eFeKfrS",
    "tinggi_badan": 170,
    "berat_badan": 60,
    "umur": 21,
    "aktivitas_fisik": "aktivitas rendah",
    "jenis_kelamin": "laki-laki",
    "createdAt": "2022-11-30T03:31:07.000Z",
    "updatedAt": "2022-11-30T03:31:07.000Z"
  }
}
```
### Delete User ByID
Request :

- Method : DELETE
- Endpoint : /user/id
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Response :
```js
{
  "message": "User Deleted"
}
```
### Update User ByID
Request :

- Method : PUT
- Endpoint : /user/id
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Response :
```js
{
  "message": "User Update"
}
```

# Admin Atrributes (Authentication and Authorization)

| Atrributes        | Data Type | Description           |
| ------------------| --------- | --------------------  |
| id                |           |                       |
| nama_admin        | String    | Admin Nama            |      
| email_admin       | String    | Admin Email           |
| password_admin    | String    | Admin Password        |

### Register Admin

Request :

- Method : POST
- Endpoint : /admin/register
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body :
```js
{
 "nama_admin": "Danone Febe 1",
 "email_admin":"Danone@gmail.com",
 "password_admin":"Febe1"
}
```
- Response :
```js
{
  "msg": "Register Berhasil"
}
```
### Login Admin

Request :

- Method : POST
- Endpoint : /admin/login
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body :
```js
{
 "email_admin":"Danone@gmail.com",
 "password_admin":"Febe1"
}
```
- Response :
```js
{
  "message": "welcome",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InJvbGUiOiJhZG1pbiJ9LCJpYXQiOjE2Njk3ODAyMDksImV4cCI6MTY2OTc4MzgwOX0.2kzz1MIprXn2mWMCY8IwsPmjmi0EJZRo6oWeiOyIFzA"
}
```

# Makanan Atrributes 

| Atrributes        | Data Type | Description           |
| ------------------| --------- | --------------------  |
| id                |           |                       |
| nama_makanan      | String    | Nama Makanan          |      
| kalori            | Float     | Kalori Makanan        |
| protein           | Float     | Protein Makanan       |
| lemak             | Float     | Lemak Makanan         |
| karbohidrat       | Float     | Karbohidrat Makanan   |
| link_gambar       | Text      | Gambar Makanan        |


### Add Makanan 
Request :

- Method : POST
- Endpoint : /makanan/add
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Body :
```js
{
   "nama_makanan": "Tempe goreng",
   "kalori": 99,
   "protein": 250,
   "lemak": 21,
   "karbohidrat": 40,
   "link_gambar": "google.com/tempenih.jpg"
}
```

### Get All Makanan 
Request :

- Method : GET
- Endpoint : /makanan
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Response :


### Get Makanan ById
Request :

- Method : GET
- Endpoint : /makanan/id
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Response :

### Delete Makanan ById
Request :

- Method : DELETE
- Endpoint : /makanan/id
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Response :

### Update Makanan ById
Request :

- Method : PUT
- Endpoint : /makanan/id
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Response :
