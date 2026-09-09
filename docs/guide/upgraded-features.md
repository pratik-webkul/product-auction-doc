---
title: Upgraded Features
description: Upgraded Features
date: 2026-09-08
author: Chirag Tyagi
---

# Upgraded Features

The Product Auction App includes several upgraded features that provide additional flexibility for managing auctions, bidders, payments, notifications, and storefront functionality.

## Product Subscription for Auto Pay

We’re excited to introduce a new **feature app** within our **Auction App**: **Product Subscription for Auto Pay**.

With this feature, the **auto-payment** is automatically deducted once a customer wins an auction.

In this auto pay feature the user needs to **validate through a free product** by purchasing the product with 0 amount.

> **Note:** This feature will only be available in **Executive** and **Pro** Plan of Auction App.

### How It Works

**Purchase the Webkul Subscription App:**

To use this feature, you first need to install and purchase the **Webkul Product Subscription App**.

**Enable the Feature App:**

Once the subscription app is set up, enable the **“Product Subscription for Auto Pay”** feature from your Auction App.

To enable this click on **Three dots >> Feature app >> Enable the Product Subscription for Auto Pay**.

![Autopay](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/auctionnew13.webp)

**Configuration:**

In the configuration settings, select **“Auto Pay with Product Subscription”** under the Auto Payment options.

![autopayconfig](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/auctionnew12.webp)

**Check if the auto payment auction product is created or not:**

The app will create a product named **“Autopay Auction”**. Make sure it is **available in the Sales Channel** and **not in draft** mode.

If the product is not created automatically, **contact us**.

![autopayproduct](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/10/autopayproduct-1200x742.webp)

### Front-End Flow

When a customer places a bid, a **pop-up** will appear prompting them to **validate through a free (0-amount) product**. This saves the card details or payment details of the customer.

![Popup](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/10/popup-1200x742.webp)

After successful validation, the customer can place bids as usual.

Once the auction ends and a **winner is declared**, the **payment will be processed automatically** through the subscription setup.

The customer will authorize their payment method by purchasing a **free product** one time only.

This step securely saves their payment details. Once the auction ends, if the customer wins, the payment will be **automatically deducted** from the saved payment method, and the **purchase status will be updated** within the auction automatically.

![Status](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/10/status-1200x513.webp)

> **Note:** Currently, this feature does not work with Seller Auctions/Marketplace.
>
> It will also not function when the winner is canceled and redeclared. Support for these cases will be added in a future update.

## Reconcile Winner

The **Reconcile Winner** feature helps admins identify auctions where winners have not been declared yet.

Admin will be able to declare all those winners in just a click by using this feature.

> **Note:**
>
> - The admin can only declare the winner of the past 90 days (3 months).
> - This feature only works in the case of **Approve Winner Automatically**.

### Configuration of Reconcile Winner

Firstly, the admin needs to enable **Approve Winner Automatically Once The Bid Is Over** from:

**Configuration → Auction Config → Approve Winner Automatically Once The Bid Is Over**

![Reconcile Winner Configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/auctionnew6.webp)

Once the admin enables the configuration, a tab will be visible on the auctions tab page.

![Reconcile Winner Tab](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/auctionnew5.webp)

Admin can apply a date-wise filter to get the previous winner list who has not been declared yet.

Click on **Proceed** to view the winner list.

![Winner List](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/auctionnew4.webp)

The auction IDs will be displayed where the winner has not been declared.

![Auction IDs](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/06/5-3-1200x486.png)

## Send Purchase Reminder

The admin can send a reminder to the winner to complete the purchase and configure the number of days for sending the reminder.

For example, if the admin selects **1** in days, the reminder will be sent after 1 day of the auction ending. If the admin selects **2**, the reminder will be sent after 2 days of the auction ending.

## Purchase Reminder Time Slots

With this feature, the admin can set time intervals at which purchase reminders will be sent to auction winners before the winner is canceled.

For example, you can choose to send reminders at **1, 2, and 5 hours** before winner cancellation.

> **Note:** Admin can add a maximum of **5 time interval slots** for purchase reminders.

Admin needs to follow the path:

**Configuration → Auction Configuration → Time slots for Purchase Reminder → Enable → Set the hour/hours → Add → Save**

![Purchase Reminder Time Slots](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/auctionnew3.webp)

### Configuration of Send Purchase Reminder

Admin needs to follow the path:

**Configuration → Auction Config → Send Purchase Reminder**

![Send Purchase Reminder](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/auctionnew2.webp)

## Enable Bootstrap Grids

The app provides an option to enable or disable the Bootstrap Grid according to the theme requirements.

From the **Configuration** section, you can enable or disable this feature.

![Enable Bootstrap Grids](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/auctioinnew09.webp)

## Enable Twilio SMS Gateway

This section allows you to configure Twilio settings, including SMS contents.

The Twilio Gateway can be integrated with the app to send predefined messages to customers/bidders.

You must have your own Twilio account. The messages and charges will be managed according to Twilio charges.

First, enable the Twilio option from the configuration.

![Twilio Configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/auctioinnew10.webp)

Once enabled, visit the **Twilio SMS Gateway** section and configure Twilio by entering the API KEY.

> **Note:** The API key can be obtained from your own Twilio account.

![Twilio SMS Gateway](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/auctionnewthwm2.webp)

## Front-End Auction Flow

Auctions are displayed in two different tabs:

- **Running Auctions**
- **Upcoming Auctions**

![Auction Listing](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/10/08105344/AwesomeScreenshot-Products-on-Auction-auction-2019-07-08-16-07-95.png)

To participate in an auction, the customer can select the auction and start bidding.

## Include Product Images in Auction Emails

You can send product images in the product auction emails sent via the app.

To enable this feature, visit:

**Product Auction App → Configurations → General Configuration**

![Include Product Images](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/auctioinnew08.webp)

## Edit Bid

The merchant can edit a bid when a winner has been manually declared.

![Edit Bid](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/auctioinnew07.webp)

## Edit/Delete Current Proxy Bid

You can edit or delete the current proxy bid applied to an auction.

![Edit/Delete Proxy Bid](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/auctionnewthwm1.webp)

## Sorting Feature on Auction Listing Page

The **Sorting** feature allows customers to sort products listed on the auction page.

To enable this feature, visit:

**App Admin Panel → General Configuration**

Enable the required sorting options.

![Sorting Configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/auctioinnew03.webp)

Once enabled, customers can sort auctions by:

- Alphabet
- Current Bid
- Auction Ending Soon
- Latest

![Sort By](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/08/Screenshot-from-2021-08-11-18-18-41-1200x569.png)

## Pagination for Products Listed on the Auction Page

The pagination option allows you to control the appearance of products listed on the auction page.

To enable it, visit:

**App Admin Panel → Auction Configuration**

Enable **Pagination for products on auction page** and save the configuration.

![Pagination Configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/auctioinnew02.webp)

After enabling the configuration, products will be listed using pagination.

For example, **12 products** can be listed on every page. When pagination is disabled, products will be displayed using **infinite scroll**.

![Auction Pagination](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/12/screenshot-auction-10.myshopify.com-2021.12.30-16_24_09-622x1024.png)

## Edit Winning Bid

The merchant can modify the winning bid after the auction closes but before the winner purchases the item.

To enable this feature, visit:

**App Admin Panel → Auction Configuration → Edit winning bid → Save**

![Edit Winning Bid Configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/auctionnew01.webp)

After enabling the configuration, the admin can edit the winning bid from:

**Auction App → Auctions → View**

![Edit Winning Bid](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/auctionnewtheme03.webp)

Click the **Edit** button. A window will appear where you can enter the updated bid and a message for the customer.

> **Note:** You can only enter a bid greater than the existing winning bid.

![Update Winning Bid](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/auctionnewtheme02.webp)

After submission, the new bid will be updated as the final bid.

You can also view the history of edited bids by clicking the **View** button.

![Winning Bid History](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/auctionnewtheme01.webp)

## Send Notification to Highest Bidder When Reserve Price Is Not Met

This feature allows the admin to send an email notification to the highest bidder if the reserve price has not been met and the auction is close to ending.

The merchant can set a specific time frame for sending the email notification before the auction ends. This can help reduce the number of failed auctions.

### Set the Time Frame

Merchants can configure the time frame before which the highest bidder will receive an email.

Navigate to:

**Configuration → Auction Configuration → Mail To Higher Bidder**

![Mail To Higher Bidder](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/alphaauction9.webp)

### Configure Highest Bidder Mail

Admin can modify the content of the email sent to the highest bidder.

> **Note:** Do not change the variables, as every variable retrieves its corresponding values.

To modify the mail template, navigate to:

**Configuration → Mail Configuration → Highest Bidder Mail template**

![Highest Bidder Mail](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/alphaauction8.webp)

## Bidding Username

The admin can allow bidders to add a username while bidding on an auction product.

Navigate to:

**Configuration → Auction Configuration → Bidding Username**

![Bidding Username](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/alphaauction7.webp)

An additional field will be added to the auction product where bidders can enter their usernames.

Bidders can also update their username from their respective account pages.

![Bidder Username](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/screenshot_1684239795714.png)

### Banned Username Keywords

Admin can add banned keywords that bidders cannot use.

If a bidder tries to use a prohibited keyword, an error message will be displayed asking them to use another username.

![Banned Username Keywords](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/alphaauction6.webp)

## Capped Amount for Bidders

The admin can set a capped amount for bidders, which limits the maximum bid a bidder can place.

Bidders need to be approved if they wish to bid above this capped amount.

To configure the capped amount, navigate to:

**App Admin Panel → Auction Configuration → Capped amount for Bidders**

![Capped Amount for Bidders](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/alphaauction5.webp)

> **Note:** The feature will not be functional if **0** is set as the capped amount.

### Storefront Flow

If the admin sets the capped amount to **Rs. 200**, the bidder cannot place a bid greater than Rs. 200.

If the bidder tries to place a higher bid, a popup with an alert notification will be displayed.

![Capped Amount Alert](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/06/image4-1200x583.webp)

Until the admin approves the bidder, the bidder will not be able to place a bid above the capped amount.

![Bidder Approval](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/06/im1-1-1200x633.webp)

The admin will receive an email regarding the bidder attempting to bid above the capped amount.

![Capped Amount Email](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/06/image3-1200x448.webp)

The admin can navigate to:

**Auction App → Bidders**

to approve or reject the bidder.

![Approve Bidder](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/alphaauction4.webp)

Once approved, the bidder will be able to place a bid above the capped amount.

The bidder will also receive a bidder approval email.

![Bidder Approval Mail](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/06/te2-1200x487.webp)

The admin can edit the email template from:

**Auction App → Configuration → Mail Configuration**

![Bidder Approval Mail Configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/06/tess-1200x651.webp)

## Start Missed Pending Auctions

The **Start Missed Pending Auctions** feature allows the admin to start auctions whose scheduled start time has already passed.

If an auction does not start after its scheduled time or multiple auctions have past start dates, the admin can use this option to start them.

Navigate to:

**Product Auction App → Auction**

Select the missed pending auctions and click:

**Bulk Action → Start Auctions**

![Start Missed Pending Auctions](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/alphaauction1.webp)

## Enable Multi Language

The **Enable Multi Language** feature allows the admin to change the language of the Auction app.

![Enable Multi Language](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/alphaauction3.webp)

### Configuration

Navigate to:

**Auction App → Configuration Menu → Auction Configurations**

Enable the **Enable Multi Language** option.

![Select Language](https://cdnblog.webkul.com/blog/wp-content/uploads/2026/08/alphaauction2.webp)

Once activated, a **Select Language** option will appear at the bottom right corner, where you can choose the language for the Auction app.