import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import React from 'react';

type ButtonProps = MuiButtonProps & {
    rounded?: boolean;
};

const Button: React.FC<ButtonProps> = ({ size, color, variant, onClick, type, rounded, children, ...rest }) => {
    return (
        <MuiButton
            variant={variant || 'contained'}
            size={size || 'large'}
            color={color || 'primary'}
            onClick={onClick}
            className={rounded ? 'button-circle' : 'button'}
            sx={{
                background: variant === 'outlined' ? 'transparent' : 'hover:bg-our-greenish-500 bg-our-greenish-400 text-white hover:border-transparent',
            }}
            {...rest}
        >
            {children}
        </MuiButton>
    );
};

export default Button;
