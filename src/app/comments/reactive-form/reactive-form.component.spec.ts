import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from 'src/app/core/core.module';

import { ReactiveFormComponent } from './reactive-form.component';


describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  let originalTimeout: number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        CoreModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title "Add comment"', () => {
    expect(component.title).toEqual("Add comment");
  });

  it('should be maxLengthComment = 30', () => {
    expect(component.maxLengthComment).toEqual(30);
  });

  it('should commentForm.value.name = ""', () => {
    expect(component.commentForm.value.name).toEqual("");
  });

  it('should commentForm.value.age = ""', () => {
    expect(component.commentForm.value.age).toEqual("");
  });

  it('should commentForm.value.comment = ""', () => {
    expect(component.commentForm.value.comment).toEqual("");
  });

  it('commentForm should be invalid', () => {
    expect(component.commentForm.invalid).toBeTruthy();
  });

  it('commentForm should be invalid because name is required', () => {
    component.commentForm.controls['name'].setValue('');
    expect(component.commentForm.valid).toBeFalsy();
  });

  it('commentForm should be invalid because name have numbers', () => {
    component.commentForm.controls['name'].setValue('Eddin 13');
    expect(component.commentForm.valid).toBeFalsy();
  });

  it('commentForm should be invalid because age is required', () => {
    component.commentForm.controls['age'].setValue('');
    expect(component.commentForm.valid).toBeFalsy();
  });

  it('commentForm should be invalid because age not have only numbers', () => {
    component.commentForm.controls['age'].setValue('13 años.');
    expect(component.commentForm.valid).toBeFalsy();
  });

  it('commentForm should be invalid because comment have more than 30 characters', () => {
    component.commentForm.controls['comment'].setValue('Este es un comentario con más de 30 caracteres');
    expect(component.commentForm.valid).toBeFalsy();
  });

  it('commentForm should be valid', () => {
    component.commentForm.controls['name'].setValue('Eddin Gustavo Medina');
    component.commentForm.controls['age'].setValue('35');
    component.commentForm.controls['comment'].setValue('Comentario de menos 30');
    expect(component.commentForm.valid).toBeTruthy();
  });

  it('#save should be null', () => {
    expect(component.save()).toBeNull();
  });

  it('#save ahould be ok', async (done) => {

    let name = 'Eddin Gustavo Medina';
    let age = '35';
    let comment = 'Comentario de menos 30';

    component.commentForm.controls['name'].setValue(name);
    component.commentForm.controls['age'].setValue(age);
    component.commentForm.controls['comment'].setValue(comment);

    await component.save().then(rslt => {
      expect(rslt.name).toEqual(name);
      expect(rslt.age).toEqual(age);
      expect(rslt.comment).toEqual(comment);
      done();
    })

  });

});
