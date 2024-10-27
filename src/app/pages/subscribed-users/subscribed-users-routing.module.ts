import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserSubsctibeModelComponent } from "./user-subsctibe-model/user-subsctibe-model.component";
import { SubscribedUsersViewComponent } from "./subscribed-users-view/subscribed-users-view.component";

export const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: SubscribedUsersViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscribedUsersRoutingModule {}
