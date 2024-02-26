import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { format } from 'sql-formatter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputEditor!: FormGroup;
  highlightedScript = '';
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.inputEditor = this.formBuilder.group({
      script: '',
    });
  }

  formatar() {
    this.inputEditor.setValue({
      script: format(this.inputEditor.value.script),
    });
  }

  highlightKeywords(script: string) {
   
  }

}
