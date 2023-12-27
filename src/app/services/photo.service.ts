import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';


export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: UserPhoto[] = [];
  
  constructor() { }
  
  
  public async addNewToGallery() {
  // Take a photo
  
	const capturedPhoto = await Camera.getPhoto({
		resultType: CameraResultType.Uri,
		source: CameraSource.Photos,
		quality: 100
	});
	//console.log(capturedPhoto)
	
    //console.log(file)	
	this.photos.unshift({
		filepath: "soon...",
		webviewPath: capturedPhoto.webPath
	});
	var file = new File([capturedPhoto.webPath], "image."+capturedPhoto.format, {type:"image/"+capturedPhoto.format});
    return file;
 }
  
  public async addNewToCamera() {
  // Take a photo
  
	const capturedPhoto = await Camera.getPhoto({
		resultType: CameraResultType.Uri,
		source: CameraSource.Camera,
		quality: 100
	});
	this.photos.unshift({
		filepath: "soon...",
		webviewPath: capturedPhoto.webPath
	});
	var file = new File([capturedPhoto.webPath], "image."+capturedPhoto.format, {type:"image/"+capturedPhoto.format});
	return file;
 }

}


