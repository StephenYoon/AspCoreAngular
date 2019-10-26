# AspCoreAngular
Testing grounds in adding an Angular app to an existing AspCore Razor web application.  
Motivation comes from working an existing web applications that have been established patterns. Although great for getting a web application up quickly, as it scales lack of separation of concerns becomes a conern. For the client-side, it relies by default on jQuery, in order to enable some interactive features and also improve the user’s overall experience.
  
It’s true that jQuery has been playing a major role in the development of web applications over the past years, mostly because it is easy to learn, plus it supports a consistent syntax across different browsers. The problem is that jQuery code is very difficult to test, hard to extend, and most importantly, hard to maintain.  This adds quality to your list of concerns.
  
In comes Angular. Angular is a opensource JavaScript framework designed for building scalable and dynamic web applications. Angular uses pure HTML as its template language, but allows us to extend HTML’s syntax and combine it with functionality in order to build higher-level components.

Moreover, it supports patterns such as dependency injection (DI) and data binding, which eliminate the need for much of the code we otherwise have to write, and enable us to write automated tests for our applications, or even practice test-driven development (TDD).
  
## Prerequisites:
- ensure you have node.js installed (https://nodejs.org/en/)
- ensure you have Angular installed (in command prompt run this statement: npm install -g @angular/cli)

## Notes:
**Src** folder - This is actual source folder of the Angular application, entire project structure is present in this folder.  
**package.json** - file containing the list of NPM packages needed to develop client application.  
**angular.json** - file containing Configuration settings for the Angular application. This file is essential for Angular-CLI to work seamlessly.  
**tsconfig.json** - configuration file must for all TypeScript files to transpile to JavaScript.  
**node_modules** - folder containing all downloaded node modules. This folder is always large, ensure you git ignore this.  
  
## Steps:
1. Create a new ASP.NET Core Web Application / Web Application (not MVC, just plain vanilla Web Application using Razor).
2. `ng new ClientApp` to create the Angular application within the root of the ASP.NET Core project folder.
    - This is to align the package.json and other Angular files with the ASP.NET config files.
3. Update the angular.json file
    ```json
    "options": {
      "outputPath": "./wwwroot/dist",
      ...
    }
    ```
4. Update tsconfig.json to use `include` and `outDir`. The include config entry tells us to compile TypeScript from src folder only instead of entire project structure.
    ```json
    {
    "compileOnSave": false,
    "include": [
      "./src"
    ],
    "compilerOptions": {
      ...
      "outDir": "./wwwroot/dist/out-tsc",
      ...
    }
    ```
5. Update _Layout.cshtml  
    Near the top in the <head> section add `<base href="/">`

    Near the bottom, just before `@RenderSection("Scripts", required: false)`
    ```html
    <script src="~/dist/runtime-es2015.js" asp-append-version="true"></script>
    <script src="~/dist/polyfills-es2015.js" asp-append-version="true"></script>
    <script src="~/dist/styles-es2015.js" asp-append-version="true"></script>
    <script src="~/dist/vendor-es2015.js" asp-append-version="true"></script>
    <script src="~/dist/main-es2015.js" asp-append-version="true"></script>
    ```
