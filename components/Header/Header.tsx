import css from './Header.module.css';
import Link from 'next/link';
import {TagsMenu} from '../TagsMenu/TagsMenu';


const Header = () => {
    return (
        <header className={css.header}>
            <Link href="/" aria-label="Home">NoteHub</Link>
            <nav aria-label="Main Navigation">
                <ul className={css.navigation}>
                    <li className={css.navigationItem}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={css.navigationItem}>
                        <TagsMenu />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;