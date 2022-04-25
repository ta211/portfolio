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

function Page(icon, title, content) {
    this.icon = icon;
    this.title = title;
    this.content = content;
}

export default function Book() {
    const [curr, setCurr] = useState(0);
    const pages = [
        new Page(EyeIcon, "Cover", cover(setCurr)),
        new Page(NameIcon, "About Me", aboutme),
        new Page(BookIcon, "Education", education),
        new Page(LinkIcon, "Projects", projects),
        new Page(PPlaneIcon, "Contact", contact),
        new Page(SunIcon, "Fun", fun)
    ];
    return (
        <IBook curr={curr} setCurr={setCurr} pages={pages}>
        </IBook>
    );
}