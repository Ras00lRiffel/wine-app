'use client'
import Input from "@/components/Input/Input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CreateWine() {

    const router = useRouter();
    // State to store user input
    const [formData, setFormData] = useState({
        name: '',
        year: '',
        type: '',
        varietal: '',
        rating: 3.0,
        consumed: false,
    });

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'rating') {
            if (value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)) {
                setFormData({
                    ...formData,
                    [name]: parseFloat(value),
                });
                return
            }
        }

        if (name === 'consumed') {
            setFormData({
                ...formData,
                [name]: e.target.checked,
            });
            return
        }

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const res = fetch('/api/create-wine', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            router.push('/wine');
        } catch (error) {
            console.error(error);
        }

        // Reset the form after submission
        setFormData({
            name: '',
            year: '',
            type: '',
            varietal: '',
            rating: '',
            consumed: false,
        });
    };

    return (
        <div className="container">
            <div className="w-1/2 m-auto">
                <Link href="/wine">
                    <button className="bg-indigo-800 hover:bg-blue-700 text-white font-bold my-6 py-2 px-4 rounded">Go back</button>
                </Link>
                <h1>Add Wine</h1>
            </div>
            <form method="POST" onSubmit={handleSubmit}>
                <div className="space-y-12">
                    <div className="w-1/2 m-auto">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <Input type="text" name="name" id="name" placeholder="Charx" classes="w-full" value={formData.name} onChange={handleInputChange} />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="year" className="block text-sm font-medium leading-6 text-gray-900">
                                    Year
                                </label>
                                <div className="mt-2">
                                    <Input type="text" name="year" id="year" placeholder="2009" classes="w-full" value={formData.year} onChange={handleInputChange} />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="Type" className="block text-sm font-medium leading-6 text-gray-900">
                                    Type
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="type"
                                        name="type"
                                        className="block w-full border-1 rounded-md bg-transparent border-gray-400 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        value={formData.type}
                                        onChange={handleInputChange}
                                    >
                                        <option>Select an option</option>
                                        <option>red</option>
                                        <option>red blend</option>
                                        <option>white</option>
                                        <option>white blend</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="varietal" className="block text-sm font-medium leading-6 text-gray-900">
                                    Varietal
                                </label>
                                <div className="mt-2">
                                    <Input type="text" name="varietal" id="varietal" placeholder="Sauvignon blanc, Syrah, Pinotage" classes="w-full" value={formData.varietal} onChange={handleInputChange} />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="rating" className="block text-sm font-medium leading-6 text-gray-900">
                                    Rating
                                </label>
                                <div className="mt-2">
                                    <Input type="number" name="rating" id="rating" placeholder="2.5" classes="w-full" value={parseFloat(formData.rating)} onChange={handleInputChange} />
                                </div>
                            </div>

                            <div className="col-span-3 mt-5 space-y-10">
                                <div className="space-y-6">
                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="consumed"
                                                name="consumed"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" value={formData.consumed} onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="text-sm leading-6">
                                            <label htmlFor="consumed" className="font-medium text-gray-900">
                                                Consumed
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="m-auto w-1/2 flex items-center justify-between gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
