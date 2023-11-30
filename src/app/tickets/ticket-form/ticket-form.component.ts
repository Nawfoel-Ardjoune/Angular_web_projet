import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Major, Ticket } from '../../../models/ticket';
import { StudentService } from 'src/services/student/student.service';
import { Student } from 'src/models/student';

import { STUDENTS_MOCKED } from 'src/mocks/students.mock';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  /**
   * TicketForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms
   */
  public ticketForm: FormGroup;
  public studentList: Student[] = STUDENTS_MOCKED;

  constructor(public formBuilder: FormBuilder, public ticketService: TicketService, public studentService : StudentService) {
    // Form creation
    this.ticketForm = this.formBuilder.group({
      title: [''],
      description: [''],
      major: [''],
      studentID: ['']
    });

    //this.studentService.students$.subscribe((students) => this.studentList = students)
    // this.ticketForm = this.formBuilder.group({
    //   id: [''],
    //   nom: [''],
    //   prenom: ['']
    // });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit() {
  }

  addTicket() {
    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    ticketToCreate.date = new Date();
    ticketToCreate.archived = false;
    const studentID = this.ticketForm.get('studentID')!.value;
    ticketToCreate.student = this.studentList.find(student => student.id == studentID);
    this.ticketService.addTicket(ticketToCreate);
  }

}
