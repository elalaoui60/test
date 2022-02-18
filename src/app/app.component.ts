import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  base64:string;
  fileSelected?:Blob;
  imageUrl?:string;
  constructor(private sant:DomSanitizer) { }

  ngOnInit(): void {
  }

  onSelectedNewFile(files:FileList):void
  {
    this.fileSelected=files[0];
    this.imageUrl=this.sant.
    bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelected)) as string;
    this.base64="base64..."
  }
  convertToBase64():void
  {
    let reader=new FileReader();
    reader.readAsDataURL(this.fileSelected as Blob);
    reader.onloadend=()=>
    {
      this.base64=reader.result as string;
    }
  }
}
