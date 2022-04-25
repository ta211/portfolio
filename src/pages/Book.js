import IBook from '../components/IBook';

import EyeIcon from '../icons/eye.svg';
import NameIcon from '../icons/name-icon.svg';
import BookIcon from '../icons/book-icon.svg';
import LinkIcon from '../icons/link-icon.svg';
import PPlaneIcon from '../icons/paper-plane-icon.svg';
import SunIcon from '../icons/sun-icon.svg';

import { useState } from 'react';

export default function Book() {
    const [curr, setCurr] = useState(0);
    const pages = [
        {
            icon: EyeIcon,
            title: "Cover",
            content: <div></div>,
        },
        {
            icon: NameIcon,
            title: "About Me",
            content: <div></div>,
        },
        {
            icon: BookIcon,
            title: "Education",
            content: <div></div>,
        },
        {
            icon: LinkIcon,
            title: "Projects",
            content: <div></div>,
        },
        {
            icon: PPlaneIcon,
            title: "Contact",
            content: <div></div>,
        },
        {
            icon: SunIcon,
            title: "Fun",
            content: <div></div>,
        },
    ];
    return (
        <IBook curr={curr} setCurr={setCurr} pages={pages}>
        </IBook>
    );
}