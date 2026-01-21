import { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/posts"
import { SITE_CONFIG } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  // 1. URLs estáticas (Home, Sobre, Blog)
  const routes = [
    "",
    "/blog",
    "/about",
  ].map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // 2. URLs dinâmicas (Posts do Blog)
  const blogRoutes = posts.map((post) => ({
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    lastModified: post.date, // Data do post
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [...routes, ...blogRoutes]
}