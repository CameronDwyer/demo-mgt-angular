import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-angular-agenda',
  templateUrl: './angular-agenda.component.html',
  styleUrls: ['./angular-agenda.component.css']
})
export class AngularAgendaComponent implements OnInit {
  @ViewChild('myagenda') agendaElement: any;
  public output: string;

  constructor() { this.output = 'ready'; }

  ngOnInit(): void { 
  }

  public setTemplateContext() {
    console.log('settemplatecontext');
    this.agendaElement.templateContext = {
      openWebLink: (e: any, context: { event: { webLink: string | undefined; }; }, root: any) => {
          console.log('test');
          window.open(context.event.webLink, '_blank');
      },
      getDate: (dateString: string) => {
          let dateObject = new Date(dateString);
          return dateObject.setHours(0, 0, 0, 0);
      },
      getTime: (dateString: string) => {
          let dateObject = new Date(dateString);
          return dateObject.getHours().toString().padEnd(2, '0')
              + ':' + dateObject.getMinutes().toString().padEnd(2, '0');
      }
    }
  }
}

