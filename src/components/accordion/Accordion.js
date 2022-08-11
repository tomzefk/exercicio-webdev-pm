import styles from './Accordion.module.scss'
import AccordionItem from './AccordionItem'

function Accordion({ content }) {
    return (
        <div className={styles.accordion}>
            {content.map((item, i) => (
                <AccordionItem key={i} title={item.title} component={item.component} />
            ))}
        </div>
    );
};

export default Accordion;