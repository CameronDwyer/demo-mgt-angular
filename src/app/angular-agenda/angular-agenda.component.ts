import { Component, OnInit, AfterViewInit, AfterContentInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { TemplateHelper } from '@microsoft/mgt';

@Component({
  selector: 'app-angular-agenda',
  templateUrl: './angular-agenda.component.html',
  styleUrls: ['./angular-agenda.component.css']
})
export class AngularAgendaComponent implements OnInit, AfterViewInit, AfterContentInit, AfterViewChecked {
  @ViewChild('myagenda') agendaElement: any;
  public output: string;

  constructor() {
    // Register events using the Global Template context
    let templateGlobalCtx: any;
    templateGlobalCtx = TemplateHelper.globalContext;
    templateGlobalCtx.globalClickEvent = (e) => {
      console.log('globalClickEvent');
    };
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.setComponentTemplateContext();
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.setComponentTemplateContext();
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    this.setComponentTemplateContext();
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
    this.setComponentTemplateContext();
  }

  public setComponentTemplateContext() {
    // Attemt to set component level template context if the agenda element has been created
    if (this.agendaElement) {
      this.agendaElement.templateContext = {
        componentClickEvent: (e: any) => {
          console.log('componentClickEvent');
        }
      }
    } else {
      console.log('agendElement not initialised yet');
    }
  }

}

