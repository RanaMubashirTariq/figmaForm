import React from 'react'
import './FormSection.css'

export default function FormSection() {
  return (
    <div className='form-d'>
             <div className='form-part1-1st'>
                <div className='form-part1-heading'>
                <div className='form-part1-h2'><h2>Contact Info</h2></div>
                <div className='form-part1-para'><p>Manage Your Information</p></div>
                </div>
             </div>
         <div className='form-part1-d'>

              <div className='form-part1-2nd'>
                         <div className='form-part1-2nd-1st'>
                               <div className='form-part1-2nd-1st-right-part'>
                                 <div className='form-part1-2nd-1st-right-part-pic'><img src='/Images/profileIcon-Form.svg'/></div>
                                 <div className='form-part1-2nd-1st-heading'>
                                    <div className='form-part1-2nd-1st-h2'><h2>Andre Samosa</h2></div>
                                    <div className='form-part1-2nd-1st-para'><p>andresamosa@mail.com</p></div>
                                 </div>
                               </div>
                               <div className='form-part1-2nd-2nd'>
                            <button>Upload photo</button>
                         </div>
                         </div>

                         

                  <div className='form-part1-third'>
                        <div className='form-part1-2nd-inputs'>
                             <div className='form-part1-2nd-input'>
                                <label htmlFor="Full Name">Full Name</label>
                                <input type="text" placeholder='Andera' />
                             </div>
                             <div className='form-part1-2nd-input'>
                                <label htmlFor="Full Name">Email</label>
                                <input type="email" placeholder='Andera@gmail.com' />
                             </div>
                        </div>

                        <div className='form-part1-2nd-inputss'>
                             <div className='form-part1-2nd-input'>
                                <label htmlFor="Full Name">Origin</label>
                                <input type="text" placeholder='Semarang.Indonesia' />
                             </div>
                        </div>
                  </div>
              </div>
                  

         </div>

         {/* Part Two */}

         <div className='form-part2'>
              <div className='form-part2-heading'>
                 <div className='form-part2-h2'><h2>Crypto Addresses</h2></div>
                 <div className='form-part2-para'><p>Manage your information</p></div>
              </div>
              <div className='form-part2-2nd'>
                <div className='form-part2-2nd-inner-d'>
                    <div className='form-part2-2nd-para'><p>Please connect your BEP20 wallet for receiving referral payments</p></div>
                    <div className='form-part2-2nd-btn'><button>Link Wallet</button></div>
                </div>
              </div>
         </div>
       
    </div>
  )
}
