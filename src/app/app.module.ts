import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // <-- NgModel lives here
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  // declarations（可声明对象表） —— 那些属于本 NgModule 的组件、指令、管道。
  // exports（导出表） —— 那些能在其它模块的组件模板中使用的可声明对象的子集。
  // imports（导入表） —— 那些导出了本模块中的组件模板所需的类的其它模块。
  // providers —— 本模块向全局服务中贡献的那些服务的创建器。 这些服务能被本应用中的任何部分使用。（你也可以在组件级别指定服务提供商，这通常是首选方式。）
  // bootstrap —— 应用的主视图，称为根组件。它是应用中所有其它视图的宿主。只有根模块才应该设置这个 bootstrap 属性。
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //路由模块进行处理后加载到根组件，实现路由功能
    AppRoutingModule,
    // RouterModule.forRoot(routes),
    CustomerDashboardModule 
  ],
  // providers: 这个选项是一个数组,需要我们列出我们这个模块的一些需要共用的服务，然后我们就可以在这个模块的各个组件中使用了
  providers: [HeroService,MessageService],
  // bootstrap:引导程序
  bootstrap: [AppComponent]
})
export class AppModule { }
