# rybalov-member-club
“Member Club” is a web-application which allows to add members to the Club and view list of club members.

## Local Development

Because this app is made of two npm projects, there are two places to run `npm` commands:

1. **Node API server** at the root `./`
1. **React UI** in `react-ui/` directory.

### Run the API server

In a terminal:

```bash
# Initial setup
npm install

# Start the server
npm start

or

npm run dev
```
### Run the React UI

The React app is configured to proxy backend requests to the local Node server. (See [`"proxy"` config](react-ui/package.json))

In a separate terminal from the API server, start the UI:
```bash
# Always change directory, first
cd react-ui/

# Initial setup
npm install

# Start
yarn start
```
