import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  windData = [];
  placeName = '';
  weatherData = {windSpeed: '', windDirection: '', windGust: '', activePower: ''};
  selDay = '';
  selMonth = '';
  graphCheck = true;
  weatherImage = '';
  constructor() { }
}
