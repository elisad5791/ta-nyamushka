import classnames from 'classnames';
import { useState } from 'react';
import './css/Card.css';

function Card({ product }) {
  const {
    title, description, weight, comment, isAvailable,
  } = product;
  const [isSelected, setSelected] = useState(false);

  const innerClass = classnames('card__inner', {
    'card__inner--muted': !isAvailable,
    'card__inner--selected': isSelected,
  });
  const wrapperClass = classnames('card__wrapper', {
    'card__wrapper--muted': !isAvailable,
  });

  const handleClick = () => {
    if (isAvailable) {
      setSelected((state) => !state);
    }
  };

  return (
    <article className="card">
      <div className={wrapperClass} onClick={handleClick}>
        <div className={innerClass}>
          <div className="card__text">
            <p className="card__subtitle">Сказочное заморское явство</p>
            <p className="card__title">Нямушка</p>
            <h2 className="card__type">{title}</h2>
            <p className="card__description">
              {description.map((str) => <p>{str}</p>)}
            </p>
          </div>
          <div className="card__circle">
            <p className="card__number">{weight}</p>
            <p className="card__kg">кг</p>
          </div>
        </div>
      </div>
      <p className="card__comment">
        {isAvailable && !isSelected
          && (
          <span>
            Чего сидишь? Порадуй котэ,
            <button className="card__buy" onClick={handleClick}>купи.</button>
          </span>
          )}
        {isAvailable && isSelected
          && <span>{comment}</span>}
        {!isAvailable
          && (
          <span className="card__comment-disabled">
            Печалька,
            {title}
            {' '}
            закончился.
          </span>
          )}
      </p>
    </article>
  );
}

export default Card;
