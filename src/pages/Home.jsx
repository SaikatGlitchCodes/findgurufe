import React, { useState, useEffect } from 'react'
import supabase from '../util/supabase';

export default function Home() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      supabase
        .from('requests')
        .select('*')
        .then(({ data, error }) => {
          if (error) {
            console.error('Error fetching requests:', error.message);
          } else {
            setRequests(data);
          }
        });
    }
    fetchRequests();
  }, []);

  return (

    <div className="flex flex-wrap justify-center card-container">
      {requests.length > 0 ? (
        requests.map((request) => (
          <div key={request.id} className="max-w-sm p-4 m-2 bg-white rounded shadow">
            <h2 className="mb-2 text-xl font-bold">{request.title}</h2>
            <p className="text-gray-700">{request.description}</p>
            <p className="mt-2 text-sm text-gray-500">Requested by: {request.email_id}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No requests found.</p>
      )}
    </div>
  )
}
