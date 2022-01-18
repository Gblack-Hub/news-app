import { useEffect } from 'react';
import { useState } from 'react';
import NewsCard from '../../../components/pages/news/NewsCard';

export function NewsList() {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchNews(){
        setLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}everything?q=Tesla&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
            if(!response.ok) throw new Error('Something went wrong');
            const data = await response.json();
            setNews(data?.articles);
            setLoading(false);
        } catch (error) {
            setLoading(false)
            setError(error.message);
        }
    }

    useEffect(function(){
        fetchNews();
    }, []);

    return (
        <div className='row'>
                {loading && 
                    <div className='text-center'>
                        <div className="spinner-border primary_color" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
                {error && <div className='alert alert-danger'>{error.message ?? "Error while fetching news..."}</div>}
                {news?.map((item, index) => (
                    <NewsCard news={item} key={index} />
                ))}
            </div>
    )
}