import { FC } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { ProductRelative } from '../Product/ProductRelative'

export const Accordion: FC = () => {
    return (
        <>
            <div className='flex justify-center items-center'>
                <div>
                    <div className='relative w-[400px] border-b m-[15px] md:w-[1000px] lg:w-[1000px]'>
                        <input type='checkbox'
                        id='input1' 
                        className='absolute peer opacity-0' 
                        />

                        <label htmlFor='input1' className='font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center'>
                            Information:
                        </label>

                        <div className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-180 duration-200'>
                            <HiChevronDown />
                        </div>

                        <div className='p-1 max-h-0 overflow-hidden peer-checked:max-h-full'>
                            <p className='p-[20px] text-sm'>
                                Sparkling waters with skin-softening ingredients for bath time dreams to life! Drop into the bath and watch
                                it fizz and froth up, creating sparkling bath water. Hidden inside is a bath melt heart made of Fair Trade organic cocoa butter, Fair Trade shea butter,
                                and coconut cream for a luxurious soak that conditions skin, so you'll emerge feeling relaxed, soft, and smelling sweet.
                            </p>
                        </div>
                    </div>


                    <div className='relative w-[400px] border-b m-[15px] md:w-[1000px] lg:w-[1000px]'>
                        <input type='checkbox' 
                        id='input2' 
                        className='absolute peer opacity-0' 
                        />

                        <label htmlFor='input2' className='font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center'>
                            How to store:
                        </label>

                        <div className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-180 duration-200'>
                            <HiChevronDown />
                        </div>

                        <div className='p-1 max-h-0 overflow-hidden peer-checked:max-h-full'>
                            <p className='p-[20px] text-sm'>
                                Keep somewhere cool and dry, until you’re ready for a spectacular soak.
                            </p>
                        </div>
                    </div>

                    <div className='relative w-[400px] border-b m-[15px] md:w-[1000px] lg:w-[1000px]'>
                        <input type='checkbox' 
                        id='input3' 
                        className='absolute peer opacity-0' 
                        />

                        <label htmlFor='input3' className='font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center'>
                            How to use:
                        </label>

                        <div className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-180 duration-200'>
                            <HiChevronDown />
                        </div>

                        <div className='p-1 max-h-0 overflow-hidden peer-checked:max-h-full'>
                            <p className='p-[20px] text-sm'>
                                Run a warm bath and drop in for soft, sparkling pink waters.
                            </p>
                        </div>
                    </div>

                    <div className='relative w-[400px] border-b m-[15px] md:w-[1000px] lg:w-[1000px]'>
                        <input type='checkbox' 
                        id='input4' 
                        className='absolute peer opacity-0' 
                        />

                        <label htmlFor='input4' className='font-bold tracking-[1px] mx-[20px] h-[50px] flex items-center'>
                            Ingredients
                        </label>

                        <div className='absolute top-[15px] right-[30px] rotate-0 peer-checked:rotate-180 duration-200'>
                            <HiChevronDown />
                        </div>

                        <div className='p-1 max-h-0 overflow-hidden peer-checked:max-h-full'>
                            <p className='p-[20px] text-sm'>
                                Sodium Bicarbonate, Citric Acid, Cornstarch, Fair Trade Organic Cocoa Butter, Perfume, Sicilian Lemon Oil, Tonka Absolute, Coconut Milk Powder, Fair Trade Shea Butter, Extra Virgin Coconut Oil, Water (Aqua), Titanium Dioxide, Organic Jojoba Oil, Cream of Tartar, Coconut Cream, Ruby Cocoa Liquor, Talc, Synthetic Fluorphlogopite, Sodium Coco Sulfate, Propylene Glycol, Cocamidopropyl Betaine, Tin Oxide, *Coumarin, Geraniol, *Limonene, Colour 45410:2, Colour 45410:1, Colour 77491, Colour 77499
                                Natural Ingredients
                                Safe Synthetics
                                *occurs naturally in essential oils.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <h2 className='px-10 font-bold flex items-center lg:px-96'>Products related:</h2>
            <div>
                <ProductRelative />
            </div>
        </>
    )
}
