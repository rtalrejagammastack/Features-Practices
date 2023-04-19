import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="example3"
export default class extends Controller {
  static values = { url:String, refreshInterval: Number }

  connect() {
    this.load()
    if (this.hasRefreshIntervalValue) {
      this.startRefreshing()
    }
  }

  disconnect() {
    this.stopRefreshing()
  }

  startRefreshing() {
    console.log("setg")
    this.refreshTimer = setInterval(() => {
      this.load()
    }, this.refreshIntervalValue)
  }

  load(){
    console.log("Load")
    fetch(this.urlValue)
      .then(response => response.text())
      .then(html => this.element.innerHTML = html)
  }

  stopRefreshing() {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer)
    }
  }
}
