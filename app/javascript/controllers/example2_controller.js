import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="example2"
export default class extends Controller {
  static targets = [ "source" ]

  copy() {
    event.preventDefault()
    navigator.clipboard.writeText(this.sourceTarget.value)
  }
}
