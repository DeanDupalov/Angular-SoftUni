import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { AsideComponent } from './aside/aside.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';



@NgModule({
  declarations: [
    PostListComponent,
    AsideComponent,
    ThemeListComponent,
    ThemeListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThemeListComponent,
    AsideComponent,
    ThemeListItemComponent,
    PostListComponent
  ]
})
export class ThemesModule { }
