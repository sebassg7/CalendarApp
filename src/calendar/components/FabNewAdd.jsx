import { addHours } from 'date-fns';
import { useCalendarStore, useUiStore } from '../../hooks';

const activeNoteBody = {

    title: '',
    notes: '',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: 'fafafa',
    user:{
        _id: '123',
        name: 'Fernando',
    }
};

export const FabNewAdd = () => {

    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const handleClickNew = () => {
        setActiveEvent( activeNoteBody );
        openDateModal();
    };

  return (
    <button
        className='btn btn-primary fab'
        onClick={ handleClickNew }>
            <i
                className='fas fa-plus'></i>
    </button>
  )
};
