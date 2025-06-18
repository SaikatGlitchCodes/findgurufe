import React, { useRef } from 'react'
import supabase from '../util/supabase';

export default function CreateRequest() {
    const titleRef = useRef();
    const descriptionRef = useRef();

    const submitForm = async (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const email_id =await supabase.auth.getUser().then(({ data: { user } }) => user.email);
        
        if (title && description) {
            supabase
                .from('requests')
                .insert([
                    { title, description, email_id }
                ])
                .then(({ data, error }) => {
                    if (error) {
                        console.error('Error creating request:', error.message);
                    } else {
                        console.log('Request created successfully:', data);
                        titleRef.current.value = '';
                        descriptionRef.current.value = '';
                    }
                });
        }
        else {
            console.error('Title and description are required');
        }
    }

    return (
        <div>
            <form onSubmit={submitForm} >
                <div className="max-w-md p-4 mx-auto bg-white rounded shadow">
                    <h2 className="mb-4 text-2xl font-bold">Create Request</h2>
                    <div className="mb-4">
                        <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="title">Title</label>
                        <input ref={titleRef} type="text" id="title" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter request title" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-sm font-medium text-gray-700" htmlFor="description">Description</label>
                        <textarea ref={descriptionRef} id="description" className="w-full p-2 border border-gray-300 rounded" rows="4" placeholder="Enter request description"></textarea>
                    </div>
                    <button type="submit" className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700">Submit Request</button>
                </div>
            </form>
        </div>
    )
}
