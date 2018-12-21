import { Component, Input } from '@angular/core';
import { MzBaseModal,  } from 'ngx-materialize';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent extends MzBaseModal{
  @Input() public myPropertyModal: object;
  public hasValidName: boolean = true;
  public hasValidEmail: boolean = false;
  public hasValidBirthday: boolean = false;
  public hasValidAddress: boolean = false;
  public hasValidPhone: boolean = false;
  public hasValidPassword: boolean = false;

  public modalOptions: Materialize.ModalOptions = {
    dismissible: false, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    inDuration: 100, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '100%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
  };


  public infoName(){
    this.hasValidName = true;
    this.hasValidEmail = this.hasValidBirthday = this.hasValidAddress = this.hasValidPhone = this.hasValidPassword = false;
  }

  public infoEmail(){
    this.hasValidEmail = true;
    this.hasValidName = this.hasValidBirthday = this.hasValidAddress = this.hasValidPhone = this.hasValidPassword = false;
  }

  public infoBirthday(){
    this.hasValidBirthday = true;
    this.hasValidName = this.hasValidEmail = this.hasValidAddress = this.hasValidPhone = this.hasValidPassword = false;
  }

  public infoAddress(){
    this.hasValidAddress = true;
    this.hasValidName = this.hasValidBirthday = this.hasValidEmail = this.hasValidPhone = this.hasValidPassword = false;
  }

  public infoPhone(){
    this.hasValidPhone = true;
    this.hasValidName = this.hasValidBirthday = this.hasValidEmail = this.hasValidAddress = this.hasValidPassword = false;
  }

  public infoPassword(){
    this.hasValidPassword = true;
    this.hasValidName = this.hasValidBirthday = this.hasValidEmail = this.hasValidAddress = this.hasValidPhone = false;

  }
}