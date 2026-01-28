
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOGS } from '../constants';
import { Blog } from '../types';

const BlogDetails: React.FC = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const found = BLOGS.find(b => b.id === id);
    if (found) setBlog(found);
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) return <div className="pt-40 text-center font-serif text-2xl">Article lost in archives...</div>;

  return (
    <div className="pt-40 pb-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/blog" className="text-[10px] uppercase tracking-[0.4em] font-black text-[#b89150] mb-10 inline-block hover:translate-x-2 transition-transform">← Return to Dispatch</Link>
        
        <div className="space-y-8 mb-16">
          <span className="bg-[#b89150]/10 text-[#b89150] px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">{blog.date}</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#1a1a1a] leading-tight">{blog.title}</h1>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-serif italic text-[#b89150]">A</div>
            <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Authored by {blog.author}</span>
          </div>
        </div>

        <div className="aspect-video rounded-[4rem] overflow-hidden shadow-2xl mb-16">
          <img src={blog.image} className="w-full h-full object-cover" alt="" />
        </div>

        <div className="prose prose-xl prose-slate mx-auto">
          <p className="text-xl text-slate-600 leading-relaxed font-light italic mb-10">{blog.excerpt}</p>
          <div className="text-slate-500 leading-relaxed space-y-6">
            <p>{blog.content}</p>
            <p>At AuraCare House, we believe that beauty is not merely skin deep. It is a reflection of the sanctuary you build within. Our essences are curated to complement your inner harmony.</p>
            <h3 className="text-3xl font-serif font-bold text-[#1a1a1a] pt-10">The Ritual of Restoration</h3>
            <p>Consistency is the primary ingredient in any ritual. Whether you are applying our Advanced Glow Serum or simply taking a moment to breathe, the intention matters most.</p>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-slate-100 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Share:</span>
            {['FB', 'TW', 'IG'].map(s => <button key={s} className="text-[10px] font-black text-[#b89150]">{s}</button>)}
          </div>
          <Link to="/shop" className="bg-[#1a1a1a] text-white px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest">Shop Featured Essences</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
