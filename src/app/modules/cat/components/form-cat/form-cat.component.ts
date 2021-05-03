import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Cat} from "../../../../core/interfaces/cat";

@Component({
  selector: 'app-form-cat',
  templateUrl: './form-cat.component.html',
  styleUrls: ['./form-cat.component.scss']
})
export class FormCatComponent{

  cat: Cat;

  @Input('cat') set setCat(cat: Cat) {
    if (!cat) {
      return;
    }
    this.cat = cat;
    this.form.patchValue(cat);
  };
  @Output() onSubmit: EventEmitter<Cat> = new EventEmitter<Cat>();


  form: FormGroup = new FormGroup({
    cats: new FormArray([])
  });

  get catForms() {
    return this.form.get('cats')! as FormArray
  }

  addCat() {
    const cat = new FormGroup({
      name: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      ownerUsername: new FormControl('', Validators.required),
      breederUsername: new FormControl('', Validators.required),
      breedName: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      birthDate: new FormControl('', Validators.required),    })
    this.catForms.push(cat)
  }

  deleteCat(index: number) {
    this.catForms.removeAt(index)
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.get('cats').value)

    this.onSubmit.emit({
      ...this.form.get('cats').value,
    });
  }
  ngOnInit(): void {
    this.addCat();
  }
}
