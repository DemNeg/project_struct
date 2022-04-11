import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { ForgotComponent } from './features/auth/forgot/forgot.component';
import { LoginComponent } from './features/auth/login/login.component';
import { LogoutComponent } from './features/auth/logout/logout.component';
import { SignupComponent } from './features/auth/signup/signup.component';

const routes: Routes = [
  { path: 'signup',component : SignupComponent},
  { path: 'login',component : LoginComponent},
  { path: 'logout',component : LogoutComponent},
  { path: 'forgot',component : ForgotComponent},

  { path: 'customers', loadChildren: () => import('./features/cutomers/cutomers.module').then(m => m.CutomersModule) },
  { path: 'invoices', loadChildren: () => import('./features/invoices/invoices.module').then(m => m.InvoicesModule) }, 
  { path: 'loan-types', loadChildren: () => import('./features/loan-types/loan-types.module').then(m => m.LoanTypesModule) }, 
  { path: 'loans', loadChildren: () => import('./features/loans/loans.module').then(m => m.LoansModule) }, 
  { path: 'payments', loadChildren: () => import('./features/payments/payments.module').then(m => m.PaymentsModule) }, 
  { path: 'reports', loadChildren: () => import('./features/reports/reports.module').then(m => m.ReportsModule) }, 
  { path: 'settings', loadChildren: () => import('./features/settings/settings.module').then(m => m.SettingsModule) },

  { path: '',redirectTo: 'login',pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
