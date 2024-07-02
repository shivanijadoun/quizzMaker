// app/Modal.js
'use client'
import React from 'react';

export default function Modal({ show, onClose, children }) {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg">
        {children}
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-teal-900 text-white rounded">
          Close
        </button>
      </div>
    </div>
  );
}
