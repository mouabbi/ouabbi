import React from 'react';
import Image from './Image';

const Skill = ({ icon: Icon, title, content, lists, color }) => {
    return (
        <div className="text-center md:p-6">
            <div className={`relative w-12 h-12 m-auto overflow-hidden p-4 
                             rounded-lg md:w-20 md:h-20 2xl:w-24 2xl:h-24`}
                 style={{ backgroundColor: color ? color : '#eee' }}>
                <Icon className="w-full h-full" />
            </div>

            <h2 className="text-2xl 2xl:text-3xl font-bold text-center text-gray-600">
                {title}
            </h2>
            
            <p className="2xl:text-xl text-gray-500 mt-4 leading-relaxed">
                {content}
            </p>
            {lists.map((list, index) => (
                <div key={index} className="mt-6">
                    <h3 className="text-lg 2xl:text-xl font-semibold text-primary text-gray-600">
                        {list.title}
                    </h3>
                    <ul className="list-none pl-0 mt-2 text-gray-700">
                        {list.items.map((item, idx) => (
                            <li
                                key={idx}
                                className={`inline-flex flex-col cursor-pointer items-center mr-2 mb-2 px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-600 hover:text-white hover:border-${color}-600 transition-colors duration-300`}
                            >
                                <Image src={item.image} alt={item.name} className="w-4 h-4 md:w-8 md:h-8 overflow-hidden rounded-lg object-cover"/>
                                <span className="text-xs 2xl:text-sm font-semibold">{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Skill;
