import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AsyncPipeExample} from './components/async-pipe-example';
import {DemoView} from './components/demo-view';

@Component({
    selector: `app`,
    directives: [ROUTER_DIRECTIVES],
    template: `
		<header>
      		<h1 class="title">Angular 2 - AsyncPipe</h1>
			<nav>
				<a [routerLink]=" ['AsyncPipeExample'] ">Async Pipe Example</a>
				<a [routerLink]=" ['AnotherView'] ">Demo View</a>
			</nav>
    	</header>
		<main>
			<router-outlet></router-outlet>
		</main>
	`
})
@RouteConfig([
    { path: '/', component: AsyncPipeExample, name: 'AsyncPipeExample'},
    { path: '/sample-view', component: DemoView, name: 'DemoView'}
])
export class App {}