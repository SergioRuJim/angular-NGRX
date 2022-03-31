import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit  } from '@angular/core';
import { Rect } from './rect';
import * as main from './actions/mainchar.action';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as mainCharSelector from './selectors/main.selector';
import { fromRoot } from './reducers/indexgit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit  {
  @ViewChild('canvas')
  private canvas: ElementRef = {} as ElementRef;
  private ctx!: CanvasRenderingContext2D;
  requestId: any;
  rect: any;


  right = false;
  left = false;

  mainChar$!: Observable<any>;
  speed$!: Observable<number>;

  constructor(public render: Renderer2, 
    private store: Store<{ mainChar: any }>,
    private gitStore: Store<{ gitState: any}> ) {
  }

  ngOnInit(): void {
    this.mainChar$ = this.store.pipe(select('mainChar'));
    this.speed$ = this.store.pipe(select(mainCharSelector.getSpeed));
    
    setInterval(() => {
      this.draw();
    }, 1);

    /* Render */
    this.render.listen('document', 'keydown', (e:any) => {
      if(e.key === 'ArrowRight') {
        this.right = true;
      } else if(e.key === 'ArrowLeft') {
        this.left = true;
      }
    });
    this.render.listen('document', 'keyup', (e:any) => {
        this.right = false;
        this.left = false;
    });
  }
  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.rect = new Rect(this.ctx, 0, 50, 100, 'red');
  }

  public draw(): void {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, this.canvas.nativeElement.height - 40, this.canvas.nativeElement.width, 40);
    if (this.right) {
      this.rect.moveRight();
    } else if (this.left) {
      this.rect.moveLeft();
    }
    this.rect.draw();

    this.speed$ = this.store.pipe(select(mainCharSelector.getSpeed));

    this.requestId = requestAnimationFrame(() => this.draw);
}

  normal() {
    this.store.dispatch(main.normal());
    this.mainChar$.subscribe(res => {
      console.log(res);
      this.rect.speed = res.speed;
      this.rect.w = res.w;
      this.rect.h = res.h;
      this.rect.color = res.color;
    });
    this.store.subscribe(a => console.log(a));
  }

  speed(s: number) {
    this.store.dispatch(main.speed({s}));
    this.mainChar$.subscribe(res => {
      console.log(res);
      this.rect.speed = res.speed;
      this.rect.w = res.w;
      this.rect.h = res.h;
      this.rect.color = res.color;
    });
    this.store.subscribe(a => console.log(a));
  }

  slow(s: number) {
    this.store.dispatch(main.slow({s}));
    this.mainChar$.subscribe(res => {
      console.log(res);
      this.rect.speed = res.speed;
      this.rect.w = res.w;
      this.rect.h = res.h;
      this.rect.color = res.color;
    });
    this.store.subscribe(a => console.log(a));
  }

  getApiData(){
    this.gitStore.dispatch(fromRoot.ApiGetData({id: 'ctmil'}));
    this.store.subscribe(a => console.log(a));
  }

  getError(){
    this.gitStore.dispatch(fromRoot.ApiGetDataError({id: 'ctmil'}));
    this.store.subscribe(a => console.log(a));
  }
}
