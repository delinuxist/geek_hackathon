import React from "react";

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    content: React.ReactNode;
}

import { motion, AnimatePresence } from 'framer-motion';

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, content }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 bg-pixel-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="w-[50%] flex flex-col">
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
