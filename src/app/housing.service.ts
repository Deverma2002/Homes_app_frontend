import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'       //root means this can be used throughout the application
})
export class HousingService {
  // readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  url = 'http://localhost:3000/locations';

  constructor() { 
    
  }

  async getAllHousingLocation(): Promise<HousingLocation[]> {
    // return this.housingLocationList;
    const data = await fetch(this.url);
    console.log(data)
    return await data.json() ?? [];
  }

  // async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
  //   // return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  //   const data = await fetch(`${this.url}/${id}`);
  //   return await data.json() ?? {};
  // }


  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    try {
      const response = await fetch(`${this.url}/${id}`);
      // let data = await response.json()
      // console.log("Data: ",data)
      if (response.status === 404) {
        // console.log(404)
        return undefined; // Not found
      }
      if (!response.ok) {
        // console.log('error')
        throw new Error(`Error fetching location: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error in getHousingLocationById:', error);
      return undefined;
    }


  }
  
  
  submitApplication(firstName:string , lastName: string , email:string){
    console.log(firstName, lastName ,email);
  }

}



