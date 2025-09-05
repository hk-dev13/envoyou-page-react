import React from 'react';
import Button from './Button';

// eslint-disable-next-line no-unused-vars
const FeatureButton = ({ icon: Icon, title, subtitle, iconClassName, onClick }) => {
    return (
        <Button
            variant="outline"
            className="h-auto w-full md:w-auto p-6 flex flex-row items-center justify-start gap-4 hover-lift interactive-element"
            onClick={onClick}
        >
            <Icon className={`h-8 w-8 flex-shrink-0 ${iconClassName}`} />
            <div className="flex flex-col items-start text-left">
                <span className="text-white font-semibold">{title}</span>
                <span className="text-gray-400 text-sm">{subtitle}</span>
            </div>
        </Button>
    );
};

export default FeatureButton;