import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PagesRoutes } from "./pages.routing.module";
import { MaterialModule } from "../material.module";
import { FormsModule } from "@angular/forms";
import { NgApexchartsModule } from "ng-apexcharts";
// icons
import { TablerIconsModule } from "angular-tabler-icons";
import * as TablerIcons from "angular-tabler-icons/icons";
import { SharedModule } from "../shared/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgApexchartsModule,
    RouterModule.forChild(PagesRoutes),
    TablerIconsModule.pick(TablerIcons),
    SharedModule,
  ],
  exports: [TablerIconsModule],
})
export class PagesModule {}
