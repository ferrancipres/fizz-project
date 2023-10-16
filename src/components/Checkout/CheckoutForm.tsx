// import React from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { useContext, useState } from 'react';
import { CartContext } from '../../context';
import { CartItemType } from '../../types';
import { Modal } from '..';
import { useForm, SubmitHandler } from 'react-hook-form';


export type CheckoutFormProps = {
    onSubmit: SubmitHandler<FormInput>;
}

export type FormInput = {
    email: string;
    confirmEmail: string;
    address: string;
    postCode: string;
    city: string;
    province: string;
    deliveryMethod: string;
    paymentMethod: string;
    terms: boolean;
};

export const CheckoutForm: React.FC<CheckoutFormProps> = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInput>();
    const { total } = useContext(CartContext) as CartItemType
    const [showModal, setShowModal] = useState(false)

    return (
            <div>
                <div>
                <div className='relative w-[400px] border-b m-[15px] md:w-[1000px] lg:w-[1000px]'>
                        <input type='checkbox' id='input1' className='absolute peer opacity-0' />
                        <label htmlFor='input1' className='font-bold tracking-[1px] mx-[20px] h-[50px] flex justify-start items-center'>Contact Information:</label>

                        <div className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-180 duration-200'>
                            <HiChevronDown />
                        </div>

                        <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col pr-10 mb-2'> 

                                <div className='flex flex-col text-black mb-2'>
                                    <input 
                                        className={`rounded-md bg-gray-200 p-2 ${errors.email ? 'border-red-500' : ''}`}
                                        type="text"
                                        id='email'
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                                message: 'Invalid email format',
                                            },
                                            minLength: {
                                                value: 2,
                                                message: 'Minim length is 2 characters',
                                            },
                                            maxLength: {
                                                value: 35,
                                                message: 'Maximum length is 35 characters'
                                            }
                                        })}
                                        placeholder='Email'
                                    />
                                {errors.email && <span className='text-red-500 text-xs'>{errors.email.message}</span>}       
                                </div>

                            <div className='flex flex-col text-black mb-2'>
                                    <input 
                                        className={`rounded-md bg-gray-200 p-2 ${errors.confirmEmail ? 'border-red-500' : ''}`}
                                        type="text"
                                        id='confirmEmail'
                                        {...register('confirmEmail', {
                                            required: true,
                                            pattern: {
                                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                                message: 'Invalid email format',
                                            },
                                            minLength: {
                                                value: 2,
                                                message: 'Minim length is 2 characters',
                                            },
                                            maxLength: {
                                                value: 35,
                                                message: 'Maximum length is 35 characters'
                                            }
                                        })}
                                        placeholder='Confirm Email'
                                    />
                                {errors.confirmEmail && <span className='text-red-500 text-xs'>{errors.confirmEmail.message}</span>}
                                </div>

                                <div className='flex justify-center items-center'>
                                    <button type='submit' className='bg-black text-white p-4 justify-center items-center w-full font-medium'>Save</button>
                                </div>

                            </form>
                        </div>
                    </div>

                    <div className='relative w-[400px] border-b m-[15px] md:w-[1000px] lg:w-[1000px]'>
                        <input type='checkbox' id='input2' className='absolute peer opacity-0' />

                        <label htmlFor='input2' className='font-bold tracking-[1px] mx-[20px] h-[50px] flex justify-start items-center'>Address Information:</label>

                        <div className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-180 duration-200'>
                            <HiChevronDown />
                        </div>

                        <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col pr-10 mb-2'>
                                {/* Address */}
                                <div className='flex flex-col text-black mb-2'>
                                    <input
                                        className={`rounded-md bg-gray-200 p-2 ${errors.address ? 'border-red-500' : ''}`}
                                        type="text"
                                        id='address'
                                        {...register('address', {
                                            required: 'Address is required',
                                            pattern: {
                                                value: /^[A-Za-z]+$/i,
                                                message: 'Invalid address format',
                                            },
                                            minLength: {
                                                value: 2,
                                                message: 'Minim length is 2 characters',
                                            },
                                            maxLength: {
                                                value: 35,
                                                message: 'Maximum length is 35 characters'
                                            }
                                        })}
                                        placeholder='Address'
                                    />
                                    {errors.address && <span className='text-red-500 text-xs'>{errors.address.message}</span>}
                                </div>

                                {/* Post Code */}
                            <div className='flex flex-col text-black mb-2'>
                                    <input
                                        className={`rounded-md bg-gray-200 p-2 ${errors.postCode ? 'border-red-500' : ''}`}
                                        type="number"
                                        id='postCode'
                                        {...register('postCode', {
                                            required: 'postCode is required',
                                            minLength: {
                                                value: 2,
                                                message: 'Minim length is 2 characters',
                                            },
                                            maxLength: {
                                                value: 5,
                                                message: 'Maximum length is 5 characters'
                                            }
                                        })}
                                        placeholder='Post Code'
                                    />
                                    {errors.postCode && <span className='text-red-500 text-xs'>{errors.postCode.message}</span>}
                                </div>

                                {/* City */}
                            <div className='flex flex-col text-black mb-2'>
                                    <input
                                        className={`rounded-md bg-gray-200 p-2 ${errors.city ? 'border-red-500' : ''}`}
                                        type="text"
                                        id='city'
                                        {...register('city', {
                                            required: 'City is required',
                                            pattern: {
                                                value: /^[A-Za-z]+$/i,
                                                message: 'Invalid city format',
                                            },
                                            minLength: {
                                                value: 2,
                                                message: 'Minim length is 2 characters',
                                            },
                                            maxLength: {
                                                value: 35,
                                                message: 'Maximum length is 35 characters'
                                            }
                                        })}
                                        placeholder='City'
                                    />
                                    {errors.city && <span className='text-red-500 text-xs'>{errors.city.message}</span>}
                                </div>

                                {/* Province */}
                            <div className='flex flex-col text-black mb-2'>
                                    <input
                                        className={`rounded-md bg-gray-200 p-2 ${errors.province ? 'border-red-500' : ''}`}
                                        type="text"
                                        id='province'
                                        {...register('province', {
                                            required: 'Province is required',
                                            pattern: {
                                                value: /^[A-Za-z]+$/i,
                                                message: 'Invalid province format',
                                            },
                                            minLength: {
                                                value: 2,
                                                message: 'Minim length is 2 characters',
                                            },
                                            maxLength: {
                                                value: 35,
                                                message: 'Maximum length is 35 characters'
                                            }
                                        })}
                                        placeholder='Province'
                                    />
                                    {errors.province && <span className='text-red-500 text-xs'>{errors.province.message}</span>}
                                </div>

                                {/* Button Save */}
                                <div className='flex justify-center items-center'>
                                    <button type='submit' className='bg-black text-white p-4 justify-center items-center w-full font-medium'>Save</button>
                                </div>

                            </form>
                        </div>
                    </div>

                    <div className='relative w-[400px] border-b m-[15px] md:w-[1000px] lg:w-[1000px]'>
                        <input type='checkbox' id='input3' className='absolute peer opacity-0' />

                        <label htmlFor='input3' className='font-bold tracking-[1px] mx-[20px] h-[50px] flex justify-start items-center'>Delivery Method:</label>

                        <div className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-180 duration-200'>
                            <HiChevronDown />
                        </div>

                        <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                            <form className='pr-10 mb-2'>
                                <div className='flex flex-col justify-center items-start gap-3 mb-2'>

                                    <div className='flex justify-center items-center gap-3'>
                                        <input className="rounded-md bg-gray-200 p-2 border-b"
                                            type="radio"
                                            id="deliveryMethod"
                                            {...register("deliveryMethod", {
                                                required: true
                                            })}
                                        />
                                        <div>
                                            <h4 className='text-md font-semibold'>Free delivery / SEUR</h4>
                                            <p>Delivery 48/72 h</p>
                                        </div>
                                    </div>

                                    <div className='flex justify-center items-center gap-3'>
                                        <input className="rounded-md bg-gray-200 p-2 border-b"
                                            type="radio"
                                            id="deliveryMethod"
                                            {...register('deliveryMethod', {
                                                required: true
                                            })}
                                        />
                                        <div>
                                            <h4 className='text-md font-semibold'>Standard delivery / SEUR</h4>
                                            <p>Delivery in 24h</p>
                                        </div>
                                    </div>

                                    <div className='flex justify-center items-center gap-3'>
                                        <input className="rounded-md bg-gray-200 p-2 border-b"
                                            type="radio"
                                            id="deliveryMethod"
                                        {...register('deliveryMethod', {
                                                required: true
                                            })}
                                        />
                                        <div>
                                            <h4 className='text-md font-semibold'>Click & Collect delivery</h4>
                                            <p>Pick your products in our store</p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='relative w-[400px] border-b m-[15px] md:w-[1000px] lg:w-[1000px]'>
                        <input type='checkbox' id='input4' className='absolute peer opacity-0' />

                        <label htmlFor='input4' className='font-bold tracking-[1px] mx-[20px] h-[50px] flex justify-start items-center'>Payment Method:</label>

                        <div className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-180 duration-200'>
                            <HiChevronDown />
                        </div>

                        <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                            <form className='pr-10 mb-2'>

                                <div className='flex flex-col justify-center items-start gap-3 mb-2'>

                                    <div className='flex justify-center items-center gap-3'>
                                        <input className="rounded-md bg-gray-200 p-2 border-b"
                                            type="radio"
                                            id="paymentMethod"
                                            {...register('paymentMethod', {
                                                required: true
                                            })}
                                        />
                                        <div>
                                            <h4 className='text-md font-semibold'>Credit Card</h4>
                                        </div>
                                    </div>

                                    <div className='flex justify-center items-center gap-3'>
                                        <input className="rounded-md bg-gray-200 p-2 border-b"
                                            type="radio"
                                            id="paymentMethod"
                                            {...register('paymentMethod', {
                                                required: true
                                            })}
                                        />
                                        <div>
                                            <h4 className='text-md font-semibold'>Sequra</h4>
                                        </div>
                                    </div>

                                    <div className='flex justify-center items-center gap-3'>
                                        <input className="rounded-md bg-gray-200 p-2 border-b"
                                            type="radio"
                                            id="paymentMethod"
                                            {...register('paymentMethod', {
                                                required: true
                                            })}
                                        />
                                        <div>
                                            <h4 className='text-md font-semibold'>Paypal</h4>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                                            
                    <div className='relative w-[400px] border-b m-[15px] md:w-[1000px] lg:w-[1000px]'>
                        <input type='checkbox' id='input1' className='absolute peer opacity-0' />
                        
                        <label htmlFor='input1' className='font-bold tracking-[1px] mx-[20px] h-[50px] flex justify-start items-center'>Terms & Conditions</label>
                        {/* Contact Information */}
                        <form className='flex flex-col pr-10 mb-2'>
                            <div className='flex justify-start items-center gap-2 text-black px-4'>
                                <input className="rounded-md bg-gray-200 p-2"
                                    type="checkbox"
                                    id='terms'
                                    {...register('terms', {
                                    })}
                                />
                                <p className='text-sm'>I have read and agree to the <span className='font-medium'>Terms and Conditions</span> and the Privacy Notice</p>
                            </div>
                        </form>
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex justify-between items-center px-5'>
                            <span className='text-sm'>Subtotal:</span> $ {parseFloat((total).toString()).toFixed(2)}
                        </div>
                        <div className='flex justify-between items-center p-5'>
                            <span className='font-semibold uppercase'>Total:</span> $ {parseFloat((total).toString()).toFixed(2)}
                        </div>
                    </div>

                    <div className='flex justify-center items-center'>
                        <button onClick={() => setShowModal(true)} className='bg-black text-white p-4 justify-center items-center w-full font-medium'>Buy</button>
                    </div>
                    <Modal isVisible={showModal} />
                </div>                       
            </div>
    )
}
