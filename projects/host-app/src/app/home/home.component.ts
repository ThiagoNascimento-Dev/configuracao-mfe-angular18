import { loadRemoteModule } from '@angular-architects/module-federation';
import { ProfileComponent } from './../../../../mfe-app/src/app/profile/profile.component';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('mfeComponent', { read: ViewContainerRef }) mfeComponent!: ViewContainerRef

  ngOnInit(): void {
    this.loadComponent();
  }

  async loadComponent() {
    const { ProfileComponent }  = await loadRemoteModule({
      remoteEntry: 'http://localhost:4300/remoteEntry.js',
      remoteName: 'mfeApp',
      exposedModule: './ProfileComponent'
    });

    this.mfeComponent.clear();
    this.mfeComponent.createComponent(ProfileComponent);

  }
}
