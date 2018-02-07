## Reusable Navbar for React Applications

### Authors

[Johnathon Lubaway](https://github.com/NeoJax)
[Patrick Kallas](https://github.com/pkallas)

### Overview

This is a navbar component that can be used in react applications. If you just
want the component, you can find it in the src/client/Navbar directory. Otherwise,
you can see a simple example of using isomorphic rendering to render a React app
using node and javascript for the server. One thing to note is that the styles
for the navbar are included in a separate css file in the Navbar directory.
Webpack has been configured to bundle any imported css files it finds into one
style.css sheet. Babel has been configured so that node can correctly parse the
import './index.css' statement when it serves the distributed build.

### Usage

Clone the repository
npm install in your terminal
npm start

Navigate to localhost:3000

Done!

### Usage of component by itself

Clone the repository
Navigate to src/client/Navbar and copy the directory to wherever you'd like!
Depending on your Webpack and Babel configurations, you may need to remove the
import './index.css' statement on line 3, and convert the styles into inline
styling or transfer them to your own stylesheet.
