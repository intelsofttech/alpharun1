import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private baseUrl = 'http://localhost:8080';
  
  public httplink ="http://localhost/app/public/fr";

  constructor(private http: HttpClient) { }


 downfile(file: any, url: any, token: any): Observable<HttpEvent<any>>{
    var header = {
		'Content-Type': 'application/json',
		'enctype': 'application/json',
		'Accept': '*',
		'Authorization': 'Bearer '+token,
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
		'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
	   };
    let postData = {
			datacontent: file
	}
    return this.http.post(url , postData, {
      responseType: "json", reportProgress: true, observe: "events", headers: new HttpHeaders(
        header)
    });
  }
  //responseType: "json", reportProgress: true, observe: "events", headers: header
  
  
  upload(file: any, url : string): Observable<HttpEvent<any>> {
    var header = {
		//'Content-Type': 'multipart/form-data;charset=UTF-8',
		'enctype': 'multipart/form-data',
		'Accept': '*',
		'Authorization': 'Bearer ',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
		'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
	   };
	
	const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
    
  
  onPostfile(datafile: File, dir : string) {
 

		var options = {
			reportProgress: true,
			responseType: 'json'
		};
		let body = new FormData();
		body.append("image", datafile);
		this.http.post(this.httplink+"/uploadimage/", body, {
			reportProgress: true,
			responseType: 'json'
		})
		  .subscribe(reponse => {
			 console.log(reponse);
			 
		   }, error => {
			console.log(error);
		  });
        // now you can do upload the compressed image
  }
  
  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}