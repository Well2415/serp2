import React from 'react';

interface DeviceFrameProps {
    src: string;
    alt: string;
    type: 'laptop' | 'browser';
    className?: string;
}

const DeviceFrame: React.FC<DeviceFrameProps> = ({ src, alt, type, className = '' }) => {
    if (type === 'laptop') {
        return (
            <div className={`relative mx-auto ${className}`}>
                {/* Laptop Lid */}
                <div className="relative mx-auto bg-gray-800 rounded-t-xl border-[4px] border-gray-800 ring-1 ring-gray-900/10 shadow-xl overflow-hidden aspect-[16/10]">
                    <div className="h-full w-full bg-slate-900 flex items-center justify-center overflow-hidden">
                        <img
                            src={src}
                            alt={alt}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
                {/* Laptop Base */}
                <div className="relative mx-auto bg-gray-900 h-3 sm:h-4 w-full rounded-b-lg shadow-2xl flex items-center justify-center">
                    <div className="absolute top-0 w-16 sm:w-24 h-1 sm:h-1.5 bg-gray-800 rounded-b-md"></div>
                </div>
            </div>
        );
    }

    // Browser Type
    return (
        <div className={`relative rounded-lg shadow-2xl bg-white ring-1 ring-slate-900/5 ${className}`}>
            {/* Browser Header */}
            <div className="h-8 bg-slate-100 rounded-t-lg border-b border-slate-200 flex items-center px-4 space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                {/* Fake URL Bar */}
                <div className="flex-1 ml-4 bg-white h-5 rounded-md border border-slate-200/50 shadow-sm mx-2"></div>
            </div>
            {/* Browser Content */}
            <div className="bg-slate-50 overflow-hidden rounded-b-lg aspect-[16/10] relative group flex items-center justify-center p-1">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );
};

export default DeviceFrame;
