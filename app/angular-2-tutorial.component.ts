/**
 * Created by Tareq Boulakjar. from angulartypescript.com
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: ` 
               <h4>This is a Hi! example from <b>Angular 2</b></h4>    
               <hr>
                 <a target="_blank" href="http://www.angulartypescript.com/angular-2-tutorial/" title="Angular 2 Tutorial"> 
     <img src="http://www.angulartypescript.com/wp-content/uploads/2016/03/learn-more-angular-2.png" alt="Smiley face" height="200" width="500">   
    </a>
               <div class="angular-2-tutorial">
                    <ul class="nav nav-pills nav-stacked " >
                        <li><a target="_blank" href="http://www.angulartypescript.com/angular-2-tutorial/" title="Angular 2 Home"> Angular 2 Home </a></li>
                        <li><a target="_blank" href="http://www.angulartypescript.com/angular-2-introduction/">Angular 2 Introduction</a></li>
                        <li><a target="_blank" href="http://www.angulartypescript.com/angular-2-architecture/">Angular 2 Architecture</a></li>
                        <li><a target="_blank" href="http://www.angulartypescript.com/angular-2-annotations/">Angular 2 Annotations</a></li>
                        <li><a target="_blank" href="http://www.angulartypescript.com/angular-2-getting-started/">Angular 2 Setup</a></li>
                        <li><a target="_blank" href="http://www.angulartypescript.com/angular-2-hello-world/">Angular 2 Hello World</a></li>
                        <li><a target="_blank" href="http://www.angulartypescript.com/angular-2-components/">Angular 2 Components</a></li>
                        <li><a target="_blank" href="http://www.angulartypescript.com/angular-2-template-syntax/">Angular 2 Template Syntax</a></li>
                        <li><a target="_blank" href="http://www.angulartypescript.com/angular-2-data-binding/">Angular 2 Data Binding</a></li>
                        <li><a target="_blank" href="http://www.angulartypescript.com/angular-2-forms/">Angular 2 Forms</a></li>
                        <li><a target="_blank" href="http://www.angulartypescript.com/angular-2-formbuilder-example/">Angular 2 Formbuilder</a></li>
                        <li><a target="_blank" href="http://www.angulartypescript.com/angular-2-router-example/">Angular 2 Router</a></li>
                        <li><a target="_blank" href="http://www.angulartypescript.com/angular-2-http-example-typescript/">Angular 2 HTTP</a></li>
                        <li><a target="_blank" href="http://www.angulartypescript.com/angular-2-services/">Angular 2 Service</a></li> 
                    </ul>
                </div>

               `,
    styles:[`
                        .angular-2-tutorial {
                           background-color:#D3F3F4;
                           font-weight:bold;
                        }
                         
                        h3 {
                         color:#07C6F7;
                        }
                        h4 {
                         color:#5894F0;
                         font-size:12px;
                        }
                        
           `],

})
export class Angular2TutorialComponent { }
