import css from './NotesPage.module.css';
import NotesClient from './Notes.client';
import {Note} from '../../../../types/note';
import {fetchNotes} from '../../../../lib/api';

interface NotesHttpResponse {
    notes: Note[];
    totalPages: number;
}

type Props = {
    params: {slug?: string[]};
};

const Notes = async ({ params }: Props) => {
    const slugArray = params?.slug ?? [];
    const category = slugArray[0] === 'All' || !slugArray[0] ? '' : slugArray[0];

    const response: NotesHttpResponse = await fetchNotes('', 1, category);

    return (
        <section className={css.app}>
            <NotesClient initialValue={response} tag={category} />
        </section>
    );
};

export default Notes;