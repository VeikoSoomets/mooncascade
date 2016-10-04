import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Athlete } from './athlete';

@Injectable()
export class AthleteService {
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getAthletes(): Promise<Athlete[]> {
	    return this.http.get('/athletes')
	    		   .toPromise()
	    		   .then(this.mapAthlete)
               	   .catch(this.handleError);
	}

	private mapAthlete(response: Response): Athlete[]{
		let indexes: number[];
		let athletes = response.json().data as Athlete[];
		athletes.forEach(function(athlete, index){
			athletes[index].timing_points.forEach(function(t_point, t_index) {
				var date = new Date(athletes[index].timing_points[t_index].pivot.time);
				athletes[index].timing_points[t_index].pivot.time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
			});
			if (!!athletes[index-1]) {
				// if(athletes[index-1].timing_points[0].pivot.time)
			}
		});			
		return athletes;
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
	  	return Promise.reject(error.message || error);
	}

	private moveElementInArray(array, old_index, new_index): any[] {		
	    if (new_index >= array.length) {
	        var k = new_index - array.length;
	        while ((k--) + 1) {
	            array.push(undefined);
	        }
	    }
	    array.splice(new_index, 0, array.splice(old_index, 1)[0]);
	    return array;
	}
}