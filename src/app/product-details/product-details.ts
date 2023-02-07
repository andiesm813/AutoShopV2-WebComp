import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcBadgeComponent, IgcButtonComponent, IgcCardComponent, IgcIconComponent, IgcRatingComponent, IgcRippleComponent, IgcSelectComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent, IgcBadgeComponent, IgcSelectComponent, IgcButtonComponent, IgcIconComponent, IgcRippleComponent, IgcCardComponent);

@customElement('app-product-details')
export default class ProductDetails extends LitElement {
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
      flex-grow: 1;
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
    .content {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 48px 24px;
      min-width: 50px;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      min-width: 50px;
      max-width: 1680px;
      flex-shrink: 0;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      padding: 0 0 16px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .images {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .thumbs {
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      flex-shrink: 0;
    }
    .thumb-1 {
      background-image: url("/src/assets/Alternator1.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      border-color: hsla(var(--ig-gray-200));
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 100px;
      min-height: 100px;
    }
    .thumb-2 {
      background-image: url("/src/assets/Alternator2.png");
      background-size: cover;
      background-repeat: no-repeat;
      border-color: hsla(var(--ig-gray-200));
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 100px;
      min-height: 100px;
    }
    .thumb-3 {
      background-image: url("/src/assets/Alternator3.png");
      background-size: cover;
      background-repeat: no-repeat;
      border-color: hsla(var(--ig-gray-200));
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 100px;
      min-height: 100px;
    }
    .product-image {
      border-color: hsla(var(--ig-gray-200));
      border-width: 1px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 240px;
      min-height: 50px;
      max-width: 560px;
    }
    .group_3 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 400px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      margin: 0 0 16px;
      min-width: 50px;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 40px 0 0;
      min-width: 50px;
      min-height: 50px;
    }
    .group_7 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 40px 0 0;
      min-width: 240px;
      min-height: 50px;
      max-width: 400px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_8 {
      background-color: transparent;
      justify-content: flex-start;
      align-items: baseline;
      align-content: flex-start;
      padding: 8px;
      min-width: 50px;
      min-height: 32px;
    }
    .group_9 {
      background-color: hsla(var(--ig-gray-100));
      justify-content: flex-start;
      align-items: baseline;
      align-content: flex-start;
      padding: 8px;
      min-width: 50px;
      min-height: 32px;
    }
    .group_10 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      max-width: 800px;
      flex-grow: 2;
      flex-basis: 0;
    }
    .group_11 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      align-content: center;
      position: relative;
      min-width: 50px;
      min-height: 40px;
    }
    .group_12 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      overflow: auto;
      min-width: 0;
    }
    .card {
      width: 200px;
      height: max-content;
      max-width: 200px;
      flex-shrink: 0;
    }
    .group_13 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      margin: 0 0 8px;
      min-width: 50px;
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
    .group_14 {
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_15 {
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
      height: 50px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_16 {
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
    .hyperlink {
      color: hsla(var(--ig-primary-500));
      cursor: pointer;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .text_1 {
      margin: 0 8px;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .hyperlink_1 {
      color: hsla(var(--ig-primary-500));
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .text_2 {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .large-image {
      object-fit: contain;
    }
    .content_1 {
      height: max-content;
      min-width: min-content;
    }
    .hyperlink_2 {
      color: hsla(var(--ig-primary-500));
      margin: 2px 0 0 8px;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .content_2 {
      color: hsla(var(--ig-gray-800));
      height: max-content;
      min-width: min-content;
    }
    .text_3 {
      color: hsla(var(--ig-gray-600));
      height: max-content;
      min-width: min-content;
    }
    .hyperlink_3 {
      color: hsla(var(--ig-primary-500));
      margin: 0 0 8px;
      height: max-content;
      min-width: min-content;
    }
    .text_4 {
      margin: 0 0 8px;
      height: max-content;
      min-width: min-content;
    }
    .h5 {
      margin: 0 0 24px;
      height: max-content;
    }
    .text_5 {
      color: hsla(var(--ig-gray-800));
      margin: 0 16px 0 0;
      height: max-content;
      min-width: 120px;
      flex-shrink: 0;
    }
    .text_6 {
      color: hsla(var(--ig-gray-800));
      margin: 0 16px 0 0;
      width: 120px;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .h5_1 {
      margin: 0 0 24px;
      height: max-content;
      min-width: min-content;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: hsla(var(--ig-success-500));
      margin: 0 8px 0 0;
    }
    .text_7 {
      height: max-content;
      min-width: min-content;
      flex-grow: 1;
      flex-basis: 0;
    }
    .text_8 {
      margin: 16px 0 0;
      height: max-content;
    }
    .h5_2 {
      margin: 40px 0 24px;
      height: max-content;
      min-width: min-content;
    }
    .image_1 {
      height: 100%;
    }
    .h6 {
      color: hsla(var(--ig-gray-800));
      width: 130px;
      height: max-content;
      min-width: min-content;
    }
    .text_9 {
      margin: 8px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .text_10 {
      color: hsla(var(--ig-gray-800));
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .text_11 {
      color: hsla(var(--ig-gray-700));
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .media-content {
      height: 160px;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .rating {
      width: max-content;
      height: max-content;
    }
    .select {
      margin: 0 16px 0 0;
      height: max-content;
      min-width: min-content;
      max-width: 100px;
      flex-shrink: 0;
    }
    .button-group {
      margin: 0 0 8px;
      height: max-content;
      min-width: min-content;
      max-width: 400px;
    }
    .button {
      height: max-content;
      min-width: min-content;
      max-width: 400px;
    }
    .button_1 {
      height: max-content;
      min-width: min-content;
    }
    .button_2 {
      height: max-content;
    }
    .button::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: hsla(var(--ig-primary-500));
    }
    .button_1::part(base) {
      color: hsla(var(--ig-primary-500));
      background-color: transparent;
    }
    .button_2::part(base) {
      color: hsla(var(--ig-primary-500));
      background-color: transparent;
    }
    .badge {
      margin: 0 0 8px;
      width: max-content;
      height: max-content;
    }
  `;

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
        <div class="column-layout content">
          <div class="column-layout group">
            <div class="row-layout group_1">
              <a class="typography__body-2 hyperlink" @click="${() => Router.go('/home')}">
                Home
              </a>
              <p class="typography__body-2 text_1">
                /
              </p>
              <a class="typography__body-2 hyperlink" @click="${() => Router.go('/all-products')}">
                Auto Body Parts
              </a>
              <p class="typography__body-2 text_1">
                /
              </p>
              <a class="typography__body-2 hyperlink_1">
                Engine &amp; Drivetrain
              </a>
              <p class="typography__body-2 text_1">
                /
              </p>
              <a class="typography__body-2 hyperlink_1">
                Starters, Alternators, Batteries &amp; Components
              </a>
              <p class="typography__body-2 text_1">
                /
              </p>
              <p class="typography__body-2 text_2">
                Alternator
              </p>
            </div>
            <div class="row-layout group_2">
              <div class="row-layout images">
                <div class="column-layout thumbs">
                  <div class="row-layout thumb-1"></div>
                  <div class="row-layout thumb-2"></div>
                  <div class="row-layout thumb-3"></div>
                </div>
                <div class="row-layout product-image">
                  <img src="/src/assets/Alternator1.jpg" class="large-image" />
                </div>
              </div>
              <div class="column-layout group_3">
                <h5 class="content_1">
                  Gold Alternator

                </h5>
                <div class="row-layout group_4">
                  <igc-rating value="4.5" size="medium" class="rating"></igc-rating>
                  <a class="typography__body-2 hyperlink_2">
                    (2 customer reviews)
                  </a>
                </div>
                <h4 class="content_2">
                  $59.90
                </h4>
                <p class="typography__subtitle-1 text_3">
                  Part #ABC123-456789 | SKU: A1234-01
                </p>
                <a class="typography__body-2 hyperlink_3">
                  Limited Lifetime Warranty
                </a>
                <p class="typography__body-2 text_4">
                  Generic Brand alternators are engineered to provide the amp output necessary to power today’s vehicles. Every unit is 100% NEW (not remanufactured) and made with proprietary components and processes to ensure maximum life and performance.
                </p>
                <igc-badge variant="success" class="badge">
                  IN STOCK
                </igc-badge>
                <div class="row-layout group_5">
                  <igc-select ?outlined="${false}" label="Quantitiy" value="1" class="select">
                    <igc-select-item value="1" ?selected="${true}">
                      1
                    </igc-select-item>
                    <igc-select-item value="1" ?selected="${true}">
                      2
                    </igc-select-item>
                    <igc-select-item value="1" ?selected="${true}">
                      3
                    </igc-select-item>
                    <igc-select-item value="1" ?selected="${true}">
                      4
                    </igc-select-item>
                  </igc-select>
                </div>
                <p class="typography__body-2 content_1">
                  Select delivery option:
                </p>
                <span class="button-group">ButtonGroup not yet available in WebComponents</span>
                <igc-button class="button">
                  <span class="material-icons">
                    shopping_cart
                  </span>
                  <span>ADD TO CART</span>
                  <igc-ripple></igc-ripple>
                </igc-button>
              </div>
            </div>
            <div class="row-layout group_6">
              <div class="column-layout group_7">
                <h5 class="h5">
                  Product Specifications
                </h5>
                <div class="row-layout group_8">
                  <p class="typography__body-1 text_5">
                    Part #  
                  </p>
                  <p class="typography__body-1 text_2">
                    ABC123-456789
                  </p>
                </div>
                <div class="row-layout group_9">
                  <p class="typography__body-1 text_5">
                    SKU #  
                  </p>
                  <p class="typography__body-1 text_2">
                    740988
                  </p>
                </div>
                <div class="row-layout group_8">
                  <p class="typography__body-1 text_5">
                    Weight
                  </p>
                  <p class="typography__body-1 text_2">
                    10 lbs
                  </p>
                </div>
                <div class="row-layout group_9">
                  <p class="typography__body-1 text_5">
                    Type
                  </p>
                  <p class="typography__body-1 text_2">
                    Alternator
                  </p>
                </div>
                <div class="row-layout group_8">
                  <p class="typography__body-1 text_5">
                    System Voltage  
                  </p>
                  <p class="typography__body-1 text_2">
                    12 V
                  </p>
                </div>
                <div class="row-layout group_9">
                  <p class="typography__body-1 text_6">
                    Pulleys Included  
                  </p>
                  <p class="typography__body-1 text_2">
                    2
                  </p>
                </div>
              </div>
              <div class="column-layout group_10">
                <h5 class="h5_1">
                  Product Description
                </h5>
                <div class="row-layout group_11">
                  <span class="material-icons icon">
                    check_circle
                  </span>
                  <p class="typography__body-1 text_7">
                    Key components are greased to help with long term reliability in harsh conditions
                  </p>
                </div>
                <div class="row-layout group_11">
                  <span class="material-icons icon">
                    check_circle
                  </span>
                  <p class="typography__body-1 text_7">
                    Every unit is built with 100% NEW components that are designed to meet the highest quality standards
                  </p>
                </div>
                <div class="row-layout group_11">
                  <span class="material-icons icon">
                    check_circle
                  </span>
                  <p class="typography__body-1 text_7">
                    Every unit is triple tested (component, subassembly and end of line) to ensure quality and performance
                  </p>
                </div>
                <p class="typography__body-2 text_8">
                  New Alternators are manufactured with all new components and are the ideal high quality replacement for many vehicles on the road today. Key components are lubricated to help with performance and long life reliability. Alternators have regulators that are computer tested for voltage stability, terminal function, and electronic circuit board integrity. These premium aftermarket replacement components are manufactured to meet your expectations for fit, form, and function. Some ACDelco Gold parts may have formerly appeared as ACDelco Professional.
                </p>
              </div>
            </div>
            <h5 class="h5_2">
              Customers Also Purchased
            </h5>
            <div class="row-layout group_12">
              <igc-card ?elevated="${true}" class="card">
                <igc-card-media class="media-content">
                  <img src="/src/assets/Alternator1.jpg" class="image_1" />
                </igc-card-media>
                <igc-card-header>
                  <h3 slot="title">
                    Gold Alternator
                  </h3>
                  <h5 slot="subtitle">
                    SKU: A1234-01
                  </h5>
                </igc-card-header>
                <igc-card-content class="body-content">
                  <div class="row-layout group_13">
                    <igc-rating value="4.5" size="small" class="rating"></igc-rating>
                  </div>
                  <h6 class="content_2">
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
              <igc-card ?elevated="${true}" class="card">
                <igc-card-media class="media-content">
                  <img src="/src/assets/Depositphotos_91150104_l-2015.jpg" class="image_1" />
                </igc-card-media>
                <igc-card-header>
                  <h3 slot="title">
                    Tail Lamp Assembly
                  </h3>
                  <h5 slot="subtitle">
                    SKU: A1234-01
                  </h5>
                </igc-card-header>
                <igc-card-content class="body-content">
                  <div class="row-layout group_13">
                    <igc-rating value="4" size="small" class="rating"></igc-rating>
                  </div>
                  <h6 class="content_2">
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
              <igc-card ?elevated="${true}" class="card">
                <igc-card-media class="media-content">
                  <img src="/src/assets/Depositphotos_39703145_l-2015.jpg" class="image_1" />
                </igc-card-media>
                <igc-card-header>
                  <h3 slot="title">
                    Spark Plugs
                  </h3>
                  <h5 slot="subtitle">
                    SKU: A1234-01
                  </h5>
                </igc-card-header>
                <igc-card-content class="body-content">
                  <div class="row-layout group_13">
                    <igc-rating value="3.5" size="small" class="rating"></igc-rating>
                  </div>
                  <h6 class="content_2">
                    $11.00
                  </h6>
                </igc-card-content>
                <igc-card-actions class="actions-content">
                  <igc-button variant="flat" class="button_2">
                    <span class="material-icons">
                      add_shopping_cart
                    </span>
                    <span>ADD TO CART</span>
                    <igc-ripple></igc-ripple>
                  </igc-button>
                </igc-card-actions>
              </igc-card>
              <igc-card ?elevated="${true}" class="card">
                <igc-card-media class="media-content">
                  <img src="/src/assets/Depositphotos_20993125_l-2015.jpg" class="image_1" />
                </igc-card-media>
                <igc-card-header>
                  <h3 slot="title">
                    Oil Filters
                  </h3>
                  <h5 slot="subtitle">
                    SKU: A1234-01
                  </h5>
                </igc-card-header>
                <igc-card-content class="body-content">
                  <div class="row-layout group_13">
                    <igc-rating value="5" size="small" class="rating"></igc-rating>
                  </div>
                  <h6 class="content_2">
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
              <igc-card ?elevated="${true}" class="card">
                <igc-card-media class="media-content">
                  <img src="/src/assets/Depositphotos_12011807_l-2015.jpg" class="image_1" />
                </igc-card-media>
                <igc-card-header>
                  <h3 slot="title">
                    Headlight Assembly
                  </h3>
                  <h5 slot="subtitle">
                    SKU: A1234-01
                  </h5>
                </igc-card-header>
                <igc-card-content class="body-content">
                  <div class="row-layout group_13">
                    <igc-rating value="3.5" size="small" class="rating"></igc-rating>
                  </div>
                  <h6 class="content_2">
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
              <igc-card ?elevated="${true}" class="card">
                <igc-card-media class="media-content">
                  <img src="/src/assets/Depositphotos_114068560_l-2015.jpg" class="image_1" />
                </igc-card-media>
                <igc-card-header>
                  <h3 slot="title">
                    Winter Tires Set
                  </h3>
                  <h5 slot="subtitle">
                    SKU: A1234-01
                  </h5>
                </igc-card-header>
                <igc-card-content class="body-content">
                  <div class="row-layout group_13">
                    <igc-rating value="4.5" size="small" class="rating"></igc-rating>
                  </div>
                  <h6 class="content_2">
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
              <igc-card ?elevated="${true}" class="card">
                <igc-card-media class="media-content">
                  <img src="/src/assets/Depositphotos_51128759_l-2015.jpg" class="image_1" />
                </igc-card-media>
                <igc-card-header>
                  <h3 slot="title">
                    Exhaust Pipe
                  </h3>
                  <h5 slot="subtitle">
                    SKU: A1234-01
                  </h5>
                </igc-card-header>
                <igc-card-content class="body-content">
                  <div class="row-layout group_13">
                    <igc-rating value="5" size="small" class="rating"></igc-rating>
                  </div>
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
              <igc-card ?elevated="${true}" class="card">
                <igc-card-media class="media-content">
                  <img src="/src/assets/Depositphotos_63371615_l-2015.jpg" class="image_1" />
                </igc-card-media>
                <igc-card-header>
                  <h3 slot="title">
                    Battery
                  </h3>
                  <h5 slot="subtitle">
                    SKU: A1234-01
                  </h5>
                </igc-card-header>
                <igc-card-content class="body-content">
                  <div class="row-layout group_13">
                    <igc-rating value="4" size="small" class="rating"></igc-rating>
                  </div>
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
            </div>
          </div>
        </div>
        <div class="row-layout sitemap">
          <div class="column-layout group_14">
            <p class="typography__subtitle-2 content_1">
              Contact Us
            </p>
            <p class="typography__body-2 content_1">
              1234 Street Name, CityName, ST
            </p>
            <p class="typography__body-2 content_1">
               10520 United States
            </p>
            <p class="typography__subtitle-2 text_9">
              Phone Number
            </p>
            <p class="typography__body-2 content_1">
              1-234-567-8901
            </p>
          </div>
          <div class="column-layout group_15">
            <p class="typography__subtitle-2 content_1">
              Help
            </p>
            <p class="typography__body-2 content_1">
              FAQ
            </p>
            <p class="typography__body-2 content_1">
              Returns
            </p>
            <p class="typography__body-2 content_1">
              Coupons &amp; Discounts
            </p>
            <p class="typography__body-2 content_1">
              Shipping &amp; Returns
            </p>
          </div>
          <div class="column-layout group_15">
            <p class="typography__subtitle-2 content_1">
              About Us
            </p>
            <p class="typography__body-2 content_1">
              Company Info
            </p>
            <p class="typography__body-2 content_1">
              Press Releases
            </p>
            <p class="typography__body-2 content_1">
              Careers
            </p>
            <p class="typography__body-2 content_1">
              Reviews
            </p>
          </div>
          <div class="column-layout group_15">
            <p class="typography__subtitle-2 content_1">
              Services
            </p>
            <p class="typography__body-2 content_1">
              Buy Online
            </p>
            <p class="typography__body-2 content_1">
              In-Store
            </p>
            <p class="typography__body-2 content_1">
              Repair Help
            </p>
            <p class="typography__body-2 content_1">
              Find a Repair Shop
            </p>
          </div>
          <div class="column-layout group_15">
            <p class="typography__subtitle-2 content_1">
              Blog
            </p>
            <p class="typography__body-2 content_1">
              Car Building Basics
            </p>
            <p class="typography__body-2 content_1">
              Do it Yourself
            </p>
            <p class="typography__body-2 content_1">
              Your Home Workshop
            </p>
            <p class="typography__body-2 content_1">
              Advanced Bulding
            </p>
          </div>
        </div>
        <div class="row-layout footer">
          <p class="typography__body-2 text_10">
            Copyright ©2021 AutoShop.com, Inc. All Rights Reserved.
          </p>
          <div class="row-layout group_16">
            <p class="typography__body-2 text_11">
              Terms of Use
            </p>
            <p class="typography__body-2 text_11">
              Privacy Policy
            </p>
            <p class="typography__body-2 text_11">
              Site Map
            </p>
          </div>
        </div>
      </div>
    `;
  }
}
