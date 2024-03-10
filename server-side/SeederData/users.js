// Users to be seeded into the MongoDB database. 
const UserData = [
    {
      "FirstName": "John",
      "Surname": "Doe",
      "Address": {
        "StreetAddress": "123 Main Street",
        "City": "Hollywood",
        "PostCode": "BT48 8SL",
        "Country": "UK"
      },
      "DOB": "1990-01-15",
      "Email": "johndoe@example.com",
      "Username": "johndoe",
      "Password": "password123"
    },
    {
      "FirstName": "Jane",
      "Surname": "Smith",
      "Address": {
        "StreetAddress": "456 Elm Street",
        "City": "Springfield",
        "PostCode": "BT3 9DL",
        "Country": "UK"
      },
      "DOB": "1995-05-20",
      "Email": "janesmith@example.com",
      "Username": "janesmith",
      "Password": "pass123"
    },
    {
      "FirstName": "Michael",
      "Surname": "Johnson",
      "Address": {
        "StreetAddress": "789 Oak Avenue",
        "City": "Metropolis",
        "PostCode": "BT348XL",
        "Country": "UK"
      },
      "DOB": "1980-11-10",
      "Email": "michaeljohnson@example.com",
      "Username": "michaeljohnson",
      "Password": "securepass"
    }
  ]
  
  export default UserData;