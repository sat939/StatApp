import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from'@angular/platform-browser/animations';
import { MenubarModule, MenuItem } from 'primeng/primeng';
import { MenuModule } from 'primeng/menu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MegaMenuModule} from 'primeng/megamenu';
import {SlideMenuModule} from 'primeng/slidemenu';
import {TabViewModule} from 'primeng/tabview';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { HomeComponent } from './Home/home.component';
import { DescriptionComponent } from './description/description.component';
import { IndiaComponent } from './components/india/india.component';
import { FooterComponent } from './footer/footer.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { MatchRecordsComponent } from './match-records/match-records.component';
// import { FlexLayoutModule } from '@angular/flex-layout';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'India', component: IndiaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DescriptionComponent,
    IndiaComponent,
    FooterComponent,
    MatchDetailsComponent,
    MatchRecordsComponent
  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    // MegaMenuModule,
    // SlideMenuModule,
    // PanelMenuModule,
    TabViewModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
