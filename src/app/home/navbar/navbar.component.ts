import { Component } from '@angular/core';

import { ContentdataService } from 'src/app/services/contentdata.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  http: any;
  contentlist:any;
  constructor(private contentdata : ContentdataService , http:HttpClient){

  }

onsearchclick(value:string){
  // options = {
  //   method: 'GET',
  //   url: 'https://youtube-v31.p.rapidapi.com/search',
  //   params: {
  //     relatedToVideoId: '7ghhRHRP6t4',
  //     part: 'id,snippet',
  //     type: 'video',
  //     maxResults: '50'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': 'dbebcc4d7emsh443ba8246c507bfp1e7462jsnd0ee265b0daf',
  //     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  //   }
  // };

  // constructor(http:HttpClient) { }
// console.log(value);
// const headers = {
//   'X-RapidAPI-Key': 'dbebcc4d7emsh443ba8246c507bfp1e7462jsnd0ee265b0daf',
// 'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
// 'Content-Type': 'application/json',
// 'Accept': 'application/json',
// 'Access-Control-Allow-Headers': 'Content-Type',
// }
// const params = {
  
//     relatedToVideoId: '7ghhRHRP6t4',
//     part: 'id,snippet',
//     type: 'video',
//     maxResults: '50'
  
// }
// const request = {
//   headers : new HttpHeaders(headers),
//   params :params
// }
// return this.http.get('https://youtube-v31.p.rapidapi.com/search',request);

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    q: 'music',
    part: 'snippet,id',
    regionCode: 'US',
    maxResults: '50',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': 'dbebcc4d7emsh443ba8246c507bfp1e7462jsnd0ee265b0daf',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
const headers = {
  'X-RapidAPI-Key': 'dbebcc4d7emsh443ba8246c507bfp1e7462jsnd0ee265b0daf',
'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
// 'X-CACHEBYPASS':value,
'Content-Type': 'application/json',
'Accept': 'application/json',
'Access-Control-Allow-Headers': 'Content-Type',
}
const params = {
  
  q: 'music',
  part: 'snippet,id',
  regionCode: 'US',
  maxResults: '50',
  order: 'date'
  
}
const request = {
  headers : new HttpHeaders(headers),
  params :params
}
this.http.get('https://youtube-v31.p.rapidapi.com/search',request)
.subscribe((result :any)=>{
  
this.contentlist=result.items;
console.log(this.contentlist);
})
}
}
