import { Component, OnInit } from '@angular/core';
import { Providers, MsalProvider, TemplateHelper } from '@microsoft/mgt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-mgt-angular';

  ngOnInit()
  {
    Providers.globalProvider = new MsalProvider({ clientId: '889da468-f719-49b0-8e32-265d5f86ced2' });
    TemplateHelper.setBindingSyntax('[[', ']]');
  }
}
