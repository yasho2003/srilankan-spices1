import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import './Blog.css'; 

const Blog = () => {
    return (
        <div className="blog-page">
            <header className="blog-header">
                <h1>Spicy Blogs</h1>
                <p><strong>Stories, tips, and recipes from the world of spices.</strong></p>
            </header>

            <div className="blog-grid">
                {blogPosts.map(post => (
                    <Link to={`/blog/${post.id}`} key={post.id} className="blog-card-link">
                        <div className="blog-card">
                            <div className="blog-image-wrapper">
                                <img src={post.image} alt={post.title} className="blog-image" />
                            </div>
                            <div className="blog-content">
                                <h2>{post.title}</h2>
                                <p>{post.summary}</p>
                                <span className="read-more">Read Article &rarr;</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Blog;
