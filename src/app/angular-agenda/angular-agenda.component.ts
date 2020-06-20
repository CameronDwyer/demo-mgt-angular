import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { TemplateHelper } from '@microsoft/mgt';

@Component({
  selector: 'app-angular-agenda',
  templateUrl: './angular-agenda.component.html',
  styleUrls: ['./angular-agenda.component.css']
})
export class AngularAgendaComponent implements AfterViewInit {
  @ViewChild('myagenda') agendaElement: any;
  public output: string;

  constructor() {
    /* let templateGlobalCtx: any;
    templateGlobalCtx = TemplateHelper.globalContext;
    templateGlobalCtx.onEventClick = (e) => { console.log('test'); }; */
  }

  ngAfterViewInit() {
    // this.setTemplateContext();
  }

  public setTemplateContext() {
    this.agendaElement.templateContext = {
      onEventClick: (e: any) => {
        console.log('test');
      }
    }
  }

}

