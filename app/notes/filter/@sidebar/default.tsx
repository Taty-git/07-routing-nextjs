import css from './SidebarNotes.module.css';
import React from 'react';
import Link from 'next/link';

const NotesSidebar = () => {
  const tagsList = ["All", "Work", "Personal", "Meeting", "Shopping", "Todo"];

  return (
    <ul className={css.menuList}>
      {/* список тегів */}
      {tagsList.map((tag, index) => {
        return (
          <li key={index} className={css.menuItem}>
            <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
              {tag}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NotesSidebar;