import React from "react";

interface Props {
    className?: string;
    style?: any;
    onClick?: () => void;
    to: string;
}
export const NextArrow: React.FC<Props> = ({
                                               className,
                                               style,
                                               onClick,
                                               to,
                                           }) => {
    return (
        <div
            className={`${className}  z-10 w-4 ml-4 h-full pt-10 !flex items-center justify-center ltr:left-auto ltr:right-0 rtl:right-auto rtl:left-0  drop-shadow-lg `}
            style={{ ...style }}
            onClick={onClick}
            aria-label={to}
        />
    );
};
export const PrevArrow: React.FC<Props> = ({
                                               className,
                                               style,
                                               onClick,
                                               to,
                                           }) => {
    return (
        <div
            className={`${className}   z-10 w-4 mr-4 h-full pt-10 !flex items-center justify-center ltr:left-0 ltr:right-auto rtl:right-0 rtl:left-auto drop-shadow-lg`}
            style={{ ...style }}
            onClick={onClick}
            aria-label={to}
        />
    );
};