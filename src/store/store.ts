import {observable} from 'mobx';

export class Store {

    @observable cityName: string = "New York, NY"
}

let store = new Store();
export default store;
