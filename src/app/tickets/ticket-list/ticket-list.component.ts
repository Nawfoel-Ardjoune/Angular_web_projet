import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  public ticketList: Ticket[] = [];
  public displayTicketArchived: boolean = false;

  constructor(public ticketService: TicketService) {
    this.ticketService.tickets$.subscribe((tickets) => this.ticketList = tickets);
  }

  changeDisp(){
    if(this.displayTicketArchived == false){
      this.displayTicketArchived = true;
      console.log(this.displayTicketArchived);
    }else{
      this.displayTicketArchived = false;
      console.log(this.displayTicketArchived);
    }
  }

  deleteTicket(ticket: Ticket) {
    this.ticketService.deleteTicket(ticket);
    //this.ticketList = this.ticketList.filter(t => t !== ticket);
  }

  archivedTicket(ticket: Ticket){
    this.ticketService.archivedTicket(ticket);
  }

  ngOnInit() {
  }

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    console.log('event Selected:', hasBeenSelected);
  }

  ticketHasBeenDeleted(hasBeenDeleted: boolean) {
    console.log('event Deleted:', hasBeenDeleted);
  }

  ticketHasBeenArchived(hasBeenArchived: boolean) {
    console.log('event Archived:', hasBeenArchived);
  }

}
