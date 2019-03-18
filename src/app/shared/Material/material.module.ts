import { NgModule } from '@angular/core';

import { MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatCardModule} from '@angular/material';


@NgModule({
  imports: [MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule 
 
  ],
  exports: [MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule
  ]
})
export class MaterialModule { }
