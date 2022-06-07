import { Component,  h, Prop } from '@stencil/core';

@Component({
  tag: 'app-button',
  styleUrl: 'app-button.css',
  shadow: true,
})
export class AppButton {

  @Prop() text: string;
  @Prop() iconPath: string;
  render() {
    return (
      <button class="app-button">
        {this.text}
        {this.iconPath ? <img class="image" src={this.iconPath} alt="avatar text" /> : <slot />}
      </button>
    );
  }

}
