import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentdataService {
 
   options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      relatedToVideoId: '7ghhRHRP6t4',
      part: 'id,snippet',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'dbebcc4d7emsh443ba8246c507bfp1e7462jsnd0ee265b0daf',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

 
  constructor(private http:HttpClient) { }
  getallcontentdata(){
    const headers = {
      'X-RapidAPI-Key': 'dbebcc4d7emsh443ba8246c507bfp1e7462jsnd0ee265b0daf',
  'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  // 'Content-Type': 'application/json',
  // 'Accept': 'application/json',
  // 'Access-Control-Allow-Headers': 'Content-Type',
    }
    const params = {
      
        relatedToVideoId: '7ghhRHRP6t4',
        part: 'id,snippet',
        type: 'video',
        maxResults: '50'
      
    }
    const request = {
      headers : new HttpHeaders(headers),
      params :params
    }
    return this.http.get('https://youtube-v31.p.rapidapi.com/search',request);
  }
}
