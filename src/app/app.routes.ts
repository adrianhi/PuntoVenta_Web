import { Routes } from '@angular/router';
import { ClientComponent } from './core/Pages/client/client.component';
import { ProductsComponent } from './core/Pages/products/products.component';
import { SaleComponent } from './core/Pages/sale/sale.component';
import { StartComponent } from './core/Pages/start/start.component';

export const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'client', component: ClientComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'sale', component: SaleComponent },
];
