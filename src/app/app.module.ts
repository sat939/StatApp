import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from'@angular/platform-browser/animations';
import {TabViewModule} from 'primeng/tabview';
import { HttpClientModule } from '@angular/common/http'
;
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { HomeComponent } from './Home/home.component';
import { DescriptionComponent } from './description/description.component';
import { StatsMainDisplayComponent } from './components/stats-main-display/stats-main-display.component';
import { FooterComponent } from './footer/footer.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { MatchRecordsComponent } from './components/match-records/match-records.component';
import { AgGridModule } from 'ag-grid-angular';
import { Globals } from './shared-data/globals';
import { DataServiceService } from './services/data-service.service';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:':id', component: StatsMainDisplayComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DescriptionComponent,
    StatsMainDisplayComponent,
    FooterComponent,
    MatchDetailsComponent,
    MatchRecordsComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TabViewModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [Globals, DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
