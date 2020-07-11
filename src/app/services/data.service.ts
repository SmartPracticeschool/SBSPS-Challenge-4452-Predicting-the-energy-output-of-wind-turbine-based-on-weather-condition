import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http';
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
  hourlyTable = [];
  constructor(private _snackBar: MatSnackBar, private http: HttpClient) { }
  openToast(message,action) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
  getThread(data) {
    // data.weather[0].hourly.forEach((item, i) => {
    //   this.http.get(`https://windz-flask-server.herokuapp.com/predict?windSpeed=${item.windspeedKmph}&windDirection=${item.winddirDegree}&windGust=${item.WindGustKmph}`, {responseType: 'json'})
    //     .subscribe((response: any) => {
    //       this.hourlyTable.push(parseFloat(response.output));
    //     });
    // });
    // console.log('Hourly Data', this.hourlyTable);
  }
}
