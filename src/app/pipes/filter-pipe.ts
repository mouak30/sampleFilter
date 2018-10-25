import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class NameFilter implements PipeTransform {
    transform(items: any, searchText: string): any {
        if(searchText == null) {
            return items;
        } 

        searchText = searchText.toLowerCase();

        return items.filter( item => {
            return JSON.stringify(item).toLowerCase().includes(searchText);
        });
    }
}