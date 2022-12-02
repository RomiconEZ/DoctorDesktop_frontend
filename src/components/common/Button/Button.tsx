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
                background: variant === 'outlined' ? 'transparent' : 'linear-gradient(45deg,  #3FBAC2 13%, #F5F5F5 99%)',
            }}
            {...rest}
        >
            {children}
        </MuiButton>
    );
};

export default Button;
