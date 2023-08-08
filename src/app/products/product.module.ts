
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";

import { ProductDetailComponent } from "./product-detail.component";
import { ProductDetailGuard } from "./product-detail.guard.spec";
import { ProductListComponent } from "./product-list.component";

@NgModule({
    declarations:[
        ProductListComponent,
        ProductDetailComponent,
    ],
    imports:[
        RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id',
      canActivate:[ProductDetailGuard], 
      component: ProductDetailComponent
    }
        ]),
        SharedModule
    ]
})

export class ProductModule {}