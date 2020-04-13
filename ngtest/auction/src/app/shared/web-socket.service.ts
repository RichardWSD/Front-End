import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  ws: WebSocket;

  constructor() { }

  createObservableSocket(url: string, id: number): Observable<any> {
    //连接到ws服务器
    this.ws = new WebSocket(url);
    //定义一个流要定义三件事：1.什么时候发射下一个元素 2.什么时候抛一个异常 3.什么时候发出流结束信号
    return new Observable<string>(
      observer => {
        //当websocket接收到消息时流发送下一个元素
        this.ws.onmessage = (event) => observer.next(event.data);
        //当websocket出现问题的时候流抛出异常
        this.ws.onerror = (event) => observer.error(event);
        //当websocket关闭的时候流发结束信号
        this.ws.onclose = (event) => observer.complete();
        //当连接到ws服务器时发送商品id到服务器
        this.ws.onopen = (event) => this.sendMessage({ productId: id });
        //这里返回匿名函数用于关闭ws连接，当我们取消订阅的时候就会调用
        return ()=>this.ws.close();
      }
    )
      .pipe(
        map((msg) => JSON.parse(msg))
      );
  }

  //向ws服务器发送消息
  sendMessage(message: any) {
    this.ws.send(JSON.stringify(message));
  }
}
