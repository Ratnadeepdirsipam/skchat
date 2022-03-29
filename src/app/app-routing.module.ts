import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegandloginPage } from './regandlogin/regandlogin.page';
import { HomePage } from './home/home.page';
import { ReactPage } from './react/react.page';
// import { 
//   redirectUnauthorizedTo,
//   redirectLoggedInTo,
//   canActivate
// } from '@angular/fire/auth-guard'

// const routes: Routes = [
//   { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
//   { path: 'sign-in', component: SignInComponent },
//   { path: 'register-user', component: SignUpComponent },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'forgot-password', component: ForgotPasswordComponent },
//   { path: 'verify-email-address', component: VerifyEmailComponent },
// ];

// const redirectunauthorizedtoregandsignin = () => redirectUnauthorizedTo(['']);
// const redirectLoggedIntoMain = () => redirectLoggedInTo('main');

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'regandlogin',
    loadChildren: () => import('./regandlogin/regandlogin.module').then( m => m.RegandloginPageModule),
    // canActivate: [AuthGuard],
    // data:{}
    //...canActivate(redirectLoggedIntoMain)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule),
    //...canActivate(redirectunauthorizedtoregandsignin)
  },
  {
    path: 'spokenenglish',
    loadChildren: () => import('./spokenenglish/spokenenglish.module').then( m => m.SpokenenglishPageModule)
  },
  {
    path: 'washingmachinesk',
    loadChildren: () => import('./washingmachinesk/washingmachinesk.module').then( m => m.WashingmachineskPageModule)
  },
  {
    path: 'rocketsk',
    loadChildren: () => import('./rocketsk/rocketsk.module').then( m => m.RocketskPageModule)
  },
  {
    path: 'avmsk',
    loadChildren: () => import('./avmsk/avmsk.module').then( m => m.AvmskPageModule)
  },
  {
    path: 'rasingsk',
    loadChildren: () => import('./rasingsk/rasingsk.module').then( m => m.RasingskPageModule)
  },
  {
    path: 'c',
    loadChildren: () => import('./c/c.module').then( m => m.CPageModule)
  },
  {
    path: 'c-plus',
    loadChildren: () => import('./c-plus/c-plus.module').then( m => m.CPlusPageModule)
  },
  {
    path: 'java',
    loadChildren: () => import('./java/java.module').then( m => m.JavaPageModule)
  },
  {
    path: 'python',
    loadChildren: () => import('./python/python.module').then( m => m.PythonPageModule)
  },
  {
    path: 'javascript',
    loadChildren: () => import('./javascript/javascript.module').then( m => m.JavascriptPageModule)
  },
  {
    path: 'html',
    loadChildren: () => import('./html/html.module').then( m => m.HtmlPageModule)
  },
  {
    path: 'css',
    loadChildren: () => import('./css/css.module').then( m => m.CssPageModule)
  },
  {
    path: 'typescript',
    loadChildren: () => import('./typescript/typescript.module').then( m => m.TypescriptPageModule)
  },
  {
    path: 'kotlin',
    loadChildren: () => import('./kotlin/kotlin.module').then( m => m.KotlinPageModule)
  },
  {
    path: 'angular',
    loadChildren: () => import('./angular/angular.module').then( m => m.AngularPageModule)
  },
  {
    path: 'react',
    loadChildren: () => import('./react/react.module').then( m => m.ReactPageModule)
  },
  {
    path: 'androidstudio',
    loadChildren: () => import('./androidstudio/androidstudio.module').then( m => m.AndroidstudioPageModule)
  },
  {
    path: 'django',
    loadChildren: () => import('./django/django.module').then( m => m.DjangoPageModule)
  },
  {
    path: 'php',
    loadChildren: () => import('./php/php.module').then( m => m.PhpPageModule)
  },
  {
    path: 'selinium',
    loadChildren: () => import('./selinium/selinium.module').then( m => m.SeliniumPageModule)
  },
  {
    path: 'dart',
    loadChildren: () => import('./dart/dart.module').then( m => m.DartPageModule)
  },
  {
    path: 'aws',
    loadChildren: () => import('./aws/aws.module').then( m => m.AwsPageModule)
  },
  {
    path: 'devops',
    loadChildren: () => import('./devops/devops.module').then( m => m.DevopsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
