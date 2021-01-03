# PokemonWebsite

## Getting started
To get the frontend running locally:
- Clone this repo
- `npm install` to install all req'd dependencies
- `npm start` to start the local server (this project uses create-react-app)
- Local web server will use port 3000  (standard React's port).You can configure port in scripts section of package.json.	

**The general page breakdown looks like this:**
- Home page (URL: /#/ )
    - List of Pokemon Cards
    
- Sign in/Sign up pages (URL: /#/Login, /#/SignUp ) 
    - Use JWT (store the token in localStorage)
- Favorites page (URL: /#/favorites )
    - Show Selected Card(store in localStorage)
