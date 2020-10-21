import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageteam'
})
export class ImageteamPipe implements PipeTransform {
  private srcimage = './assets/img/team/';

  transform(image: string): string {
    if(!image || image === ''){
      return this.srcimage + 'default.png';
    }
    else{
      return this.srcimage + image;
    }

  }

}
