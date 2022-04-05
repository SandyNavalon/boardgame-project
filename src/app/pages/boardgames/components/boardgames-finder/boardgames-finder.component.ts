import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-boardgames-finder',
  templateUrl: './boardgames-finder.component.html',
  styleUrls: ['./boardgames-finder.component.scss']
})
export class BoardgamesFinderComponent implements OnInit {

  @Output() sendName = new EventEmitter<string>();

  public finderForm: FormGroup = new FormGroup({});

  public isLoading = false;
  public src: string;
  public data$: any;

  constructor() { }

  ngOnInit(): void {
    this.finderForm = new FormGroup({
      name: new FormControl('', []),
    })
  }

  onSubmit(): void {
    this.sendName.emit(this.finderForm.value.name)
    /* console.log(this.finderForm.value.name); */

  }

  }
