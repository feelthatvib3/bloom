import { XMarkIcon } from '@heroicons/react/24/solid';
import { RootState, useAppDispatch, useAppSelector } from '../../store';
import { closeModal } from '../../store/slices/modalSlice';
import { useEffect } from 'react';

export default function Modal() {
    const dispatch = useAppDispatch();
    const { isOpened, title, children } = useAppSelector(
        (state: RootState) => state.modal,
    );

    if (isOpened) {
        document.body.classList.add('overflow-hidden');
    }

    const handleCloseModal = () => {
        dispatch(closeModal());
        document.body.classList.remove('overflow-hidden');
    };
    return (
        <div
            onClick={handleCloseModal}
            className={`fixed left-0 top-0 z-50 flex h-full w-full justify-center bg-black/40 px-4 transition-opacity ${isOpened ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        >
            <div className="mt-[260px] flex h-fit max-w-[548px] flex-col gap-y-5 rounded-xl bg-accent px-5 py-6 text-white lg:gap-y-6">
                <div className="flex items-center justify-between gap-x-2">
                    <p className="text-[28px] font-semibold md:text-4xl lg:text-[40px]">
                        {title}
                    </p>
                    <button onClick={handleCloseModal}>
                        <XMarkIcon className="h-9 w-9 cursor-pointer" />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}
