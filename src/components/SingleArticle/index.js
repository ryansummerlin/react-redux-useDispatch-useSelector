import './SingleArticle.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SingleArticle = () => {
  const { id } = useParams();
  const articles = useSelector(state => state.articleState.entries);
  const article = articles.find(article => article.id === id);
  
  return (
    <div className='singleArticle'>
      <h1>{article.title}</h1>
      <img
        src={article.imageUrl}
        alt={article.title}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex esse
        laboriosam officia accusantium veritatis fugiat exercitationem vero
        autem nihil aliquid ullam recusandae, quis odit odio voluptates
        explicabo nobis! Consequuntur, aliquam?
      </p>
    </div>
  );
};

export default SingleArticle;
