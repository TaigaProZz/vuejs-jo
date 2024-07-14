import { toast } from "vue3-toastify";

const options = {
  position: toast.POSITION.BOTTOM_RIGHT,
  theme: toast.THEME.DARK
}

const showSuccessPopup = (message) => {
  toast.success(message || "Informations sauvegardées avec succès !", options)
};

const showInfoPopup = (message) => {
  toast.info(message || "Informations sauvegardées avec succès !", options)
};

const showErrorPopup = (message) => {
  toast.error(message || `Une erreur est survenue.`, options)
};

export { showSuccessPopup, showErrorPopup, showInfoPopup };