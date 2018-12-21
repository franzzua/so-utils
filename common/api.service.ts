import {fromEvent, Observable, of} from 'rxjs';
import {map, mergeMap, tap} from 'rxjs/operators';
import {InjectionToken} from '@so/di';
import {IRequestOptions, IRequestService} from "./i-request.service";

export const ApiUrlInjectionToken = new InjectionToken('apiUrl');

export class ApiService {
  // protected http: IRequestService;

  constructor(protected http: IRequestService,
              public ApiUrl: string) {
  }

  private isBSON = false;

  get<T>(url: string, options: IRequestOptions = {}): Observable<T> {
    return this.request<T>('GET', url, null, options);
  }

  post<T>(url: string, body: any, options: IRequestOptions = {}): Observable<T> {
    return this.request<T>('POST', url, body, options);
  }

  delete<T>(url: string): Observable<T> {
    return this.request<T>('DELETE', url);
  }

  put<T>(url: string, body: any, options: IRequestOptions = {}): Observable<T> {
    return this.request<T>('PUT', url, body, options);
  }

  private processResult = (body) => {
    if (!this.isBSON) {
      return of(body);
    }
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(body);
    return fromEvent(fileReader, 'loadend').pipe(
      map(_ => fileReader.result as ArrayBuffer),
      map(array => new Uint8Array(array)),
      // map(array => bson.deserialize(array)),
      tap(console.log)
    );
  };

  protected request<T>(method, url, body = null, options: IRequestOptions = {}): Observable<T> {
    url = this.ApiUrl.toString() + url;
    return this.http.request(method, url, body, {
      headers: {
        ...(options.headers || {}),
        'Accept': this.isBSON ? 'application/bson' : 'application/json'
      },
      params: options.params,
      responseType: this.isBSON ? 'blob' : 'json'
    }).pipe(
      // filter(event => {
      //   return (event instanceof HttpResponse);
      // }),
      // map(event => (<HttpResponse<Blob>>event).body),
      mergeMap(this.processResult)
    );
  }
}
