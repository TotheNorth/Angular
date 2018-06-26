import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// @Injectable() 装饰器会接受该服务的元数据对象，就像 @Component() 对组件类的作用一样。
@Injectable()
export class HeroService {
  // 我们不但可以为函数的参数定义类型，还可以为函数的返回值定义类型，如下我们规定这个函数的返回值必须为数组对象的数据类型，而且数组中的对象必须为Hero数据类型
  constructor(private messageService: MessageService) { }
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    // 在取回hero之后发送消息
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  };
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}