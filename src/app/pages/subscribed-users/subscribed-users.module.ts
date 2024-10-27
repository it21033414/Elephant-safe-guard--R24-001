import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SubscribedUsersRoutingModule } from "./subscribed-users-routing.module";
import { SubscribedUsersViewComponent } from "./subscribed-users-view/subscribed-users-view.component";
import { UserSubsctibeModelComponent } from "./user-subsctibe-model/user-subsctibe-model.component";
import { SharedModule } from "src/app/shared/shared/shared.module";

@NgModule({
  declarations: [SubscribedUsersViewComponent, UserSubsctibeModelComponent],
  imports: [CommonModule, SharedModule, SubscribedUsersRoutingModule],
})
export class SubscribedUsersModule {}
