---
title: Auction API Documentation
description: Auction API Documentation
date: 2026-09-08
author: Chirag Tyagi
---


# Auction API

The Auction API provides API methods for managing auctions, retrieving
auction data, placing bids, and accessing auction configuration. It
supports both **POST** and **GET** methods for creating or updating
resources and retrieving information.

The API can be used to integrate auction functionality with external
systems and build custom auction experiences.

Introducing **Auction API** for the **[Product Auction
App](https://auction-doc.webkul.com/)** for Shopify.

Product Auction app helps merchants to run auctions on their stores.
customers visit the stores and place bids for the auction products.

Merchants using the [Product Auction
app](https://apps.shopify.com/product-auction) can get access to the
**Auction API** via the app.

**API** stands for an Application programming interface. It is a set of
tools and protocols that will help you building sync and much more.

The Auction API documentation includes **POST** and **GET** methods.

**POST method** of the API is where developers can interface with other
APIs or systems to get the desired outcome. Moreover, it is more often
utilized to create new resources.

The **GET method** of the API is to read or retrieve a representation of
a resource or information.

The following sections describe the available endpoints, parameters, and
responses.

![Auction
API](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/10/Screenshot-2021-10-01T171014.210-1200x595.png)

**Base URL:
[sp-auction.webkul.com/product-auction-api](https://sp-auction.webkul.com/product-auction-api/)**

### Use of Auction API

The Auction API provides the following functions:

## Token API

-   **POST** `/api/user/refresh` --- Create an access token using the
    refresh token.

**NOTE**:- POST requests are used to send data to the API server to
create or update a resource. Also, the GET method is used to retrieve
data from a server at the specified resource.

## Auction API

-   **POST** `/api/start/{auctionId}.json` --- Start auction by auction
    ID

-   **POST** `/api/stop/{auctionId}.json` --- Stop auction by auction ID

-   **GET** `/api/auctions.json` --- Get Auctions by Shop

-   **POST** `/api/auctions.json` --- Add Auction

-   **GET** `/api/auctions/{id}.json` --- Get Auctions by ID

-   **GET** `/api/shop/auctions.json` --- Get Auctions

-   **GET** `/api/shop/auction/{type}.json` --- Get Products on Auction

-   **GET** `/api/shop/auctions/running_bids_auction/{customerId}.json`
    --- Get Running Bid Auctions

-   **GET** `/api/shop/auctions/loss_auction/{customerId}.json` --- Get
    Losing Auctions

-   **GET** `/api/shop/auctions/winning_auction/{customerId}.json` ---
    Get Winning Auctions

-   **GET** `/api/shop/auction/{auctionId}/start_bid.json` --- Get Start
    Bid of Auctions

## Bid API

-   **GET** `/api/shop/auction/bidding_list/{auctionId}.json` --- Get
    Bidding List

-   **POST** `/api/bids.json` --- Place Bid

-   **GET** `/api/shop/auction/{auctionId}/bid/{bidId}.json` --- Get Bid
    Information

## Configuration API

-   **GET** `/api/auction/configuration.json` --- Get Configuration by
    the shop

## Token Properties

**access_token**: This is the access token from product auction API
credentials.

**refresh_token**: This is the refresh token from product auction API
credentials.

## Auction Properties

**auction_id**: This is the auction ID, that's used as a unique
identifier for the auction.

**start_now**: This is to start an auction immediately after creating
using the auction ID.

**stop_now**: This is to stop an auction immediately using the auction
ID.

**start_date**: This is the start date of the auction in UTC.

**end_date**: This is the end date of the auction in UTC.

**by_seller**: `1` if the auction is created by a seller; otherwise,
`0`.

**start_price:** This is the starting price of the auction, the price
from where the bidding will start.

**reserve_price**: This is the reserve price for the auction. Also, the
target auction bidding price where the product bidding should be
reached.

**bid_rule**: This is used to define the bid rule in JSON format.

**proxy_bidding_on**: It allows customers to make bids automatically on
auction products.

**popcorn_bidding**: Enables dynamic bidding.

Popcorn Bidding, also known as Dynamic Bidding, is a way of giving the
bidders who were outbid an opportunity to rebid. **[Know
More](/guide/auction-configuration#popcorn-bidding)**

## Additional Auction Properties

**extend_deadline_by**: Minutes by which the auction deadline should be
extended in case of popcorn bidding.

**extend_deadline_within**: Minutes within which the deadline should be
extended before ending the auction in case of popcorn bidding.

**max_popcorn_bid**: Maximum number of popcorn bids allowed.

**booking_amount**: Configure the booking amount for the auction if the
configuration is enabled.

**joining_amount**: It is the joining amount. The customer has to pay
while joining the auctions.

#### About Joining Fee

Whenever a bidder wants to bid on the auction product, he/she first
needs to pay the auction joining fee set by the admin.

this is the case when you want to charge a joining fee from customers
before placing a bid.

it will work only if the configuration is enabled.

**buy_now_price**: It is used to set the buy now price. Also, it will
work only if the configuration is enabled.

**joining_fee_enable**: It is used to enable the joining fee for the
auction. Also, it will work only if the configuration is enabled.

**display_auction_days**: It is used to set display auction days in
terms of days.

the app allows Braintree payment gateway along with autopay
functionality for your bid winner.

**auto_pay_enable**: It is used to enable or disable autopay for the
auction.

#### NOTE:-

It will work only if the configuration for the same is enabled in
configurations.

**sort_by**: Determines the parameter by which the auctions are sorted
in the response.

Here, the available parameters are id, product_name, start_date,
end_date.

**sort_order**: Determines the sorting order.

## Bid Properties

**sort_by**: Determines the parameter by which the bids are sorted in
the response.

Available parameters:

-   id
-   bid_amount,
-   quantity,
-   is_public,
-   first_name,
-   last_name,
-   bid_date.

**sort_order**: Determines the sorting order. 1). asc-> ascending 2).
desc-> descending.

**filter**: Searches only for the auction with the specified 'bid_id',
'bid_amount', and more.

**auction_id**: id of the auction.

**amount**: amount to place bid.

**public**: This refers to the bid place is anonymous or public.

**proxy_bid**: bid place is proxy bid or not.

**email**: email of the customer for which bid should be placed.

Note: Customers should be registered in the merchant store with this
email.

**quantity**: quantity of the product for which bid should be placed.

**bid_id**: id of the bid placed.

## Configuration Properties

**type**: Use this to get configuration by type.

possible types are general_config, auction_config, widget_config,
design_config, label_config, smtp_config.

use multiple options separated by a comma.

## API Endpoints

## TOKEN

**POST** `/api/user/refresh**` --- Create an access token using
the refresh token.

#### Parameters

  --------------------------- -------------------------
  **NAME**                    **DESCRIPTION**
  Token Details json (body)   This is the token data.
  --------------------------- -------------------------

proceed to check **the response to the request**.

#### Response

```json
{
"access_token":"ZWFlZTA4NTExMWJlNTIzOWRmYzIyYTJkMGUxYTBiYWFjOTg4OTEyNzEyZjRjMDE2ODkwNzc1NjQyNGJkYjNlYQ","expires_in":4086400,"token_type":"bearer","scope":null,"refresh_token":"NTI2MzQ5Y2I4YTQzYWE2MzY0ODg4ZGNhMGQ5OTA3NDU0YjRhOTljMGZiMzZhOTcwNGE5NWNlY2E3M2M4MDI1Yg"
}
```
# Auction API Endpoints

**POST** /api/start/{auctionId}.json — Start auction by auction ID

#### Parameters

  ---------------------------------- ----------------------------------
  NAME                               DESCRIPTION

  Start Now json (body)              To start an auction immediately.

  auctionId string (path) *Required Also, an auction ID, a unique
                                     identifier for the auction.
  ---------------------------------- ----------------------------------

#### Response

**Input:**

```json
{
  "start_now": "1"
}
```

**Output:**

```json
{
  "Response": true,
  "Reason": "Auction Started Successfully",
  "Code": 200
}
```
**POST** /api/stop/{auctionId}.json — Stop auction by auction ID

#### Parameters

  ---------------------------------- ----------------------------------
  NAME                               DESCRIPTION

  Force Stop json (body)             To stop the auction forcefully. {
                                     "stop_now":"string" }

  auctionId string (path) *Required Auction ID, a unique identifier
                                     for the auction.
  ---------------------------------- ----------------------------------

#### Response

**Input:**

```json
{
  "stop_now": "1"
}
```

**Output:**

```json
{
  "Response": true,
  "Reason": "Finished",
  "Code": 200
}
```
proceed to get auction by shop property.

**GET** /api/auctions.json — Get Auctions by Shop

No Parameters

#### Response

```json
{ 
            "auctions": 
            {
                "id": "10472",
                "shopify_product_id": "7038970921145",
                "product_handle": "test-webkul",
                "product_title": "Test Webkul",
                "start_date": "2021-10-13 06:31:18",
                "end_date": "2021-10-13 06:21:27",
                "auction_status": "Finished",
                "reserve_price": "100.00",
                "start_price": "5.00",
                "proxy_bidding_on": "1",
                "active": "1",
                "joining_fee_enable": "0",
                "date_add": "2021-10-13 06:12:03",
                "date_upd": "2021-10-13 06:21:27"
            }
        }
```
comes the Add Auction.

**POST** /api/auctions.json — Add Auction

#### Parameters

  ------------------------ ---------------------------------------
  NAME                     DESCRIPTION
  addauction json (body)   This is used to create a new auction.
  ------------------------ ---------------------------------------

#### Response

```json
{
  "Response": true,
  "Reason": "Aution Successfully placed ",
  "Code": 200
}
```
**GET** /api/auctions/{id}.json — Get Auctions by ID

#### Parameters

  --------------------------- ---------------------------
  NAME                        DESCRIPTION
  id string (path) Required   Unique ID to get auction.
  --------------------------- ---------------------------

#### Response

```json
{
  "auction": {
    "id": "10472",
    "shopify_product_id": "7038970921145",
    "product_handle": "test-webkul",
    "product_title": "Test Webkul",
    "start_date": "2021/10/13 06:31:18",
    "end_date": "2021/10/13 06:21:27",
    "auction_status": "Finished",
    "reserve_price": "100.00",
    "start_price": "5.00",
    "proxy_bidding_on": "1",
    "active": "1",
    "joining_fee_enable": "0",
    "date_add": "2021-10-13 06:12:03",
    "date_upd": "2021-10-13 06:21:27",
    "max_bid": null,
    "total_bid": "0",
    "now": "2021/10/13 06:26:07"
  },
  "bid_rule": [
    {
      "bid_from": "0.00",
      "bid_to": "100.00",
      "rate": "10.00"
    }
  ],
  "cust_date": "2021-10-13 06:26:07",
  "booking_product": null
}
```
proceed to **Get Auction**.

**GET** /api/shop/auctions.json — Used to Get Auctions

#### Parameters

  ---------------------------------- ----------------------------------
  NAME                               DESCRIPTION

  sort_by string (query)             Determines the parameter by which
                                     the auctions are sorted in the
                                     response. *Default value*: id

  sort_order string (query)          Then, it determines the sorting
                                     order. 1).asc-> ascending
                                     2).desc-> descending *Default
                                     value*: desc

  filter string (query)              Then, searches for the auction
                                     with the specified 'id',
                                     'product_name', 'start_date',
                                     'end_date', 'current_bid',
                                     'winners', 'purchase_status',
                                     'current_status', 'auction_id_lt'
                                     (auction id less than),
                                     'auction_id_gt' (auction id
                                     greater than). (Example:
                                     {"id":"10001",
                                     "product_name":"White Shirt",
                                     "start_date":"2021-09-22",
                                     "end_date":"2021-09-22",
                                     "current_bid":"1001",
                                     "winners":"Test Customer",
                                     "purchase_status":"winner,
                                     purchased, without_winner,
                                     without_purchase"}). **NOTE**: You
                                     need to provide only JSON data in
                                     this case.
  ---------------------------------- ----------------------------------

#### Responses

```json
{
  "auctions": [
    {
      "id": "10472",
      "shopify_product_id": "7038970921145",
      "product_handle": "test-webkul",
      "product_title": "Test Webkul",
      "start_date": "2021-10-13 12:01:18",
      "end_date": "2021-10-13 11:51:27",
      "bid_date": null,
      "auction_status": "Finished",
      "reserve_price": "100.00",
      "start_price": "5.00",
      "proxy_bidding_on": "1",
      "active": "1",
      "joining_fee_enable": "0",
      "joining_amount": null,
      "bid_winner_id": null,
      "bid_winner_amt": null,
      "is_purchased": null,
      "popcorn_bidding": "1",
      "max_popcorn_bid": "10",
      "extend_deadline_within": {
        "type": "minutes",
        "value": 2
      },
      "extend_deadline_by": {
        "type": "minutes",
        "value": 10
      },
      "date_add": "2021-10-13 06:12:03",
      "max_bid": null,
      "total_bid": null
    }
  ]
}
```
coming to next API:

**GET** /api/shop/auction/{type}.json — Get Products on Auction

#### Parameters

  ---------------------------------- ----------------------------------
  NAME                               DESCRIPTION

  search string (query)              Used for auction search.

  offset string (query)              Then, Offset

  type string (path) -Required       Also, note:- It is the required
                                     field.
  ---------------------------------- ----------------------------------

proceed to check **the response to the request**.

#### Response

```json
{
  "Auctions": [
    {
      "id": "10467",
      "shopify_product_id": "7038970921145",
      "product_handle": "test-webkul",
      "product_title": "Test Webkul",
      "img_src": "https://cdn.shopify.com/s/files/1/0507/5353/6185/products/webkul-logo-accent-sq_a0a57afe-bb1f-4c86-bb46-100f2f7b515a.png?v=1634105284",
      "end_date": "2021-10-30 18:23:02",
      "start_price": "10.00",
      "auc_bid_count": "0",
      "auction_status": "Running",
      "higghest_bidder_n_count": false
    }
  ]
}
```
the API to get running auction.

**GET**
/api/shop/auctions/running_bids_auction/{customerId}.json — Get the
running auction details in which the customer has participated.

#### Parameter

  ---------------------------------- ----------------------------------
  NAME                               DESCRIPTION

  sort_by string (query)             Determines the parameter by which
                                     the auctions are sorted in the
                                     response. *Default value*: id

  sort_order string (query)          determines the sorting order.
                                     *Default value*: desc

  filter string (query)              Searches only for the auction with
                                     the specified 'id',
                                     'product_name', 'start_date',
                                     'end_date', 'auction_id_lt'
                                     (auction id less than),
                                     'auction_id_gt' (auction id
                                     greater than). (Example:
                                     {"id":"10001",
                                     "product_name":"White Shirt",
                                     "start_date":"2021-09-22",
                                     "end_date":"2021-09-22"})
                                     **NOTE**: You need to provide only
                                     JSON data in this case.

  customerId string (path)           Also, It's a unique customer ID.
  -**Required**                      This is the required field.
  ---------------------------------- ----------------------------------

#### Response

```json
{
  "running_bids_auction": [
    {
      "id": "10470",
      "current_bid": "200.00",
      "number_of_bids": "4",
      "shopify_product_id": "7038970921145",
      "product_handle": "test-webkul",
      "product_title": "Test Webkul",
      "product_url": "https://test-webkul.myshopify.com/products/test-digital",
      "img_src": "https://cdn.shopify.com/s/files/1/0507/5353/6185/products/webkul-logo-accent-sq_a0a57afe-bb1f-4c86-bb46-100f2f7b515a.png?v=1634105284",
      "max_bid": "200.00",
      "max_proxy_bid": null,
      "highest_bidder_name": "current",
      "start_date": "2021-10-08 18:23:01",
      "end_date": "2021-10-30 18:23:02"
    }
  ]
}
```
it comes to get auction details.

**GET** /api/shop/auctions/loss_auction/{customerId}.json — Get
auction details in which the customer has participated but is not the
winner.

#### Parameters

  ---------------------------------- ----------------------------------
  NAME                               DESCRIPTION

  sort_by string (query)             Determines the parameter by which
                                     the auctions are sorted in the
                                     response. *Default value* :
                                     end_date

  sort_order string (query)          then, determines the sorting
                                     order. 1).asc-> ascending
                                     2).desc-> descending *Default
                                     value*: desc

  filter string (query)              Searches only for the auction with
                                     the specified 'id',
                                     'product_name', 'start_date',
                                     'end_date', 'auction_id_lt'
                                     (auction id less than),
                                     'auction_id_gt' (auction id
                                     greater than). (Example:
                                     {"id":"10001",
                                     "product_name":"White Shirt",
                                     "start_date":"2021-09-22",
                                     "end_date":"2021-09-22"})
                                     **NOTE**: You need to provide only
                                     JSON data in this case.

  customerId string (path) -Required This is the required field.
  ---------------------------------- ----------------------------------

#### Response

```json
{
"loss_auctions": [
{
"id": "10470",
"current_bid": "65.00",
"number_of_bids": "8",
"shopify_product_id": "7038970921145",
"product_handle": "test-webkul",
"product_title": "Test Webkul",
"max_proxy_bid": null,
"max_bid": "65.00",
"start_date": "2021-10-06 14:10:52",
"end_date": "2021-10-06 14:35:36"
}
]
}
```
comes the winning auction.

#### Winning Auction

**GET** /api/shop/auctions/winning_auction/{customerId}.json — Get
Winning Auctions

#### Parameters

  ---------------------------------- ----------------------------------
  NAME                               DESCRIPTION

  sort_by string (query)             Determines the parameter by which
                                     the auctions are sorted in the
                                     response. *Default value* :
                                     end_date

  sort_order string (query)          Also, determines the sorting
                                     order. *Default value*: desc

  filter string (query)              Searches only for the auction with
                                     the specified 'id',
                                     'product_name', 'is_purchased',
                                     'auction_id_lt' (auction id less
                                     than), 'auction_id_gt' (auction id
                                     greater than). (Example:
                                     {"id":"10001",
                                     "product_name":"White Shirt"})
                                     **NOTE**: You need to provide only
                                     JSON data in this case.

  customerId string (path) -Required This is the required field.
  ---------------------------------- ----------------------------------

#### Response

```json
{
  "winning_auctions": [
    {
      "id": "10470",
      "by_seller": "0",
      "shopify_product_id": "7038970921145",
      "product_handle": "test-webkul",
      "product_title": "Test Webkul",
      "product_url": "https://test-webkul.myshopify.com/products/new-global-product-1",
      "is_purchased": "0",
      "bid_winner_amt": "75.00",
      "quantity": "1",
      "number_of_bids": "8",
      "main_id_variant": "41237567963321",
      "max_proxy_bid": null,
      "max_bid": "75.00",
      "system_generated_bid": null,
      "checkout_url": "https://test-webkul.myshopify.com/cart/41237567963321:1"
    }
  ]
}
```
it comes to get the start bid.

**GET** /api/shop/auction/{auctionId}/start_bid.json — Get Start Bid
of Auctions

#### Parameters

  ---------------------------- -----------------------------
  NAME                         DESCRIPTION
  auctionId * string (path)   This is the required field.
  ---------------------------- -----------------------------

#### Response

```json
{
"start_bid": "10.00"
}
```
comes the BID API.

# Bid API Endpoints

**GET** /api/shop/auction/bidding_list/{auctionId}.json — Get Bidding
List

#### Parameters

  ---------------------------------- ----------------------------------
  **NAME**                           **DESCRIPTION**

  sort_by string (query)             Determines the parameter by which
                                     the bids are sorted in the
                                     response. *Default value*: id

  sort_order string (query)          Also, determines the sorting
                                     order. 1).asc-> ascending
                                     2).desc-> descending *Default
                                     value*: desc

  filter string (query)              Searches only for the auction with
                                     the specified 'bid_id',
                                     'bid_amount', 'quantity',
                                     'is_public', 'first_name',
                                     'last_name', 'bid_date',
                                     'bid_id_lt' (bid id less than),
                                     'bid_id_gt' (bid id greater than).
                                     (Example: {"id":"10001",
                                     "bid_amount":"10", "quantity":"1",
                                     "is_public":"1",
                                     "first_name":"test",
                                     "last_name":"Customer",
                                     "bid_date":"2021-09-22"})
                                     **NOTE**: You need to provide only
                                     JSON data in this case.

  auctionId string (path) -Required  Also, this is the required field.
  ---------------------------------- ----------------------------------

#### Response

```json
{
  "Auction_id": "10470",
  "total_bids": "2",
  "max_bid": "200.00",
  "bids": [
    {
      "id": "93",
      "bid_amount": "200.00",
      "quantity": "1",
      "is_public": "1",
      "first_name": "Demo",
      "last_name": "Webkul1",
      "bid_date": "2021-10-08 19:04:24"
    },
    {
      "id": "92",
      "bid_amount": "100.00",
      "quantity": "1",
      "is_public": "1",
      "first_name": "Demo",
      "last_name": "Webkul2",
      "bid_date": "2021-10-08 19:04:20"
    }
  ]
}
```
**POST** /api/bids.json — Place Bid

#### Parameters

  -------------------- ------------------------------
  NAME                 DESCRIPTION
  addBid json (body)   This is used to place a bid.
  -------------------- ------------------------------

proceed to check the response.

#### Response

```json
{
"Response": true,
"message": "Bid Placed",
"Amount": 800
}
```
**GET** /api/shop/auction/{auctionId}/bid/{bidId}.json — Get Bid
Information

#### Parameters

  ---------------------------------- ----------------------------------
  NAME                               DESCRIPTION

  auctionId string (path) -Required  Also, used as a unique auction ID.
                                     This is the required field.

  bidId * string (path)             This is a unique bid ID. Also,
                                     this is the required field.
  ---------------------------------- ----------------------------------

#### Response

```json
{
  "bid": {
    "id": "93",
    "auction_id": "10470",
    "bid_amount": "200.00",
    "quantity": "1",
    "is_public": "1",
    "auto_bid": "0",
    "system_generated_bid": "0",
    "bid_date": "2021-10-08 19:04:24",
    "customer_id": "4495404761273",
    "email_id": "demowebkul@webkul.com",
    "first_name": "Demo",
    "last_name": "Webkul"
  }
}
```
comes the configuration API part.

# Configuration API Endpoints

**GET** /api/auction/configuration.json — Get configuration by the
shop.

#### Parameters

  ---------------------------------- ----------------------------------
  NAME                               DESCRIPTION

  type string (query)                get Auction by Type. *Default
                                     value* : general_config
  ---------------------------------- ----------------------------------

proceed to check **the response to the request**.

#### Response

**Request:** `type=general_config`

```json
{
  "Configuration": {
    "general_config": [
      {
        "config_label_name": "Email",
        "input_name": "email",
        "value": "demowebkul@webkul.com",
        "extra_field": null
      },
      {
        "config_label_name": "Shop Logo",
        "input_name": "shop_logo",
        "value": "0",
        "extra_field": null
      },
      {
        "config_label_name": "Timezone",
        "input_name": "timezone",
        "value": "234",
        "extra_field": null
      },
      {
        "config_label_name": "Email Notification For Every Bid",
        "input_name": "receive_bid_email",
        "value": "1",
        "extra_field": null
      },
      {
        "config_label_name": "Enable Twilio SMS Gateway",
        "input_name": "twilio_gateway",
        "value": "1",
        "extra_field": null
      },
      {
        "config_label_name": "Enable Bootstrap grids",
        "input_name": "bootstrap_layout",
        "value": "1",
        "extra_field": null
      },
      {
        "config_label_name": "Show Current Bid",
        "input_name": "wk_show_current_bid",
        "value": "1",
        "extra_field": null
      },
      {
        "config_label_name": "Show Highest Bidder",
        "input_name": "wk_show_highest_bidder",
        "value": "0",
        "extra_field": null
      },
      {
        "config_label_name": "Show Bid Count",
        "input_name": "wk_show_bid_count",
        "value": "0",
        "extra_field": null
      },
      {
        "config_label_name": "Show Bid Count (Product Page)",
        "input_name": "wk_show_bid_count_pp",
        "value": "0",
        "extra_field": null
      },
      {
        "config_label_name": "Show Bid Count (Collection Page)",
        "input_name": "wk_show_bid_count_cp",
        "value": "1",
        "extra_field": null
      },
      {
        "config_label_name": "Sort Running Auctions",
        "input_name": "auction_sort",
        "value": "4",
        "extra_field": null
      },
      {
        "config_label_name": "Display Current Bid (Product Page)",
        "input_name": "wk_show_current_bid_pp",
        "value": "1",
        "extra_field": null
      },
      {
        "config_label_name": "Display Current Bid(Collection Page)",
        "input_name": "wk_show_current_bid_cp",
        "value": "0",
        "extra_field": null
      },
{
        "config_label_name": "Display Start Bid",
        "input_name": "wk_show_start_bid",
        "value": "1",
        "extra_field": null
      },
      {
        "config_label_name": "Display Start Bid Until Bid Placed (Product Page)",
        "input_name": "wk_show_start_current_bid_pp",
        "value": "0",
        "extra_field": null
      },
      {
        "config_label_name": "Add Product Type on Shopify Auction Product",
        "input_name": "add_product_type",
        "value": "0",
        "extra_field": null
      },
      {
        "config_label_name": "Show start bid for Upcoming Auction",
        "input_name": "start_bid_upcoming_auction",
        "value": "0",
        "extra_field": null
      },
      {
        "config_label_name": "From Email",
        "input_name": "gen_email_from",
        "value": "demowebkul@webkul.com",
        "extra_field": null
      },
      {
        "config_label_name": "From Name",
        "input_name": "gen_from_name",
        "value": "Demo Webkul",
        "extra_field": null
      },
      {
        "config_label_name": "Include Product Images in Auction Emails",
        "input_name": "show_prod_image",
        "value": "1",
        "extra_field": null
      },
      {
        "config_label_name": "Add \"Sort By\" Option On Auction Listing Page",
        "input_name": "sort_by_customer",
        "value": "1",
        "extra_field": "[\"Alphabetically, Z-A\",\"Current Bid, High to Low\",\"Current Bid, Low to High\",\"Auction Ending Soon\",\"Auction Ending Latest\"]"
      }
     
    ]
  }
}
```
these are the response you will get using the APIs. This was all about
the Auction API.

you can now proceed to create your auction website and enable the
Auction API via the app.

**GET** /api/shop/auction/{auctionId}/bid-rule.json**

Get Auction Bid Rule by auctionId.

**Check the Parameters :**

  ---------------------------------- ----------------------------------
  NAME                               DESCRIPTION

  **auctionId*** (string)           an acution ID, a unique identifier
                                     for the auction
  ---------------------------------- ----------------------------------

Now proceed to check the response of the request:

**RESPONSE**

```json
{
    "bid_rule": [
        {z
            "bid_from": "0.00",
            "bid_to": "100.00",
            "rate": "10.00"
        }
    ]
}
```


## Need Help With Auction API?

Drop your query/suggestion at **support@webkul.com**. Also, you can
create a ticket at [Webkul UV Desk](https://webkul.uvdesk.com/).

**[Know More](/guide/get-started)** about
the Product Auction app.


Thanks for reading !!!
