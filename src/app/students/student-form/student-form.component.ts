import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from 'src/services/student/student.service';
import { Student } from 'src/models/student';

@Component({
    selector: 'app-ticket-form',
    templateUrl: './student-form.component.html',
    styleUrls: ['./student-form.component.scss']
  })
  export class StudentFormComponent implements OnInit {
  
    // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
    // avoid TemplateDrivenForm (another type of form)
    /**
     * TicketForm: Object which manages the form in our component.
     * More information about Reactive Forms: https://angular.io/guide/reactive-forms
     */
    public studentForm: FormGroup;
    public studentList: Student[] = [];
  
    constructor(public formBuilder: FormBuilder, public studentService: StudentService) {
      // Form creation
      //this.studentSevice.students$.subscribe((students) => this.studentList = students)
      this.studentForm = this.formBuilder.group({
        FirstName: [''],
        LastName: [''],
        studentId: ['']
      });
      // You can also add validators to your inputs such as required, maxlength or even create your own validator!
      // More information: https://angular.io/guide/reactive-forms#simple-form-validation
      // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
    }
  
    ngOnInit() {
    }
  
    addStudent() {
      const studentToCreate: Student = this.studentForm.getRawValue() as Student;
      const studentId = this.studentForm.get('studentId')!.value;
      //studentToCreate.student = this.studentList.find(student => student.id == studentId);
      //this.studentService.addStudent(studentToCreate);
    }
  }
  