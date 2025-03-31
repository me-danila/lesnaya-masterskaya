"use client";
import {useState} from 'react';
import Link from 'next/link';
import {handleFormSubmit} from '@/utils/form-handler';

export default function PopupOrder() {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);

        try {
            const productId = typeof window !== 'undefined' && window.currentProduct?.id || 'Не указан';
            const productTitle = typeof window !== 'undefined' && window.currentProduct?.title || 'Не указан';
            const productPrice = typeof window !== 'undefined' && window.currentProduct?.price || 'Не указана';

            const formData = {
                name: e.target.name.value,
                contactType: e.target['how-to-contact'].value,
                contact: e.target.contact2.value,
                id: productId,
                product: productTitle,
                price: productPrice
            };

            const result = await handleFormSubmit(formData, 'order');
            if (result.success) {
                setMessage({type: 'success', text: result.message});
            } else {
                setMessage({type: 'error', text: result.message});
            }
        } catch (error) {
            setMessage({type: 'error', text: error.message || 'Произошла ошибка'});
        } finally {
            setIsLoading(false);
        }
    };

    return (<dialog className="relative z-10" aria-labelledby="Остались вопросы" aria-modal="true" id="order">
        <div
            className="fixed inset-0 bg-gray-500/75 transition-opacity"
            aria-hidden="true"
            onClick={() => document.querySelector('#order').close()}
        ></div>

        <div
            className="fixed left-[1rem] right-[1rem] top-0 bottom-0 m-auto h-fit transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all p-8 m-auto sm:w-full sm:max-w-lg">
            <h3 className="max-w-3xl text-2xl font-medium tracking-tighter text-pretty text-gray-950 sm:text-3xl product-title">
                Оформить заказ:
            </h3>
            <p className="mt-2 text-slate-700 product-price">Стоимость: </p>

            <form onSubmit={onSubmit} className="mt-4">
                <div className="flex flex-col gap-x-8 gap-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm/6 font-semibold text-gray-900">Имя *</label>
                        <div className="mt-2.5">
                            <input type="text" name="name" id="name" autoComplete="name"
                                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600"
                                   required/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="contact2" className="block text-sm/6 font-semibold text-gray-900">Способ
                            связи
                            *</label>
                        <div className="mt-2.5">
                            <div
                                className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-green-600">
                                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                    <select id="how-to-contact" name="how-to-contact" autoComplete="contact-type"
                                            aria-label="Способ связи"
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-600 sm:text-sm/6">
                                        <option>Звонок</option>
                                        <option>WhatsApp</option>
                                        <option>Telegram</option>
                                        <option>E-mail</option>
                                    </select>
                                    <svg
                                        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                        viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path fillRule="evenodd"
                                              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <input type="text" name="contact2" id="contact2"
                                       className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                       placeholder="Телефон или E-mail" required=""/>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <button type="button"
                                    className="flex w-8 flex-none cursor-pointer rounded-full bg-green-600 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                                    role="switch" aria-checked="true" aria-labelledby="switch-1-label">
                                <span className="sr-only">Согласие с политикой</span>
                                <span aria-hidden="true"
                                      className="size-4 translate-x-3.5 transform rounded-full bg-white ring-1 shadow-xs ring-gray-900/5 transition duration-200 ease-in-out"></span>
                            </button>
                        </div>
                        <label className="text-sm/6 text-gray-600" id="switch-2-label">
                            Согласие на&nbsp;<Link href={'/policy/'} target={'_blank'} className={'text-green-700'}>обработку
                            персональных данных</Link>.
                        </label>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-all duration-[.2s] cursor-pointer ${isLoading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-500'}`}>
                        {isLoading ? 'Отправка...' : 'Отправить'}
                    </button>
                </div>
            </form>
            {message && (<div
                className={`mt-4 p-4 rounded-md ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {message.text}
            </div>)}
        </div>
    </dialog>);
}

export function PopupClose() {
    return (<div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
        onClick={closeOrderModal}
    ></div>);
}