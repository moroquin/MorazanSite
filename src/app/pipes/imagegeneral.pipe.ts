import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagegeneral'
})
export class ImagegeneralPipe implements PipeTransform {
  private srcimage = '/assets/img/general/';

  transform(image: string): string {
    if(!image || image === ''){
      return this.srcimage + 'default.png';
    }
    else{
      return this.srcimage + image ;
    }
  }
}
