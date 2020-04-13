import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  ws: WebSocket;

  constructor() { }

  createObservableSocket(url: string): Observable<any> {
    //连接到ws服务器
    this.ws = new WebSocket(url);
    //定义一个流要定义三件事：1.什么时候发射下一个元素 2.什么时候抛一个异常 3.什么时候发出流结束信号
    return new Observable(
      observer => {
        //当websocket接收到消息时流发送下一个元素
        this.ws.onmessage = (event) => observer.next(event.data);
        //当websocket出现问题的时候流抛出异常
        this.ws.onerror = (event) => observer.error(event);
        //当websocket关闭的时候流发结束信号
        this.ws.onclose = (event) => observer.complete();
      }
    )
  }

  //向ws服务器发送消息
  sendMessage(message: string) {
    this.ws.send(message);
  }
}
