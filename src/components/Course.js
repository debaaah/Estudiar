import React from "react";
import './Home.css'
import { Card } from './Card'
import { useHistory } from 'react-router-dom'
import telegram from './telegram.png'

export const Course = (props) => {
    let history = useHistory()
    let user = props.value
    return(
        <div className='lorem mb-5'>
        <div>
            <div className='text-center mb-4'> 
            <span className='font-weight-light  mb-1'>  <br/>01/07/2021 ~ 04:45PM</span>
            <h3 className=''>Lorem Ipsum 2</h3>
            </div>
            <div>
               <div>
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor non nisi id tincidunt. Integer vel tortor orci. Proin porta fringilla nisl, et mollis augue pretium et. Vestibulum a tincidunt dolor. Morbi volutpat mauris nec lacus sodales, in cursus lacus rutrum. Donec viverra accumsan dignissim. Donec ac finibus quam, sollicitudin fringilla augue. Vestibulum ut blandit neque. Morbi vel nibh odio. Donec feugiat neque tellus. Maecenas iaculis aliquam eros, non porta urna tristique eu. Duis pretium, turpis nec vehicula auctor, tortor nibh rutrum nisl, id mollis quam magna non sem.
                    <br/>
                    Donec efficitur, orci vitae luctus aliquet, nisl dolor euismod sapien, at tristique eros leo maximus sapien. Sed eu odio aliquet, sagittis sem id, feugiat justo. Sed mollis sem ut nisi lacinia, sed commodo metus feugiat. Ut et vehicula ante, sed semper lacus. In dui dolor, interdum sed lorem id, posuere imperdiet mauris. Quisque tincidunt semper justo, vel aliquam libero vestibulum in. Suspendisse sagittis mollis tristique.
                    <br/>
                    Vivamus commodo vitae ante vitae feugiat. Cras augue turpis, rhoncus vitae sapien nec, rhoncus volutpat erat. Nam at suscipit nunc, quis hendrerit arcu. Vestibulum cursus urna ut nibh posuere, a cursus nibh imperdiet. Phasellus lacus augue, aliquet vitae condimentum nec, tempus eget lacus. Nam mollis quam vel tempor sollicitudin. Praesent congue magna consequat, elementum velit a, vehicula tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris mollis, urna vitae porttitor laoreet, ex lacus mollis risus, eget lobortis diam libero sed libero. Integer malesuada at augue eu dignissim. Morbi blandit quam vel ipsum sagittis rutrum. In fringilla enim sit amet consequat feugiat. Donec id libero est. Praesent consequat, libero ac laoreet pellentesque, nibh nunc pellentesque orci, vel fermentum metus nibh et orci.
                    <br/>
                    Quisque ac justo sit amet nunc sollicitudin tincidunt ac id felis. Aenean eget turpis eros. Proin lobortis neque sit amet dolor tempus semper. Nam commodo non augue vel consequat. Aliquam hendrerit maximus tempus. Aliquam blandit arcu laoreet, condimentum tellus sit amet, euismod lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In quis purus nisl. Donec enim augue, posuere at eleifend dapibus, vulputate non lacus. Aenean ac odio sed sem vehicula fermentum id eget libero. Nulla maximus nibh eu metus dignissim, varius pulvinar nisl lacinia. Morbi eu dui rutrum, condimentum dolor nec, tempus nibh. Fusce varius dui id neque mollis, eget auctor nisi cursus. Fusce vitae mi neque. Cras consequat tempus tempus. Proin ullamcorper urna vitae augue viverra, sed venenatis augue facilisis.
                    <br/>
                    Phasellus eleifend enim eget efficitur blandit. Maecenas mi massa, molestie a dui ut, venenatis hendrerit ligula. Duis ac libero mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum, orci sed rhoncus hendrerit, urna lacus facilisis lacus, ut viverra tortor risus id lacus. Quisque interdum massa odio, ac fermentum purus tempus quis. Morbi a ex velit. Sed dictum in ante non convallis. Curabitur sit amet lectus eget est commodo sodales. Praesent erat nisl, vulputate sed lobortis non, sagittis elementum quam.
                </div>
            </div>
            </div>
            <div>
            <div className='text-center mb-4'> 
            <span className='font-weight-light  mb-1'>  <br/>24/06/2021 ~ 04:45PM</span>
            <h3 className=''>Lorem Ipsum</h3>
            </div>
            <div>
               <div>
                    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porttitor non nisi id tincidunt. Integer vel tortor orci. Proin porta fringilla nisl, et mollis augue pretium et. Vestibulum a tincidunt dolor. Morbi volutpat mauris nec lacus sodales, in cursus lacus rutrum. Donec viverra accumsan dignissim. Donec ac finibus quam, sollicitudin fringilla augue. Vestibulum ut blandit neque. Morbi vel nibh odio. Donec feugiat neque tellus. Maecenas iaculis aliquam eros, non porta urna tristique eu. Duis pretium, turpis nec vehicula auctor, tortor nibh rutrum nisl, id mollis quam magna non sem.
                    <br/>
                    Donec efficitur, orci vitae luctus aliquet, nisl dolor euismod sapien, at tristique eros leo maximus sapien. Sed eu odio aliquet, sagittis sem id, feugiat justo. Sed mollis sem ut nisi lacinia, sed commodo metus feugiat. Ut et vehicula ante, sed semper lacus. In dui dolor, interdum sed lorem id, posuere imperdiet mauris. Quisque tincidunt semper justo, vel aliquam libero vestibulum in. Suspendisse sagittis mollis tristique.
                    <br/>
                    Vivamus commodo vitae ante vitae feugiat. Cras augue turpis, rhoncus vitae sapien nec, rhoncus volutpat erat. Nam at suscipit nunc, quis hendrerit arcu. Vestibulum cursus urna ut nibh posuere, a cursus nibh imperdiet. Phasellus lacus augue, aliquet vitae condimentum nec, tempus eget lacus. Nam mollis quam vel tempor sollicitudin. Praesent congue magna consequat, elementum velit a, vehicula tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris mollis, urna vitae porttitor laoreet, ex lacus mollis risus, eget lobortis diam libero sed libero. Integer malesuada at augue eu dignissim. Morbi blandit quam vel ipsum sagittis rutrum. In fringilla enim sit amet consequat feugiat. Donec id libero est. Praesent consequat, libero ac laoreet pellentesque, nibh nunc pellentesque orci, vel fermentum metus nibh et orci.
                    <br/>
                    Quisque ac justo sit amet nunc sollicitudin tincidunt ac id felis. Aenean eget turpis eros. Proin lobortis neque sit amet dolor tempus semper. Nam commodo non augue vel consequat. Aliquam hendrerit maximus tempus. Aliquam blandit arcu laoreet, condimentum tellus sit amet, euismod lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In quis purus nisl. Donec enim augue, posuere at eleifend dapibus, vulputate non lacus. Aenean ac odio sed sem vehicula fermentum id eget libero. Nulla maximus nibh eu metus dignissim, varius pulvinar nisl lacinia. Morbi eu dui rutrum, condimentum dolor nec, tempus nibh. Fusce varius dui id neque mollis, eget auctor nisi cursus. Fusce vitae mi neque. Cras consequat tempus tempus. Proin ullamcorper urna vitae augue viverra, sed venenatis augue facilisis.
                    <br/>
                    Phasellus eleifend enim eget efficitur blandit. Maecenas mi massa, molestie a dui ut, venenatis hendrerit ligula. Duis ac libero mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum, orci sed rhoncus hendrerit, urna lacus facilisis lacus, ut viverra tortor risus id lacus. Quisque interdum massa odio, ac fermentum purus tempus quis. Morbi a ex velit. Sed dictum in ante non convallis. Curabitur sit amet lectus eget est commodo sodales. Praesent erat nisl, vulputate sed lobortis non, sagittis elementum quam.
                </div>
            </div>
            </div>
            <div>
               <a href='﻿https://t.me/joinchat/6vX875lGQ5IwOTU0'> <img src={telegram} /></a>
            </div>
        </div>
    )
}