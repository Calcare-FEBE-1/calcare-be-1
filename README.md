# calcare-be-1
This is an repo for final project. This project is homemade by FEBE-1 Team. Enjoy my website.</br>
Link Testing :  https://testing-calcare.up.railway.app/ 

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
| aktivitas_fisik| String    |Aktivitas User     |
| jenis_kelamin  | String    | Jenis Kelamin User    |

##   Register

Request :

- Method : POST
- Endpoint :  link-testing/auth/register-user 
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
## Login

Request :

- Method : POST
- Endpoint : link-testing/auth/login-user 
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

## Get All User
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
## Get User ByID
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
## Delete User ByID
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
## Update User ByID
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

## Add Admin (oleh Admin lain)

Request :

- Method : POST
- Endpoint :  link-testing/admin/add
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
## Login Admin

Request :

- Method : POST
- Endpoint : link-testing/admin/login
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


## Add Makanan (oleh admin)
Request :

- Method : POST
- Endpoint :  link-testing/makanan/add
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
- Response :
```js
{
    "msg": "Makanan baru berhasil ditambahkan",
    "makanan": {
        "id": 2,
        "nama_makanan": "Tempe goreng",
        "kalori": 99,
        "protein": 250,
        "lemak": 21,
        "karbohidrat": 40,
        "link_gambar": "google.com/tempenih.jpg",
        "updatedAt": "2022-11-30T14:28:42.339Z",
        "createdAt": "2022-11-30T14:28:42.339Z"
    }
}
```

## Get All Makanan 
Request :

- Method : GET
- Endpoint : link-testing/makanan
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Response :
```js
{
    "message": "Berhasil dapat semua makanan",
    "data": [
        {
            "id": 1,
            "nama_makanan": "Tempe goreng",
            "kalori": 99,
            "protein": 250,
            "lemak": 21,
            "karbohidrat": 40,
            "link_gambar": "google.com/tempenih.jpg",
            "createdAt": "2022-11-30T03:13:57.000Z",
            "updatedAt": "2022-11-30T03:13:57.000Z"
        },
        {
            "id": 2,
            "nama_makanan": "Tempe goreng",
            "kalori": 99,
            "protein": 250,
            "lemak": 21,
            "karbohidrat": 40,
            "link_gambar": "google.com/tempenih.jpg",
            "createdAt": "2022-11-30T14:28:42.000Z",
            "updatedAt": "2022-11-30T14:28:42.000Z"
        }
    ]
}
```


## Get Makanan ById
Request :

- Method : GET
- Endpoint : link-testing/makanan/:id 
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Response :

```js

"message": "Berhasil menambahkan makanan ke keranjang",
    "data": [
        {
            "id": 1,
            "nama_makanan": "Tempe goreng",
            "kalori": 99,
            "protein": 250,
            "lemak": 21,
            "karbohidrat": 40,
            "link_gambar": "google.com/tempenih.jpg",
            "createdAt": "2022-11-30T03:13:57.000Z",
            "updatedAt": "2022-11-30T03:13:57.000Z"
        },
```

## Delete Makanan ById
Request :

- Method : DELETE
- Endpoint : link-testing/makanan/:id
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Response :
```js
{
    "msg": "OK"
}
```

## Update Makanan ById
Request :

- Method : PUT
- Endpoint : link-testing/makanan/:id 
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Response :
```js
{
    "msg": "Makanan berhasil diperbarui"
}
```

# Keranjang Atrributes 

| Atrributes        | Data Type | Description           |
| ------------------| --------- | --------------------  |
| id                |           |                       |
| jmlh_makanan      | Integer   | Jumlah Makanan        |      
| userId            | Integer   | Id User               |
| makananId         | Integer   | Id Makanan            |

## Get All Keranjang (oleh admin)
Request :

- Method : GET
- Endpoint :  link-testing/keranjang
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Response :
```js 
{
    "message": "Berhasil dapat semua keranjang",
    "data": [
        {
            "id": 3,
            "jmlh_makanan": 1,
            "userId": 1,
            "makananId": 1,
            "createdAt": "2022-12-01T11:39:21.000Z",
            "updatedAt": "2022-12-01T11:39:21.000Z",
            "UserId": 1,
            "User": {
                "id": 1,
                "nama": "Puput",
                "email": "puput@gmail.com",
                "password": "12345",
                "tinggi_badan": 150,
                "berat_badan": 50,
                "umur": 21,
                "jenis_kelamin": "perempuan",
                "aktivitas_fisik": "olahraga",
                "createdAt": "2022-11-28T02:39:11.000Z",
                "updatedAt": "2022-11-28T02:39:11.000Z"
            }
        },
        {
            "id": 4,
            "jmlh_makanan": 1,
            "userId": 1,
            "makananId": 1,
            "createdAt": "2022-12-01T16:19:08.000Z",
            "updatedAt": "2022-12-01T16:19:08.000Z",
            "UserId": 1,
            "User": {
                "id": 1,
                "nama": "Puput",
                "email": "puput@gmail.com",
                "password": "12345",
                "tinggi_badan": 150,
                "berat_badan": 50,
                "umur": 21,
                "jenis_kelamin": "perempuan",
                "aktivitas_fisik": "olahraga",
                "createdAt": "2022-11-28T02:39:11.000Z",
                "updatedAt": "2022-11-28T02:39:11.000Z"
            }
        },
        {
            "id": 5,
            "jmlh_makanan": 1,
            "userId": 1,
            "makananId": 1,
            "createdAt": "2022-12-01T16:21:46.000Z",
            "updatedAt": "2022-12-01T16:21:46.000Z",
            "UserId": 1,
            "User": {
                "id": 1,
                "nama": "Puput",
                "email": "puput@gmail.com",
                "password": "12345",
                "tinggi_badan": 150,
                "berat_badan": 50,
                "umur": 21,
                "jenis_kelamin": "perempuan",
                "aktivitas_fisik": "olahraga",
                "createdAt": "2022-11-28T02:39:11.000Z",
                "updatedAt": "2022-11-28T02:39:11.000Z"
            }
        },
        {
            "id": 6,
            "jmlh_makanan": 1,
            "userId": 2,
            "makananId": 2,
            "createdAt": "2022-12-01T16:29:10.000Z",
            "updatedAt": "2022-12-01T16:29:10.000Z",
            "UserId": 2,
            "User": {
                "id": 2,
                "nama": "ilham",
                "email": "ilham@gmail.com",
                "password": "222344",
                "tinggi_badan": 160,
                "berat_badan": 45,
                "umur": 22,
                "jenis_kelamin": "laki-laki",
                "aktivitas_fisik": "olahraga",
                "createdAt": "2022-11-28T02:39:11.000Z",
                "updatedAt": "2022-11-28T02:39:11.000Z"
            }
        },
        {
            "id": 7,
            "jmlh_makanan": 1,
            "userId": 2,
            "makananId": 2,
            "createdAt": "2022-12-01T16:29:17.000Z",
            "updatedAt": "2022-12-01T16:29:17.000Z",
            "UserId": 2,
            "User": {
                "id": 2,
                "nama": "ilham",
                "email": "ilham@gmail.com",
                "password": "222344",
                "tinggi_badan": 160,
                "berat_badan": 45,
                "umur": 22,
                "jenis_kelamin": "laki-laki",
                "aktivitas_fisik": "olahraga",
                "createdAt": "2022-11-28T02:39:11.000Z",
                "updatedAt": "2022-11-28T02:39:11.000Z"
            }
        }
    ]
}
```

## Get Keranjang ById
Request :

- Method : GET
- Endpoint :  link-testing/keranjang/:id
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Response :
```js 
Succes Get Keranjang by ID
```

# Hasil Atrributes 

| Atrributes        | Data Type | Description               |
| ------------------| --------- | ------------------------  |
| id                |           |                           |
| keranjangId       | Integer   | Id Keranjang              |      
| total_kalori      | Float     | Total Kalori Makanan      |
| total_protein     | Float     | Total Protein Makanan     |
| total_karbohidrat | Float     | Total Karbohidrat Makanan |
| total_lemak       | Float     | Total Lemak Makanan       |

## Get All Hasil (oleh admin)
Request :

- Method : GET
- Endpoint : 
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Response :
```js 

```

## Get Hasil ById
Request :

- Method : GET
- Endpoint :  link-testing/hasil/:id
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Response :
```js 

```
## Update Hasil ById
Request :

- Method : PUT
- Endpoint :  link-testing/hasil/:id 
- Header :
  - Content-Type : application/json
  - Accept : application/json
- Response :
```js 

```