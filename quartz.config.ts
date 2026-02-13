import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import { defaultImage } from "./quartz/util/og"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "</>",
    pageTitleSuffix: " | notes & ramblings",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "stefun.space",
    ignorePatterns: ["admin", "private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Serif",
        body: "Noto Serif",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf9fb",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#14042f",
          dark: "#2b2b2b",
          secondary: "#363333",
          tertiary: "#3AA99F",
          highlight: "#faf9fb00",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#19171c",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d7d3de",
          dark: "#ebebec",
          secondary: "#eae3e3",
          tertiary: "#3AA99F",
          highlight: "#19171c00",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" , openLinksInNewTab: true }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [
      Plugin.RemoveDrafts(),
      Plugin.ExplicitPublish(),
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages({
    ],
  },
}

export default config