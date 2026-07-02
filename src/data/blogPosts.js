// Blog content lives here now — no database needed.
// To add a post: copy one of the objects below, give it a unique `id` and
// `slug`, and add it to the array. `content` is HTML rendered on the post page.
// `related_posts` is a list of other post ids shown under the article.

const blogPosts = [
  {
    id: 'post-digital-skills',
    title: 'Economic Empowerment Through Digital Skills',
    slug: 'economic-empowerment-digital-skills',
    excerpt:
      'Exploring how digital literacy programs drive economic opportunity across Africa',
    content: `
      <p>Digital literacy has become one of the most reliable pathways to economic opportunity across Africa. From remote work to digital entrepreneurship, the skills gap is the single biggest barrier between talented young people and the global economy.</p>
      <p>This article is placeholder copy — replace it with your full post in <code>src/data/blogPosts.js</code>.</p>
    `,
    author: 'Novola Team',
    publication_date: '2026-05-15',
    category: 'Research',
    is_featured: true,
    featured_image: '',
    related_posts: ['post-fellowship-cohort', 'post-impact-report'],
  },
  {
    id: 'post-fellowship-cohort',
    title: '2026 Fellowship Cohort: Meet Our Inaugural Fellows',
    slug: '2026-fellowship-cohort-inaugural-fellows',
    excerpt:
      'Introducing the talented leaders joining our inaugural fellowship program',
    content: `
      <p>We are proud to introduce the inaugural cohort of our fellowship program — a group of exceptional leaders selected from across the continent.</p>
      <p>This article is placeholder copy — replace it with your full post in <code>src/data/blogPosts.js</code>.</p>
    `,
    author: 'Novola Team',
    publication_date: '2026-05-10',
    category: 'News',
    is_featured: true,
    featured_image: '',
    related_posts: ['post-digital-skills', 'post-governance-reform'],
  },
  {
    id: 'post-impact-report',
    title: 'Impact Report: Career Placements Across Africa',
    slug: 'impact-report-career-placements-africa',
    excerpt:
      'Analyzing the career outcomes and placement success of our program alumni',
    content: `
      <p>Our latest impact report examines the career outcomes of program alumni — where they landed, what they earn, and how their trajectories changed.</p>
      <p>This article is placeholder copy — replace it with your full post in <code>src/data/blogPosts.js</code>.</p>
    `,
    author: 'Novola Team',
    publication_date: '2026-05-05',
    category: 'Impact',
    is_featured: false,
    featured_image: '',
    related_posts: ['post-digital-skills'],
  },
  {
    id: 'post-venture-ecosystem',
    title: 'Venture Ecosystem Development in Sub-Saharan Africa',
    slug: 'venture-ecosystem-development-sub-saharan',
    excerpt:
      'Building sustainable venture ecosystems through strategic partnerships and capacity building',
    content: `
      <p>Sustainable venture ecosystems don't emerge by accident — they are built through strategic partnerships, patient capital, and deliberate capacity building.</p>
      <p>This article is placeholder copy — replace it with your full post in <code>src/data/blogPosts.js</code>.</p>
    `,
    author: 'Novola Team',
    publication_date: '2026-04-28',
    category: 'Research',
    is_featured: false,
    featured_image: '',
    related_posts: ['post-impact-report', 'post-fellowship-cohort'],
  },
  {
    id: 'post-governance-reform',
    title: 'Governance Reform: Policy Wins from Our Alumni',
    slug: 'governance-reform-policy-wins-alumni',
    excerpt:
      'How our alumni are driving governance reform and policy change across the continent',
    content: `
      <p>Policy change is slow, unglamorous work — and our alumni are doing it anyway. This piece highlights recent governance reform wins driven by program graduates.</p>
      <p>This article is placeholder copy — replace it with your full post in <code>src/data/blogPosts.js</code>.</p>
    `,
    author: 'Novola Team',
    publication_date: '2026-04-20',
    category: 'Impact',
    is_featured: false,
    featured_image: '',
    related_posts: ['post-venture-ecosystem'],
  },
];

export default blogPosts;
