
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  //public ipAddr = 'http://192.168.20.13:3000/';
  public ipAddr2 = 'http://113.53.253.41:3000/';

  public ipAddr = 'https://dataping.totidc.net/api_rd/';


  loginAdminlUrl = this.ipAddr + 'login_admin.php';
  dataListUrl = this.ipAddr + 'request_list.php';
  ccrListUrl = this.ipAddr + 'ccr_list.php';
  ccrMoreUrl = this.ipAddr + 'ccr_more.php';
  ccrIDUrl = this.ipAddr + 'ccr_id.php';
  ccrEditUrl = this.ipAddr + 'ccr_edit.php';
  ccrAddUrl = this.ipAddr + 'ccr_add.php';
  ccrDelUrl = this.ipAddr + 'ccr_del.php';

  //singinUrl = this.ipAddr2 + 'auth/local/singin';
  singinUrl = this.ipAddr + 'sign_in.php';
  missionSetupUrl = this.ipAddr + 'mission_setup.php';
  missionDetailUrl = this.ipAddr + 'mission_detail.php';
  missionLoadlUrl = this.ipAddr + 'mission_load.php';

  constructor(private http: HttpClient) { }


  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }


  missionLoad(
    missionId: number,
  ): Observable<any> {
    const body = {
      missionId: missionId,
    };
    const myHeader = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer dG9rZW5fdG90X2lkY19hc3NldA==`
    };
    return this.http
      .post<any>(this.missionLoadlUrl, body, { headers: myHeader })
      .pipe(catchError(this.handleError));
  }



  missionDetail(cmdUser: string,
    missionId: number,
    latitude: string,
    longitude: string,
    speed: number,
    hight: number,
    stay: number,
  ): Observable<any> {
    const body = {
      cmdUser: cmdUser,
      missionId: missionId,
      latitude: latitude,
      longitude: longitude,
      speed: speed,
      hight: hight,
      stay: stay
    };
    const myHeader = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer dG9rZW5fdG90X2lkY19hc3NldA==`
    };
    return this.http
      .post<any>(this.missionDetailUrl, body, { headers: myHeader })
      .pipe(catchError(this.handleError));
  }

  singin(username: string, password: string): Observable<any> {
    const body = {
      username: username,
      password: password,
    };
    const myHeader = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer dG9rZW5fdG90X2lkY19hc3NldA==`
    };
    return this.http
      .post<any>(this.singinUrl, body, { headers: myHeader })
      .pipe(catchError(this.handleError));
  }


  missionSetup(missionName: string, cmdUser: string): Observable<any> {
    const body = {
      missionName: missionName,
      cmdUser: cmdUser,
    };
    const myHeader = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer dG9rZW5fdG90X2lkY19hc3NldA==`
    };
    return this.http
      .post<any>(this.missionSetupUrl, body, { headers: myHeader })
      .pipe(catchError(this.handleError));
  }






  loginAdmin(username: string, password: string): Observable<any> {
    const body = {
      username: username,
      password: password,
    };
    return this.http
      .post<any>(this.loginAdminlUrl, body)
      .pipe(catchError(this.handleError));
  }

  dataList(chk_name: string, page_start: number, page_limit: number
  ): Observable<any> {
    const body = {
      chk_name: chk_name, page_start: page_start, page_limit: page_limit
    };
    return this.http
      .post<any>(this.dataListUrl, body)
      .pipe(catchError(this.handleError));
  }

  ccrList(chk_name: string, page_start: number, page_limit: number
  ): Observable<any> {
    const body = {
      chk_name: chk_name, page_start: page_start, page_limit: page_limit
    };
    return this.http
      .post<any>(this.ccrListUrl, body)
      .pipe(catchError(this.handleError));
  }

  ccrMore(chk_name: string
  ): Observable<any> {
    const body = {
      chk_name: chk_name
    };
    return this.http
      .post<any>(this.ccrMoreUrl, body)
      .pipe(catchError(this.handleError));
  }

  ccrID(id: number
  ): Observable<any> {
    const body = {
      id: id
    };
    return this.http
      .post<any>(this.ccrIDUrl, body)
      .pipe(catchError(this.handleError));
  }

  ccrEdit(id: number, ccr_name: string, ccr_value: string
  ): Observable<any> {
    const body = {
      id: id, ccr_name: ccr_name, ccr_value: ccr_value
    };
    return this.http
      .post<any>(this.ccrEditUrl, body)
      .pipe(catchError(this.handleError));
  }


  ccrAdd(ccr_value: string
  ): Observable<any> {
    const body = {
      ccr_value: ccr_value
    };
    return this.http
      .post<any>(this.ccrAddUrl, body)
      .pipe(catchError(this.handleError));
  }


  ccrDel(id: number
  ): Observable<any> {
    const body = {
      id: id,
    };
    return this.http
      .post<any>(this.ccrDelUrl, body)
      .pipe(catchError(this.handleError));
  }



}
