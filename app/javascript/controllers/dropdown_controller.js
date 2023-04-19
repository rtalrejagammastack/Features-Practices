import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {
  static targets = ["dropdownContent", "openButton", "closeButton"]
  static values = { open: Boolean }

  connect() {
    if(this.openValue) {
      this.openDropDown();
    }else{
      this.closeDropDown();
    }


    // this.closeDropDown();

    // this.dropdownContentTarget.hidden = true
    // this.closeButtonTarget.hidden = true
    console.log("hello")
  }
  
  toggleDropDown(){
    if (this.dropdownContentTarget.hidden == true){
      this.openDropDown();
    }else{
      this.closeDropDown();
    }
  }

  openDropDown(){
    this.dropdownContentTarget.hidden = false
    try{
      this.closeButtonTarget.hidden = false
      this.openButtonTarget.hidden = true
    }catch {}
  }

  closeDropDown(){
    console.log("df")
    this.dropdownContentTarget.hidden = true
    try{
      this.openButtonTarget.hidden = false
      this.closeButtonTarget.hidden = true
    }catch {}
  }
}
