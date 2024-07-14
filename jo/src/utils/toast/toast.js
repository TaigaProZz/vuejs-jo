import { toast } from "vue3-toastify";

const showSuccessPopup = (message) => {
  toast.success(message || "Informations sauvegardées avec succès !", {
    position: toast.POSITION.BOTTOM_RIGHT,
  })
};

const showInfoPopup = (message) => {
  toast.info(message || "Informations sauvegardées avec succès !", {
    position: toast.POSITION.BOTTOM_RIGHT,
  })
};

const showErrorPopup = (message) => {
  toast.error(message || `Une erreur est survenue.`, {
    position: toast.POSITION.BOTTOM_RIGHT,
  })
};

export const toaster = { showSuccessPopup, showErrorPopup, showInfoPopup };