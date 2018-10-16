import React from 'react';
import styles from './ShowPreview.module.css';
import {Link} from 'react-router-dom';
import cn from 'classnames';

const ShowPreview = ({id, image, name, summary}) => {
  return (
    <div className={cn(styles.container, 't-preview')}>
      <div className={styles.containerTop}>
        <Link className='t-link' to={`/shows/${id}`}>{name}</Link>
        {image && <img src={image.medium} alt={name}/>}
      </div>
      <div dangerouslySetInnerHTML={{__html: summary}}/>
      
    </div>
  );
};
export default ShowPreview;
