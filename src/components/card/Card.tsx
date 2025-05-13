import './styles.css';
import type {CardSectionProps} from './type';

const CardSection = (props: CardSectionProps) => {
  return (
    <>
      <h2 id={props.id}>{props.heading}</h2>
      <section className="card-grid">
        {props.items.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.title}</h3>
            {item.subtitle && <p className="date">{item.subtitle}</p>}
            {item.technology && <small>{item.technology}</small>}
            <p>
              {item.description.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            {item.url && (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.url}
              </a>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default CardSection;
