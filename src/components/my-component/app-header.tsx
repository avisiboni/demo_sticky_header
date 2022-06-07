import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
  shadow: true,
})
export class AppHeader {
  render() {
    return <div class="header sticky">
      <app-button text="Press Me!" iconPath='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzwxILy0Etyblqj1MLsCrwAtlBxaP9HMjeQ&usqp=CAU'></app-button>
      <h2>My Header</h2>
    </div>;
  }
}
