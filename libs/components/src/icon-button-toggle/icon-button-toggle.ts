import { css, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IconButtonToggle } from '@material/mwc-icon-button-toggle/mwc-icon-button-toggle';
import styles from './icon-button-toggle.scss?inline';

declare global {
  interface HTMLElementTagNameMap {
    'cv-icon-button-toggle': CovalentIconButtonToggle;
  }
}

@customElement('cv-icon-button-toggle')
export class CovalentIconButtonToggle extends IconButtonToggle {
  static override styles = [
    ...IconButtonToggle.styles,
    css`
      ${unsafeCSS(styles)}
    `,
  ];
}

export default CovalentIconButtonToggle;