import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'sort',
    pure: false
})
export class SortPipe implements PipeTransform {

    transform(value: any): any {
        let copy = [...value];
        copy.sort((a, b) => a.status < b.status ? -1 : a.status > b.status ? -1 : 1);
        return copy;
    }

}
