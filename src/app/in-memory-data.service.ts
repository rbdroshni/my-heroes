import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb(){
        const heroes=[
            {id:11,name:'Roshni'},
            {id:12,name:'Sunil'},
            {id:13,name:'Akash'},
            {id:14,name:'Ritu'},
            {id:15,name:'Priya'},
            {id:16,name:'Pragati'},
            {id:17,name:'Nikhil'},
            {id:18,name:'Dheeraj'},
            {id:19,name:'Kunal'},
            {id:20,name:'Shanu'},
            {id:21,name:'Poonam'}
        ];
        return {heroes};
    
    }
}