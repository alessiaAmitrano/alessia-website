import { useState, useEffect } from 'react';

const mediumRssUrl =  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alessia.amitranobo';

function useGetMediumFeed(): any {
  const [articles, setArticles] = useState({});

  useEffect(() => {
    fetch(mediumRssUrl).then(response => response.json()).then(result => setArticles(result))
  }, []);

  return articles;
}

export default useGetMediumFeed;
