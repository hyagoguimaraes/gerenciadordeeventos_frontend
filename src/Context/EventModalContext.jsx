import { createContext, useState } from "react";

export const EventModalContext = createContext();

export function EventModalProvider({ children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingEvent, setEditingEvent] = useState(null);

    const openModal = (event = null) => {
        setEditingEvent(event);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingEvent(null);
    };

    return (
        <EventModalContext.Provider value={{ isModalOpen, openModal, closeModal, editingEvent }}>
            {children}
        </EventModalContext.Provider>
    )
}