import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { MatDialogModule,  MatMenuModule, MatButtonModule,
  MatIconModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecoveryLoginDialogComponent } from './components/dialogs/recovery-login-dialog/recovery-login-dialog.component';
import { PatientResearchesComponent } from './components/pages/patient-researches/patient-researches.component';
import { RecommendationsComponent } from './components/pages/recommendations/recommendations.component';
import { LineChartComponent } from './components/pages/line-chart/line-chart.component';
//import { ChartsModule } from 'ng2-charts';
import { LabResearchesComponent } from './components/pages/lab-researches/lab-researches.component';
import { PatientsComponent } from './components/pages/patients/patients.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { NewsComponent } from './components/pages/news/news.component';
import { DiaryComponent } from './components/pages/diary/diary.component';
import { TestComponent } from './components/pages/test/test.component';
import {HttpClientModule} from '@angular/common/http';
import { LecturesComponent } from './components/pages/lectures/lectures.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginPageComponent,
    RegisterPageComponent,
    PageNotFoundComponent,
    HomePageComponent,
    RecoveryLoginDialogComponent,
    PatientResearchesComponent,
    RecommendationsComponent,
    LineChartComponent,
    LabResearchesComponent,
    PatientsComponent,
    AboutUsComponent,
    NewsComponent,
    DiaryComponent,
    TestComponent,
    LecturesComponent,
  ],
  entryComponents: [
    RecoveryLoginDialogComponent
  ],

  imports: [
	  HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    //ChartsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
