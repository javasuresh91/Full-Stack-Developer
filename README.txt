Web Development
    -Show casing the content to the World.
    -It has other words like Web Engineering,Web design,Web content development
    -Types of web developers
        -Front end developers
            -Deals with Html,CSS and javascript
        -Back end developers
            -Deals with Functionality and database transaction of the Website in any language
        -Full Stack developers
            -Deals with both Front and back end Developers.
HTML
    -It gives the structure to the Website and content, it is like a Selekton of a Human body
CSS 
    -It is a decoration of the Website. it is like a skin and dressing for the human Selekton. it makes the look pretty.
javascript  
    -It is a brain of our website deals with Objects , Strings, Variables and etc.
CSS (EX_02_CSS_Introduction)
    -Three ways we can create CSS as inline,Internal and external
    -Css can apply on Element , id and class
CSS Color 
    -It can be given in three format
        -Name of the Color
        -Hexadecimal
        -RGB value   
        -Gradient (It supportonly specific version/browser)
            -Linear
            -Radial
        -Shadows
CSS Combinator
    -USing space (ul li {})                
    -Using Shift arrow (ul > li {})

Javascript    
    -It is a Programming language and it is created by 10 days by Brendan Ike for Netsacpe
    -It is a very nasty language.
    -Javascript is used in all Frameworks like Anugular, react and etc
    -It is also a interpreted language, which will not compile but works on the fly by the browser reads it and works.
    -Now a days we can run the Javascript in the Servers and Mac and Knode.
    -We can write the Javascript in inline(in the HTML file . inside the script tag) and seperate file.
    -We can write the content in the console for debugging purpose.
Javascript Reference 
    -https://www.w3schools.com/jsref/jsref_obj_string.asp
    -https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String    
    -http://jsbin.com/?html,output
Bootstrap
    -It is a Frameworks for build the mobile first websites for the application.
    -It comes with lot of classes and styling effects within.
    -Media query is used within that to build the frameworks.
Downloading Bootstrap
    -https://getbootstrap.com/docs/4.0/getting-started/download/
    -Download the Complied version of Bootstrap(Not Source file)
Bootstrap Basic Rules/Required tags
    -Doctype and lang is must
        <!Doctype html> <html lang="en">...</html>
    -Metadata is required, because the Bootstrap looks for the model(Mobile,tab,system) first.
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    -Bootstrap Css
    -Jquery file
    -Tether file
    -Bootstrap javascript file    
Bootstrap Grid System.
    -In Bootstrap we have two types of Container classes like .container and .container-fluid
    -To make the bootstrap works we should start the body section with container classes.
    -Container consist of rows.
    -The rows consist of columns.
    -Columns are coming in small(sm),medium(md),large(lg),XtraLarge(xl).
Flexbox
    -It is a CSS3 layout mode , whichprovide a easy and clean way to arrange items within a container.
        -No floats
        -Keeping the child elemnts very easier
        -responsive and mobile friendly
        -Flex container margin wont collapse with margin of elements.
        -Changing the order of the elements.
    -Flexbox model concept
        -Direction-Agnostic
        -Width and height of the elemnts will fit for best
        -Small scale layout while the GRID standard
SASS
    -SASS = Syntactically Awesome StyleSheet
    -It is powerfull language which is used to wrte the CSS, and it is extented language of CSS.(www.sass-lang.com)
    -We have SCSS, LESS are the CSS extension framework.
Install SASS
    -First Install Ruby
    -Go to the cmd prompt and install Sass using ruby command
    -"gen install sass"
    -SASS use "ATOM" ide is better
Compile and Watch SASS Code
    -Create html(index.html) and sass(mystyle.sass) file in a directory(Project)
    -Code the html and also add the <link> tag with the stylesheet(any filename - mystyle.css)
    -And then goto the cmd prompt to the location where the project and run the below command
    -"sass --watch <sass_filename>:<css_filename>" i.e., "sass --watch mystyle.sass:mystyle.css"
    -By executing the above cmd, the two extra file will be created(mystyle.css and mystyle.map.css) and the cmd will listen to the changes to SASS file.
    -Now if you start writing the sass file, the automatically compile and generate the css in the croessponding css file.
Different Way to compile SASS
    -First  Way : Manually open the cmd prompt and GOTO the dir where the sass file located and run the cmd like "sass <input_file_name>.sass <output_file_name>.css"
    -Second way :  open the cmd prompt and GOTO the dir/file where the sass file located and run the cmd like 
        -"sass --watch <sass_filename>.sass:<css_filename>.css"
        -"sass --watch <sass_folder_dir>:<css_folder_dir>"
    -Third Way : using Third party APP like CODEKIT, PREPOSE , MIXTURE,KOALA,WINLESS,SIMPLESS    
    -Fourth Way : using the plugin in the IDE like Bracket,Atoms and etc    
Standard Way of CSS (EX_08_SASS\03_Standard-Structure)
    -http://smacss.com/
Partial SASS Compile (EX_08_SASS\04_Partial_SASS_Compile)
    -If you do "sass --watch" for directory level, it will generate the css and css mapping file for each sass file in the dir.
    -If you want to skip the watch to particular sass file, the name of the sass file should be starts with "_" UNDERSCORE
Web Request
    -Asking a resource by the client to the server
    -Client mode may be Desktop or mobile browser, Apps ,Curl command and etc
    -The server send the same data to all the client which is requesting it, but the intreperter will play the role to display the information to us based on the client mode.
    -HTTP means Hyper text Transfer Protocol, using this protocol the client send the request to the server using the very specific ipaddress to send the information which is belogs to my requesting URL.
    -The server send the response to the client as a HTTP response like html,json , xml and etc format
Node(EX_09_NODE\01_SampleApp)
    -Npm is Node Package Manager which is used to install the libary which is needed for Node Application
    -All file should be .js files
    -If you need to use any libary into the appliaction, use 'require' method. Eg: require('readline-sync')   
Creat Node App(EX_09_NODE\03_First_Node_Api)    
    -Intialize the Application using cmd "npm init"
    -It will ask for some info and it create a file call package.json with some information
    -Create js file(server.js) in the name of which will ask in the above cmd.
    -If you need any dependency, run the cmd as "npm install --save <dependency_name>"
    -This command will install the depenency and save the dependency name in our package.json and it will add or update the node_modules folder
    -Code the server.js as needed
    -Run the cmd "npm start" - it will see the package.json run the stmt which match in the script or "node server.js" - it run the file directly