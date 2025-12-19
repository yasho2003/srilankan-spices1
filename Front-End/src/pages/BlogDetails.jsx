import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import './Blog.css';

const BlogDetails = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id));

    if (!post) {
        return (
            <div className="blog-details-page">
                <div className="blog-details-container" style={{ textAlign: 'center', marginTop: '100px' }}>
                    <h2>Blog post not found</h2>
                    <Link to="/blog" className="back-link">Return to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-details-page">
            <div className="blog-details-container">
                <Link to="/blog" className="back-link">&larr; Back to Blog</Link>

                <h1 className="blog-post-title">{post.title}</h1>

                <img src={post.image} alt={post.title} className="blog-hero-image" />

                <div
                    className="blog-post-content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
        </div>
    );
};

export default BlogDetails;
