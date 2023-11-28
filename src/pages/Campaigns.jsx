import React from 'react';

const Campaigns = () => {
    return (
        <div className='container-fluid body-background text-start'>
            <div className='row'>
                {/* first-first-part */}
                <div className='col-sm-12 col-md-6 col-xl-6 first-first-style'>
                    <span>Dashboard</span>&nbsp;&nbsp;
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 14L4.20371 11.9032C5.96113 10.2311 6.83984 9.39503 6.97514 8.376C7.00829 8.12633 7.00829 7.87368 6.97514 7.624C6.83984 6.60497 5.96113 5.7689 4.20371 4.09677L2 2" stroke="#252733" stroke-width="2.5" stroke-linecap="round"/>
                    </svg>&nbsp;&nbsp;
                    <span className='fw-bold'>Campaigns</span>
                </div>
                {/* first-second-part */}
                <div className='col-sm-12 col-md-6 col-xl-6 first-second-style'>
                    <div class="d-flex flex-row mb-3">
                        <div className='p-2'>
                            <div className='alert'>
                                <div className='position-relative'>
                                    <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.2641 16.9777C26.2641 18.8976 26.2737 20.808 26.2544 22.7279C26.2544 23.0795 26.3413 23.2221 26.718 23.1936C27.056 23.1651 27.394 23.1746 27.732 23.1936C28.495 23.2411 29.0454 23.7829 29.0744 24.4957C29.1034 25.2275 28.6302 25.8073 27.8769 25.9214C27.6741 25.9499 27.4616 25.9499 27.2491 25.9499C25.2018 25.9499 23.164 25.9594 21.1166 25.9404C20.7786 25.9404 20.6531 26.0164 20.6241 26.3776C20.402 29.2669 17.949 31.4719 15.0131 31.4719C12.1062 31.4624 9.67253 29.2574 9.45041 26.3871C9.42143 26.0354 9.3152 25.9404 8.96753 25.9404C6.84289 25.9499 4.71824 25.9499 2.5936 25.9404C1.60853 25.9499 0.990454 25.3891 1.00011 24.5527C1.00977 23.8114 1.55059 23.2411 2.33284 23.1936C2.69983 23.1746 3.07647 23.1746 3.44345 23.1841C3.71386 23.1936 3.8201 23.0986 3.81044 22.8229C3.79112 22.3952 3.81044 21.9675 3.81044 21.5398C3.81044 18.3083 3.75249 15.0768 3.82975 11.8453C3.99393 4.90712 10.4355 -0.0922011 17.3309 1.28594C21.9086 2.20787 25.5977 6.00963 26.1192 10.5717C26.3317 12.4061 26.2255 14.269 26.2641 16.1223C26.2737 16.4075 26.2641 16.6926 26.2641 16.9777ZM6.63042 23.1461C12.2704 23.1461 17.8428 23.1461 23.4441 23.1461C23.4538 22.9655 23.4634 22.8324 23.4634 22.6899C23.4634 19.2018 23.4634 15.7231 23.4634 12.235C23.4634 11.7978 23.4151 11.3511 23.3572 10.9139C22.6812 5.88607 17.2633 2.59755 12.4056 4.25131C8.84198 5.46788 6.64008 8.49028 6.61111 12.235C6.59179 15.7231 6.61111 19.2018 6.61111 22.6899C6.61111 22.8229 6.62076 22.9655 6.63042 23.1461ZM12.2704 25.9879C12.2221 27.4801 13.6128 28.7822 15.1193 28.7062C16.6356 28.6396 17.9297 27.3185 17.7655 25.9879C15.9499 25.9879 14.1246 25.9879 12.2704 25.9879Z" fill="#252733" stroke="#F4F6FA" stroke-width="0.5"/>
                                    </svg>
                                    <span className='' style={{position : 'absolute', left : '25px', top : '-50%'}}>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="9.20004" cy="8.785" r="6.785" fill="#19B03F" stroke="#F5F7FB" stroke-width="4"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='p-2'>
                            <div className='message'>
                                <div className="position-relative">
                                    <div className=''>
                                        <img src="./images/icons/news.png" className="" alt='news' style={{position : 'absolute', left : '70px', top : '-100%'}} />
                                    </div>
                                    <span className='' style={{position : 'absolute', left : '100px', top : '-150%'}}>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="9.20004" cy="8.785" r="6.785" fill="#19B03F" stroke="#F5F7FB" stroke-width="4"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className='avatar'>
                                <div className="d-flex flex-row gap-2">
                                    <div className="image ">
                                        <img src="./images/avatar_h.svg" className="border border-1 border-dark rounded-circle p-1" />
                                    </div>
                                    <div className="info d-flex flex-column text-start">
                                        <h5 className='font-manrop'>Alexander Mark</h5>
                                        <span>Manager</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Campaigns;