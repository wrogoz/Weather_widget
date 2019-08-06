import {observable} from 'mobx';

export class Store {

    @observable cityNames: any = [''];
    @observable menuItems:any = [];
    @observable city:string = 'Enter City';
}


        
let store = new Store();
export default store;
