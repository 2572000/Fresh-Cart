import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceTitle'
})
export class SliceTitlePipe implements PipeTransform {

  transform(title:string,numberOfWorld:number):string {
    return title.split(" ").slice(0,numberOfWorld).join(" ");
  }

}
