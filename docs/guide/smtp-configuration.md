---
title: SMTP Configuration
description: SMTP Configuration
date: 2026-09-08
author: Chirag Tyagi
---

[Product Auction App for Shopify](https://webkul.com/blog/shopify-product-auction/) enables the feature of a bid or auction on your e-commerce website.

Moreover, the admin can enable the bidding feature on products he wants to go for auction and can monitor all the bids happening on the store from the app itself and much more.

With this magical app will enable the feature of bidding and auction of products on your e-commerce website. So don’t wait, install the app & start Bidding.

## Features

*   Admin can create and manage auction for any product.
*   Automatic emails sent to the winner & loser of the bid
*   Admin can also view all the bids and happenings in the notification section.
*   Extremely user-friendly app with separate sections for everything.
*   Admin can also edit the labels for front end
*   The customer can view bidding history
*   Admin can also enable/disable the ‘Add To Cart’ button if the bid amount exceeds the actual price.

In this blog, we are with the [Product Auction app for Shopify](https://webkul.com/blog/shopify-product-auction/): SMTP configuration where you can configure your own SMTP to send emails to the customers from your own mail engine.

![SMTP config](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/06/smtp-section.webp)

Also, clicking on SMTP configuration, you will be redirected to configure your own SMTP by entering all the relevant details

You will have to enter the details of your own SMTP like host, SMTP type SMTP post and other relevant details.

![smtp setup detail](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/06/smtp-config.webp)

## What is SMTP?

SMTP or Simple Mail Transfer Protocol is an application layer (TCP/IP) protocol that handles the process of mail exchange i.e sending & receiving emails.

Please Note:- The admin needs to have an account on any mail server like MailChimp, sendgrid, etc.

To configure this feature, the admin will have their own email IDs in the “Email From” and “Reply-To” section of the Mail SMTP Settings.

## How to Get the SMTP Details?

In order to send the emails from your end, you need to synchronize your Gmail account with the app. For this, you need to add your email account details in the form of the SMTP server.

**NOTE**:- You need to have an account on any SMTP service provider like Mailchimp etc. Or Gmail SMTP will too work if you want to send the emails from your end.

**In case you want to use Gmail SMTP then you can use the following:**

SMTP host: smtp.gmail.com  
SMTP username: Your Gmail Address  
and, SMTP password: 16 character token(see directions below)  
SMTP port number: SSL (465)

(TLS): 587

**TLS/SSL:** These are basically cryptographic protocol which encrypts the data that is exchanged between a web server and a user.

**How to get 16 character token:**

1.Log-in into Gmail with your account  
2\. Navigate to [https://security.google.com/settings/security/apppasswords](https://security.google.com/settings/security/apppasswords)

  
3\. In 'select app' choose 'custom', give it an arbitrary name and press generate  
4\. It will give you 16 chars token.

**NOTE**:- If you have activated the two-way authentication then, please enter the app’s password while configuring SMTP.

Learn More:- [https://support.google.com/mail/?p=BadCredentials](https://support.google.com/mail/?p=BadCredentials)

**Difference between TLS & SSL?**
---------------------------------

There is just a minor difference between TLS and SSL. Both come with different standards but are used to authenticate the transfer of data between servers, systems, applications, and users.

TLS is the upgraded version of SSL as it uses stronger encryption algorithms as compared to SSL and also has the ability to work on various ports.

[**Know more about SMTP**](https://webkul.com/blog/what-is-smtp-and-working-of-the-smtp/)

**Support**

**For any kind of support/Consultancy then please raise a ticket at [http://webkul.uvdesk.com/](http://webkul.uvdesk.com/) or drop an email at support@webkul.com**