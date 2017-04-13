import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectByTypePipe',
  pure: false
})

export class ObjectByTypeCustomPipe implements PipeTransform {
  transform(tableObjList: any[], text) {
    if (tableObjList) { 
    	return tableObjList.filter(table => table['Type'] == text);
    }
    return [];
  }
}