import {NavLink, useLocation} from "react-router-dom";

const Footer = () => {
    const location = useLocation();

    // Fonction pour vérifier si l'URL correspond à un chemin donné
    const isActive = (path) => location.pathname === path;
    return (
        <footer className={"my-4"}>
            <nav>
                <ul className={"flex justify-around"}>
                    <li>
                        <NavLink to={"/"}>
                            <svg className={isActive('/') ? 'fill-Red' : ''} width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_77_315)">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M9.66724 25.4391V21.4464C9.66722 20.4309 10.4951 19.6057 11.5209 19.5989H15.2784C16.3091 19.5989 17.1446 20.426 17.1446 21.4464V25.4515C17.1444 26.3137 17.8395 27.0184 18.7102 27.0386H21.2152C23.7124 27.0386 25.7367 25.0346 25.7367 22.5624V11.2043C25.7234 10.2318 25.2621 9.3185 24.4842 8.72441L15.9172 1.89222C14.4163 0.702595 12.2828 0.702595 10.782 1.89222L2.25249 8.73681C1.47164 9.32849 1.00962 10.2433 1 11.2167V22.5624C1 25.0346 3.02434 27.0386 5.5215 27.0386H8.02648C8.91881 27.0386 9.64219 26.3225 9.64219 25.4391"
                                          fill="#DADADA" fill-opacity="0.2"/>
                                    <path d="M9.66724 25.4391V21.4464C9.66722 20.4309 10.4951 19.6057 11.5209 19.5989H15.2784C16.3091 19.5989 17.1446 20.426 17.1446 21.4464V21.4464V25.4515C17.1444 26.3137 17.8395 27.0184 18.7102 27.0386H21.2152C23.7124 27.0386 25.7367 25.0346 25.7367 22.5624V22.5624V11.2043C25.7234 10.2318 25.2621 9.3185 24.4842 8.72441L15.9172 1.89222C14.4163 0.702595 12.2828 0.702595 10.782 1.89222L2.25249 8.73681C1.47164 9.32849 1.00962 10.2433 1 11.2167V22.5624C1 25.0346 3.02434 27.0386 5.5215 27.0386H8.02648C8.91881 27.0386 9.64219 26.3225 9.64219 25.4391V25.4391"
                                          stroke="url(#paint0_linear_77_315)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <filter id="filter0_b_77_315" x="-4.56" y="-4.56" width="35.8568" height="37.1587" filterUnits="userSpaceOnUse"
                                            color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.405"/>
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_77_315"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_77_315" result="shape"/>
                                    </filter>
                                    <linearGradient id="paint0_linear_77_315" x1="4.93768" y1="4.03354" x2="21.7068" y2="23.7641"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.25"/>
                                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/discover"}>
                            <div className={ isActive('/discover') ? 'bg-Red w-8 rounded-full' : 'mb-0.5 w-8 rounded-full bg-gray-dark '}>
                                <svg className={"fill-gray-light w-full scale-50"} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0057 8.80503H9.37336L9.14923 8.58891C9.93368 7.67639 10.4059 6.49171 10.4059 5.20297C10.4059 2.32933 8.07662 0 5.20297 0C2.32933 0 0 2.32933 0 5.20297C0 8.07662 2.32933 10.4059 5.20297 10.4059C6.49171 10.4059 7.67639 9.93368 8.58891 9.14923L8.80503 9.37336V10.0057L12.8073 14L14 12.8073L10.0057 8.80503ZM5.20297 8.80503C3.20983 8.80503 1.60091 7.19611 1.60091 5.20297C1.60091 3.20983 3.20983 1.60091 5.20297 1.60091C7.19611 1.60091 8.80503 3.20983 8.80503 5.20297C8.80503 7.19611 7.19611 8.80503 5.20297 8.80503Z" fill="#D9D9D9" fill-opacity="0.41"/>
                                </svg>

                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/account"}>
                            <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_77_321)">
                                    <g filter="url(#filter1_b_77_321)">
                                        <path d="M10.9453 13.3359C12.7011 13.3359 14.2214 12.7061 15.4636 11.4637C16.7058 10.2214 17.3355 8.70148 17.3355 6.9455C17.3355 5.19012 16.7058 3.66996 15.4634 2.42731C14.221 1.18527 12.7009 0.555542 10.9453 0.555542C9.18941 0.555542 7.66949 1.18527 6.42729 2.42751C5.18508 3.66976 4.55518 5.18992 4.55518 6.9455C4.55518 8.70148 5.18508 10.2216 6.42749 11.4639C7.6699 12.7059 9.19001 13.3359 10.9453 13.3359Z"
                                              fill="#DADADA" fill-opacity="0.2"/>
                                        <path d="M15.1054 11.1055L15.1053 11.1055C13.9581 12.2529 12.5667 12.8293 10.9453 12.8293C9.32449 12.8293 7.93316 12.2528 6.78565 11.1056C5.63823 9.95834 5.06177 8.56702 5.06177 6.9455C5.06177 5.32438 5.63823 3.93303 6.78551 2.78572C7.93276 1.63844 9.32383 1.06214 10.9453 1.06214C12.5664 1.06214 13.9577 1.63841 15.1051 2.78549C16.2526 3.93321 16.8289 5.32457 16.8289 6.9455C16.8289 8.56707 16.2526 9.9582 15.1054 11.1055Z"
                                              stroke="url(#paint0_linear_77_321)" stroke-width="1.01319"/>
                                    </g>
                                    <g filter="url(#filter2_b_77_321)">
                                        <path d="M22.0905 20.9639C22.0546 20.444 21.9821 19.8769 21.8754 19.2781C21.7677 18.6748 21.629 18.1044 21.4629 17.5831C21.2914 17.0443 21.0581 16.5122 20.7698 16.0023C20.4705 15.4731 20.1189 15.0123 19.7244 14.633C19.312 14.2363 18.8069 13.9174 18.2229 13.6847C17.6409 13.4533 16.996 13.336 16.3061 13.336C16.0351 13.336 15.7731 13.4478 15.267 13.7789C14.9556 13.9831 14.5913 14.2192 14.1847 14.4804C13.837 14.7031 13.366 14.9117 12.7842 15.1006C12.2166 15.2852 11.6403 15.3789 11.0715 15.3789C10.5026 15.3789 9.92652 15.2852 9.3583 15.1006C8.77713 14.9119 8.30612 14.7033 7.95883 14.4806C7.55606 14.2219 7.19156 13.9858 6.87546 13.7787C6.37002 13.4476 6.10779 13.3358 5.83684 13.3358C5.14672 13.3358 4.50197 13.4533 3.92019 13.6849C3.33658 13.9172 2.83135 14.2361 2.41845 14.6332C2.02418 15.0127 1.67244 15.4733 1.37355 16.0023C1.0854 16.5122 0.852117 17.0441 0.680398 17.5833C0.514551 18.1046 0.375839 18.6748 0.268109 19.2781C0.161392 19.8761 0.0888972 20.4434 0.0530549 20.9645C0.0178199 21.475 0 22.0049 0 22.54C0 23.9327 0.440436 25.0602 1.30896 25.8917C2.16674 26.7122 3.30175 27.1284 4.68199 27.1284H17.4621C18.8424 27.1284 19.977 26.7124 20.835 25.8917C21.7037 25.0608 22.1441 23.9331 22.1441 22.5398C22.1439 22.0022 22.1259 21.472 22.0905 20.9639Z"
                                              fill="#DADADA" fill-opacity="0.2"/>
                                        <path d="M21.5851 20.9991L21.5851 20.9987C21.5507 20.4998 21.4807 19.9509 21.3767 19.367C21.2724 18.783 21.1387 18.2345 20.9802 17.7369L20.9802 17.7368C20.8196 17.2324 20.6006 16.7323 20.3288 16.2517C20.0509 15.7604 19.7286 15.3398 19.3734 14.9983L19.3733 14.9982C19.0125 14.6512 18.5646 14.3662 18.0355 14.1553L21.5851 20.9991ZM21.5851 20.9991C21.6197 21.4948 21.6373 22.0133 21.6375 22.5398L21.5851 20.9991ZM14.4584 14.9066L14.4579 14.907C14.0609 15.1612 13.5459 15.3859 12.9406 15.5824C12.325 15.7826 11.696 15.8855 11.0715 15.8855C10.4468 15.8855 9.81799 15.7826 9.20187 15.5824L14.4584 14.9066ZM14.4584 14.9066C14.866 14.6449 15.2316 14.4079 15.5447 14.2027L14.4584 14.9066ZM7.68538 14.907L7.68505 14.9068C7.28135 14.6475 6.91556 14.4106 6.59792 14.2025L6.59782 14.2025C6.09578 13.8735 5.94471 13.8424 5.83684 13.8424C5.20436 13.8424 4.62394 13.95 4.10758 14.1556L4.1075 14.1556C3.57892 14.366 3.13092 14.6509 2.76973 14.9983L7.68538 14.907ZM7.68538 14.907C8.08207 15.1614 8.59721 15.3861 9.20176 15.5824L7.68538 14.907ZM1.81462 16.2515L1.81459 16.2516C1.54296 16.7322 1.32391 17.2321 1.16315 17.7369L1.81462 16.2515ZM1.81462 16.2515C2.0919 15.7608 2.41436 15.3403 2.76963 14.9984L1.81462 16.2515ZM0.558455 20.9993L0.558446 20.9994C0.52405 21.4977 0.506594 22.0159 0.506594 22.54C0.506594 23.8183 0.906547 24.8051 1.65929 25.5257C2.40753 26.2414 3.40955 26.6218 4.68199 26.6218H17.4621C18.7346 26.6218 19.7363 26.2415 20.4848 25.5256L20.4848 25.5256C21.2375 24.8057 21.6375 23.8189 21.6375 22.54L0.558455 20.9993ZM0.558455 20.9993C0.592855 20.4991 0.662778 19.9502 0.766815 19.3671L0.558455 20.9993ZM16.3061 13.8426C16.9383 13.8426 17.5189 13.95 18.0354 14.1553L15.5448 14.2026C16.0474 13.8737 16.1982 13.8426 16.3061 13.8426ZM0.766825 19.3671C0.871099 18.7831 1.00475 18.2348 1.1631 17.737L0.766825 19.3671Z"
                                              stroke="url(#paint1_linear_77_321)" stroke-width="1.01319"/>
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_b_77_321" x="-4.87343" y="-4.31789" width="31.8909" height="36.3197"
                                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.43672"/>
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_77_321"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_77_321" result="shape"/>
                                    </filter>
                                    <filter id="filter1_b_77_321" x="-0.318257" y="-4.31789" width="22.5271" height="22.5271"
                                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.43672"/>
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_77_321"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_77_321" result="shape"/>
                                    </filter>
                                    <filter id="filter2_b_77_321" x="-4.87343" y="8.46238" width="31.8909" height="23.5395"
                                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.43672"/>
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_77_321"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_77_321" result="shape"/>
                                    </filter>
                                    <linearGradient id="paint0_linear_77_321" x1="6.58959" y1="2.04447" x2="14.7421" y2="12.1415"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.25"/>
                                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_77_321" x1="3.52498" y1="14.9427" x2="10.7502" y2="29.3097"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.25"/>
                                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;