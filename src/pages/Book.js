import IBook from '../components/IBook';
import IPage from '../components/IPage';

import Cover from './Cover';
import AboutMe from './AboutMe';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Fun from './Fun';

export default function Book() {
    return (
        <IBook curr={0}>
        </IBook>
    );
}