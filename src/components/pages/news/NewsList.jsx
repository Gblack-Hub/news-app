import { useEffect, useRef, useState } from 'react';
import NewsCard from '../../../components/pages/news/NewsCard';

export function NewsList() {
    const [page, setPage] = useState(1)
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const loader = useRef(null);

    const handleObserver = (entities) => {
        const target = entities[0]
        if (target.isIntersecting) {
          setPage(_page => _page + 1)
        }
    }

    async function fetchNews(){
        setLoading(true);
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}everything?q=Tesla&page=${page}&pageSize=10&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
            if(!response.ok) setError('Something went wrong while fetching..');
            const data = await response.json();
            console.log(data);
            const updatedNews = news.concat(data?.articles)
            setNews(updatedNews);
            setLoading(false);
        } catch (error) {
            setLoading(false)
            setError(error.message);
        }
    }

    useEffect(() => {
        const options = {
          root: null,
          rootMargin: '20px',
          threshold: 1.0,
        }
        const observer = new IntersectionObserver(handleObserver, options)
        if (loader.current) {
          observer.observe(loader.current)
        }
    }, [])

    useEffect(function(){
        console.log(news.length);
        fetchNews();
    }, [page]);

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
             <div ref={loader} className='text-center'>
                {news.length > 0 &&
                    <div className="spinner-border primary_color" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
            </div>
        </div>
    )
}