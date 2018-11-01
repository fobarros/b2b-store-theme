import React from 'react'

/**
 * Icon pack containing icons used by the dreamstore components
 */
const IconPack = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="0" width="0" className="dn">
      <defs>
        <g id="grid">
          <rect width="6.73684" height="7" fill="currentColor" />
          <rect x="9.2627" width="6.73684" height="7" fill="currentColor" />
          <rect width="6.73684" height="1" transform="matrix(1 0 0 -1 9.2627 9)" fill="currentColor" />
          <rect width="6.73684" height="1" transform="matrix(1 0 0 -1 0 9)" fill="currentColor" />
          <rect y="10" width="6.73684" height="7" fill="currentColor" />
          <rect x="9.2627" y="10" width="6.73684" height="7" fill="currentColor" />
          <rect width="6.73684" height="1" transform="matrix(1 0 0 -1 9.2627 19)" fill="currentColor" />
          <rect width="6.73684" height="1" transform="matrix(1 0 0 -1 0 19)" fill="currentColor" />
        </g>

        <g id="inline-grid">
          <rect y="14" width="5" height="5" fill="currentColor" />
          <rect y="7" width="5" height="5" fill="currentColor" />
          <rect width="5" height="5" fill="currentColor" />
          <rect x="7" width="12" height="2" fill="currentColor" />
          <rect x="7" y="3" width="12" height="2" fill="currentColor" />
          <rect x="7" y="7" width="12" height="2" fill="currentColor" />
          <rect x="7" y="10" width="12" height="2" fill="currentColor" />
          <rect x="7" y="14" width="12" height="2" fill="currentColor" />
          <rect x="7" y="17" width="12" height="2" fill="currentColor" />
        </g>

        <g id="single-item-grid">
          <rect width="10" height="14" fill="currentColor" />
          <rect y="16" width="10" height="3" fill="currentColor" />
        </g>

        <g id="check">
          <rect
            width="9"
            height="9"
            rx="2"
            fill="#368DF7"
          />
          <path
            d="M4.95 0.7875L4.1625 -5.36442e-08L1.9125 2.25L0.7875 1.125L-5.36442e-08 1.9125L1.9125 3.825L4.95 0.7875Z"
            transform="translate(2.25 2.8125)"
            fill="white"
          />
        </g>

        <path
          id="check-tick"
          d="M11 1.85294L9.25 0L4.25 5.29412L1.75 2.64706L0 4.5L4.25 9L11 1.85294Z"
          fill="#4F4F4F"
        />

        <path
          id="arrow-up"
          transform="translate(14 9.23999) rotate(180)"
          d="M7.72356 8.48154C7.32958 8.89452 6.67042 8.89452 6.27644 8.48154L0 1.90235L1.81481 0L7 5.43529L12.1852 0L14 1.90235L7.72356 8.48154Z"
          fill="#BDBDBD"
        />

        <path
          id="arrow-down"
          d="M7.72356 8.48154C7.32958 8.89452 6.67042 8.89452 6.27644 8.48154L0 1.90235L1.81481 0L7 5.43529L12.1852 0L14 1.90235L7.72356 8.48154Z"
          fill="#BDBDBD"
        />

        <path
          id="arrow-right"
          d="M4.70449 4.30069C4.31457 4.68774 3.68543 4.68774 3.29551 4.30069L0 1.02941L1.03704 0L4 2.94118L6.96296 0L8 1.02941L4.70449 4.30069Z"
          transform="translate(0 8) rotate(-90)"
          fill="#979899"
        />

        <path
          id="home"
          fill="currentColor"
          d="M557.1 240.7L512 203.8V104c0-4.4-3.6-8-8-8h-32c-4.4 0-8 3.6-8 8v60.5L313.4 41.1c-14.7-12.1-36-12.1-50.7 0L18.9 240.7c-3.4 2.8-3.9 7.8-1.1 11.3l20.3 24.8c2.8 3.4 7.8 3.9 11.3 1.1l14.7-12V464c0 8.8 7.2 16 16 16h168c4.4 0 8-3.6 8-8V344h64v128c0 4.4 3.6 8 8 8h168c8.8 0 16-7.2 16-16V265.8l14.7 12c3.4 2.8 8.5 2.3 11.3-1.1l20.3-24.8c2.6-3.4 2.1-8.4-1.3-11.2zM464 432h-96V304c0-4.4-3.6-8-8-8H216c-4.4 0-8 3.6-8 8v128h-96V226.5l170.9-140c2.9-2.4 7.2-2.4 10.1 0l170.9 140V432z"
        />

        <g id="profile">
          <path
            d="M13.3333 6.66667C13.3333 10.3486 10.3486 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667Z"
            transform="translate(15.333 10)"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.416 8.32156C25.2235 5.82988 23.3506 3.72634 21.0134 2.25385C18.6763 0.781363 15.9703 -5.20651e-07 13.208 -5.20651e-07C10.4457 -5.20651e-07 7.7397 0.781363 5.40256 2.25385C3.06542 3.72634 1.19247 5.82988 -1.83105e-07 8.32156"
            transform="translate(8.79199 28.6678)"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20Z"
            transform="translate(2 2)"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        <g id="eyesight-disable" transform="translate(0, 0)">
          <path
            fill="currentColor"
            d="M14.6,5.6l-8.2,8.2C6.9,13.9,7.5,14,8,14c3.6,0,6.4-3.1,7.6-4.9c0.5-0.7,0.5-1.6,0-2.3C15.4,6.5,15,6.1,14.6,5.6z"
          />
          <path
            fill="currentColor"
            d="M14.3,0.3L11.6,3C10.5,2.4,9.3,2,8,2C4.4,2,1.6,5.1,0.4,6.9c-0.5,0.7-0.5,1.6,0,2.2c0.5,0.8,1.4,1.8,2.4,2.7l-2.5,2.5c-0.4,0.4-0.4,1,0,1.4C0.5,15.9,0.7,16,1,16s0.5-0.1,0.7-0.3l14-14c0.4-0.4,0.4-1,0-1.4S14.7-0.1,14.3,0.3z M5.3,9.3C5.1,8.9,5,8.5,5,8c0-1.7,1.3-3,3-3c0.5,0,0.9,0.1,1.3,0.3L5.3,9.3z"
          />
        </g>

        <g id="eyesight-enable" transform="translate(0, 0)">
          <path
            fill="currentColor"
            d="M8,14c3.6,0,6.4-3.1,7.6-4.9c0.5-0.7,0.5-1.6,0-2.3C14.4,5.1,11.6,2,8,2C4.4,2,1.6,5.1,0.4,6.9c-0.5,0.7-0.5,1.6,0,2.2C1.6,10.9,4.4,14,8,14z M8,5c1.7,0,3,1.3,3,3s-1.3,3-3,3S5,9.7,5,8S6.3,5,8,5z"
          />
        </g>

        <g id="telemarketing">
          <rect
            width="19"
            height="19"
            fill="black"
            fillOpacity="0"
            transform="translate(1 1)"
          />
          <path
            d="M10.5 20C15.7467 20 20 15.7467 20 10.5C20 5.25329 15.7467 1 10.5 1C5.25329 1 1 5.25329 1 10.5C1 15.7467 5.25329 20 10.5 20Z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            width="10.5556"
            height="7.74074"
            fill="black"
            fillOpacity="0"
            transform="translate(5.22217 3.81482)"
          />
          <path
            d="M10.4997 11.5556C12.2486 11.5556 13.6663 10.1378 13.6663 8.3889C13.6663 6.63999 12.2486 5.22223 10.4997 5.22223C8.75077 5.22223 7.33301 6.63999 7.33301 8.3889C7.33301 10.1378 8.75077 11.5556 10.4997 11.5556Z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.0739 8.38889C15.0739 5.8627 13.026 3.81482 10.4999 3.81482C7.97366 3.81482 5.92578 5.8627 5.92578 8.38889"
            stroke="white"
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 8C15 9.10457 12.7614 10 10 10"
            stroke="white"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="5.22217"
            y="7.33334"
            width="1.40741"
            height="2.81481"
            rx="0.703704"
            fill="white"
          />
          <rect
            x="14.3701"
            y="7.33334"
            width="1.40741"
            height="2.81481"
            rx="0.703704"
            fill="white"
          />
          <rect
            width="12.0829"
            height="3.80634"
            fill="black"
            fillOpacity="0"
            transform="translate(4.51855 13.9017)"
          />
          <path
            d="M16.6014 17.7081C16.056 16.5684 15.1993 15.6062 14.1303 14.9327C13.0612 14.2591 11.8235 13.9017 10.56 13.9017C9.29649 13.9017 8.05875 14.2591 6.98973 14.9327C5.9207 15.6062 5.064 16.5684 4.51855 17.7081"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        <g id="customer">
          <rect
            width="19"
            height="19"
            fill="black"
            fillOpacity="0"
            transform="translate(1 1)"
          />
          <path
            d="M10.5002 11.1333C12.2491 11.1333 13.6668 9.71556 13.6668 7.96665C13.6668 6.21775 12.2491 4.79999 10.5002 4.79999C8.75126 4.79999 7.3335 6.21775 7.3335 7.96665C7.3335 9.71556 8.75126 11.1333 10.5002 11.1333Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.7732 17.6199C16.2068 16.4364 15.3171 15.4372 14.207 14.7378C13.0968 14.0384 11.8115 13.6672 10.4994 13.6672C9.18728 13.6672 7.90194 14.0384 6.7918 14.7378C5.68166 15.4372 4.79201 16.4364 4.22559 17.6199"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 20C15.7467 20 20 15.7467 20 10.5C20 5.25329 15.7467 1 10.5 1C5.25329 1 1 5.25329 1 10.5C1 15.7467 5.25329 20 10.5 20Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </defs>
    </svg>
  )
}

export default IconPack