import React from 'react';
import { footerLinks } from '../constants';

const Footer = () => {
    return (
        <footer className="py-5 sm:px-10 px-5">
            <div className="screen-max-width">
                <div>
                    <p className="font-semibold text-gray text-xs">
                        More ways to shop:{' '}
                        <span className="underline text-blue">
                            {' '}
                            Find an Apple Store or other retailer{' '}
                        </span>
                        or{' '}
                        <span className="underline text-blue">
                            other retailer
                        </span>{' '}
                        near you.
                    </p>
                    <p className="font-semibold text-gray text-xs">
                        Or call 1-800-MY-APPLE.
                    </p>
                </div>
                <div className="bg-neutral-700 my-5 h-[1px]" />
                <div className="flex md:flex-row flex-col md:items-center justify-between">
                    <p className="font-semibold text-gray text-xs">
                        Copright © 2025 Apple Inc.
                    </p>
                    <div className="flex">
                        {footerLinks.map((item, index) => (
                            <p
                                key={index}
                                className="font-semibold text-gray text-xs"
                            >
                                {item}{' '}
                                {index !== footerLinks.length - 1 && (
                                    <span className="mx-2"> | </span>
                                )}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
