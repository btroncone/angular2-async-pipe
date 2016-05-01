import {bootstrap} from 'angular2/platform/browser';
import {App} from './app';
import {TotalService} from './services/total.service';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(App, [
	TotalService, 
	ROUTER_PROVIDERS
]).catch(err => console.error(err));