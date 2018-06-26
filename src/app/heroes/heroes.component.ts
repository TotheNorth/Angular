import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

// 集中配置元数据
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'abc',
  };
  // 为heroes这个属性规定数据类型为数组对象，heroes这个属性为数组，数组的项目必须为Hero类型
  heroes: Hero[] = [{ id: 1, name: 'lo' }];
  // selected属性，数据类型规定为Hero类型
  selectedHero: Hero;
  master = 'HuJunlei';
  
  // 1. 声明了一个私有 heroService 属性，2. 把它标记为一个 HeroService 的注入点。
  // 当 Angular 创建 HeroesComponent 时，依赖注入系统就会把这个 heroService 参数设置为 HeroService 的单例对象。也就是说，在HeroesComponent这个组建创建完成后，它自身的heroService属性就成为了一个对象，这个对象是HeroService的唯一实例化对象，所以原先的HeroService类上的方法与属性在这里的heroService属性中都可以被调用
  constructor(private heroService: HeroService) {
    
  }


  // onSelect方法，函数的参数被修饰为Hero类型
  onSelect(hero: Hero): void {
    // 子组件表单的双向绑定会改变流入的selectedHero，因为这里赋值情况是对象赋值，因此改变了selectedHero的同时，也就改变了对应的hero（他是一个对象数据类型，不过是我们自己规定的），这里是一个对象赋值，所以我们在这里在子组件的表单中改变值，父组件的值也会随之改变
    this.selectedHero = hero;
  }

  // getHeroes方法，不返回任何的值，这段代码只对当前的heroes属性进行赋值，赋值的数据类型在上边被限制
  getHeroes(): void {
    // HeroService.getHeroes 方法之前返回一个 Hero[]， 现在它返回的是 Observable<Hero[]>。
    // this.heroes = this.heroService.getHeroes();（之前）
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  // ngOnInit用于Angular在第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。
  ngOnInit() {
    this.getHeroes();
  }

}
