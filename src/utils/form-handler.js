export async function handleFormSubmit(formData, formType) {
    try {
        const response = await fetch('/api/form-submit', {
            method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
                ...formData, formType
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Ошибка при отправке формы');
        }

        return {
            success: true, message: data.message || 'Форма успешно отправлена!'
        };
    } catch (error) {
        console.error('Произошла ошибка отправки формы:', error);
        return {
            success: false, message: error.message || 'Произошла ошибка при отправке формы'
        };
    }
}