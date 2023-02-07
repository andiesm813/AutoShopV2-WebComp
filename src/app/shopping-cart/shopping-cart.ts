import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcIconButtonComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcListComponent, IgcListItemComponent, IgcAvatarComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent, IgcButtonComponent);

@customElement('app-shopping-cart')
export default class ShoppingCart extends LitElement {
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
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 48px 24px;
      min-width: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      min-width: 50px;
      max-width: 1680px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 40px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 560px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_3 {
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 140px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 40px;
    }
    .group_6 {
      background-color: hsla(var(--ig-gray-200));
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      height: 36px;
      min-width: 50px;
      min-height: 36px;
      flex-shrink: 0;
    }
    .group_7 {
      justify-content: flex-end;
      align-items: center;
      align-content: flex-start;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_8 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_9 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 260px;
      min-height: 50px;
      max-width: 360px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_10 {
      background-color: transparent;
      justify-content: space-between;
      align-items: baseline;
      align-content: flex-start;
      padding: 8px;
      min-width: 50px;
      min-height: 32px;
    }
    .group_11 {
      background-color: transparent;
      justify-content: flex-end;
      align-items: flex-end;
      align-content: flex-start;
      padding: 8px;
      min-width: 50px;
      min-height: 32px;
    }
    .group_12 {
      background-color: transparent;
      justify-content: space-between;
      align-items: baseline;
      align-content: flex-start;
      margin: 0 0 24px;
      padding: 8px;
      min-width: 50px;
      min-height: 32px;
    }
    .group_13 {
      background-color: hsla(var(--ig-warn-500));
      justify-content: center;
      align-items: center;
      align-content: flex-start;
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
    .h5 {
      margin: 0 0 24px;
      height: max-content;
      min-width: min-content;
    }
    .avatar {
      --background: none;
    }
    .text_1 {
      height: max-content;
    }
    .text_2 {
      margin: 0 8px 0 0;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .text_3 {
      text-align: center;
      height: max-content;
      min-width: 30px;
      flex-shrink: 0;
    }
    .text_4 {
      text-align: right;
      height: max-content;
      min-width: min-content;
    }
    .icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
      color: hsla(var(--ig-gray-600));
    }
    .text_5 {
      height: max-content;
      min-width: 140px;
    }
    .h6 {
      margin: 0 0 24px;
      height: max-content;
    }
    .content_1 {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .content_2 {
      text-align: right;
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .hyperlink {
      color: hsla(var(--ig-primary-500));
      height: max-content;
      min-width: min-content;
    }
    .text_6 {
      height: max-content;
      min-width: min-content;
    }
    .text_7 {
      margin: 8px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .text_8 {
      color: hsla(var(--ig-gray-800));
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .text_9 {
      color: hsla(var(--ig-gray-700));
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .list {
      height: max-content;
    }
    .button {
      height: max-content;
      min-width: min-content;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .button::part(base) {
      color: hsla(var(--ig-surface-500));
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
        <div class="row-layout content">
          <div class="column-layout group">
            <h5 class="h5">
              Shopping Cart
            </h5>
            <div class="row-layout group_1">
              <div class="column-layout group_2">
                <igc-list class="list">
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar src="/src/assets/Alternator1.jpg" class="avatar"></igc-avatar>
                    </div>
                    <div>
                      <div class="row-layout group_3">
                        <div class="row-layout group_4">
                          <p class="typography__body-1 text_1">
                            Gold Alternator 
                          </p>
                        </div>
                        <div class="row-layout group_5">
                          <p class="typography__body-1 text_2">
                            Qty:
                          </p>
                          <div class="row-layout group_6">
                            <igc-icon-button variant="flat">
                              <span class="material-icons">
                                remove
                              </span>
                              <igc-ripple></igc-ripple>
                            </igc-icon-button>
                            <p class="typography__body-1 text_3">
                              1
                            </p>
                            <igc-icon-button variant="flat">
                              <span class="material-icons">
                                add
                              </span>
                              <igc-ripple></igc-ripple>
                            </igc-icon-button>
                          </div>
                        </div>
                        <div class="row-layout group_7">
                          <p class="typography__body-1 text_4">
                            $59.90
                          </p>
                        </div>
                      </div>
                    </div>
                    <div slot="end">
                      <span class="material-icons icon">
                        remove_shopping_cart
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar src="/src/assets/Depositphotos_91150104_l-2015.jpg" class="avatar"></igc-avatar>
                    </div>
                    <div>
                      <div class="row-layout group_3">
                        <div class="row-layout group_8">
                          <p class="typography__body-1 text_5">
                            Tail Lamp Assembly
                          </p>
                        </div>
                        <div class="row-layout group_5">
                          <p class="typography__body-1 text_2">
                            Qty:
                          </p>
                          <div class="row-layout group_6">
                            <igc-icon-button variant="flat">
                              <span class="material-icons">
                                remove
                              </span>
                              <igc-ripple></igc-ripple>
                            </igc-icon-button>
                            <p class="typography__body-1 text_3">
                              1
                            </p>
                            <igc-icon-button variant="flat">
                              <span class="material-icons">
                                add
                              </span>
                              <igc-ripple></igc-ripple>
                            </igc-icon-button>
                          </div>
                        </div>
                        <div class="row-layout group_7">
                          <p class="typography__body-1 text_4">
                            $19.50
                          </p>
                        </div>
                      </div>
                    </div>
                    <div slot="end">
                      <span class="material-icons icon">
                        remove_shopping_cart
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar src="/src/assets/Depositphotos_114068560_l-2015.jpg" class="avatar"></igc-avatar>
                    </div>
                    <div>
                      <div class="row-layout group_3">
                        <div class="row-layout group_8">
                          <p class="typography__body-1 text_5">
                            Winter Tires Set
                          </p>
                        </div>
                        <div class="row-layout group_5">
                          <p class="typography__body-1 text_2">
                            Qty:
                          </p>
                          <div class="row-layout group_6">
                            <igc-icon-button variant="flat">
                              <span class="material-icons">
                                remove
                              </span>
                              <igc-ripple></igc-ripple>
                            </igc-icon-button>
                            <p class="typography__body-1 text_3">
                              1
                            </p>
                            <igc-icon-button variant="flat">
                              <span class="material-icons">
                                add
                              </span>
                              <igc-ripple></igc-ripple>
                            </igc-icon-button>
                          </div>
                        </div>
                        <div class="row-layout group_7">
                          <p class="typography__body-1 text_4">
                            $59.90
                          </p>
                        </div>
                      </div>
                    </div>
                    <div slot="end">
                      <span class="material-icons icon">
                        remove_shopping_cart
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar src="/src/assets/Depositphotos_20993125_l-2015.jpg" class="avatar"></igc-avatar>
                    </div>
                    <div>
                      <div class="row-layout group_3">
                        <div class="row-layout group_4">
                          <p class="typography__body-1 text_1">
                            Oil Filter
                          </p>
                        </div>
                        <div class="row-layout group_5">
                          <p class="typography__body-1 text_2">
                            Qty:
                          </p>
                          <div class="row-layout group_6">
                            <igc-icon-button variant="flat">
                              <span class="material-icons">
                                remove
                              </span>
                              <igc-ripple></igc-ripple>
                            </igc-icon-button>
                            <p class="typography__body-1 text_3">
                              1
                            </p>
                            <igc-icon-button variant="flat">
                              <span class="material-icons">
                                add
                              </span>
                              <igc-ripple></igc-ripple>
                            </igc-icon-button>
                          </div>
                        </div>
                        <div class="row-layout group_7">
                          <p class="typography__body-1 text_4">
                            $59.90
                          </p>
                        </div>
                      </div>
                    </div>
                    <div slot="end">
                      <span class="material-icons icon">
                        remove_shopping_cart
                      </span>
                    </div>
                  </igc-list-item>
                  <igc-list-item>
                    <div slot="start">
                      <igc-avatar src="/src/assets/Depositphotos_12011807_l-2015.jpg" class="avatar"></igc-avatar>
                    </div>
                    <div>
                      <div class="row-layout group_3">
                        <div class="row-layout group_8">
                          <p class="typography__body-1 text_5">
                            Headlight Assembly
                          </p>
                        </div>
                        <div class="row-layout group_5">
                          <p class="typography__body-1 text_2">
                            Qty:
                          </p>
                          <div class="row-layout group_6">
                            <igc-icon-button variant="flat">
                              <span class="material-icons">
                                remove
                              </span>
                              <igc-ripple></igc-ripple>
                            </igc-icon-button>
                            <p class="typography__body-1 text_3">
                              1
                            </p>
                            <igc-icon-button variant="flat">
                              <span class="material-icons">
                                add
                              </span>
                              <igc-ripple></igc-ripple>
                            </igc-icon-button>
                          </div>
                        </div>
                        <div class="row-layout group_7">
                          <p class="typography__body-1 text_4">
                            $59.90
                          </p>
                        </div>
                      </div>
                    </div>
                    <div slot="end">
                      <span class="material-icons icon">
                        remove_shopping_cart
                      </span>
                    </div>
                  </igc-list-item>
                </igc-list>
              </div>
              <div class="column-layout group_9">
                <h6 class="h6">
                  Cart totals
                </h6>
                <div class="row-layout group_10">
                  <p class="typography__subtitle-2 content_1">
                    Subtotal
                  </p>
                  <p class="typography__body-1 content_2">
                    $198.30
                  </p>
                </div>
                <div class="row-layout group_10">
                  <p class="typography__subtitle-2 content_1">
                    Shipping
                  </p>
                  <p class="typography__body-1 content_2">
                    $0
                  </p>
                </div>
                <div class="column-layout group_11">
                  <p class="typography__body-2 text_4">
                    Shipping wiil be calculated at checkout
                  </p>
                  <a class="typography__body-2 hyperlink">
                    Estimate shipping
                  </a>
                </div>
                <div class="row-layout group_12">
                  <h6 class="content_1">
                    Total
                  </h6>
                  <h6 class="content_2">
                    $198.30
                  </h6>
                </div>
                <div class="row-layout group_13">
                  <igc-button variant="flat" class="button">
                    PROCEED TO CHECKOUT
                    <igc-ripple></igc-ripple>
                  </igc-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row-layout sitemap">
          <div class="column-layout group_14">
            <p class="typography__subtitle-2 text_6">
              Contact Us
            </p>
            <p class="typography__body-2 text_6">
              1234 Street Name, CityName, ST
            </p>
            <p class="typography__body-2 text_6">
               10520 United States
            </p>
            <p class="typography__subtitle-2 text_7">
              Phone Number
            </p>
            <p class="typography__body-2 text_6">
              1-234-567-8901
            </p>
          </div>
          <div class="column-layout group_15">
            <p class="typography__subtitle-2 text_6">
              Help
            </p>
            <p class="typography__body-2 text_6">
              FAQ
            </p>
            <p class="typography__body-2 text_6">
              Returns
            </p>
            <p class="typography__body-2 text_6">
              Coupons &amp; Discounts
            </p>
            <p class="typography__body-2 text_6">
              Shipping &amp; Returns
            </p>
          </div>
          <div class="column-layout group_15">
            <p class="typography__subtitle-2 text_6">
              About Us
            </p>
            <p class="typography__body-2 text_6">
              Company Info
            </p>
            <p class="typography__body-2 text_6">
              Press Releases
            </p>
            <p class="typography__body-2 text_6">
              Careers
            </p>
            <p class="typography__body-2 text_6">
              Reviews
            </p>
          </div>
          <div class="column-layout group_15">
            <p class="typography__subtitle-2 text_6">
              Services
            </p>
            <p class="typography__body-2 text_6">
              Buy Online
            </p>
            <p class="typography__body-2 text_6">
              In-Store
            </p>
            <p class="typography__body-2 text_6">
              Repair Help
            </p>
            <p class="typography__body-2 text_6">
              Find a Repair Shop
            </p>
          </div>
          <div class="column-layout group_15">
            <p class="typography__subtitle-2 text_6">
              Blog
            </p>
            <p class="typography__body-2 text_6">
              Car Building Basics
            </p>
            <p class="typography__body-2 text_6">
              Do it Yourself
            </p>
            <p class="typography__body-2 text_6">
              Your Home Workshop
            </p>
            <p class="typography__body-2 text_6">
              Advanced Bulding
            </p>
          </div>
        </div>
        <div class="row-layout footer">
          <p class="typography__body-2 text_8">
            Copyright ©2021 AutoShop.com, Inc. All Rights Reserved.
          </p>
          <div class="row-layout group_16">
            <p class="typography__body-2 text_9">
              Terms of Use
            </p>
            <p class="typography__body-2 text_9">
              Privacy Policy
            </p>
            <p class="typography__body-2 text_9">
              Site Map
            </p>
          </div>
        </div>
      </div>
    `;
  }
}
