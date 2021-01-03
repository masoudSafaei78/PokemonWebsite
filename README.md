# PokemonWebsite
## Technologies used

The basis of this project is created and written based on ReactJs.

In addition Html,css and scss are also used for frontend.

also we used Material UI for UI Designing. 

## Getting started
To get the frontend running locally:
- Clone this repo
- `npm install` to install all req'd dependencies
- `npm start` to start the local server (this project uses create-react-app)
- Local web server will use port 3000  (standard React's port).You can configure port in scripts section of package.json.	

## API Services

**We used PHP and MySQL to write the Api. At the beginning of each code we connect to our database called 'pokemon'**
- Sign UP API
    - The **Registration.php** file is for **registration**. We will receive your email, username, password and password confirmation.
    - Then we have to do the necessary research in database. We compare the email that the user enters with the emails in the 'usertable' table of our database
    
      **if** it is the same, the **status** of **300** is returned. 
      
      **if** the email is in standard format **status** of **400** will be returned.
      
      For the username, we also check that it has not been selected before, and **if** the username is duplicate, the **status** of **500** will be returned.
      
      We also check the password and repeat the password. **if** they are not the same, the **600 status** will be returned.
      
      In each of the above cases, the user returns to the registration page.
      
      **if** the information entered is correct, **email, username and password** will be recorded in our **'usertable'** table and the user will be redirected to the main page of         the site.
      
- Sign IN API
    - The **validation.php** file is for user **login**.
    
    - First we receive the email and password that the user enters. In the database and in the 'usertable' table, we check whether this email and password exist.
    
      **if** there is, the user enters and is directed to the main page of the site. Otherwise **status 400** is reported and the user is redirected to the login page.
      
      
- Pokemon Data API
    - The **Data_api.php** file is for displaying Pokemon card information.
    
    - First we select all the rows in the **'pokemondata' table** and check the number of rows in it.
    
       **if** this number was zero and there was no row in the table, we return the **status 500**, which means the table is empty. **if** the table is not empty, we return the rows of the table in an array as Json.
       
- **Axios** have been used to call the Api mentioned above.
- You can Test Api(s) by using Postman.
    

## The general page breakdown looks like this:
- Home page (URL: /#/ )
    - List of Pokemon Cards
    
- Sign in/Sign up pages (URL: /#/Login, /#/SignUp ) 
    - Use JWT (store the token in localStorage)
    
- Favorites page (URL: /#/favorites )
    - Show Selected Card(store in localStorage)

- Profile Page (URL:/#/Profile)
    - Show Personal Information (store in localStorage).
    - Logout Button (clear token from localStorage)

- "Table Appearance" Page (URL:/#/TableAppearance)
    - Show Pokemon's Data in Table 
    
 - "About Pokemon" Page (URL:/#/About)
    - Document About Pokemon
    
- "Contact Us" Page(URL:/#/Contact)
    - You can email us and help us progress :))
    

    

    
