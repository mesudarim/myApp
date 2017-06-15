import { Pipe, PipeTransform } from '@angular/core';
import { IProduct} from './product-list/product-list.component'

@Pipe({
  name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform {

  transform(products: IProduct[], filterText:string): IProduct[] {
    return products.filter(product =>{
      //return product.productName.indexOf(filterText) > -1;
      return product.productName.includes(filterText);
    })
  }

}
