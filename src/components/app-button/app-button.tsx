import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'app-button',
  styleUrl: 'app-button.css',
  shadow: true,
})
export class AppButton {

  @Prop() text: string;
  @Prop() iconPath: string;
  @Event({
    eventName: 'loginClicked',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) loginClicked: EventEmitter<void>;

  onLoginClicked() {
    const event = this.loginClicked.emit();
    if(!event.defaultPrevented) {
      // if not prevented, do some default handling code
    }
  }

  render() {
    return (
      <button class="app-button" onClick={this.onLoginClicked}>
        {this.text}
        {this.iconPath ? <img class="image" src={this.iconPath} alt="avatar text" /> : <slot />}
      </button>
    );
  }

}
