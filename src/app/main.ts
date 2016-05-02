import {bootstrap} from 'angular2/platform/browser';
import {App} from './app';
import {BasicService} from './services/basic.service';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(App, [
	BasicService, 
	ROUTER_PROVIDERS
]).catch(err => console.error(err));