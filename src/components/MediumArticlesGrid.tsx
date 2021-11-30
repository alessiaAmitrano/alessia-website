import useGetMediumFeed from '../hooks/useGetMediumFeed';

function MediumArticlesGrid() {
const mediumFeed = useGetMediumFeed();
let articles;
if(mediumFeed) {
  console.log('mediumFeed', mediumFeed);
  articles = mediumFeed.items as any[];
}
return <div>
 {articles && articles.map(
   item => {
     return <div>{item.title}</div>;
   }
   )}
</div>;
}

export default MediumArticlesGrid;
