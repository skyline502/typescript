# Adding components to Angular App
* In the **src/app** folder
    - add the file you want your component to be contained it
    - filename structure: *__componentname.component.ts__*
    - use hyphen (-) for multi word component names
* In the file:
    - add this line to the top of file
        - *__import { Component } from '@angular/core'__*;
        - ```
            import { Component } from '@angular/core';

            @Component({
                selector: 'courses' //all <courses>
                template: '<h2>Courses</h2> //can be multiple lines
            })```
* Faster way to add component to your app
    - in terminal type:
        - ng g c (component name)
            - g: short for generate
            - c: short for component
            - this command will generate 4 files:
                - component.css, component.html, component.spec.ts, and component.ts