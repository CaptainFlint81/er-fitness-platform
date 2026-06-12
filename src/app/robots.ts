import type { MetadataRoute } from "next";

import { siteMetadataBase } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: new URL("/sitemap.xml", siteMetadataBase).toString(),
    host: siteMetadataBase.origin
  };
}
