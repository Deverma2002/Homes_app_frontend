import { Component , inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  filteredLocationList:HousingLocation[] = [];

  constructor() {
    // Optionally, you can use the injected service here or elsewhere in the class
    // this.housingLocationList = this.housingService.getAllHousingLocation();
    this.housingService.getAllHousingLocation().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      // console.log(this.housingLocationList)
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string){
    if(!text) this.filteredLocationList = this.housingLocationList;
    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

}
