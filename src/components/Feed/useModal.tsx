import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { Photo } from "../../models/models";

interface ModalFeedContextData {
  photoModal: Photo | undefined;
  setPhotoModal: Dispatch<SetStateAction<Photo | undefined>>;
  userModalId: string | undefined;
  setUserModalId: Dispatch<SetStateAction<string>>;
}

export const ModalFeedContext = createContext<ModalFeedContextData>(
  {} as ModalFeedContextData
);

export const ModalFeedPhoto = ({ children }: { children: React.ReactNode }) => {
  const [photoModal, setPhotoModal] = useState<Photo | undefined>();
  const [userModalId, setUserModalId] = useState<string>("");

  return (
    <ModalFeedContext.Provider
      value={{
        photoModal,
        setPhotoModal,
        userModalId,
        setUserModalId,
      }}
    >
      {children}
    </ModalFeedContext.Provider>
  );
};
