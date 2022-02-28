import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [

  /*we are lazy loading the elements module*/
  {path:'elements',
   loadChildren: () =>
    import('./elements/elements.module').then(m => m.ElementsModule)
  },
  /*we are lazy loading the collections module*/
  {path:'collections',
   loadChildren: () =>
     import('./collections/collections.module').then(m=> m.CollectionsModule)
  },
    /*we are lazy loading the views module*/
  {path:'views',
   loadChildren: () =>
     import('./views/views.module').then(m=> m.ViewsModule)
  },
   /*we are lazy loading the mods module*/
  {path:'mods',
   loadChildren: () =>
     import('./mods/mods.module').then(m=> m.ModsModule)
  },
  {path:"", component: HomeComponent},
  {path:"**", component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
