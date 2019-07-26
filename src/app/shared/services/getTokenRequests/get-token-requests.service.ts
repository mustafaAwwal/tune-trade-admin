import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment_url } from 'src/environments/environment';
import { GetAllTokensReponseModels, insertTokenFromListModel } from 'src/app/shared/models';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GetTokenRequestsService {
  // Define url in this object so editing url will be easy
  private urls = {
    getAlltokens: environment_url + 'getalltokens',
    getListTokens: environment_url + 'getListTokens',
    insertTokenData: environment_url + 'inserttokendata',
    getTokenData: environment_url + 'gettokendata'
  };
  constructor(private http: HttpClient, private router: Router) { }
  getAllTokens(): Observable<HttpResponse<any>> {
    const httpOptions = this.getHeaders();
    return this.refreshToken(this.http.get<HttpResponse<GetAllTokensReponseModels>>(this.urls.getAlltokens, httpOptions));
  }
  getListTokens(): Observable<HttpResponse<any>> {
    const httpOptions = this.getHeaders();
    return this.refreshToken(this.http.get<HttpResponse<GetAllTokensReponseModels>>(this.urls.getListTokens, httpOptions));
  }
  insertTokenFromList(tokenData: insertTokenFromListModel): Observable<HttpResponse<any>> {
    const httpOptions = this.getHeaders();
    return this.refreshToken(this.http.post<HttpResponse<any>>(this.urls.insertTokenData, tokenData, httpOptions));

  }
  getTokenData(): Observable<HttpResponse<any>> {
    const httpOptions = this.getHeaders();
    return this.refreshToken(this.http.get<HttpResponse<any>>(this.urls.getTokenData, httpOptions));
  }
  getHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage.getItem('authToken')
      }),
      observe: 'response' as 'body'
    };
    return httpOptions;
  }
  refreshToken(response: Observable<HttpResponse<any>>) {
    response.subscribe(res => {
      const headerValue = res.headers.get('token');
      const status      = res.body['status'];
      console.log('The following data is consoled from get token request service in function refresh token: ');
      console.log(res.headers);
      if (status) {
        sessionStorage.setItem('token', headerValue);
      } else {
        // sessionStorage.clear();
        // this.router.navigate(['']);
      }
    });
    return response;
  }
}
