import IBook from '../components/IBook';

import EyeIcon from '../icons/eye.svg';
import NameIcon from '../icons/name-icon.svg';
import BookIcon from '../icons/book-icon.svg';
import LinkIcon from '../icons/link-icon.svg';
import PPlaneIcon from '../icons/paper-plane-icon.svg';
import SunIcon from '../icons/sun-icon.svg';

import cover from './Cover';
import aboutme from './AboutMe';
import education from './Education';
import projects from './Projects';
import contact from './Contact';
import fun from './Fun';

import { useState } from 'react';

export default function Book() {
    const [curr, setCurr] = useState(0);
    const pages = [
        {
            icon: EyeIcon,
            title: "Cover",
            content: cover(setCurr),
        },
        {
            icon: NameIcon,
            title: "About Me",
            content: aboutme,
        },
        {
            icon: BookIcon,
            title: "Education",
            content: education,
        },
        {
            icon: LinkIcon,
            title: "Projects",
            content: projects,
        },
        {
            icon: PPlaneIcon,
            title: "Contact",
            content: contact,
        },
        {
            icon: SunIcon,
            title: "Fun",
            content: fun,
        },
    ];
    return (
        <IBook curr={curr} setCurr={setCurr} pages={pages}>
        </IBook>
    );
}