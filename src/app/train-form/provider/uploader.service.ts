import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpProgressEvent,
  HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, last, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploaderService {

  constructor(
    private http: HttpClient
  ) { }

  upload(file: File) {
    if (!file) {
      return ;
    }

    const req = new HttpRequest('POST', '/uploader', file, {
      reportProgress: true
    });

    return this.http.request(req);
  }

  /** Return distinct message for sent, upload progress, & response events */
  // private getEventMessage(event: HttpEvent<any>, file: File) {
  //   switch (event.type) {
  //     case HttpEventType.Sent:
  //       return `Uploading file "${file.name}" of size ${file.size}.`;

  //     case HttpEventType.UploadProgress:
  //       // Compute and show the % done:
  //       const percentDone = Math.round(100 * event.loaded / event.total);
  //       return `File "${file.name}" is ${percentDone}% uploaded.`;

  //     case HttpEventType.Response:
  //       return `File "${file.name}" was completely uploaded!`;

  //     default:
  //       return `File "${file.name}" surprising upload event: ${event.type}.`;
  //   }
  // }

  /**
   * Returns a function that handles Http upload failures.
   * @param file - File object for file being uploaded
   *
   * When no `UploadInterceptor` and no server,
   * you'll end up here in the error handler.
   */
  // private handleError(file: File) {
  //   const userMessage = `${file.name} upload failed.`;

  //   return (error: HttpErrorResponse) => {
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // Let app keep running but indicate failure.
  //     return of(userMessage);
  //   };
  // }
}
