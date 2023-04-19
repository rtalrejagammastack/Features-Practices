import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="example1"
export default class extends Controller {
  static targets = [ "name" ] 

  connect() {
    console.log("Hello Stimulus!", this.element)
  }
  greet() {
    console.log(`Hello, ${this.name}`)
  }
  get name(){
    return this.nameTarget.value
  }
}
