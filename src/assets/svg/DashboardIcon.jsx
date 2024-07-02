import * as React from 'react';

const DashboardIcon = (fill) => (
    <svg
        width="21"
        height="19"
        viewBox="0 0 21 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1 2.84672C1 2.35694 1.197 1.88722 1.54765 1.54089C1.89831 1.19456 2.3739 1 2.86981 1H8.47922V17.6205H2.86981C2.3739 17.6205 1.89831 17.4259 1.54765 17.0796C1.197 16.7333 1 16.2636 1 15.7738V2.84672ZM12.2188 1H17.8283C18.3242 1 18.7997 1.19456 19.1504 1.54089C19.5011 1.88722 19.6981 2.35694 19.6981 2.84672V7.46353H12.2188V1ZM12.2188 11.157H19.6981V15.7738C19.6981 16.2636 19.5011 16.7333 19.1504 17.0796C18.7997 17.4259 18.3242 17.6205 17.8283 17.6205H12.2188V11.157Z"
            stroke={fill?.fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
export default DashboardIcon;
