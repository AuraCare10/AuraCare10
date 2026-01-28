
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOGS } from '../constants';

const BlogListing: React.FC = () => {
  return (
    <div className="pt-40 pb-32 container mx-auto px-6">
      <div className="text-center mb-20">
        <h1 className="text-6xl font-serif font-bold">The Beauty Dispatch</h1>
        <p className="text-slate-400 mt-4 italic font-light tracking-widest">Rituals, Knowledge, and Essences.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {BLOGS.map(blog => (
          <Link key={blog.id} to={`/blog/${blog.id}`} className="group space-y-6">
            <div className="aspect-video rounded-[3rem] overflow-hidden shadow-xl">
              <img src={blog.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
            </div>
            <div className="space-y-4">
              <span className="text-[10px] text-[#b89150] font-black uppercase tracking-widest">{blog.date}</span>
              <h3 className="text-3xl font-serif font-bold group-hover:text-[#b89150] transition-colors">{blog.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 italic">{blog.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogListing;
