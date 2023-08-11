import { Component } from '@angular/core';
import { ContentdataService } from 'src/app/services/contentdata.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
 constructor(private ContentdataService:ContentdataService){
  this.localcontent();
 }
 contentlist:any[]=[];
 localcontent(){
  this.ContentdataService.getallcontentdata()
  .subscribe((result :any)=>{
    
this.contentlist=result.items;
console.log(this.contentlist);
  })
 }
 
}
