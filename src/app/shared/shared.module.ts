import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ConvertToSpacesPipe } from "./convert-to-spaces.pipe";
import { StarComponent } from "./star.component";

@NgModule({
    declarations: [
        StarComponent,
        ConvertToSpacesPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        StarComponent,
        CommonModule,
        FormsModule,
        ConvertToSpacesPipe
    ]
})

export class SharedModule {}