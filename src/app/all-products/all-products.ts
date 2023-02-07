import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcButtonComponent, IgcCardComponent, IgcDropdownComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcListComponent, IgcListItemComponent, IgcButtonComponent, IgcIconComponent, IgcRippleComponent, IgcDropdownComponent, IgcCardComponent);

@customElement('app-all-products')
export default class AllProducts extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .page-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 960px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .inner-pages-header {
      background-color: #151725;
      background-image: url("/src/assets/NewHeader.png");
      background-size: cover;
      background-repeat: no-repeat;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 140px;
    }
    .row-layout {
      display: flex;
    }
    .content {
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;
      position: relative;
      padding: 48px 24px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      min-width: 50px;
      max-width: 1680px;
    }
    .filters {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 16px 0 0 24px;
      min-width: 220px;
      min-height: 50px;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 0 24px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_2 {
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      margin: 0 0 24px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_3 {
      justify-content: flex-end;
      align-items: center;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-height: 50px;
    }
    .group_4 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      min-width: 50px;
    }
    .card {
      width: 260px;
      height: max-content;
      max-width: 260px;
      flex-shrink: 0;
    }
    .group_5 {
      justify-content: flex-end;
      align-items: center;
      align-content: flex-start;
      min-width: 50px;
      min-height: 50px;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 400px;
      min-height: 50px;
    }
    .sitemap {
      border-color: hsla(var(--ig-gray-200));
      border-width: 1px 0px 0px;
      border-style: solid;
      justify-content: space-evenly;
      align-items: flex-start;
      align-content: flex-start;
      overflow: hidden;
      position: relative;
      padding: 24px;
      min-width: 50px;
      min-height: 170px;
    }
    .group_7 {
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_8 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .footer {
      background-color: hsla(var(--ig-gray-100));
      border-color: hsla(var(--ig-gray-200));
      border-width: 0px 0px 1px;
      border-style: solid;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      padding: 0 24px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_9 {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      min-height: 50px;
    }
    .image {
      object-fit: none;
      height: 22px;
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .text {
      color: hsla(var(--ig-surface-500));
      margin: 8px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .text_1 {
      margin: 0 0 8px;
      height: max-content;
      min-width: min-content;
    }
    .hyperlink {
      color: hsla(var(--ig-primary-500));
      margin: 8px 0 30px 16px;
      height: max-content;
      min-width: min-content;
    }
    .content_1 {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .image_1 {
      height: 100%;
    }
    .h6 {
      color: hsla(var(--ig-gray-800));
      height: max-content;
      min-width: min-content;
    }
    .text_2 {
      height: max-content;
      min-width: min-content;
    }
    .text_3 {
      margin: 8px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .text_4 {
      color: hsla(var(--ig-gray-800));
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .text_5 {
      color: hsla(var(--ig-gray-700));
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .media-content {
      height: 210px;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .list {
      height: max-content;
      min-width: min-content;
    }
    .user-input {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .dropdown {
      left: 0;
      top: 0;
      position: absolute;
      min-width: min-content;
      flex-shrink: 0;
    }
    .button_1 {
      margin: 0 0 8px;
      height: max-content;
      min-width: min-content;
    }
    .dropdown::part(base) {
      height: max-content;
    }
    .button_1::part(base) {
      color: hsla(var(--ig-primary-500));
      background-color: transparent;
    }
  `;

  @query('#button')
  public button?: IgcButtonComponent;

  @query('#dropdown')
  public dropdown?: IgcDropdownComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout page-content">
        <div class="column-layout inner-pages-header">
          <img src="/src/assets/AutoDeals_Logo.svg" class="image" />
          <p class="typography__body-1 text">
            Enjoy 20% off on all your weekend purchases
          </p>
        </div>
        <div class="row-layout content">
          <div class="row-layout group">
            <div class="column-layout filters">
              <p class="typography__subtitle-2 text_1">
                CATEGORY
              </p>
              <igc-list class="list">
                <igc-list-item>
                  <div slot="title">General Body Parts</div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="title">Lighting</div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="title">Engine &amp; Drivetrain</div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="title">Break &amp; Suspension</div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="title">Interior</div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="title">Exterior</div>
                </igc-list-item>
              </igc-list>
              <a class="caption hyperlink">
                Show All
              </a>
              <p class="typography__subtitle-2 text_1">
                BRAND
              </p>
              <igc-list class="list">
                <igc-list-item>
                  <div slot="title">Anzo</div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="title">Dorman</div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="title">Hella</div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="title">Keystone Collision</div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="title">Pilot Certified</div>
                </igc-list-item>
              </igc-list>
              <a class="caption hyperlink">
                Show All
              </a>
              <p class="typography__subtitle-2 text_1">
                PRICE
              </p>
              <igc-list class="list">
                <igc-list-item>
                  <div slot="title">$1 - $10</div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="title">$10 - $20</div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="title">$20 - $50</div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="title">$50 - $100</div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="title">$100 and Up</div>
                </igc-list-item>
              </igc-list>
              <a class="caption hyperlink">
                Show All
              </a>
            </div>
            <div class="column-layout group_1">
              <div class="row-layout group_2">
                <h5 class="content_1">
                  Newest Arrivals
                </h5>
                <div class="row-layout group_3">
                  <p class="typography__body-1 content_1">
                    1-6 OF 202 RESULTS
                  </p>
                  <igc-button variant="flat" @click=${() => this.dropdown?.toggle(this.button)} id="button" class="user-input">
                    <span>SORT BY</span>
                    <span class="material-icons">
                      keyboard_arrow_down
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-dropdown id="dropdown" class="dropdown">
                    <igc-dropdown-item>
                      Newest Arrivals
                    </igc-dropdown-item>
                    <igc-dropdown-item>
                      Featured
                    </igc-dropdown-item>
                    <igc-dropdown-item>
                      Price: Low to High
                    </igc-dropdown-item>
                    <igc-dropdown-item>
                      Price: High to Low
                    </igc-dropdown-item>
                    <igc-dropdown-item>
                      Avg. Customer Review
                    </igc-dropdown-item>
                  </igc-dropdown>
                </div>
              </div>
              <div class="row-layout group_4">
                <igc-card @click="${() => Router.go('/product-details')}" class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Alternator1.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Gold Alternator
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $59.90
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" class="button_1">
                      <span class="material-icons">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_91150104_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Tail Lamp Assembly
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $19.90
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" class="button_1">
                      <span class="material-icons">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_39703145_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Spark Plugs
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $11.00
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" class="button_1">
                      <span class="material-icons">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_20993125_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Oil Filters
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $24.50
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" class="button_1">
                      <span class="material-icons">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_7243970_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Engine pistons and cog
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $32.90
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" class="button_1">
                      <span class="material-icons">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_114068560_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Winter tires set
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $44.50
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" class="button_1">
                      <span class="material-icons">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_15825769_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Carboxylic bumper
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $49.90
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" class="button_1">
                      <span class="material-icons">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_63371615_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Battery
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $24.95
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" class="button_1">
                      <span class="material-icons">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_79651016_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Car Wheel
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $59.90
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" class="button_1">
                      <span class="material-icons">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_51128759_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Chrome exhaust pipe
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $34.50
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" class="button_1">
                      <span class="material-icons">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_12011807_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Headlight Assembly
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $49.50
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" class="button_1">
                      <span class="material-icons">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
                <igc-card class="card">
                  <igc-card-media class="media-content">
                    <img src="/src/assets/Depositphotos_303215620_l-2015.jpg" class="image_1" />
                  </igc-card-media>
                  <igc-card-header>
                    <h3 slot="title">
                      Braking Discs
                    </h3>
                    <h5 slot="subtitle">
                      This is a brief product description, not longer than 2 lines of text.
                    </h5>
                  </igc-card-header>
                  <igc-card-content class="body-content">
                    <h6 class="h6">
                      $21.99
                    </h6>
                  </igc-card-content>
                  <igc-card-actions class="actions-content">
                    <igc-button variant="flat" class="button_1">
                      <span class="material-icons">
                        add_shopping_cart
                      </span>
                      <span>ADD TO CART</span>
                      <igc-ripple></igc-ripple>
                    </igc-button>
                  </igc-card-actions>
                </igc-card>
              </div>
              <div class="row-layout group_5">
                <div class="row-layout group_6">
                  <igc-button variant="flat" class="user-input">
                    <span class="material-icons">
                      arrow_back
                    </span>
                    <span>PREVIOUS</span>
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <span class="user-input">ButtonGroup not yet available in WebComponents</span>
                  <igc-button variant="flat" class="user-input">
                    <span>NEXT</span>
                    <span class="material-icons">
                      arrow_forward
                    </span>
                    <igc-ripple></igc-ripple>
                  </igc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row-layout sitemap">
          <div class="column-layout group_7">
            <p class="typography__subtitle-2 text_2">
              Contact Us
            </p>
            <p class="typography__body-2 text_2">
              1234 Street Name, CityName, ST
            </p>
            <p class="typography__body-2 text_2">
               10520 United States
            </p>
            <p class="typography__subtitle-2 text_3">
              Phone Number
            </p>
            <p class="typography__body-2 text_2">
              1-234-567-8901
            </p>
          </div>
          <div class="column-layout group_8">
            <p class="typography__subtitle-2 text_2">
              Help
            </p>
            <p class="typography__body-2 text_2">
              FAQ
            </p>
            <p class="typography__body-2 text_2">
              Returns
            </p>
            <p class="typography__body-2 text_2">
              Coupons &amp; Discounts
            </p>
            <p class="typography__body-2 text_2">
              Shipping &amp; Returns
            </p>
          </div>
          <div class="column-layout group_8">
            <p class="typography__subtitle-2 text_2">
              About Us
            </p>
            <p class="typography__body-2 text_2">
              Company Info
            </p>
            <p class="typography__body-2 text_2">
              Press Releases
            </p>
            <p class="typography__body-2 text_2">
              Careers
            </p>
            <p class="typography__body-2 text_2">
              Reviews
            </p>
          </div>
          <div class="column-layout group_8">
            <p class="typography__subtitle-2 text_2">
              Services
            </p>
            <p class="typography__body-2 text_2">
              Buy Online
            </p>
            <p class="typography__body-2 text_2">
              In-Store
            </p>
            <p class="typography__body-2 text_2">
              Repair Help
            </p>
            <p class="typography__body-2 text_2">
              Find a Repair Shop
            </p>
          </div>
          <div class="column-layout group_8">
            <p class="typography__subtitle-2 text_2">
              Blog
            </p>
            <p class="typography__body-2 text_2">
              Car Building Basics
            </p>
            <p class="typography__body-2 text_2">
              Do it Yourself
            </p>
            <p class="typography__body-2 text_2">
              Your Home Workshop
            </p>
            <p class="typography__body-2 text_2">
              Advanced Bulding
            </p>
          </div>
        </div>
        <div class="row-layout footer">
          <p class="typography__body-2 text_4">
            Copyright ©2021 AutoShop.com, Inc. All Rights Reserved.
          </p>
          <div class="row-layout group_9">
            <p class="typography__body-2 text_5">
              Terms of Use
            </p>
            <p class="typography__body-2 text_5">
              Privacy Policy
            </p>
            <p class="typography__body-2 text_5">
              Site Map
            </p>
          </div>
        </div>
      </div>
    `;
  }
}
