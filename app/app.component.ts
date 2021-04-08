import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `      

        <kendo-stepper
            [steps]="steps"
            [stepType]="stepType"
            [(currentStep)]="current"
            [style.width.px]="570">
        </kendo-stepper>
         <div class="example-config" style="margin-bottom: 20px;float:right;">           
            <div>
                <button kendoButton (click)="prev()" style="margin-right: 10px;">PREVIOUS</button>
                <button kendoButton (click)="next()">NEXT</button>
            </div>
        </div>
    `
})
export class AppComponent {
    public stepType = 'full';
    public current = 0;

    public steps = [
        { label: 'Information'},
        { label: 'Finance'},
        { label: 'Quantities' },
        { label: 'Equipment'},
        { label: 'Confirmation'}
    ];

    public prev() {
        if (this.current > 0) {
            this.current -= 1;
        }
    }

    public next() {
        if (this.current < this.steps.length - 1) {
            this.current += 1;
        }
    }
}
