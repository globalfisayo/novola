import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ChevronRight } from 'lucide-react';
import { getRecentPosts, formatPostDate } from '@/lib/blog';

const BlogDropdown = () => {
  const posts = getRecentPosts(5);

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 w-80">
      <div className="bg-popover border border-border rounded-xl shadow-lg overflow-hidden">
        <div className="p-4 bg-muted/50 border-b border-border flex justify-between items-center">
          <span className="font-semibold text-sm text-foreground">Latest Insights</span>
          <Link to="/blog" className="text-xs text-primary hover:underline font-medium flex items-center">
            View all <ChevronRight className="h-3 w-3 ml-1" />
          </Link>
        </div>
        <div className="p-2 flex flex-col">
          {posts.length > 0 ? (
            posts.map(post => {
              const formattedDate = formatPostDate(post.publication_date, {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              });
              
              return (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.slug}`}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <FileText className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium leading-tight text-foreground line-clamp-2">
                      {post.title}
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">
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