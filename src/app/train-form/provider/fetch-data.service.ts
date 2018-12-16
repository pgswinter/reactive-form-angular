import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataModel, ManagementUserMasterModel } from '../interfaces/data-model';
import {API} from '../../app.const';
import { debug } from 'util';
import { HttpErrorHandler, HandleError } from '../../http-error-handler.service';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchDatsServices {
  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('AdminService');
  }

  // Fetch data from API
  fetchAdministrators(): Observable<DataModel> {
    return this.http.get<DataModel>(`${API.ADMINISTRATIVE_MASTER.SEARCH}`);
  }

  // Fetch data from API by ID
  fetchAdministratorsById(id: Number): Observable<ManagementUserMasterModel> {
    return this.http.get<ManagementUserMasterModel>(`${API.ADMINISTRATIVE_MASTER.SEARCH}/${id}`);
  }

  // Insert
  insertAdministrator(admin: ManagementUserMasterModel): Observable<ManagementUserMasterModel> {
    return this.http.post<ManagementUserMasterModel>(`${API.ADMINISTRATIVE_MASTER.SEARCH}`, admin).pipe(
      catchError(this.handleError('addAdmin', admin))
    );
  }

  // Update
  updateAdministratorById(id: number, admin: ManagementUserMasterModel): Observable<ManagementUserMasterModel> {
    return this.http.put<ManagementUserMasterModel>(`${API.ADMINISTRATIVE_MASTER.SEARCH}/${id}`, admin).pipe(
      catchError(this.handleError('updateAdmin', admin))
    );
  }

  // Delete
  deleteAdministratorById(id: number): Observable<ManagementUserMasterModel> {
    return this.http.delete<ManagementUserMasterModel>(`${API.ADMINISTRATIVE_MASTER.SEARCH}/${id}`).pipe(
      catchError(this.handleError('deleteAdmin'))
    );
  }
}
