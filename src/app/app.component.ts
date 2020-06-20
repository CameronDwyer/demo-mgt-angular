import { Component, OnInit } from '@angular/core';
import { Providers, MsalProvider, TemplateHelper, ProviderState } from '@microsoft/mgt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'demo-mgt-angular';

  public isLoggedIn(){
    return Providers.globalProvider.state === ProviderState.SignedIn;
  }

  ngOnInit()
  {
    Providers.globalProvider = new MsalProvider({ clientId: '889da468-f719-49b0-8e32-265d5f86ced2' });
    TemplateHelper.setBindingSyntax('[[', ']]');
  }
}
