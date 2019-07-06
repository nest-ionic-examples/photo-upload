import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CameraResultType, CameraSource, Plugins } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient) {}

  async upload() {
    const capturedImage = await Plugins.Camera.getPhoto({ // <1>
      source: CameraSource.Camera,
      resultType: CameraResultType.DataUrl,
      saveToGallery: false
    });

    const file = await (await fetch(capturedImage.dataUrl)).blob(); // <2>

    const formData = new FormData(); // <3>
    formData.append('file', file);

    this.http.post(environment.api + 'photos/upload', formData).subscribe(resp => { // <4>
      console.log('resp: ', resp);
    }, err => {
      console.log('err: ', err);
    });
  }
}
