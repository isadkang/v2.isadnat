import React, { useState } from 'react';
import Header from '../../Fragments/Home/Header'
import certificate from '../../../service/_certificate'

const Certificate = () => {
    const [current, setCurrent] = useState(1);
    const itemsPerPage = 5;

    const indexOfLastItem = current * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCertificates = certificate.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(certificate.length / itemsPerPage);
    const totalItem = certificate.length;
    const handlePageChange = (pageNumber) => {
        setCurrent(pageNumber);
    }

    return (
        <div className="dark:text-white mb-10 lg:h-screen">
            <div className="border-b border-gray-600 border-dashed mb-5">
                <Header title={'Certificates 🎓'} description={'Explore the world of certifications and achievements on my learning journey. Each certificate represents a milestone in my pursuit of excellence in programming and technology.'} />
            </div>
            <p className='font-semibold mb-5'>Current Certificate: {totalItem}</p>
            <div className='grid justify-center  md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {currentCertificates.map((items, index) => (
                    <div className='max-w-xs rounded-md overflow-hidden shadow-md mt-2'>
                        <img src={items.image} key={index} />
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-8'>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-1 px-3 py-1 rounded-md ${current === index + 1
                            ? 'border bg-secondary text-white'
                            : 'border'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Certificate;