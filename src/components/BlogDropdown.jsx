import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight } from 'lucide-react';
import { getRecentPosts, getPostImageUrl, formatPostDate, FALLBACK_POST_IMAGE } from '@/lib/blog';

const BlogDropdown = () => {
  const posts = getRecentPosts(5);

  return (
    <div className="absolute top-full left-1/2 -translate-x-[55%] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-[26rem]">
      <div className="bg-popover border border-border rounded-2xl shadow-xl overflow-hidden">
        <div className="px-5 py-4 bg-muted/50 border-b border-border flex justify-between items-center">
          <span className="font-semibold text-sm text-foreground">Latest Insights</span>
          <Link to="/blog" className="text-xs text-primary hover:underline font-medium flex items-center">
            View all <ChevronRight className="h-3 w-3 ml-1" />
          </Link>
        </div>
        <div className="p-2 flex flex-col">
          {posts.length > 0 ? (
            posts.map((post) => {
              const formattedDate = formatPostDate(post.publication_date, {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              });

              return (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-accent transition-colors group/item"
                >
                  <div className="h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                    <img
                      src={getPostImageUrl(post)}
                      alt=""
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = FALLBACK_POST_IMAGE;
                      }}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover/item:scale-105"
                    />
                  </div>
                  <div className="flex min-w-0 flex-col">
                    {post.category && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-primary mb-0.5">
                        {post.category}
                      </span>
                    )}
                    <span className="text-sm font-medium leading-snug text-foreground line-clamp-2">
                      {post.title}
                    </span>
                    <span className="mt-1 flex items-center text-xs text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      {formattedDate}
                    </span>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="p-4 text-center text-sm text-muted-foreground">
              No recent posts.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDropdown;
