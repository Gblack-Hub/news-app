import { useEffect, useRef, useState } from 'react';
import NewsCard from '../../../components/pages/news/NewsCard';
import Spinner from '../../../widgets/Spinner';

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
        async function fetchNews(){
            setLoading(true);
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}everything?q=Tesla&page=${page}&pageSize=10&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
                if(!response.ok) setError('Something went wrong while fetching..');
                const data = await response.json();
                console.log(data, news);
                const updatedNews = news?.concat(data?.articles)
                setNews(updatedNews);
                setLoading(false);
            } catch (error) {
                console.log(error)
                setLoading(false)
                setError(error.message);
            }
        }
        fetchNews();
        // eslint-disable-next-line
    }, [page]);

    return (
        <div className='row'>
            {loading && renderLoadingResponse()
            }
            {error && renderErrorResponse(error)}
            {renderNews()}
             <div ref={loader} className='text-center'>
                { news?.length > 0 && <Spinner /> }
            </div>
        </div>
    )
}

function renderNews(news){
    return news?.map((item, index) => (
        <NewsCard news={item} key={index} />
    ))
}

function renderLoadingResponse(){
    return <div className='text-center'>
        <div className="spinner-border primary_color" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
}

function renderErrorResponse(error){
    return <div className='alert alert-danger'>{error.message ?? "Error while fetching news..."}</div>;
}