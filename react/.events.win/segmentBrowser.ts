import { AnalyticsBrowser } from "@segment/analytics-next";
import { ProductClicked, ProductViewed } from "./types";

const analytics = AnalyticsBrowser.load({
  writeKey: "<write-key>",
});

export const productClicked = (payload: ProductClicked) => {
  analytics.track("product-clicked", payload);
};

export const productViewed = (payload: ProductViewed) => {
  analytics.track("product-viewed", payload);
};
