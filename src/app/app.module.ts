import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { IndexComponent } from './pages/index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { TitleComponent } from './shared/title/title.component';
import { LogosinstitucionesComponent } from './shared/logosinstituciones/logosinstituciones.component';
import { ImageteamPipe } from './pipes/imageteam.pipe';
import { TeamComponent } from './pages/team/team.component';

import { TeamcountryComponent } from './pages/teamcountry/teamcountry.component';
import { MissiontecComponent } from './pages/missiontec/missiontec.component';
import { MissionscComponent } from './pages/missionsc/missionsc.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ImagelogoPipe } from './pipes/imagelogo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PreloaderComponent,
    IndexComponent,
    TitleComponent,
    LogosinstitucionesComponent,
    ImageteamPipe,
    TeamComponent,
    TeamcountryComponent,
    MissiontecComponent,
    MissionscComponent,
    ContactComponent,
    ImagelogoPipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
