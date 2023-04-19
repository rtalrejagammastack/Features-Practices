import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="example4"
export default class extends Controller {
  static targets = [ "posts" ]

  connect() {
    console.log('connect')
  }

  filter(event) {
    event.preventDefault();

    const category = event.target.value;

    fetch(`/example4/index?category=${category}`)
      .then(response => response.text())
      .then(html =>{
        this.postsTarget.innerHTML = html
        console.log(html)
      })
  }
}
