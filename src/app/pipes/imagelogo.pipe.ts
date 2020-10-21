import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagelogo'
})
export class ImagelogoPipe implements PipeTransform {
  private srcimage = '/assets/img/logos/';

  transform(image: string): string {
    if(!image || image === ''){
      return this.srcimage + 'default.png';
    }
    else{
      return this.srcimage + image ;
    }
  }

}
