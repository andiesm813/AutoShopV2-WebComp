import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcButtonComponent, IgcCardComponent, IgcIconComponent, IgcRippleComponent, IgcSelectComponent } from 'igniteui-webcomponents';

defineComponents(IgcSelectComponent, IgcButtonComponent, IgcRippleComponent, IgcCardComponent, IgcIconComponent);

@customElement('app-home')
export default class Home extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .row-layout {
      display: flex;
    }
    .main-page-header {
      background-color: #151725;
      background-image: url("/src/assets/NewHeader.png");
      background-size: cover;
      background-repeat: no-repeat;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 24px;
      min-width: 50px;
      min-height: 240px;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-height: 50px;
      max-width: 1280px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .group_2 {
      background-color: hsla(var(--ig-surface-500));
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      min-width: 700px;
      flex-shrink: 0;
    }
    .group_3 {
      background-color: hsla(var(--ig-warn-500));
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 100px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .content {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 48px 24px;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .group_4 {
      flex-wrap: wrap;
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      min-width: 50px;
      max-width: 1680px;
      flex-shrink: 0;
    }
    .card {
      width: 260px;
      height: max-content;
      max-width: 260px;
      flex-shrink: 0;
    }
    .group_5 {
      flex-wrap: wrap;
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      min-width: 50px;
      max-width: 1680px;
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
    .group_6 {
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_7 {
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
      flex-shrink: 0;
    }
    .group_8 {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      min-height: 50px;
    }
    .h4 {
      text-align: center;
      color: hsla(var(--ig-surface-500));
      height: max-content;
      min-width: min-content;
    }
    .text {
      text-align: center;
      color: hsla(var(--ig-surface-500));
      margin: 0 0 16px;
      height: max-content;
      min-width: min-content;
    }
    .h5 {
      margin: 0 24px 32px;
      height: max-content;
      min-width: min-content;
    }
    .image {
      height: 100%;
    }
    .h5_1 {
      margin: 48px 24px 32px;
      height: max-content;
      min-width: min-content;
    }
    .h6 {
      color: hsla(var(--ig-gray-800));
      height: max-content;
      min-width: min-content;
    }
    .text_1 {
      height: max-content;
      min-width: min-content;
    }
    .text_2 {
      margin: 8px 0 0;
      height: max-content;
      min-width: min-content;
    }
    .text_3 {
      color: hsla(var(--ig-gray-800));
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .text_4 {
      color: hsla(var(--ig-gray-700));
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .media-content {
      height: 400px;
    }
    .media-content_1 {
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
    .select {
      width: 150px;
      height: max-content;
      flex-shrink: 0;
    }
    .select_1 {
      height: max-content;
      min-width: 150px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .button {
      height: max-content;
      min-width: min-content;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .button_1 {
      margin: 0 0 8px;
      height: max-content;
      min-width: min-content;
    }
    .button::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .button_1::part(base) {
      color: hsla(var(--ig-primary-500));
      background-color: transparent;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout main-page-header">
        <div class="row-layout group">
          <div class="column-layout group_1">
            <h4 class="h4">
              All the auto parts you need in one place
            </h4>
            <p class="typography__body-1 text">
              We have the most popular brands and all the parts for your vehicle
            </p>
            <div class="row-layout group_2">
              <igc-select ?outlined="${false}" label="Year" placeholder="Select Year" class="select">
                <igc-select-item value="Option">
                  2021
                </igc-select-item>
                <igc-select-item value="Option">
                  2020
                </igc-select-item>
                <igc-select-item value="Option">
                  2019
                </igc-select-item>
                <igc-select-item value="Option">
                  2018
                </igc-select-item>
                <igc-select-item value="Option">
                  2017
                </igc-select-item>
                <igc-select-item value="Option">
                  2016
                </igc-select-item>
                <igc-select-item value="Option">
                  2015
                </igc-select-item>
                <igc-select-item value="Option">
                  2014
                </igc-select-item>
                <igc-select-item value="Option">
                  2013
                </igc-select-item>
                <igc-select-item value="Option">
                  2012
                </igc-select-item>
                <igc-select-item value="Option">
                  2011
                </igc-select-item>
                <igc-select-item value="Option">
                  2010
                </igc-select-item>
              </igc-select>
              <igc-select ?outlined="${false}" label="Brand" placeholder="Select Brand" ?disabled="${true}" class="select_1">
                <igc-select-item value="Option">
                  Hyundai
                </igc-select-item>
                <igc-select-item value="Option">
                  Kia
                </igc-select-item>
                <igc-select-item value="Option">
                  Mitsubishi
                </igc-select-item>
                <igc-select-item value="Option">
                  Audi
                </igc-select-item>
                <igc-select-item value="Option">
                  Chevrolet
                </igc-select-item>
                <igc-select-item value="Option">
                  Toyota
                </igc-select-item>
                <igc-select-item value="Option">
                  Ford
                </igc-select-item>
                <igc-select-item value="Option">
                  Fiat
                </igc-select-item>
              </igc-select>
              <igc-select ?outlined="${false}" label="Model" placeholder="Select Model" ?disabled="${true}" class="select_1">
                <igc-select-item value="Option">
                  Option
                </igc-select-item>
              </igc-select>
              <igc-select ?outlined="${false}" label="Engine" placeholder="Select Engine" ?disabled="${true}" class="select_1">
                <igc-select-item value="Option">
                  Option
                </igc-select-item>
              </igc-select>
              <div class="row-layout group_3">
                <igc-button variant="flat" class="button">
                  SEARCH
                  <igc-ripple></igc-ripple>
                </igc-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column-layout content">
        <h5 class="h5">
          Popular Categories
        </h5>
        <div class="row-layout group_4">
          <igc-card @click="${() => Router.go('/all-products')}" class="card">
            <igc-card-media class="media-content">
              <img src="/src/assets/photo-1606577924006-27d39b132ae2.jpg" class="image" />
            </igc-card-media>
            <igc-card-header>
              <h3 slot="title">
                AUTO BODY PARTS
              </h3>
              <h5 slot="subtitle">
                Bumpers, Fenders, Mirrors, Hoods, Grilles, Door handles, Windows
              </h5>
            </igc-card-header>
          </igc-card>
          <igc-card class="card">
            <igc-card-media class="media-content">
              <img src="/src/assets/photo-1616788494670-7243adbb32b2.jpg" class="image" />
            </igc-card-media>
            <igc-card-header>
              <h3 slot="title">
                HEADLIGHTS &amp; LIGHTING
              </h3>
              <h5 slot="subtitle">
                Headlights, Tail, Fog, Turn Signals, Switches, Corner, Off-Road, Bulbs
              </h5>
            </igc-card-header>
          </igc-card>
          <igc-card class="card">
            <igc-card-media class="media-content">
              <img src="/src/assets/photo-1552656967-7a0991a13906.jpg" class="image" />
            </igc-card-media>
            <igc-card-header>
              <h3 slot="title">
                ENGINE &amp; DRIVETRAIN
              </h3>
              <h5 slot="subtitle">
                Catalytic Converters, Radiators, Fuel Systems, Heating, Cranks, Pistons
              </h5>
            </igc-card-header>
          </igc-card>
          <igc-card class="card">
            <igc-card-media class="media-content">
              <img src="/src/assets/photo-1598149949932-e4727f2f7ac4.jpg" class="image" />
            </igc-card-media>
            <igc-card-header>
              <h3 slot="title">
                BRAKES &amp; SUSPENSION
              </h3>
              <h5 slot="subtitle">
                Discs, Shocks, Control Arms, Wheel Hubs, Wheels, Tie Rods
              </h5>
            </igc-card-header>
          </igc-card>
          <igc-card class="card">
            <igc-card-media class="media-content">
              <img src="/src/assets/photo-1614527255138-018e29ff34ee.jpg" class="image" />
            </igc-card-media>
            <igc-card-header>
              <h3 slot="title">
                INTERIOR ACCESSORIES
              </h3>
              <h5 slot="subtitle">
                Seats, Carpet, Floor Mats, Dashboard, Switches, Gauges &amp; Monitors
              </h5>
            </igc-card-header>
          </igc-card>
          <igc-card class="card">
            <igc-card-media class="media-content">
              <img src="/src/assets/photo-1514316454349-750a7fd3da3a.jpg" class="image" />
            </igc-card-media>
            <igc-card-header>
              <h3 slot="title">
                EXTERIOR ACCESSORIES
              </h3>
              <h5 slot="subtitle">
                Bumpers, Hoods, Grilles, Fog lights, Door Handles, Locks, Covers
              </h5>
            </igc-card-header>
          </igc-card>
        </div>
        <h5 class="h5_1">
          Featured Products
        </h5>
        <div class="row-layout group_5">
          <igc-card @click="${() => Router.go('/product-details')}" class="card">
            <igc-card-media class="media-content_1">
              <img src="/src/assets/Alternator1.jpg" class="image" />
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
            <igc-card-media class="media-content_1">
              <img src="/src/assets/Depositphotos_114068560_l-2015.jpg" class="image" />
            </igc-card-media>
            <igc-card-header>
              <h3 slot="title">
                Winter Tires Set
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
            <igc-card-media class="media-content_1">
              <img src="/src/assets/Depositphotos_12011807_l-2015.jpg" class="image" />
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
            <igc-card-media class="media-content_1">
              <img src="/src/assets/Depositphotos_39703145_l-2015.jpg" class="image" />
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
            <igc-card-media class="media-content_1">
              <img src="/src/assets/Depositphotos_91150104_l-2015.jpg" class="image" />
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
            <igc-card-media class="media-content_1">
              <img src="/src/assets/Depositphotos_20993125_l-2015.jpg" class="image" />
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
        </div>
      </div>
      <div class="row-layout sitemap">
        <div class="column-layout group_6">
          <p class="typography__subtitle-2 text_1">
            Contact Us
          </p>
          <p class="typography__body-2 text_1">
            1234 Street Name, CityName, ST
          </p>
          <p class="typography__body-2 text_1">
             10520 United States
          </p>
          <p class="typography__subtitle-2 text_2">
            Phone Number
          </p>
          <p class="typography__body-2 text_1">
            1-234-567-8901
          </p>
        </div>
        <div class="column-layout group_7">
          <p class="typography__subtitle-2 text_1">
            Help
          </p>
          <p class="typography__body-2 text_1">
            FAQ
          </p>
          <p class="typography__body-2 text_1">
            Returns
          </p>
          <p class="typography__body-2 text_1">
            Coupons &amp; Discounts
          </p>
          <p class="typography__body-2 text_1">
            Shipping &amp; Returns
          </p>
        </div>
        <div class="column-layout group_7">
          <p class="typography__subtitle-2 text_1">
            About Us
          </p>
          <p class="typography__body-2 text_1">
            Company Info
          </p>
          <p class="typography__body-2 text_1">
            Press Releases
          </p>
          <p class="typography__body-2 text_1">
            Careers
          </p>
          <p class="typography__body-2 text_1">
            Reviews
          </p>
        </div>
        <div class="column-layout group_7">
          <p class="typography__subtitle-2 text_1">
            Services
          </p>
          <p class="typography__body-2 text_1">
            Buy Online
          </p>
          <p class="typography__body-2 text_1">
            In-Store
          </p>
          <p class="typography__body-2 text_1">
            Repair Help
          </p>
          <p class="typography__body-2 text_1">
            Find a Repair Shop
          </p>
        </div>
        <div class="column-layout group_7">
          <p class="typography__subtitle-2 text_1">
            Blog
          </p>
          <p class="typography__body-2 text_1">
            Car Building Basics
          </p>
          <p class="typography__body-2 text_1">
            Do it Yourself
          </p>
          <p class="typography__body-2 text_1">
            Your Home Workshop
          </p>
          <p class="typography__body-2 text_1">
            Advanced Bulding
          </p>
        </div>
      </div>
      <div class="row-layout footer">
        <p class="typography__body-2 text_3">
          Copyright ©2021 AutoShop.com, Inc. All Rights Reserved.
        </p>
        <div class="row-layout group_8">
          <p class="typography__body-2 text_4">
            Terms of Use
          </p>
          <p class="typography__body-2 text_4">
            Privacy Policy
          </p>
          <p class="typography__body-2 text_4">
            Site Map
          </p>
        </div>
      </div>
    `;
  }
}
