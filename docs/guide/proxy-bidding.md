---
title: Proxy Bidding
description: Proxy Bidding
date: 2026-09-08
author: Chirag Tyagi
---

## What is Proxy Bidding?

Proxy Bidding is a concept in which the system automatically bids on your behalf up to the maximum bid amount that you have chosen.

This is simple to make the online auction process much easier and less time-consuming.

_**Proxy Bid** is the **Maximum Bid** and not the **Current Bid.**_

## How Proxy Bidding actually works?

Let's understand this with a scenario:

Suppose an auction starts with $10 as the starting bid. Now, a bidder **A** places a proxy bid of $20.  
So, now the system will automatically start bidding from $10 up to $20 on the behalf of bidder **A**.

Now, if a bidder **B** comes to place a bid, he will see the current bid= $10. Suppose, Bidder **B** places a bid of $15. Then, he will be immediately outbid by bidder **A** with a new minimum bid of $16.

Thus to outbid bidder **A**, some other bidder has to place a bid of $20.01 or more.  

Now, if bidder **B** places a bid of $20 then it will be equivalent to bidder A's maximum bid. But still, bidder **A** will be the highest bidder and the new minimum bid will become $21.

So, this is how the flow of proxy/automatic bidding goes.

## Product Auction: Proxy Bidding Feature

The Admin can enable the functionality of proxy bidding using the [Product Auction](https://webkul.com/blog/shopify-product-auction/) app on his [Shopify](https://www.shopify.com/?ref=webkul) store.

So to configure this, visit Product Auction app from Shopify backend > Configuration > Auction Configuration:

![Auction config](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/07/auctionconfig.webp)

On this page, the Admin can configure whether how winning amount will be calculated if the winner is a proxy bidder.

*   It can be the last bidding amount according to the bidding increment rule.
*   Or it can be equivalent to the highest proxy amount.

![winning amount proxy bid](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/07/winingamountconfig.webp)

After this, save the configuration.

## How to enable proxy bidding features on products?

The Admin can enable the proxy-bidding (automatic bidding) option while creating an auction product.

When the Admin [creates an auction product](https://webkul.com/blog/shopify-product-auction-how-to-add-product/), he can enable/disable the proxy-bidding option on the particular page itself. Refer screenshot:

![automatic bidding](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/07/proxyconfigonauction.webp)

## Allow Customers to Place Normal Bid & Proxy Bid with a Single Button

You can now allow customers to place a normal and a proxy bid using a single button for an auction product.

_If the **bid amount is greater than Bid Price + 2\*(Increment)** then it will be considered as a **proxy bid**._

Let’s take an **example**:-  
If the current bid amount is 100 and the minimum increment allowed is 10, then if the customer places the bid for 120 \[Bid Price + 2\*Increment\] or

more then it will be considered as a proxy bid for the auction, but in case the customer bids less than 120 then it will be added as a normal bid.

You just need to enable the option from the "**Auction Configuration**" menu of the app.

![normal bid & proxy bid](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/07/proxyconf-1.webp)

Enabling this option will let you choose **whether** you want to enable Proxy bidding for all the running & upcoming auctions **OR** only for newly created auctions products.

![proxy bid for auctions](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/07/proxonauctionconf-2.webp)

## StoreFront View

The customer will place both normal & proxy bid with the same button.

![proxy bidding](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/10/Screenshot1.png)

If the bidding value is greater than and equal to Current Bid + 2\*(minimum allowed bid- Current Bid) then, this will be placed as a proxy bid.

The Admin can also configure the mail that will be sent to the proxy bidder if he loses the auction from the Configuration > Mail Configuration section:

![proxy bid mail](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/07/proxymail.webp)

> **Note**: Disable the status if you don't want the proxy bidder to receive an email notification on losing the auction.

_⠀⠀⠀⠀⠀_

## Frontend View

On the frontend, the bidder needs to click on the **Place Automatic Bid** option (refer screenshot below):

![proxy bidding](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/07/05113939/AwesomeScreenshot-Antique-Gramophone-auction-2019-07-05-17-07-89.png)

This action with giving the bidder a pop-up where he needs to enter the proxy-bidding amount and place it (refer screenshot below):

![proxy bidding](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/07/05114358/AwesomeScreenshot-Antique-Gramophone-auction-2019-07-05-17-07-60.png)

### Demo of this feature

Visit the following link to check the frontend demo:

[https://auction-10.myshopify.com/products/antique-gramophone](https://auction-10.myshopify.com/products/antique-gramophone)


### 💡 Need Help?

Drop your query at shopify@webkul.com or [Webkul UV Desk](https://webkul.uvdesk.com/en/).