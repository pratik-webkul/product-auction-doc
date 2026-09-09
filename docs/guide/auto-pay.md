---
title: Autopay
description: Autopay
date: 2026-09-08
author: Chirag Tyagi
---

We’ve improved [Shopify Product Auction](https://store.webkul.com/Shopify-Product-Auction.html) popular app by bringing back favorite features and adding many new ones based on customer feedback.

Here in Shopify Product Auction | Multiple Winner & Auto Payment, the admin can specify a custom value to set the number of winners for the auction.

With Multiple Winners, your auctions can now accommodate and celebrate multiple victors, offering an even more exhilarating shopping experience.

Furthermore, our Autopay feature simplifies and accelerates the payment process, ensuring a smoother and more efficient transaction for both you and your customers.

With Product Auction for Shopify - Multiple Winners & Autopay, the auction features of your Shopify store are enhanced, offering a more engaging and seamless shopping experience for everyone.

## **Multiple Winner Feature**

Introducing the feature of multiple winners in the Product Auction app.

The store owner can enable this feature to declare more than one winner for the auctioned product.

From the Auction configuration, the admin will have to enable this feature.

![declare multiple winner](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/11/multiple-winner.webp)

Once you enable this feature, there will be two options to choose in order to set multiple winners for any particular auction.

They are :  
\*Winners equivalent to the number of products  
Or  
\*Enter any Custom Value for a number of winners.

![declare multiple winner config](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/11/declare-multi-winner.webp)

**Winners equivalent to the number of products  
**In this option, the number of winners will be equal to the quantity of that auctioned product

**Enter any Custom Value for the number of winners.**

The admin can enter a custom value here to set the number of winners for the auction.

The value entered here should be less than or equal to the quantity of the product under auction.

If it exceeds product quantity then the default number of the winner will be equal to the quantity of product under auction.

Note: In both cases, the winners will declare only if the bid of the winners are either equal to or more than the reserve price of the product auctioned.

## AUTO-PAY

We’ve introduced an Auto-pay feature for Shopify Plus merchants using the Shopify [payment gateway](https://webkul.com/payments-integration-services/).

To use this feature, merchants need to go to the Auction app and navigate to Configuration >> Auction Config >> Enable "Selling Plan-Based Auto Payment.

![permission](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/08/perm-1-1200x524.webp)

After setting up, the merchant must specify the minimum amount a bidder needs to pay to authorize auto-pay upon winning.

Please ensure this amount is equal to or greater than Shopify’s minimum payment requirement of $0.50 USD. Consequently, it will meet the necessary criteria.

When entering the amount to charge the bidder at the time of placing a bid,

make sure it meets or exceeds Shopify's minimum payment amount restriction.

Note: _Merchants also need to update their permissions to use this feature. For assistance with permission updates, please contac_t us_._

![Autopay](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/autopayperm-1200x605.webp)

Once the setup is complete, merchants can create auction products. During this process, they must specify the "Autopay Authorize Permission Amount for Placing Bid.

This amount represents the authorization for auto-payment by the bidder and should meet or exceed the minimum amount

configured in the “Selling Plan-Based Auto Payment” settings.

This is an Autopay auction. To place a bid, you need to authorize by placing an order.

Let a winner occur, the winning amount will be automatically deducted. If a win does not occur, the order amount will be refunded.

![Autopay Auction purchase](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/forauction-1200x558.webp)

If your bid exceeds the authorized limit, please submit a new order to adjust the authorization amount so that your bid can be considered.

## Product Subscription for Auto pay

We’re excited to introduce a new **feature app** within our **Auction App** : **Product Subscription for Auto Pay**.  
With this feature, the **auto-payment** is automatically deducted once a customer wins an auction.

In this auto pay feature the user needs to **validate through a free product** by purchasing the product with 0 amount .

Note : This feature will only be available in **Executive** and **Pro** Plan of Auction App.

### **How It Works**

*   **Purchase the Webkul Subscription App:**  
    To use this feature, you first need to install and purchase the [**Webkul Product Subscription App**.](https://apps.shopify.com/webkul-subscription-app)
*   **Enable the Feature App:**  
    Once the subscription app is set up, enable the **“Product Subscription for Auto Pay”** feature from your Auction App.  
    To enable this Click on **Three dots >> Feature app >>** Enable the **Product Subscription for Auto Pay** .

![product subscription ap](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/11/product-subc-app.webp)

*   **Configuration:**  
    In the configuration settings, select **“Auto Pay with Product Subscription”** under the Auto Payment options.

![auto pay with product subscription](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/11/product-subc-config-1.webp)

*   **Check if the auto payment auction product is created or not  
    **The app will create a product named **“Autopay Auction”** make sure it’s **available in the Sales Channel** and **not in draft** mode.  
    If the Product is not created automatically in that case **Contact us .**

![autopayproduct](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/10/autopayproduct-1200x742.webp)

### **Front-End Flow**

*   When a customer places a bid, a **pop-up** will appear prompting them to **validate through a free (0-amount) product**. As this will save the card details or payment details of the customer .

![Popup](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/10/popup-1200x742.webp)

*   After successful validation, the customer can place bids as usual.
*   Once the auction ends and a **winner is declared**, the **payment will be processed automatically** through the subscription setup.

The customer will authorize their payment method by purchasing a **free product** (one-time only).

This step securely saves their payment details. Once the auction ends, if the customer wins,

the payment will be **automatically deducted** from the saved payment method, and the **purchase status will be updated** within the auction automatically.

![auction purchase status](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/11/auction-detail-page.webp)

This feature offers a seamless, secure, and automated payment experience for auction participants, ensuring faster checkout and enhanced user convenience.

## Custom Shipping Profile

If you want to set up shipping for the auto-pay winning product, you first need to add the shipping methods and rates on the Shopify end.

After that, enable and configure the ‘Custom Shipping Profile’ option in the Product Auction app.

To enable the ‘Custom Shipping Profile’ configuration, navigate to the Product Auction App → Configuration → Auction Config.

![custom shipping profile](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/11/custom-shipping-profile.webp)

### Demo

*   [https://auction-10.myshopify.com/pages/demo](https://auction-10.myshopify.com/pages/demo)

### **support**

For any technical assistance, please raise a ticket at [http://webkul.uvdesk.com/](http://webkul.uvdesk.com/).

If you have any questions, contact us at **support@webkul.com**.