import blogPosts from '@/data/blogPosts';

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=1200&auto=format&fit=crop';

// Parse date-only strings ("2026-05-15") as local midnight — a bare ISO date
// is treated as UTC and would display one day early west of UTC.
const parsePostDate = (dateStr) => new Date(`${dateStr}T00:00:00`);

const byDateDesc = (a, b) =>
  parsePostDate(b.publication_date) - parsePostDate(a.publication_date);

export function formatPostDate(dateStr, options = { month: 'long', day: 'numeric', year: 'numeric' }) {
  if (!dateStr) return '';
  return parsePostDate(dateStr).toLocaleDateString('en-US', options);
}

export function getAllCategories() {
  return ['All', ...new Set(blogPosts.map((post) => post.category).filter(Boolean))];
}

export function getAllPosts(category) {
  const posts = category && category !== 'All'
    ? blogPosts.filter((post) => post.category === category)
    : [...blogPosts];
  return posts.sort(byDateDesc);
}

export function getRecentPosts(count = 5) {
  return getAllPosts().slice(0, count);
}

export function getPostBySlug(slug) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return null;
  const related = (post.related_posts || [])
    .map((id) => blogPosts.find((p) => p.id === id))
    .filter(Boolean);
  return { ...post, relatedPosts: related };
}

export function getPostImageUrl(post) {
  return post?.featured_image || FALLBACK_IMAGE;
}
