---
title: Code Integration
description: Code Integration
date: 2026-09-08
author: Chirag Tyagi
---


[Product Auction App](/guide/get-started) for Shopify enables the feature of bid or auction on your eCommerce website.

With this, the admin can enable the bidding feature on products he wants to go for auction and can monitor all the bids happening on the store from the app itself and much more.

Moreover, to get the auction tab displayed on the front end and to configure it on your store, few codes are required to be pasted in the .liquid file of your store.

After installation, you are required to configure the app by pasting the below codes given in the configuration section of the app.

We will now see the detailed description of how and which code to paste to where:

![Code Paste](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/auction-code.webp)

![Code pasting12](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/auction-code2.webp)

![code pasting2](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/auction-code3.webp)

![auto inject code](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/auction-code4.webp)

![display timer](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/auction-code5.webp)

![paste the codes](https://cdnblog.webkul.com/blog/wp-content/uploads/2016/03/auction-code6.webp)

So let's go one by one:

In another tab open the online store section of your Shopify store >>> Click on themes >>> and from the dotted menu button on the top right choose 'edit HTML/CSS option'

Now you are here at the HTML/CSS page.

## **For product.liquid**

```liquid
<div id="wk-auction" prod-id="{{ product.id }}" cust-id="{{ customer.id }}"></div>
```
Paste this code in the location where you want to position or display the auction window.

For example i want it to be above add to cart button, so i will paste this code just above the div of add to cart. (ref this screenshot)

![screenshot_12](http://cdnblog.webkul.com/blog/wp-content/uploads/2016/11/Screenshot_12.png)

And paste the code at the very beginning and end respectively in the product.liquid file.

![screenshot_9](http://cdnblog.webkul.com/blog/wp-content/uploads/2016/11/Screenshot_9.png)

![screenshot_10](http://cdnblog.webkul.com/blog/wp-content/uploads/2016/11/Screenshot_10.png)

**For Search-result-grid.liquid(snippets) and product-grid-item.liquid(snippets)**

\*\*\*\*And similarly (as shown in the image right above ) paste the respective codes for **search-result-grid.liquid(snippets)** and **product-grid-item.liquid(snippets).**

Now most noteworthy fact is that there may happen to be a possibility where you do not find these two .liquid files on the basis of theme chosen by you,

As a result, you may find it difficult to look for the .liquid file responsible for listing of collections/products or

you can also [contact us](http://webkul.uvdesk.com) and let us know, we will do it for you.**For Customers.account/liquid**

Now, coming on to customers.account/liquid file, paste this code to display bids on my account page of customer/bidder.

You can paste this code where ever you wish to display my bids button on my account page.
```liquid
<div id="wk-auction" cust-id="{{ customer.id }}"></div>
```
![screenshot_11](http://cdnblog.webkul.com/blog/wp-content/uploads/2016/11/Screenshot_11.png)

### Shopify Product Auction: Demo Details

*   [https://auction-10.myshopify.com/pages/demo](https://auction-10.myshopify.com/pages/demo)

### Support

For any kind of technical assistance, just raise a ticket at [http://webkul.uvdesk.com/](http://webkul.uvdesk.com/) and for any doubt contact us  at **support@webkul.com**