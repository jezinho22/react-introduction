# React Introduction and Tinker

Use a new project to demonstrate this - build it up as far as ...

1. rendering Parent with 3 children or ...
2. rendering Parent with n children from an array or all the way to ...
3. implementing an event listener, event handler and useState to render changes
   in response to user input

Import the Instructions component and allow / guide / challenge students to
tinker and achieve the Instructions goals

1. Build with Vite
2. Inspect the default page it creates - note the user input button and the
   publicity stuff - yeah we won't want that
3. Explore the files it has created:  
   a. **index.html**

   - contains app info for the browser including tab icon and tab title
   - provides the insertion point for all the html that the components produce

   ```
    <div id="root"></div>
   ```

   - imports the `App.jsx` script which bosses all the components and funnels
     the html into the page

   ```
    <script type="module" src="/src/main.jsx"></script>
   ```

   b. **main.jsx**

   - imports the react libraries
   - does getElementById to grab the root div
   - imports App.jsx and gets it ready to insert/append at 'root'

   c. **App.css and index.css** - empty the css out - it's not doing anything we
   want  
   d. **App.jsx** - explore which bits do something we want, and which do not -
   remove the returned jsx, the useState - note the structure and the syntax of
   the component function  
   e. **package.json** - a record of what packages and settings are used, so
   they can be re-created by the IDE

4. Create a Parent.jsx component. Import it to App.jsx and view it.
5. Create a Child.jsx component and import it to Parent.jsx
6. Re-use the Child component by repeating it as siblings in Parent.jsx
   **Tinkering point**
7. We want our components to be re-usable but not identical - how do we change
   their content? Demo passing a prop - child names  
   **Tinkering point**
8. This is long-winded - what would be DRY-er? Some sort of loop. And data in
   some sort of array. Demo .map  
   **Tinkering point**
9. And, another day, we don't mind static pages but one of React's super-powers
   is dynamic pages that respond to the user - like the button we saw when we
   first made a vite react app. Demo having clickable text that responds with
   'Hey that tickles'.  
   **Tinkering point**
