// ./sanity/lib/client.ts

import { createClient } from "@sanity/client/stega";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  // These settings will be overridden in
  // ./sanity/lib/store.ts when draftMode is enabled
  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: "/studio",
    logger: console,
    filter: ({
      sourcePath,
      sourceDocument,
      resultPath,
      value,
      filterDefault,
    }) => {
      console.log("filter", {
        sourcePath,
        sourceDocument,
        resultPath,
        value,
        filterDefault,
      });

      // if (sourcePath === 'slug.current') {
      //   return value;
      // }

      if (resultPath.includes("pt")) {
        return true;
      }

      return filterDefault({
        sourcePath,
        sourceDocument,
        resultPath,
        value,
        filterDefault,
      });
    },
  },
});
