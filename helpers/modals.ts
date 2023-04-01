import Swal, { SweetAlertResult } from 'sweetalert2';

export const errorModal = (text: string) => {
	text = Array.isArray(text) ? text[0].error : text;

	Swal.fire({
		title: 'Error!',
		text: text.charAt(0).toUpperCase() + text.slice(1),
		icon: 'error',
		confirmButtonText: 'Ok',
		customClass: {
			popup: 'modal-popup',
			confirmButton: 'modal-confirm-button',
		},
	});
};

export const successModal = (text: string) => {
	Swal.fire({
		title: 'Success!',
		text: text.charAt(0).toUpperCase() + text.slice(1),
		icon: 'success',
		confirmButtonText: 'Ok',
		customClass: {
			popup: 'modal-popup',
			confirmButton: 'modal-confirm-button',
		},
	});
};

export const yesNoModal = async (
	text: string
): Promise<SweetAlertResult<any>> => {
	const result = Swal.fire({
		title: text,
		showCancelButton: true,
		confirmButtonText: 'Yes',
		customClass: {
			popup: 'modal-popup',
			confirmButton: 'modal-confirm-button',
			cancelButton: 'modal-cancel-button',
		},
	});

	return result;
};
