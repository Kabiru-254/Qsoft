

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from '../pages/home-component/home-component.component'
import { AboutComponentComponent } from '../pages/about-component/about-component.component';
import { ContactComponentComponent } from '../pages/contact-component/contact-component.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { CarouselComponent } from '../pages/carousel/carousel.component';




@NgModule({
    declarations: [
        HomeComponentComponent,
        AboutComponentComponent,
        ContactComponentComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        CarouselComponent,
    ],
    exports: [
        HomeComponentComponent,
        AboutComponentComponent,
        ContactComponentComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        CarouselComponent
    ],
    imports: [
        CommonModule,
        MatDividerModule,
        
        
    ]
})
export class SharedModule { }
