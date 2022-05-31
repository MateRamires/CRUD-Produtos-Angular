import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', //O arquivo .ts sempre referencia o templateUrl (html do componente).
  styleUrls: ['./header.component.css'] //E o referencia o styleUrls (css do componente).
})
export class HeaderComponent implements OnInit {

  constructor(private HeaderService: HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.HeaderService.headerData.title
  }

  get icon(): string {
    return this.HeaderService.headerData.icon
  }

  get routeUrl(): string {
    return this.HeaderService.headerData.routeUrl
  }

}
