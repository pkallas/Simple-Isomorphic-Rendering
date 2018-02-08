## Reusable Navbar for React Applications

### Authors

- [Johnathon Lubaway](https://github.com/NeoJax)
- [Patrick Kallas](https://github.com/pkallas)

### Overview

This is a navbar component that can be used in react applications. If you just
want the component, you can find it in the src/client/Navbar directory. Otherwise,
you can see a simple example of using isomorphic rendering to render a React app
using node and javascript for the server. One thing to note is that the styles
for the navbar are included in a separate css file in the Navbar directory.
Webpack has been configured to bundle any imported css files it finds into one
style.css sheet. Babel has been configured so that node can correctly parse the
import './index.css' statement when it serves the distributed build.

Due to using isomorphic rendering, this is an example of how you could create a
React application, and users who have disabled javascript can still view and
interact with your page.

### Console Warning

You may notice a warning in the console when you launch the application.
The warning is as follows:
"Warning: Text content did not match. Server: "â˜°" Client: "☰""

This is because if you look in src/client/Navbar on line 21, you will see &#9776;
In the browser, this HTML is evaluated as the hamburger icon you may typically
see on an iPhone app. When node evaluates server/server.js, it reads &#9776; as
"â˜°", yet React is warning that on the client it gets evaluated to "☰".

I have not yet found a solution to this issue that doesn't involve installing a
third party library. Any advice would be greatly appreciated!

### Usage

Clone the repository
npm install in your terminal
npm start

Navigate to localhost:3000

Navigate to src/client/Navbar and copy the directory to wherever you'd like!
Depending on your Webpack and Babel configurations, you may need to remove the
import './index.css' statement on line 3, and convert the styles into inline
styling or transfer them to your own stylesheet.

The component itself takes a prop called links. The prop should be formatted as
an array of strings like so:
['/Home', '/AnotherPage', '/YetAnotherPage']

For an example, see line 9 in src/client/app/index.js

Done!

### Usage of component by itself

Clone the repository

Navigate to src/client/Navbar and copy the directory to wherever you'd like!
Depending on your Webpack and Babel configurations, you may need to remove the
import './index.css' statement on line 3, and convert the styles into inline
styling or transfer them to your own stylesheet.

The component itself takes a prop called links. The prop should be formatted as
an array of strings like so:
['/Home', '/AnotherPage', '/YetAnotherPage']

For an example, see line 9 in src/client/app/index.js

### Thanks for reading!
