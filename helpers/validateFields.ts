interface Field {
	name: string;
	value: string;
}
export const validateFields = (fields: Field[]): Field| null => {
	for (const field of fields) {
		if (field.value === undefined || field.value.length === 0) {
			return field;
		}
	}

	return null;
};
