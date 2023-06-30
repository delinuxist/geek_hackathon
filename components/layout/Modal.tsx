import React, { useRef } from "react";
import { AnimatePresence, motion } from 'framer-motion';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, content }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    const handleClose = (e: React.MouseEvent<HTMLElement>) => {
        const targetElement = e.target as HTMLElement;
        const isContentClicked = contentRef.current?.contains(targetElement);

        if (!isContentClicked) {
            onClose();
        }
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 bg-pixel-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
                    id='wrapper'
                    onClick={handleClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className=" w-[30%] flex flex-col" ref={contentRef}>
                        <button className="text-white text-xl place-self-end" onClick={onClose}>
                            &#10006;
                        </button>
                        <div className="bg-white p-2 rounded">{content}</div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;