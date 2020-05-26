let project1Detail = `simple e-commerce website.Build in React.
React hooks are used most of the component to make things easier.
Stripe form is used to collect the information from the client site.
node, express.js is used for the API request.
Hosting is done by firebase`;

let project2Detail = `E-commerce website.
Static website.
Single Page Application.
Build with plain HTML,CSS & Bootstrap.`

let project3Detail = `It's a Medical website.Build with React.React Calender is used for client info.Node & express.js is used for API request.Heroku is used for running the server.Client information is stored in MongoDB-Atlas database.`

let project4Detail = `Demo Banking website.
Based on Saving and Withdraw principle.
Vanilla JavaScript is used for dynamic action.
Bootstrap is used for styling the website.`

let project5Detail = `Gaming Application.
Build with HTML, CSS & JavaScript.
Vanilla JavaScript is used for interaction in the Game.`

let projects = [project1Detail, project2Detail, project3Detail, project4Detail, project5Detail];

let projectSplit = projects.map(p => p.split('.'));

const [project1, project2, project3, project4, project5] = projectSplit;

export default project1;
export { project2, project3, project4, project5 }

